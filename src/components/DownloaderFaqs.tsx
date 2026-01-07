'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function DownloaderFaqs() {
  const faqItems = [
    {
      question: "What is Greyhole?",
      answer:
        "Greyhole is a free online tool/app that lets you download videos from supported platforms — like TikTok, Instagram, and others — directly to your device in high quality with just a link.",
    },
    {
      question: "Do I need to create an account to use Greyhole?",
      answer:
        "No — you do not need to sign up or log in. Just paste a valid video link and download. It's simple and open to everyone.",
    },
    {
      question: "Is Greyhole free to use?",
      answer:
        "Yes! Greyhole is completely free. There are no subscription fees, hidden charges, or limits on how many videos you can download.",
    },
    {
      question: "How do I download a video using Greyhole?",
      answer:
        "Open the platform (e.g., TikTok) and find the video you want. Tap Share → Copy Link. Open Greyhole and paste the link into the download box. Tap Download. The video will be processed and ready in a moment.",
    },
    {
      question: "Can I download videos without a watermark?",
      answer:
        "For some platforms (like TikTok), Greyhole downloads the clean version if it's publicly available without the watermark. This depends on how the platform shares the video publicly.",
    },
    {
      question: "What formats can I download?",
      answer:
        "Greyhole supports multiple formats like MP4 (video) and MP3 (audio only) when available. You can choose what you need before saving.",
    },
    {
      question: "Where do downloaded videos go?",
      answer:
        "Videos are usually saved to your browser or device's default Downloads folder. You can change this location anytime in your browser or phone settings.",
    },
    {
      question: "Can I download videos on any device?",
      answer:
        "Yes! Greyhole works on Android, iPhone, iPad, Windows, Mac, and other devices via your browser. No special app or extension is needed.",
    },
    {
      question: "Do I need an internet connection to use Greyhole?",
      answer:
        "Yes — you need an internet connection to process and download videos. Once downloaded, you can watch them offline anytime.",
    },
    {
      question: "Can I download videos from private accounts?",
      answer:
        "No — Greyhole can only download videos that are publicly accessible. Private or restricted content cannot be downloaded.",
    },
    {
      question: "Why won't some videos download?",
      answer:
        "Some videos may fail to download if: The link is incorrect or expired. The video is private or restricted. The source platform has changed how downloads work. In such cases, check the link or try another video.",
    },
    {
      question: "Is it safe to use Greyhole?",
      answer:
        "Yes, Greyhole is safe to use. It does not collect personal information or store any videos/links — everything is processed temporarily and deleted right after download. However, always copy links only from trusted sources and respect content creators' rights.",
    },
    {
      question: "Can I use downloaded videos for commercial or public sharing?",
      answer:
        "You should only use videos you have permission to use or videos that fall under fair use. Downloading for personal offline viewing is typically fine, but redistribution or monetization may violate rights or platform policies. We do not encourage or support any copyright infringement. Always respect copyright and the original creator's rights.",
    },
  ];
  
  return (
    <section className="w-full max-w-4xl mx-auto mt-16 mb-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-border"
          >
            <AccordionTrigger className="text-left text-foreground hover:no-underline py-5 text-base">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
