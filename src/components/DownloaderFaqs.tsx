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
      question: "How to download videos on a mobile phone?",
      answer:
        "Open the app and find the video you want to save. Tap the Share icon and select 'Copy link'. Then paste the link into our downloader and tap Download.",
    },
    {
      question: "Can I save videos from any platform?",
      answer:
        "Yes! You can download any public content from TikTok, YouTube, Instagram, Twitter and more. Simply copy the link to the content and paste it in our downloader.",
    },
    {
      question: "Do I need to pay to use this video downloader?",
      answer:
        "No, our service is completely free to use. You can download unlimited videos without any payment or registration required.",
    },
    {
      question: "How to download a video in HD quality?",
      answer:
        "After pasting the link, select your preferred quality from the dropdown menu. We offer up to 1080p HD quality for the best viewing experience.",
    },
    {
      question: "Can I download any video link?",
      answer:
        "You can download most public videos. Private accounts or content that has been removed may not be available for download.",
    },
    {
      question: "Is it safe to use this downloader?",
      answer:
        "Yes, our service is completely safe. We don't store any of your data or downloaded videos. Everything is processed securely.",
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
