import { useMutation } from "@tanstack/react-query";
import { videoApi } from "@/lib/api";
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
    try {
      const result = await videoInfoMutation.mutateAsync(url);
      return result;
    } catch (error) {
      throw error;
    }
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
        setDownloadData(result);
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
    if (downloadData?.download_url && downloadData?.filename) {
      // Use proxy download to force file download (saves to downloads/gallery)
      const proxyUrl = videoApi.getProxyDownloadUrl(
        downloadData.download_url,
        downloadData.filename
      );
      
      // Create a temporary link and click it to trigger download
      const link = document.createElement("a");
      link.href = proxyUrl;
      link.download = downloadData.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
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
  };
}
