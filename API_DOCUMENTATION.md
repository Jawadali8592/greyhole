# Video Downloader API Documentation

## Overview
This document explains the API endpoints used by the video downloader frontend
and the data flow between the frontend and the backend (API v4).

**Base URL:** set via `NEXT_PUBLIC_API_URL` (see `.env.example`).
Defaults to `https://api.greyhole.live`; use `http://127.0.0.1:8000` locally.

The backend resolves each URL through a per-platform **provider chain**
(yt-dlp first, then tikwm / Cobalt / a custom endpoint as fallbacks). The
provider that succeeded is reported back in `provider`.

---

## API Endpoints

### 1. Get Video Information

**Endpoint:** `POST /api/info`

**Purpose:** Fetches metadata about the video. No media URL is minted.

**Request:**
```json
{
  "url": "https://www.tiktok.com/@username/video/1234567890"
}
```

**Response (Success):**
```json
{
  "success": true,
  "data": {
    "title": "Video Title",
    "thumbnail": "https://thumbnail-url.jpg",
    "duration": 45.0,
    "uploader": "Username",
    "view_count": 12345,
    "provider": "yt-dlp",
    "ext": "mp4",
    "filesize": 10485760,
    "formats": [
      {
        "quality": "1080p",
        "ext": "mp4",
        "filesize": 10485760,
        "format_id": "137",
        "has_audio": false,
        "has_video": true
      }
    ]
  }
}
```

> `thumbnail`, `duration`, `uploader`, `view_count` and `filesize` are all
> nullable. The frontend must guard them — passing `null` to `next/image`
> throws.

`formats` lists the heights actually available for that URL, so the quality
selector is built from it rather than from a hardcoded list.

---

### 2. Get Stream/Download URL

**Endpoint:** `POST /api/stream`

**Purpose:** Resolves the video and returns both a direct CDN link and a signed
proxy link.

**Request:**
```json
{
  "url": "https://www.tiktok.com/@username/video/1234567890",
  "quality": "best",
  "format": "mp4"
}
```

**Request Parameters:**
- `url` (string, required): The video URL to download
- `quality` (string, optional): `"best"` (default), `"1080p"`, `"720p"`,
  `"480p"`, `"360p"`, or `"audio"` (audio only)
- `format` (string, optional): `"mp4"` (default) or `"mp3"`

**Response (Success):**
```json
{
  "success": true,
  "download_url": "https://cdn.example.com/video.mp4",
  "proxy_url": "https://api.greyhole.live/api/proxy-download?token=eyJ1...",
  "filename": "video_title.mp4",
  "title": "Video Title",
  "provider": "yt-dlp",
  "ext": "mp4",
  "filesize": 10485760,
  "duration": 45.0,
  "thumbnail": "https://thumbnail-url.jpg",
  "uploader": "Username",
  "view_count": 12345,
  "requires_merge": false,
  "formats": [],
  "http_headers": { "Referer": "...", "User-Agent": "..." }
}
```

**Two fields drive the download flow:**

- **`proxy_url`** — always prefer this over `download_url`. Social CDNs
  (Facebook, Instagram, TikTok) return **403** for a browser request from
  another origin; the signed token carries the required `Referer`/`User-Agent`
  so the backend can replay them.
- **`requires_merge`** — `true` when video and audio came back as separate
  streams (typically YouTube above 720p). The proxy link would deliver a
  **silent** file, so the client must fall back to `GET /api/download`, which
  muxes them with ffmpeg.

---

### 3. One-shot Download (with muxing)

**Endpoint:** `GET /api/download`

**Purpose:** Resolve and stream the file back in a single request. This is the
only route that muxes separate video/audio streams, so it is required whenever
`requires_merge` is `true`.

```
GET /api/download?url={page_url}&quality=720p&format=mp4
```

Note it takes the original **page** URL, not the resolved CDN link.

**Response:** binary stream with `Content-Disposition: attachment`.
Returns **501** if muxing is needed but ffmpeg is not installed on the server.

---

### 4. Proxy Download

**Endpoint:** `GET /api/proxy-download`

**Purpose:** Streams an already-resolved media URL back as a file download.

```
GET /api/proxy-download?token={token from proxy_url}
```

**Query Parameters:**
- `token` (string): signed token from the `proxy_url` field. **Supported path.**
- `url` + `filename` (string): legacy fallback for older clients. SSRF-checked,
  and sends no CDN headers, so it 403s on hosts that check `Referer`.

Tokens expire (`TOKEN_TTL_SECONDS`, default 1 hour); after that, re-resolve via
`/api/stream`. Range requests are forwarded, so seeking and resuming work.

---

### 5. Health Check

**Endpoint:** `GET /health`

```json
{
  "status": "healthy",
  "yt_dlp_version": "2026.08.19",
  "python_version": "3.13.7",
  "ffmpeg": true,
  "cookies_configured": false,
  "providers": { "tiktok": ["yt-dlp", "tikwm"], "youtube": ["yt-dlp"] }
}
```

`ffmpeg: false` means any `requires_merge` download will fail with a 501.

---

## Error Responses

A resolve failure returns **422** with a **structured object** as `detail` —
not a string. Rendering it directly in JSX throws
*"Objects are not valid as a React child"*, so flatten it with
`extractApiError()` from `src/lib/api.ts`.

```json
{
  "detail": {
    "success": false,
    "message": "Could not resolve this URL.",
    "platform": "youtube",
    "attempts": [
      { "provider": "yt-dlp", "error": "This content is unavailable or has been removed." }
    ]
  }
}
```

`attempts` records every provider that was tried and why it failed. Other
errors (400, 403, 502) still return a plain string `detail`; `extractApiError()`
handles both shapes.

Rate limiting returns **429** (default `20/minute` per IP).

---

## Complete User Flow

### Step 1: User Enters Video URL
**User Action:** Pastes video URL and clicks "Get Info"

```javascript
POST /api/info
Body: { "url": "https://www.tiktok.com/@user/video/123" }
```

**UI Updates:** Shows the video preview, and builds the quality selector from
the returned `formats`.

---

### Step 2: User Selects Quality and Clicks Download

```javascript
POST /api/stream
Body: { "url": "...", "quality": "1080p", "format": "mp4" }
```

The frontend stores the response **plus the original request** — a
`requires_merge` result has to be re-resolved by `/api/download`, which needs
the page URL rather than the CDN link.

**UI Updates:** Shows the "Download File" button.

---

### Step 3: User Downloads File
**User Action:** Clicks "Download File"

```javascript
// requires_merge === true  -> server muxes video + audio
GET /api/download?url={page_url}&quality=1080p&format=mp4

// otherwise                -> signed proxy carries the CDN headers
GET {proxy_url}
```

**Browser Action:** Downloads the file to the device's downloads folder.
