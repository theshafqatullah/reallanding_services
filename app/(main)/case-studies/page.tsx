import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Case Studies | RealLanding — Real Estate Marketing Results",
  description:
    "See how RealLanding helps real estate professionals generate leads, increase conversions, and scale their businesses with proven marketing strategies.",
  openGraph: {
    title: "Case Studies | RealLanding — Real Estate Marketing Results",
    description:
      "See how RealLanding helps real estate professionals generate leads, increase conversions, and scale their businesses with proven marketing strategies.",
    url: "https://reallanding.com/case-studies",
    type: "website",
    images: [
      {
        url: "https://reallanding.com/og-case-studies.jpg",
        width: 1200,
        height: 630,
        alt: "RealLanding Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | RealLanding — Real Estate Marketing Results",
    description:
      "See how RealLanding helps real estate professionals generate leads, increase conversions, and scale their businesses with proven marketing strategies.",
    images: ["https://reallanding.com/og-case-studies.jpg"],
    site: "@RealLandingHQ",
  },
};

const caseStudiesJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Case Studies | RealLanding",
  url: "https://reallanding.com/case-studies",
  description:
    "See how RealLanding helps real estate professionals generate leads, increase conversions, and scale their businesses with proven marketing strategies.",
  publisher: {
    "@type": "Organization",
    name: "RealLanding",
    url: "https://reallanding.com",
    logo: "https://reallanding.com/logo.png",
  },
};

const caseStudies = [
  {
    title: "300% Increase in Qualified Leads",
    client: "Prestige Properties Group",
    category: "Lead Generation & Paid Ads",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop&q=80",
    stats: [
      { label: "Lead Increase", value: "300%" },
      { label: "Cost Per Lead", value: "-62%" },
      { label: "Closings", value: "+45" },
    ],
    summary: "A luxury real estate brokerage struggling with high cost-per-lead turned to RealLanding for a complete lead generation overhaul. We implemented AI-powered chatbots, retargeting funnels, and optimized their Google & Facebook ad campaigns.",
    services: ["Paid Advertising", "Lead Generation", "AI Automation"],
  },
  {
    title: "Page 1 Rankings for 50+ Keywords",
    client: "Metro Realty Associates",
    category: "SEO & Content Marketing",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop&q=80",
    stats: [
      { label: "Keywords on Page 1", value: "50+" },
      { label: "Organic Traffic", value: "+420%" },
      { label: "Monthly Leads", value: "180+" },
    ],
    summary: "This mid-size brokerage had zero organic presence. Through aggressive local SEO, content marketing, and technical optimization, we dominated their target market in search results within 6 months.",
    services: ["SEO", "Content Marketing", "Website Design"],
  },
  {
    title: "Sold Out 120-Unit Project in 90 Days",
    client: "Skyline Developments",
    category: "Launch Campaign & Social Media",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=500&fit=crop&q=80",
    stats: [
      { label: "Units Sold", value: "120" },
      { label: "Timeline", value: "90 Days" },
      { label: "ROI", value: "12x" },
    ],
    summary: "A developer launching a new residential project needed massive pre-launch buzz. We combined social media campaigns, influencer partnerships, WhatsApp marketing, and event-driven lead capture funnels.",
    services: ["Social Media", "WhatsApp Marketing", "Investor Launch"],
  },
  {
    title: "5x Revenue Growth in 12 Months",
    client: "Sarah Kim Real Estate",
    category: "Full-Service Marketing",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=500&fit=crop&q=80",
    stats: [
      { label: "Revenue Growth", value: "5x" },
      { label: "Social Following", value: "+15K" },
      { label: "Avg Deal Size", value: "+38%" },
    ],
    summary: "A solo agent looking to break into luxury markets partnered with us for branding, social media, video marketing, and reputation management. Within a year, she became the top-producing agent in her market.",
    services: ["Branding", "Social Media", "Video Marketing", "Reputation"],
  },
  {
    title: "AI Chatbot Handling 2,000+ Inquiries/Month",
    client: "Pacific Coast Properties",
    category: "AI & CRM Automation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&q=80",
    stats: [
      { label: "Monthly Inquiries", value: "2,000+" },
      { label: "Response Time", value: "<30s" },
      { label: "Qualified Leads", value: "+180%" },
    ],
    summary: "A property management company was losing leads due to slow response times. We deployed an AI chatbot and WhatsApp automation system that qualifies and books appointments 24/7.",
    services: ["AI Automation", "CRM Setup", "WhatsApp Marketing"],
  },
  {
    title: "Email Campaigns Generating $2M+ Pipeline",
    client: "Heritage Real Estate Group",
    category: "Email Marketing & Funnels",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop&q=80",
    stats: [
      { label: "Pipeline Value", value: "$2M+" },
      { label: "Open Rate", value: "42%" },
      { label: "Click Rate", value: "8.5%" },
    ],
    summary: "An investment-focused brokerage needed a way to nurture their database of 10,000+ contacts. We built automated email sequences, investor newsletters, and deal-alert campaigns that consistently drive closings.",
    services: ["Email Marketing", "Sales Funnels", "CRM Automation"],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesJsonLd) }}
        key="structured-data"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 to-green-800 pt-10 pb-24 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur-sm">
              Case Studies
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Real Results. Real Clients.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              See how we&apos;ve helped real estate professionals generate more leads,
              close more deals, and scale their businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="space-y-20">
          {caseStudies.map((cs, idx) => (
            <div
              key={cs.title}
              className={`grid items-center gap-12 lg:grid-cols-2 ${idx % 2 === 1 ? "lg:direction-rtl" : ""}`}
            >
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <span className="inline-block rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                  {cs.category}
                </span>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                  {cs.title}
                </h2>
                <p className="mt-2 text-sm font-medium text-zinc-400">{cs.client}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-zinc-500">{cs.summary}</p>

                <div className="mt-6 grid grid-cols-3 gap-4">
                  {cs.stats.map((s) => (
                    <div key={s.label} className="rounded-xl bg-zinc-50 p-4 text-center">
                      <div className="text-xl font-bold text-green-600">{s.value}</div>
                      <div className="mt-1 text-[11px] text-zinc-500">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {cs.services.map((s) => (
                    <span key={s} className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-500">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    width={800}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to be our next success story?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Book a free strategy call and see how we can deliver similar results for your business.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-green-700 transition hover:bg-white/90"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
