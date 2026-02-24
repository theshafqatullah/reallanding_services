import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | RealLanding",
  description:
    "Read the terms and conditions governing your use of RealLanding's website and services.",
  openGraph: {
    title: "Terms of Service | RealLanding",
    description:
      "Read the terms and conditions governing your use of RealLanding's website and services.",
    url: "https://reallanding.com/terms-of-service",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | RealLanding",
    description:
      "Read the terms and conditions governing your use of RealLanding's website and services.",
    site: "@RealLandingHQ",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 pt-10 pb-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-white/80">Last updated: February 24, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="prose prose-zinc prose-sm max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using the RealLanding website and services (&quot;Services&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, you may not use our Services.
          </p>

          <h2>2. Services Description</h2>
          <p>
            RealLanding provides digital marketing, automation, and AI-powered services tailored for real estate professionals, including but not limited to:
          </p>
          <ul>
            <li>Social media marketing and management</li>
            <li>Paid advertising campaigns</li>
            <li>Search engine optimization</li>
            <li>Website design and development</li>
            <li>AI chatbot and automation systems</li>
            <li>CRM setup and integration</li>
            <li>Lead generation and sales funnels</li>
            <li>Branding and reputation management</li>
          </ul>

          <h2>3. Client Obligations</h2>
          <p>As a client, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information as requested</li>
            <li>Grant necessary access to platforms and accounts for service delivery</li>
            <li>Review and approve deliverables in a timely manner</li>
            <li>Make payments according to the agreed schedule</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>

          <h2>4. Payment Terms</h2>
          <p>
            Service fees are outlined in your service agreement. Payments are due on the first of each month unless otherwise specified. Late payments may incur a 1.5% monthly late fee. We reserve the right to suspend services for overdue accounts.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            Upon full payment, clients receive ownership of custom deliverables created specifically for them, including designs, copy, and landing pages. RealLanding retains ownership of proprietary tools, templates, frameworks, and methodologies used in service delivery.
          </p>

          <h2>6. Confidentiality</h2>
          <p>
            Both parties agree to keep confidential all proprietary information shared during the engagement. This includes business strategies, client data, campaign performance data, and trade secrets.
          </p>

          <h2>7. Results Disclaimer</h2>
          <p>
            While we strive to deliver measurable results, RealLanding does not guarantee specific outcomes such as lead volumes, rankings, or revenue figures. Marketing results depend on many factors including market conditions, competition, and client cooperation.
          </p>

          <h2>8. Termination</h2>
          <p>
            Either party may terminate the service agreement with 30 days written notice. Upon termination:
          </p>
          <ul>
            <li>Outstanding payments for work completed become immediately due</li>
            <li>Client receives all completed deliverables</li>
            <li>Account access and credentials will be transferred</li>
            <li>Confidentiality obligations survive termination</li>
          </ul>

          <h2>9. Limitation of Liability</h2>
          <p>
            RealLanding&apos;s total liability shall not exceed the total fees paid by the client in the six months preceding the claim. We are not liable for indirect, incidental, or consequential damages.
          </p>

          <h2>10. Indemnification</h2>
          <p>
            You agree to indemnify and hold RealLanding harmless from any claims, damages, or expenses arising from your use of our Services, your breach of these Terms, or your violation of any third-party rights.
          </p>

          <h2>11. Modifications</h2>
          <p>
            We reserve the right to modify these Terms at any time. Material changes will be communicated with at least 30 days notice. Continued use of our Services after modifications constitutes acceptance.
          </p>

          <h2>12. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of Florida, United States. Any disputes shall be resolved through binding arbitration in Miami, FL.
          </p>

          <h2>13. Contact</h2>
          <p>
            For questions about these Terms, contact us at:
          </p>
          <ul>
            <li>Email: legal@reallanding.com</li>
            <li>Address: 123 Market Street, Suite 400, Miami, FL 33131</li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
