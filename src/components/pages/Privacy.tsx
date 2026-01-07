import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Eye, Lock, Database, Share2, Clock, AlertCircle, Mail, FileText } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Your Privacy Matters</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Privacy{" "}
                <span className="text-gradient">Policy</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-2">
                for Greyhole Video Downloader
              </p>
              <p className="text-muted-foreground text-sm">
                Effective Date: 07 January 2026
              </p>
              <div className="mt-4 text-sm text-muted-foreground space-y-1">
                <p>Website: <a href="https://greyhole.live" className="text-primary hover:underline">greyhole.live</a></p>
                <p>Service: Greyhole Video Downloader</p>
              </div>
            </div>

            {/* Introduction */}
            <div className="bg-card rounded-2xl border border-border md:p-8 p-4 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                At Greyhole (referred to as &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we take your privacy seriously. 
                This Privacy Policy explains how we collect, use, and protect your personal data when you use our website 
                (greyhole.live) and mobile application (referred to collectively as the &quot;Service&quot;). By accessing or 
                using our Service, you agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </div>

            {/* Privacy Content */}
            <div className="space-y-8">
              {/* 1. Information We Collect */}
              <section className="bg-card rounded-2xl border border-border md:p-8 p-4">
                <div className="md:flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <Database className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h2 className="md:text-2xl text-xl font-semibold md:mt-0 mt-3 text-foreground mb-4">1. Information We Collect</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We may collect the following types of information when you use our Service:
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">a. Personal Data:</h3>
                        <p className="text-muted-foreground">
                          We do not require users to create an account to use the Service. Therefore, we do not directly 
                          collect personal data like your name, email, or address unless you contact us directly for support.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-foreground mb-2">b. Non-Personal Data:</h3>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                          <li><strong>Usage Data:</strong> We collect information on how you access and use our Service, 
                          such as your IP address, browser type, operating system, and the date and time of your visit.</li>
                          <li><strong>Cookies and Tracking Technologies:</strong> We may use cookies and similar tracking 
                          technologies to enhance your experience on our website. You can set your browser to refuse cookies 
                          or alert you when cookies are being sent.</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold text-foreground mb-2">c. Data You Provide:</h3>
                        <p className="text-muted-foreground">
                          When you use the video downloader, we do not store any of the videos or URLs you download. 
                          However, any data you provide (such as copied links or download requests) is processed temporarily 
                          to complete your requested download.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 2. How We Use Your Information */}
              <section className="bg-card rounded-2xl border border-border md:p-8 p-4">
                <div className="md:flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <Eye className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h2 className="md:text-2xl text-xl font-semibold md:mt-0 mt-3 text-foreground mb-4">2. How We Use Your Information</h2>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      We use the collected information for the following purposes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>To provide, maintain, and improve the Service.</li>
                      <li>To analyze and monitor the usage of the Service for better user experience.</li>
                      <li>To troubleshoot and address technical issues.</li>
                    </ul>
                    <p className="text-foreground font-medium mt-4">
                      We do not sell, rent, or trade your personal data to third parties.
                    </p>
                  </div>
                </div>
              </section>

              {/* 3. Data Sharing */}
              <section className="bg-card rounded-2xl border border-border md:p-8 p-4">
                <div className="md:flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <Share2 className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h2 className="md:text-2xl text-xl font-semibold md:mt-0 mt-3 text-foreground mb-4">3. Data Sharing</h2>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      We do not share your personal data with third parties, except in the following cases:
                    </p>
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Service Providers:</h3>
                        <p className="text-muted-foreground">
                          We may engage third-party companies and individuals to assist with the operation of our Service, 
                          such as for hosting, data analysis, and customer support. These third parties have access to your 
                          information only to perform these tasks on our behalf and are obligated not to disclose or use it 
                          for any other purpose.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Legal Compliance:</h3>
                        <p className="text-muted-foreground">
                          We may disclose your information if required by law or to protect our rights, comply with a legal 
                          process, or defend against legal claims.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4. Data Retention */}
              <section className="bg-card rounded-2xl border border-border md:p-8 p-4">
                <div className="md:flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h2 className="md:text-2xl text-xl font-semibold md:mt-0 mt-3 text-foreground mb-4">4. Data Retention</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We retain your information only for as long as necessary to fulfill the purposes outlined in this 
                      Privacy Policy or as required by law. Once no longer necessary, your data will be deleted or anonymized.
                    </p>
                  </div>
                </div>
              </section>

              {/* 5. Security of Data */}
              <section className="bg-card rounded-2xl border border-border md:p-8 p-4">
                <div className="md:flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <Lock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h2 className="md:text-2xl text-xl font-semibold md:mt-0 mt-3 text-foreground mb-4">5. Security of Data</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We take reasonable measures to protect your personal information, including using secure encryption 
                      methods for data transmission. However, no method of transmission over the Internet or electronic 
                      storage is 100% secure, so we cannot guarantee absolute security.
                    </p>
                  </div>
                </div>
              </section>

              {/* 6. Third-Party Links */}
              <section className="bg-card rounded-2xl border border-border md:p-8 p-4">
                <h2 className="md:text-2xl text-xl font-semibold text-foreground mb-4">6. Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our Service may contain links to third-party websites or services (such as YouTube, TikTok, Instagram, 
                  Twitter, etc.). We are not responsible for the content, privacy policies, or practices of these third-party 
                  websites. We encourage you to read the privacy policies of these sites before interacting with them.
                </p>
              </section>

              {/* 7. Children's Privacy */}
              <section className="bg-card rounded-2xl border border-border md:p-8 p-4">
                <div className="md:flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center shrink-0">
                    <AlertCircle className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h2 className="md:text-2xl text-xl font-semibold md:mt-0 mt-3 text-foreground mb-4">7. Children&apos;s Privacy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Our Service is not intended for use by children under the age of 13. We do not knowingly collect 
                      personal information from children. If we learn that we have inadvertently collected data from a child 
                      under 13, we will take steps to delete such information.
                    </p>
                  </div>
                </div>
              </section>

              {/* 8. Changes to This Privacy Policy */}
              <section className="bg-card rounded-2xl border border-border md:p-8 p-4">
                <div className="md:flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h2 className="md:text-2xl text-xl font-semibold md:mt-0 mt-3 text-foreground mb-4">8. Changes to This Privacy Policy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We reserve the right to update or change this Privacy Policy at any time. Any changes will be posted 
                      on this page with the updated effective date. We encourage you to review this Privacy Policy 
                      periodically for any changes.
                    </p>
                  </div>
                </div>
              </section>

              {/* 9. Contact Us */}
              <section className="bg-card rounded-2xl border border-border md:p-8 p-4">
                <div className="md:flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h2 className="md:text-2xl text-xl font-semibold md:mt-0 mt-3 text-foreground mb-4">9. Contact Us</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      If you have any questions about this Privacy Policy or need further information, please contact us at:
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
                          www.greyhole.live
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

export default Privacy;
