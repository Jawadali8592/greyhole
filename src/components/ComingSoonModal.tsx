"use client";
import { useEffect } from "react";
import Image from "next/image";
import { Smartphone, X } from "lucide-react";

const ComingSoonModal = ({ isOpen, onClose, platform }: { isOpen: boolean; onClose: () => void; platform: string }) => {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Content - Centered */}
      <div className="relative w-full max-w-md z-10">
        <div className="relative bg-card border border-border rounded-2xl p-8 shadow-2xl animate-scale-in">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-secondary hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Decorative gradient overlay */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-2xl pointer-events-none opacity-30">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Icon */}
            <div className="mx-auto mb-6 w-24 h-24 rounded-full bg-secondary flex items-center justify-center animate-float relative overflow-hidden border border-border">
              <Image
                src="/grey-hole-logo.png"
                alt="Greyhole Logo"
                width={70}
                height={70}
                className="object-contain"
              />
            </div>

            {/* Platform badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-4">
              <Smartphone className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                {platform === "ios" ? "iOS App" : "Android App"}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold mb-3 text-foreground">
              Coming <span className="text-gradient">Soon!</span>
            </h2>

            {/* Subtitle */}
            <p className="text-muted-foreground mb-6 text-base leading-relaxed">
              We&apos;re working hard to bring Greyhole to{" "}
              <span className="text-primary font-medium">
                {platform === "ios" ? "App Store" : "Google Play"}
              </span>
              . Stay tuned!
            </p>

            {/* Progress indicator */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm font-medium text-muted-foreground">Under Development</span>
            </div>

            {/* Animated progress bar */}
            <div className="relative h-2 bg-secondary rounded-full overflow-hidden mb-6 border border-border">
              <div
                className="absolute inset-y-0 left-0 gradient-primary rounded-full transition-all duration-1000"
                style={{ width: "70%" }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-shimmer"
                style={{ backgroundSize: "200% 100%" }}
              />
            </div>

            {/* Footer text */}
            <p className="mt-4 text-sm text-muted-foreground">
              Meanwhile, you can use our web version to download videos!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonModal;
