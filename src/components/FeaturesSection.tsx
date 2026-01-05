import { Zap, Shield, Download, Infinity, ListMusic, Smartphone } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Download videos in seconds with our optimized servers. No waiting, no delays.",
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "Your downloads are encrypted and secure. No data is stored on our servers.",
  },
  {
    icon: Download,
    title: "Free Forever",
    description: "No hidden fees, no subscriptions. Download as many videos as you want for free.",
  },
  {
    icon: Infinity,
    title: "Unlimited Downloads",
    description: "No daily limits or restrictions. Download videos without any limitations.",
  },
  {
    icon: ListMusic,
    title: "Playlist Support",
    description: "Download entire playlists at once. Save up to 100 videos per playlist.",
  },
  {
    icon: Smartphone,
    title: "All Devices",
    description: "Compatible with all devices. Works on desktop, tablet, and mobile browsers.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            A converter for{" "}
            <span className="text-gradient">YouTube, TikTok, Twitter</span> and more!
          </h2>
          <p className="text-muted-foreground text-lg">
            Simply use the best free and fast video converter to download videos 
            in MP3, MP4, and other formats without any advertising.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-card rounded-2xl border border-border card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5 glow-effect-sm group-hover:glow-effect transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
