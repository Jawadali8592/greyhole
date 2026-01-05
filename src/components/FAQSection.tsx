'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this video downloader completely free to use?",
    answer: "Yes, our service is 100% free to use. There are no hidden fees, subscriptions, or premium plans. You can download unlimited videos without paying anything.",
  },
  {
    question: "What video formats are supported?",
    answer: "We support multiple formats including MP3, MP3 HD, MP4, MP4 HD, MP4 2K, WAV, and more. You can choose the format that best suits your needs before downloading.",
  },
  {
    question: "Which platforms are supported?",
    answer: "Our downloader supports all major video platforms including  TikTok, Twitter/X, Instagram, Facebook, Vimeo, Dailymotion, and many more. Simply paste the video URL and we'll handle the rest.",
  },
  {
    question: "Is it safe to download videos?",
    answer: "Absolutely! Our service is completely safe to use. We don't store any user data or downloaded content on our servers. All downloads are encrypted and secure.",
  },
  {
    question: "Do I need to create an account?",
    answer: "No, you don't need to create an account or sign up. Simply paste the video URL, select your preferred format, and click download. It's that simple!",
  },
  {
    question: "Can I download entire playlists?",
    answer: "Yes, our downloader supports playlist downloads. You can download up to 100 videos from a single playlist in your chosen format. Just paste the playlist URL instead of an individual video URL.",
  },
  {
    question: "Why is my download not working?",
    answer: "If your download isn&apos;t working, please check: 1) The URL is correct and from a supported platform. 2) The video isn&apos;t private or age-restricted. 3) Try refreshing the page and attempting again. If issues persist, the video may have restrictions that prevent downloading.",
  },
  {
    question: "Is it legal to download videos?",
    answer: "Downloading videos for personal use is generally acceptable, but it may violate the terms of service of some platforms. Please respect copyright laws and only download content you have permission to use. Our tool is provided as-is, and users are responsible for how they use downloaded content.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, 
            feel free to contact us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 overflow-hidden data-[state=open]:glow-effect-sm transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
