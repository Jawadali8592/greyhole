import { useState } from "react";
import { Download, Search, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

const formats = [
  { value: "mp3", label: "MP3" },
  { value: "mp3-hd", label: "MP3 HD" },
  { value: "mp4", label: "MP4" },
  { value: "mp4-hd", label: "MP4 HD" },
  { value: "mp4-2k", label: "MP4 2K" },
  { value: "wav", label: "WAV" },
];

const HeroSection = () => {
  const [url, setUrl] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("mp3");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    if (!url.trim()) {
      toast.error("Please enter a video URL");
      return;
    }

    if (!url.includes("youtube.com") && !url.includes("youtu.be") && !url.includes("tiktok.com") && !url.includes("twitter.com") && !url.includes("x.com")) {
      toast.error("Please enter a valid video URL from YouTube, TikTok, or Twitter");
      return;
    }

    setIsLoading(true);
    
    // Simulate download process
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`Download started in ${selectedFormat.toUpperCase()} format!`);
    }, 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 pattern-overlay overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Free & Unlimited Downloads</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Download Videos from{" "}
            <span className="text-gradient">YouTube, TikTok & More</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            The best free and fast converter for MP3 and MP4 formats. 
            Simply paste the URL and let the magic happen!
          </p>

          {/* Download Form */}
          <div className="max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-col md:flex-row gap-3 p-2 bg-card rounded-2xl border border-border input-glow">
              {/* URL Input */}
              <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-secondary/50 rounded-xl">
                <Search className="w-5 h-5 text-muted-foreground shrink-0" />
                <input
                  type="text"
                  placeholder="Paste video URL here..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-base"
                />
              </div>

              {/* Format Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full md:w-32 flex items-center justify-between gap-2 px-4 py-3 bg-secondary rounded-xl text-foreground font-medium hover:bg-secondary/80 transition-colors"
                >
                  <span>{formats.find(f => f.value === selectedFormat)?.label}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-xl shadow-xl overflow-hidden z-20 animate-slide-up">
                    {formats.map((format) => (
                      <button
                        key={format.value}
                        onClick={() => {
                          setSelectedFormat(format.value);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left hover:bg-secondary transition-colors ${
                          selectedFormat === format.value ? 'text-primary bg-primary/10' : 'text-foreground'
                        }`}
                      >
                        {format.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Download Button */}
              <Button 
                variant="hero" 
                size="lg" 
                onClick={handleDownload}
                disabled={isLoading}
                className="md:w-auto"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    <span>Download</span>
                  </>
                )}
              </Button>
            </div>

            {/* Supported Platforms */}
            <p className="text-muted-foreground text-sm mt-4">
              Supports: YouTube, TikTok, Twitter/X, Instagram, Facebook & more
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
