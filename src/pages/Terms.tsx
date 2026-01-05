import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Shield, AlertTriangle, Scale } from "lucide-react";

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
              <p className="text-muted-foreground text-lg">
                Last updated: January 2025
              </p>
            </div>

            {/* Terms Content */}
            <div className="space-y-12">
              {/* Introduction */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <Scale className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Welcome to VidGrab. By accessing and using our service, you agree to be bound by these Terms and Conditions. 
                      If you do not agree with any part of these terms, you may not use our service. 
                      VidGrab provides a video downloading service that allows users to download videos from various platforms for personal use.
                    </p>
                  </div>
                </div>
              </section>

              {/* Acceptable Use */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Acceptable Use</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>You agree to use VidGrab only for lawful purposes and in accordance with these Terms. You agree NOT to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Download copyrighted content without proper authorization from the copyright holder</li>
                    <li>Use the service for any commercial purposes without permission</li>
                    <li>Attempt to circumvent any security measures or restrictions</li>
                    <li>Use automated systems or bots to access the service</li>
                    <li>Distribute, share, or sell downloaded content illegally</li>
                    <li>Use the service in any way that violates applicable laws or regulations</li>
                  </ul>
                </div>
              </section>

              {/* Copyright */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Copyright & Intellectual Property</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    VidGrab respects the intellectual property rights of others and expects users to do the same. 
                    The content you download using our service may be protected by copyright laws.
                  </p>
                  <p>
                    <strong className="text-foreground">You are solely responsible for:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Ensuring you have the right to download and use any content</li>
                    <li>Complying with the terms of service of the original platform</li>
                    <li>Any legal consequences resulting from your use of downloaded content</li>
                  </ul>
                  <p>
                    We do not host, store, or distribute any copyrighted content. We merely provide a tool that 
                    enables users to download publicly available content.
                  </p>
                </div>
              </section>

              {/* Privacy Policy */}
              <section id="privacy" className="bg-card rounded-2xl border border-border p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">4. Privacy Policy</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <p>Your privacy is important to us. Here's what you should know:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong className="text-foreground">No Personal Data Collection:</strong> We do not collect, store, or share any personal information</li>
                        <li><strong className="text-foreground">No Account Required:</strong> You can use our service without creating an account</li>
                        <li><strong className="text-foreground">No Download History:</strong> We do not keep records of what you download</li>
                        <li><strong className="text-foreground">Cookies:</strong> We may use essential cookies for basic functionality</li>
                        <li><strong className="text-foreground">Analytics:</strong> We may use anonymous analytics to improve our service</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Disclaimer */}
              <section id="disclaimer" className="bg-card rounded-2xl border border-border p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">5. Disclaimer</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <p>
                        VidGrab is provided "as is" without any warranties of any kind, either express or implied. We make no guarantees about:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>The availability, reliability, or accuracy of the service</li>
                        <li>The quality of downloaded content</li>
                        <li>The legality of downloading specific content in your jurisdiction</li>
                        <li>The compatibility of downloaded files with your devices</li>
                      </ul>
                      <p className="font-medium text-foreground">
                        You use this service at your own risk. We are not liable for any damages resulting from 
                        your use of our service or any content downloaded through it.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    To the maximum extent permitted by law, VidGrab and its operators shall not be liable for any 
                    indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Loss of profits or data</li>
                    <li>Legal claims from third parties</li>
                    <li>Interruption of service</li>
                    <li>Any errors or omissions in the service</li>
                  </ul>
                </div>
              </section>

              {/* Changes to Terms */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective 
                  immediately upon posting to this page. Your continued use of the service after any changes 
                  constitutes your acceptance of the new Terms. We encourage you to review these Terms periodically.
                </p>
              </section>

              {/* Contact */}
              <section className="bg-card rounded-2xl border border-border p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms and Conditions, please contact us through our website. 
                  We will respond to your inquiry as soon as possible.
                </p>
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
