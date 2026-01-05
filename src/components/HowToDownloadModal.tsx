"use client";
import { Modal, ModalHeader, ModalBody } from "@/components/ui/modal";
import { Play } from "lucide-react";
import { videoApi } from "@/lib/api";

export function HowToDownloadModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  // Video URL from your backend - place tutorial.mp4 in your backend's static folder
  const tutorialVideoUrl = videoApi.getTutorialVideoUrl();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalHeader>
        <div className="flex items-center gap-2">
          <Play className="h-5 w-5 text-primary fill-primary" />
          <h2 className="text-xl font-semibold text-foreground">
            How to Download Videos
          </h2>
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          Watch this quick tutorial to learn how to download videos
        </p>
      </ModalHeader>
      <ModalBody className="p-0">
        <div className="aspect-video w-full bg-black rounded-b-xl overflow-hidden">
          <video
            className="w-full h-full object-contain"
            controls
            autoPlay
            playsInline
            key={isOpen ? "open" : "closed"}
          >
            <source src={tutorialVideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="p-4 bg-muted/30">
          <h3 className="font-medium text-foreground mb-2">Quick Steps:</h3>
          <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
            <li>Copy the video URL from TikTok, Instagram, etc.</li>
            <li>Paste the link in the input field above</li>
            <li>Click &quot;Get Info&quot; to fetch video details</li>
            <li>Select your preferred quality</li>
            <li>Click &quot;Download&quot; and wait for processing</li>
            <li>Click &quot;Download File&quot; to save to your device</li>
          </ol>
        </div>
      </ModalBody>
    </Modal>
  );
}
