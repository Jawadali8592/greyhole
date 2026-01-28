import axios from "axios";

const API_BASE_URL = "https://api.greyhole.live";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// API Functions
export const videoApi = {
  // Get video information
  getVideoInfo: async (url: string) => {
    const response = await api.post("/api/info", { url });
    return response.data;
  },

  // Get stream URL (returns direct download URL)
  getStreamUrl: async ({ url, quality = "best", format = "mp4" }: { url: string; quality?: string; format?: string }) => {
    const response = await api.post("/api/stream", {
      url,
      quality,
      format,
    });
    return response.data;
  },

  // Get proxy download URL (forces file download)
  getProxyDownloadUrl: (videoUrl: string, filename: string) => {
    const params = new URLSearchParams({
      url: videoUrl,
      filename: filename,
    });
    return `${API_BASE_URL}/api/proxy-download?${params.toString()}`;
  },

  // Tutorial video URL
  getTutorialVideoUrl: () => {
    return `${API_BASE_URL}/api/tutorial-video`;
  },

  // Health check
  healthCheck: async () => {
    const response = await api.get("/health");
    return response.data;
  },
};

export { API_BASE_URL };
export default api;
