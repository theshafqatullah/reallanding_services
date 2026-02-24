import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | RealLanding — Get Your Free Strategy Session",
  description:
    "Ready to generate more leads and close more deals? Contact RealLanding for a free strategy session. We respond within 24 hours.",
  openGraph: {
    title: "Contact Us | RealLanding — Get Your Free Strategy Session",
    description:
      "Ready to generate more leads and close more deals? Contact RealLanding for a free strategy session. We respond within 24 hours.",
    url: "https://reallanding.com/contact",
    type: "website",
    images: [
      {
        url: "https://reallanding.com/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | RealLanding — Get Your Free Strategy Session",
    description:
      "Ready to generate more leads and close more deals? Contact RealLanding for a free strategy session. We respond within 24 hours.",
    images: ["https://reallanding.com/og-contact.jpg"],
    site: "@RealLandingHQ",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact RealLanding",
  url: "https://reallanding.com/contact",
  description:
    "Ready to generate more leads and close more deals? Contact RealLanding for a free strategy session.",
  mainEntity: {
    "@type": "Organization",
    name: "RealLanding",
    url: "https://reallanding.com",
    telephone: "+1-555-123-4567",
    email: "hello@reallanding.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Market Street, Suite 400",
      addressLocality: "Miami",
      addressRegion: "FL",
      postalCode: "33131",
      addressCountry: "US",
    },
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
        key="structured-data"
      />
      {children}
    </>
  );
}
