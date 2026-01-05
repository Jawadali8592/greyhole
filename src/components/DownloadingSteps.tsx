export default function DownloadingSteps() {
  const howToSteps = [
    {
      title: "Find the video that you want to save",
      description:
        'Open the app and find the video that you want to save. You will see a "Share" icon. Tap it and then tap "Copy link" on the next screen.\n\nIf you use a desktop browser such as Firefox, Safari or Google Chrome, you can easily copy the link from the browser\'s address bar.',
    },
    {
      title: "Paste the link at the top of the page",
      description:
        "You can use our video downloader on any page of the site. Download videos in mp4 absolutely free and in a matter of seconds!\n\nIf you use a mobile device, long tap on the input form to paste the copied link. If you are a desktop user, you can paste the link with the Ctrl+V keyboard shortcut.\n\nAlmost done. Now press the button and launch the download.",
    },
    {
      title: "Download video without watermark",
      description:
        'If everything went ok, a "Results" page will open. Scroll down to see available links and select the video download quality you prefer.',
    },
  ];
  
  return (
    <section id="how-to" className="w-full max-w-4xl mx-auto px-4">
      <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          How to Download Videos
        </h2>
        <p className="text-primary-foreground/90 mb-8 leading-relaxed">
          Our video downloader will allow you to view and download videos and save them to your device completely
          anonymously. It doesn&apos;t matter what device you have, our web app is available on all devices! We have
          developed our online video saver to help people like you copy and save interesting videos completely free
          of charge.
        </p>

        <div className="space-y-8">
          {howToSteps.map((step, index) => (
            <div key={index} className="relative pl-12">
              <span className="absolute left-0 top-0 text-5xl font-bold text-primary-foreground/20">
                {index + 1}
              </span>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-primary-foreground/85 whitespace-pre-line leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
