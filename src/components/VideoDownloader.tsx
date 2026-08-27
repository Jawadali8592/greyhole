"use client";
import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  X,
  Download,
  Play,
  Loader2,
  Link2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useVideoDownloader } from "@/hooks/useVideoDownloader";
import { extractApiError, type MediaFormat } from "@/lib/api";
import { toast } from "sonner";
import { HowToDownloadModal } from "./HowToDownloadModal";
import Image from "next/image";

const qualityOptions = [
  { value: "best", label: "Best Quality" },
  { value: "1080p", label: "MP4 1080p" },
  { value: "720p", label: "MP4 720p" },
  { value: "480p", label: "MP4 480p" },
  { value: "audio", label: "MP3 Audio" },
];

type QualityOption = { value: string; label: string };

/**
 * Narrow the selector to the formats the resolver actually found. Backend v4
 * returns a real per-URL format list, so offering 1080p for a 480p source is
 * wrong. Non-height entries in the static list ("best", "audio") are kept.
 */
function buildQualityOptions(
  base: QualityOption[],
  formats?: MediaFormat[]
): QualityOption[] {
  const heights = (formats ?? [])
    .map((f) => f.quality)
    .filter((q) => /^\d+p$/.test(q));
  if (!heights.length) return base;

  const unique = Array.from(new Set(heights)).sort(
    (a, b) => parseInt(b, 10) - parseInt(a, 10)
  );
  return [
    ...base.filter((o) => o.value === "best"),
    ...unique.map((q) => ({ value: q, label: `MP4 ${q}` })),
    ...base.filter((o) => o.value === "audio"),
  ];
}

export function VideoDownloader() {
  const [url, setUrl] = useState("");
  const [selectedQuality, setSelectedQuality] = useState("best");
  const [selectedFormat, setSelectedFormat] = useState("mp4");
  const [showTutorialModal, setShowTutorialModal] = useState(false);

  const {
    getVideoInfo,
    videoInfo,
    isLoadingInfo,
    infoError,
    startDownload,
    isDownloading,
    downloadError,
    downloadStatus,
    progress,
    downloadFile,
    reset,
  } = useVideoDownloader();

  const handleProcess = async () => {
    if (!url.trim()) {
      toast.error("Please enter a video URL");
      return;
    }

    try {
      const result = await getVideoInfo(url);
      if (result.success) {
        toast.success("Video info loaded successfully");
      }
    } catch (error: any) {
      toast.error(extractApiError(error, "Failed to fetch video info"));
    }
  };

  const handleClear = () => {
    setUrl("");
    reset();
  };

  const handleDownload = async () => {
    if (!url.trim()) return;

    // Determine format based on quality
    const format = selectedQuality === "audio" ? "mp3" : selectedFormat;

    try {
      await startDownload({
        url,
        quality: selectedQuality,
        format,
      });
      toast.success("Download started");
    } catch (error: any) {
      toast.error(extractApiError(error, "Failed to start download"));
    }
  };

  const handleFileDownload = () => {
    downloadFile();
    toast.success("Downloading file");
  };

  const displayVideoInfo = videoInfo?.data;
  const qualityChoices = useMemo(
    () => buildQualityOptions(qualityOptions, displayVideoInfo?.formats),
    [displayVideoInfo?.formats]
  );

  // A new URL can offer a different set of heights; keep the selection valid.
  useEffect(() => {
    if (!qualityChoices.some((o) => o.value === selectedQuality)) {
      setSelectedQuality(qualityChoices[0]?.value ?? "best");
    }
  }, [qualityChoices, selectedQuality]);
  const isProcessing = isLoadingInfo || isDownloading;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-2xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            Video Downloader
          </h1>
          <p className="text-muted-foreground">
            Download videos from TikTok, Facebook, Instagram & more
          </p>
        </div>

        {/* URL Input */}
        <div className="relative flex gap-0 shadow-medium rounded-lg overflow-hidden bg-card">
          <div className="relative flex-1">
            <Input
              type="url"
              placeholder="Paste video link here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleProcess()}
              disabled={isProcessing}
              className="h-14 pr-10 border-0 rounded-none text-base focus-visible:ring-0 focus-visible:ring-offset-0 bg-card"
            />
            {url && (
              <button
                onClick={handleClear}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
          <Button
            onClick={handleProcess}
            disabled={!url.trim() || isProcessing}
            className="h-14 px-8 rounded-none text-base font-semibold"
          >
            {isLoadingInfo ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              "Get Info"
            )}
          </Button>
        </div>

        {/* Terms */}
        <p className="text-center text-sm text-muted-foreground">
          By using our service you accept our{" "}
          <a href="/terms" className="text-primary hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </a>
        </p>

        {/* Tutorial Link */}
        <div className="flex items-center justify-center gap-2 text-primary">
          <Play className="h-5 w-5 fill-primary" />
          <button
            onClick={() => setShowTutorialModal(true)}
            className="font-medium hover:underline"
          >
            How to download?
          </button>
          <span className="text-muted-foreground">Watch the tutorial</span>
        </div>

        {/* How to Download Modal */}
        <HowToDownloadModal
          isOpen={showTutorialModal}
          onClose={() => setShowTutorialModal(false)}
        />

        {/* Error Messages */}
        {(infoError || downloadError) && (
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-red-900 dark:text-red-200">Error</h4>
              <p className="text-sm text-red-700 dark:text-red-300">
                {extractApiError(infoError || downloadError)}
              </p>
            </div>
          </div>
        )}

        {/* Video Preview */}
        {displayVideoInfo && (
          <div className="animate-fade-in bg-card rounded-xl shadow-medium p-4 border border-border">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Thumbnail */}
              <div className="relative w-full sm:w-48 aspect-video sm:aspect-auto sm:h-32 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                {displayVideoInfo.thumbnail && (
                  <Image
                    src={displayVideoInfo.thumbnail}
                    alt={displayVideoInfo.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/20">
                  <div className="w-12 h-12 rounded-full bg-card/90 flex items-center justify-center">
                    <Play className="h-5 w-5 text-foreground fill-foreground ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-foreground line-clamp-2">
                    {displayVideoInfo.title}
                  </h3>
                  {displayVideoInfo.duration ? (
                    <p className="text-sm text-muted-foreground mt-1">
                      Duration: {Math.floor(displayVideoInfo.duration / 60)}:
                      {String(
                        Math.floor(displayVideoInfo.duration % 60)
                      ).padStart(2, "0")}
                    </p>
                  ) : null}
                  {displayVideoInfo.uploader && (
                    <p className="text-sm text-muted-foreground">
                      By: {displayVideoInfo.uploader}
                    </p>
                  )}
                </div>

                {/* Download Controls */}
                <div className="flex flex-col gap-3 mt-4">
                  <div className="flex items-center gap-2">
                    <Select
                      value={selectedQuality}
                      onValueChange={setSelectedQuality}
                      disabled={isDownloading}
                    >
                      <SelectTrigger className="flex-1 border-primary text-primary font-medium">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {qualityChoices.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {downloadStatus && (downloadStatus as any)?.status === "completed" ? (
                      <Button
                        onClick={handleFileDownload}
                        className="font-semibold"
                      >
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        Download File
                      </Button>
                    ) : (
                      <Button
                        onClick={handleDownload}
                        disabled={isDownloading}
                        className="font-semibold"
                      >
                        {isDownloading ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            {(downloadStatus as any)?.status === "processing"
                              ? "Processing"
                              : "Downloading"}
                          </>
                        ) : (
                          <>
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </>
                        )}
                      </Button>
                    )}
                  </div>

                  {/* Progress Bar */}
                  {isDownloading && downloadStatus && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground capitalize">
                          {(downloadStatus as any).status}
                        </span>
                        <span className="text-muted-foreground">
                          {Math.round(progress)}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-primary h-full transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {downloadStatus && (downloadStatus as any)?.status === "completed" && (
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>
                        Download ready! Click &quot;Download File&quot; to save.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!displayVideoInfo && !isProcessing && !infoError && !downloadError && (
          <div className="text-center py-12 text-muted-foreground">
            <Link2 className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Paste a video link above to get started</p>
          </div>
        )}

        {/* Loading State */}
        {isLoadingInfo && (
          <div className="text-center py-12">
            <Loader2 className="h-12 w-12 mx-auto mb-4 animate-spin text-primary" />
            <p className="text-muted-foreground">
              Fetching video information...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
