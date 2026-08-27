import { useMutation } from "@tanstack/react-query";
import { videoApi, extractApiError } from "@/lib/api";
import { useState } from "react";

export function useVideoInfo() {
  return useMutation({
    mutationFn: (url) => videoApi.getVideoInfo(url),
  });
}

export function useStreamUrl() {
  return useMutation({
    mutationFn: ({ url, quality, format }) =>
      videoApi.getStreamUrl({ url, quality, format }),
  });
}

// Custom hook that combines all download operations
export function useVideoDownloader() {
  const [downloadData, setDownloadData] = useState(null);
  const [downloadStatus, setDownloadStatus] = useState(null);
  const [progress, setProgress] = useState(0);

  const videoInfoMutation = useVideoInfo();
  const streamMutation = useStreamUrl();

  const getVideoInfo = async (url) => {
    return videoInfoMutation.mutateAsync(url);
  };

  const startDownload = async ({ url, quality, format }) => {
    try {
      setDownloadStatus({ status: "processing" });
      setProgress(30);

      // Get the stream URL from backend
      const result = await streamMutation.mutateAsync({
        url,
        quality,
        format,
      });

      if (result.success) {
        // Keep the original request: a result that requires muxing has to be
        // re-resolved by /api/download, which needs the page URL, not the CDN link.
        setDownloadData({ ...result, request: { url, quality, format } });
        setProgress(100);
        setDownloadStatus({ status: "completed" });
      }

      return result;
    } catch (error) {
      setDownloadStatus({ status: "failed" });
      setProgress(0);
      throw error;
    }
  };

  const downloadFile = () => {
    if (!downloadData) return;

    // When video and audio came back as separate streams, the proxy link would
    // deliver a silent file - only /api/download muxes them with ffmpeg.
    const href =
      downloadData.requires_merge && downloadData.request
        ? videoApi.getDownloadUrl(downloadData.request)
        : videoApi.getProxyDownloadUrl(downloadData);

    if (!href) return;

    // Create a temporary link and click it to trigger download
    const link = document.createElement("a");
    link.href = href;
    // Advisory only for a cross-origin href; the backend's Content-Disposition
    // header is what actually names the saved file.
    if (downloadData.filename) link.download = downloadData.filename;
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const reset = () => {
    setDownloadData(null);
    setDownloadStatus(null);
    setProgress(0);
    videoInfoMutation.reset();
    streamMutation.reset();
  };

  return {
    // Video info
    getVideoInfo,
    videoInfo: videoInfoMutation.data,
    isLoadingInfo: videoInfoMutation.isPending,
    infoError: videoInfoMutation.error,

    // Download
    startDownload,
    isDownloading: streamMutation.isPending,
    downloadError: streamMutation.error,

    // Status
    downloadStatus,
    progress,
    downloadData,

    // Actions
    downloadFile,
    reset,
    // Flattens the backend's structured 422 detail into a display string.
    getErrorMessage: extractApiError,
  };
}
