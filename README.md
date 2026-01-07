# Video Downloader API Documentation

## Overview
This document explains the API endpoints used in the video downloader application and the data flow between the frontend and backend.

**Base URL:** `https://web-production-dbc73.up.railway.app`

---

## API Endpoints

### 1. Get Video Information

**Endpoint:** `POST /api/info`

**Purpose:** Fetches metadata about the video (title, thumbnail, duration, uploader info)

**Request:**
```json
{
  "url": "https://www.tiktok.com/@username/video/1234567890"
}
```

**Request Headers:**
```
Content-Type: application/json
```

**Response (Success):**
```json
{
  "success": true,
  "data": {
    "title": "Video Title",
    "thumbnail": "https://thumbnail-url.jpg",
    "duration": 45,
    "uploader": "Username",
    "url": "original_video_url"
  }
}
```

**Response (Error):**
```json
{
  "detail": "Error message describing what went wrong"
}
```

---

### 2. Get Stream/Download URL

**Endpoint:** `POST /api/stream`

**Purpose:** Processes the video and returns a direct download URL for the specified quality and format

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
- `quality` (string, optional): Video quality
  - `"best"` - Highest available quality (default)
  - `"1080p"` - 1080p resolution
  - `"720p"` - 720p resolution
  - `"480p"` - 480p resolution
  - `"audio"` - Audio only (MP3)
- `format` (string, optional): Output format
  - `"mp4"` - Video format (default)
  - `"mp3"` - Audio format

**Request Headers:**
```
Content-Type: application/json
```

**Response (Success):**
```json
{
  "success": true,
  "download_url": "https://direct-download-url.com/video.mp4",
  "filename": "video_title_1080p.mp4"
}
```

**Response (Error):**
```json
{
  "detail": "Error message describing what went wrong"
}
```

---

### 3. Proxy Download

**Endpoint:** `GET /api/proxy-download`

**Purpose:** Forces file download to device (downloads folder/gallery) instead of opening in browser

**Request:**
```
GET /api/proxy-download?url={download_url}&filename={filename}
```

**Query Parameters:**
- `url` (string, required): The direct download URL from `/api/stream` response
- `filename` (string, required): The filename from `/api/stream` response

**Example:**
```
GET /api/proxy-download?url=https://cdn.example.com/video.mp4&filename=my_video_1080p.mp4
```

**Response:**
- Binary file stream with appropriate headers to trigger download

---


### 5. Health Check

**Endpoint:** `GET /health`

**Purpose:** Checks if the API server is running and healthy

**Request:**
```
GET /health
```

**Response:**
```json
{
  "status": "healthy"
}
```

---

## Complete User Flow

### Step 1: User Enters Video URL
**User Action:** Pastes video URL and clicks "Get Info"

**API Call:**
```javascript
POST /api/info
Body: { "url": "https://www.tiktok.com/@user/video/123" }
```

**Frontend Receives:**
```javascript
{
  success: true,
  data: {
    title: "Amazing Video",
    thumbnail: "https://thumbnail.jpg",
    duration: 45,
    uploader: "Username"
  }
}
```

**UI Updates:** Shows video preview with thumbnail, title, duration, and uploader

---

### Step 2: User Selects Quality and Clicks Download
**User Action:** Selects quality (e.g., "1080p") and clicks "Download"

**API Call:**
```javascript
POST /api/stream
Body: {
  "url": "https://www.tiktok.com/@user/video/123",
  "quality": "1080p",
  "format": "mp4"
}
```

**Frontend Receives:**
```javascript
{
  success: true,
  download_url: "https://cdn.example.com/processed_video.mp4",
  filename: "amazing_video_1080p.mp4"
}
```

**UI Updates:** Shows "Download File" button

---

### Step 3: User Downloads File
**User Action:** Clicks "Download File"

**API Call:**
```javascript
GET /api/proxy-download?url=https://cdn.example.com/processed_video.mp4&filename=amazing_video_1080p.mp4
```

**Browser Action:** Downloads file to device's downloads folder or gallery

---

