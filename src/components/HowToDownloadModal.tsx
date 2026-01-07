"use client";
import { Modal, ModalHeader, ModalBody } from "@/components/ui/modal";
import { Play, Sparkles } from "lucide-react";

export function HowToDownloadModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  // YouTube video ID extracted from: https://www.youtube.com/watch?v=ERiMTupy9ig
  const youtubeVideoId = "ERiMTupy9ig";

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalHeader>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <Play className="h-5 w-5 text-primary-foreground fill-primary-foreground" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              How to Download Videos
            </h2>
            <p className="text-sm text-muted-foreground mt-0.5">
              Watch this quick tutorial
            </p>
          </div>
        </div>
      </ModalHeader>
      <ModalBody className="p-0">
        {/* YouTube Video Embed */}
        <div className="relative aspect-video w-full bg-black overflow-hidden">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`}
            title="How to Download Videos Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Beautiful Footer Section */}
        <div className="p-6 bg-gradient-to-br from-primary/5 via-background to-background border-t border-border">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                It&apos;s that simple!
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Just paste your video link, select quality, and download. 
                Works with TikTok, Instagram, Facebook, and more.
              </p>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}
