import axios from "axios";

// Set NEXT_PUBLIC_API_URL to point at a local backend (http://127.0.0.1:8000)
// without editing this file - the committed default stays production-safe.
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "") || "https://api.greyhole.live";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// --------------------------------------------------------------------------
// Response shapes (backend v4 - see API_DOCUMENTATION.md)
// --------------------------------------------------------------------------
export interface MediaFormat {
  quality: string;
  ext: string;
  filesize: number | null;
  format_id?: string | null;
  has_audio?: boolean;
  has_video?: boolean;
}

export interface VideoInfoData {
  title: string;
  thumbnail: string | null;
  duration: number | null;
  uploader: string | null;
  view_count: number | null;
  provider: string;
  ext: string;
  filesize: number | null;
  formats: MediaFormat[];
}

export interface VideoInfoResponse {
  success: boolean;
  data: VideoInfoData;
}

export interface StreamResponse {
  success: boolean;
  download_url: string;
  /** Signed proxy link. Prefer this over download_url - it replays the
   *  Referer/User-Agent the CDN requires, which a browser cannot send. */
  proxy_url: string;
  filename: string;
  title: string;
  provider: string;
  ext: string;
  filesize: number | null;
  duration: number | null;
  thumbnail: string | null;
  uploader: string | null;
  view_count: number | null;
  /** True when video and audio are separate streams and the server must mux
   *  them - proxy_url alone would yield a silent file, so use /api/download. */
  requires_merge: boolean;
  formats: MediaFormat[];
  http_headers?: Record<string, string>;
}

export interface ResolveFailureDetail {
  success: false;
  message: string;
  platform: string;
  attempts: { provider: string; error: string }[];
}

/**
 * Turn any backend error into a display string.
 *
 * A resolve failure now returns 422 with an object `detail` describing every
 * provider it tried. Rendering that object straight into JSX throws
 * ("Objects are not valid as a React child"), so it must be flattened here.
 */
export function extractApiError(error: unknown, fallback = "An error occurred"): string {
  const detail = (error as { response?: { data?: { detail?: unknown } } })?.response?.data?.detail;

  if (typeof detail === "string") return detail;

  if (detail && typeof detail === "object") {
    const d = detail as Partial<ResolveFailureDetail>;
    if (typeof d.message === "string") {
      const reason = d.attempts?.find((a) => a?.error)?.error;
      return reason ? `${d.message} (${reason})` : d.message;
    }
    // FastAPI validation errors arrive as an array of issues.
    if (Array.isArray(detail)) {
      const msg = detail.map((i: { msg?: string }) => i?.msg).filter(Boolean).join(", ");
      if (msg) return msg;
    }
  }

  const message = (error as { message?: string })?.message;
  return message || fallback;
}

// --------------------------------------------------------------------------
// API functions
// --------------------------------------------------------------------------
export const videoApi = {
  // Metadata only - no media URL is minted.
  getVideoInfo: async (url: string): Promise<VideoInfoResponse> => {
    const response = await api.post("/api/info", { url });
    return response.data;
  },

  // Resolve a URL into a downloadable link.
  getStreamUrl: async ({
    url,
    quality = "best",
    format = "mp4",
  }: {
    url: string;
    quality?: string;
    format?: string;
  }): Promise<StreamResponse> => {
    const response = await api.post("/api/stream", { url, quality, format });
    return response.data;
  },

  /**
   * One-shot resolve-and-stream. This is the only route that muxes separate
   * video/audio streams with ffmpeg, so it is required whenever the resolved
   * result reports requires_merge (typically YouTube above 720p).
   */
  getDownloadUrl: ({
    url,
    quality = "best",
    format = "mp4",
  }: {
    url: string;
    quality?: string;
    format?: string;
  }) => {
    const params = new URLSearchParams({ url, quality, format });
    return `${API_BASE_URL}/api/download?${params.toString()}`;
  },

  /**
   * Force a resolved stream to download as a file.
   *
   * The signed proxy_url from /api/stream is the supported path - it carries
   * the CDN headers with it. The url/filename form is the legacy fallback and
   * is rejected or 403s on hosts that check Referer, so it is only used when
   * the backend did not hand back a token.
   */
  getProxyDownloadUrl: (result: Pick<StreamResponse, "proxy_url" | "download_url" | "filename">) => {
    if (result.proxy_url) return result.proxy_url;
    const params = new URLSearchParams({
      url: result.download_url,
      filename: result.filename,
    });
    return `${API_BASE_URL}/api/proxy-download?${params.toString()}`;
  },

  // Health check - also reports the provider chain per platform.
  healthCheck: async () => {
    const response = await api.get("/health");
    return response.data;
  },
};

export { API_BASE_URL };
export default api;
