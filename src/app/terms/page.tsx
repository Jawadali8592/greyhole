import Terms from '@/components/pages/Terms';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Greyhole Video Downloader',
  description: 'Read the Terms & Conditions for Greyhole Video Downloader. Learn about user responsibilities, privacy policy, prohibited activities, and our service guidelines. Effective Date: 13 December 2025.',
  keywords: 'greyhole terms, terms and conditions, video downloader terms, privacy policy, user agreement, legal terms, greyhole policy',
  openGraph: {
    title: 'Terms & Conditions - Greyhole',
    description: 'Terms & Conditions for Greyhole Video Downloader App. Learn about our policies and guidelines.',
    url: 'https://greyhole.live/terms',
    siteName: 'Greyhole',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return <Terms />;
}
