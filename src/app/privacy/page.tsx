import Privacy from '@/components/pages/Privacy';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Greyhole Video Downloader',
  description: 'Read the Privacy Policy for Greyhole Video Downloader. Learn how we collect, use, and protect your personal data. Effective Date: 07 January 2026.',
  keywords: 'greyhole privacy, privacy policy, data protection, video downloader privacy, user data, security policy, greyhole data collection',
  openGraph: {
    title: 'Privacy Policy - Greyhole',
    description: 'Privacy Policy for Greyhole Video Downloader App. Learn how we protect your data.',
    url: 'https://greyhole.live/privacy',
    siteName: 'Greyhole',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return <Privacy />;
}
