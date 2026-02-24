import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | RealLanding",
  description:
    "Learn how RealLanding collects, uses, and protects your personal information.",
  openGraph: {
    title: "Privacy Policy | RealLanding",
    description:
      "Learn how RealLanding collects, uses, and protects your personal information.",
    url: "https://reallanding.com/privacy-policy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | RealLanding",
    description:
      "Learn how RealLanding collects, uses, and protects your personal information.",
    site: "@RealLandingHQ",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 pt-10 pb-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-white/80">Last updated: February 24, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="prose prose-zinc prose-sm max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline">
          <h2>1. Introduction</h2>
          <p>
            RealLanding (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide when you:</p>
          <ul>
            <li>Fill out a contact form or request a consultation</li>
            <li>Subscribe to our newsletter or blog</li>
            <li>Create an account on our platform</li>
            <li>Engage with our services</li>
          </ul>
          <p>This may include your name, email address, phone number, company name, and business details.</p>

          <h3>Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect:</p>
          <ul>
            <li>IP address and browser type</li>
            <li>Device information and operating system</li>
            <li>Pages visited, time spent, and referral sources</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, operate, and maintain our services</li>
            <li>Respond to your inquiries and fulfill your requests</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Analyze usage trends and improve our website</li>
            <li>Prevent fraud and ensure security</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. Information Sharing</h2>
          <p>We do not sell your personal information. We may share your information with:</p>
          <ul>
            <li><strong>Service providers</strong> who assist us in operating our business (hosting, analytics, email delivery)</li>
            <li><strong>Business partners</strong> when necessary to deliver contracted services</li>
            <li><strong>Legal authorities</strong> when required by law or to protect our rights</li>
          </ul>

          <h2>5. Cookies &amp; Tracking</h2>
          <p>
            We use cookies and similar technologies to enhance your experience, analyze traffic, and for marketing purposes. You can manage cookie preferences through your browser settings.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your information, including encryption, access controls, and regular security audits. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2>7. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access, correct, or delete your personal information</li>
            <li>Opt out of marketing communications</li>
            <li>Request data portability</li>
            <li>Withdraw consent for data processing</li>
          </ul>

          <h2>8. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.
          </p>

          <h2>9. Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. We will notify you of any material changes by posting the updated policy on this page with a new &quot;Last updated&quot; date.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <ul>
            <li>Email: privacy@reallanding.com</li>
            <li>Address: 123 Market Street, Suite 400, Miami, FL 33131</li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
