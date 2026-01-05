import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Greyhole - Free Video Downloader for  TikTok, Instagram & More',
  description: 'Download videos from  TikTok, Instagram, Twitter, Facebook and more. Free, fast and secure video downloader. Convert videos to MP3, MP4 in HD quality. No registration required.',
  keywords: 'video downloader, Instagram downloader, Tiktok downloader, twitter video downloader, facebook video downloader, mp3 converter, mp4 downloader, free video downloader, greyhole',
  authors: [{ name: 'Greyhole' }],
  creator: 'Greyhole',
  publisher: 'Greyhole',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
