import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Greyhole - Free Video Downloader for  TikTok, Instagram & More',
  description: 'Download videos from  TikTok, Instagram, Twitter, Facebook and more. Free, fast and secure video downloader. Convert videos to MP3, MP4 in HD quality. No registration required.',
  keywords: 'video downloader, downloader, tiktok downloader, instagram downloader, twitter video downloader, facebook video downloader, mp3 converter, mp4 downloader, free video downloader, greyhole, download videos online',
  openGraph: {
    title: 'Greyhole - Free Video Downloader',
    description: 'Download videos from  TikTok, Instagram & more. Free, fast and secure.',
    url: 'https://greyhole.live',
    siteName: 'Greyhole',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
