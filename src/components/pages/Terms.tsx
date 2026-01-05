import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Shield, AlertTriangle, Scale, Users, Lock, Gavel, Mail } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <FileText className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Legal Information</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Terms &{" "}
                <span className="text-gradient">Conditions</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-2">
                for Greyhole Downloader App
              </p>
              <p className="text-muted-foreground text-sm">
                Effective Date: 13 December 2025
              </p>
              <div className="mt-4 text-sm text-muted-foreground space-y-1">
                <p>Owner: Greyhole (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;)</p>
                <p>Website: <a href="https://greyhole.live" className="text-primary hover:underline">greyhole.live</a></p>
                <p>App: Greyhole Video Downloader (the &quot;Service&quot;)</p>
              </div>
            </div>

            {/* Terms Content */}
            <div className="space-y-8">
              {/* 1. Acceptance of Terms */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <Scale className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      By installing, accessing, or using the Greyhole Downloader App, you agree to be bound by these Terms & Conditions. If you do not agree, do not use the Service.
                    </p>
                  </div>
                </div>
              </section>

              {/* 2. Description of the Service */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of the Service</h2>
                <div className="text-muted-foreground leading-relaxed space-y-3">
                  <p>• Greyhole allows users to download videos or media from third-party websites and platforms.</p>
                  <p>• The Service is provided for personal and lawful use only.</p>
                  <p>• We do not host or store any video content on our servers.</p>
                </div>
              </section>

              {/* 3. User Responsibilities */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      By using the app, you agree that you will:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Use downloaded content only for personal, non-commercial, lawful purposes.</li>
                      <li>Not download or distribute copyrighted content without permission from the copyright owner.</li>
                      <li>Not misuse the Service for illegal, harmful, or unauthorized activities.</li>
                      <li>Not attempt to break security features, modify the app, or harm the Service in any way.</li>
                    </ul>
                    <p className="text-foreground font-medium mt-4">
                      You are fully responsible for any content you download and how you use it.
                    </p>
                  </div>
                </div>
              </section>

              {/* 4. Third-Party Platform Compliance */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Third-Party Platform Compliance</h2>
                <div className="text-muted-foreground leading-relaxed space-y-3">
                  <p>• Greyhole works with publicly accessible media links from platforms such as YouTube, Instagram, TikTok, Facebook, etc.</p>
                  <p>• You must comply with the Terms of Service of each platform you interact with.</p>
                  <p>• Greyhole is not affiliated with or endorsed by any of these platforms.</p>
                </div>
              </section>

              {/* 5. No Account Required */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. No Account Required</h2>
                <div className="text-muted-foreground leading-relaxed space-y-3">
                  <p>• You can use the app without creating an account.</p>
                  <p>• We do not collect personal information like your name or email unless you contact us directly.</p>
                </div>
              </section>

              {/* 6. Data Collection & Privacy */}
              <section id="privacy" className="bg-card rounded-2xl border border-border p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Collection & Privacy</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-3">
                      <p>Your use of the app is governed by our Privacy Policy, which explains:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>What information we collect</li>
                        <li>How we use it</li>
                        <li>How we protect it</li>
                      </ul>
                      <p className="font-medium text-foreground mt-4">Important:</p>
                      <p>• We do not store any downloaded videos or URLs.</p>
                      <p>• Any link you paste into the app is processed temporarily to complete your request.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 7. Intellectual Property */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <Lock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">7. Intellectual Property</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-3">
                      <p>• The app, including its design, logo, text, and features, is owned by Greyhole.</p>
                      <p>• You may not copy, modify, reverse-engineer, or redistribute the app without permission.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 8. Prohibited Activities */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">8. Prohibited Activities</h2>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      You agree NOT to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Use the Service for copyright infringement.</li>
                      <li>Download videos protected by DRM (Digital Rights Management).</li>
                      <li>Upload viruses, malware, or harmful code.</li>
                      <li>Attempt to overload or hack the Service.</li>
                    </ul>
                    <p className="text-destructive font-medium mt-4">
                      Violation may result in termination of your access.
                    </p>
                  </div>
                </div>
              </section>

              {/* 9. Disclaimer of Warranty */}
              <section id="disclaimer" className="bg-card rounded-2xl border border-border p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Disclaimer of Warranty</h2>
                <div className="text-muted-foreground leading-relaxed space-y-3">
                  <p>The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind.</p>
                  <p className="font-medium text-foreground">We do not guarantee:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Availability</li>
                    <li>Accuracy</li>
                    <li>Compatibility</li>
                    <li>Continuous or error-free operation</li>
                  </ul>
                  <p className="font-medium text-foreground mt-4">
                    Your use of the app is at your own risk.
                  </p>
                </div>
              </section>

              {/* 10. Limitation of Liability */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Limitation of Liability</h2>
                <div className="text-muted-foreground leading-relaxed space-y-3">
                  <p className="font-medium text-foreground">Greyhole is not liable for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Any damages resulting from your use or misuse of downloaded content</li>
                    <li>Illegal or unauthorized use of copyrighted media</li>
                    <li>Third-party platform restrictions</li>
                    <li>App errors, downtime, or data loss</li>
                  </ul>
                  <p className="font-medium text-foreground mt-4">
                    You assume full responsibility for how you use the Service.
                  </p>
                </div>
              </section>

              {/* 11. Changes to the Terms */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Changes to the Terms</h2>
                <div className="text-muted-foreground leading-relaxed space-y-3">
                  <p>• We may update or modify these Terms & Conditions at any time.</p>
                  <p>• Changes will be effective once posted in the app or on our website.</p>
                </div>
              </section>

              {/* 12. Termination */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <Gavel className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">12. Termination</h2>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      We may suspend or terminate your access to the Service at any time if you:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Violate these Terms</li>
                      <li>Engage in illegal or abusive behavior</li>
                      <li>Misuse the Service</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 13. Contact Us */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Us</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      For questions or concerns about these Terms, contact us at:
                    </p>
                    <div className="space-y-2">
                      <p className="text-foreground">
                        <strong>Email:</strong>{" "}
                        <a href="mailto:superbofficials24@gmail.com" className="text-primary hover:underline">
                          superbofficials24@gmail.com
                        </a>
                      </p>
                      <p className="text-foreground">
                        <strong>Website:</strong>{" "}
                        <a href="https://greyhole.live" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                          greyhole.live
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
