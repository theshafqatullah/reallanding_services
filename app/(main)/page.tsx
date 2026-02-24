import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/app/components/Header";

export const metadata: Metadata = {
  title: "RealLanding — Real Estate Marketing, Automation & AI Agency",
  description:
    "Grow your real estate business with 18+ specialized services including social media marketing, paid ads, SEO, AI automation, CRM, lead generation & more.",
  openGraph: {
    title: "RealLanding — Real Estate Marketing, Automation & AI Agency",
    description:
      "Grow your real estate business with 18+ specialized services including social media marketing, paid ads, SEO, AI automation, CRM, lead generation & more.",
    url: "https://reallanding.com",
    type: "website",
    siteName: "RealLanding",
    images: [
      {
        url: "https://reallanding.com/og-homepage.jpg",
        width: 1200,
        height: 630,
        alt: "RealLanding — Real Estate Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RealLanding — Real Estate Marketing, Automation & AI Agency",
    description:
      "Grow your real estate business with 18+ specialized services including social media marketing, paid ads, SEO, AI automation, CRM, lead generation & more.",
    images: ["https://reallanding.com/og-homepage.jpg"],
    site: "@RealLandingHQ",
  },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RealLanding",
  url: "https://reallanding.com",
  logo: "https://reallanding.com/logo.png",
  description:
    "Grow your real estate business with 18+ specialized services including social media marketing, paid ads, SEO, AI automation, CRM, lead generation & more.",
  foundingDate: "2024",
  sameAs: [
    "https://twitter.com/RealLandingHQ",
    "https://linkedin.com/company/reallanding",
    "https://instagram.com/reallanding",
    "https://facebook.com/reallanding",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Market Street, Suite 400",
    addressLocality: "Miami",
    addressRegion: "FL",
    postalCode: "33131",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-555-123-4567",
    contactType: "sales",
    availableLanguage: "English",
  },
};

/* ─────────────────────── Data ─────────────────────── */

const allServices = [
  {
    title: "Social Media Marketing",
    desc: "Content strategy, property posts, reels & agent personal branding across all platforms.",
    href: "/services/social-media-marketing",
    tag: "Marketing",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Paid Advertising",
    desc: "Facebook, Instagram, Google, YouTube & TikTok ads with retargeting funnels.",
    href: "/services/paid-advertising",
    tag: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Search Engine Optimization",
    desc: "On-page, off-page, technical & local SEO for market dominance.",
    href: "/services/seo",
    tag: "Marketing",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Content Marketing",
    desc: "SEO blogs, area guides & educational investor content that ranks.",
    href: "/services/content-marketing",
    tag: "Marketing",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Video Marketing",
    desc: "Property tours, drone edits, reels & YouTube strategy.",
    href: "/services/video-marketing",
    tag: "Marketing",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Email Marketing",
    desc: "Automated drip campaigns, investor nurturing & newsletters.",
    href: "/services/email-marketing",
    tag: "Marketing",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Website Design & Dev",
    desc: "Listing sites, landing pages, mobile-first & lead capture.",
    href: "/services/website-design-development",
    tag: "Technology",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "AI Automation System",
    desc: "24/7 chatbot, WhatsApp bot, AI voice & auto-booking.",
    href: "/services/ai-automation",
    tag: "Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "CRM & Sales Automation",
    desc: "CRM setup, lead dashboards, follow-ups & pipelines.",
    href: "/services/crm-sales-automation",
    tag: "Technology",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "WhatsApp Marketing",
    desc: "Broadcast campaigns, nurturing sequences & CRM sync.",
    href: "/services/whatsapp-marketing",
    tag: "Technology",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Lead Generation System",
    desc: "Buyer, seller & investor funnels with appointment automation.",
    href: "/services/lead-generation",
    tag: "Strategy",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Conversion Rate Optimization",
    desc: "Landing page testing, behavior analysis & funnel tuning.",
    href: "/services/conversion-rate-optimization",
    tag: "Strategy",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Sales Funnel Automation",
    desc: "Full-funnel design, retargeting & webinar funnels.",
    href: "/services/sales-funnel-automation",
    tag: "Strategy",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Analytics & Performance",
    desc: "KPI dashboards, CPL optimization & ROI reporting.",
    href: "/services/analytics-performance",
    tag: "Strategy",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Branding & Positioning",
    desc: "Competitor analysis, UVP, luxury positioning & launch branding.",
    href: "/services/branding-market-positioning",
    tag: "Branding",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Reputation Management",
    desc: "Review generation, reputation monitoring & PR placements.",
    href: "/services/reputation-management",
    tag: "Branding",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Strategic Growth Planning",
    desc: "90-day roadmaps, revenue forecasting & market expansion.",
    href: "/services/strategic-growth-planning",
    tag: "Branding",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Investor & Launch Campaigns",
    desc: "Pre-launch buzz, event marketing & pitch deck support.",
    href: "/services/investor-project-launch",
    tag: "Branding",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop&q=80",
  },
];

const highlights = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z" />
      </svg>
    ),
    title: "Real Estate Only",
    desc: "Every strategy, system, and campaign is purpose-built for agents, developers & investors.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: "Data-Driven",
    desc: "Every dollar tracked. Every decision informed by real analytics and measurable performance data.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "AI-Powered",
    desc: "24/7 chatbots, voice agents & smart automation that capture and qualify leads while you sleep.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "18 Integrated Services",
    desc: "From SEO to CRM, paid ads to AI chatbots — everything under one roof for seamless growth.",
  },
];

const testimonials = [
  {
    quote: "RealLanding&rsquo;s AI automation and lead generation system tripled our monthly inquiries within 60 days. The ROI has been incredible.",
    author: "Ahmed R.",
    role: "Real Estate Developer",
    initials: "AR",
    gradient: "from-emerald-400 to-green-600",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
  },
  {
    quote: "Their SEO and content strategy put us on page one of Google for every target keyword. Organic leads are now our #1 source.",
    author: "Sarah K.",
    role: "Brokerage Owner",
    initials: "SK",
    gradient: "from-green-400 to-teal-600",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
  },
  {
    quote: "The paid advertising campaigns consistently deliver qualified buyer leads at a fraction of what we used to pay. Truly game-changing.",
    author: "Michael T.",
    role: "Property Investor",
    initials: "MT",
    gradient: "from-teal-400 to-cyan-600",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Free strategy call to understand your goals, market, and growth challenges.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop&q=80",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Custom marketing & automation blueprint tailored to your business.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&q=80",
  },
  {
    num: "03",
    title: "Execution",
    desc: "We build, launch & manage your campaigns, funnels, and AI systems.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&q=80",
  },
  {
    num: "04",
    title: "Growth",
    desc: "Continuous optimization, scaling, and transparent performance reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80",
  },
];

const faqs = [
  {
    q: "Who is RealLanding for?",
    a: "We work exclusively with real estate professionals — agents, brokerages, developers, and investors who want to generate more leads and close more deals.",
  },
  {
    q: "How quickly will I see results?",
    a: "Paid advertising campaigns typically generate leads within the first week. SEO and organic strategies build momentum over 60–90 days with compounding returns.",
  },
  {
    q: "Do I need to use all 18 services?",
    a: "Not at all. We'll recommend a tailored package based on your goals and budget during the free strategy call. You can start with as few as 1–2 services.",
  },
  {
    q: "What makes you different from other agencies?",
    a: "We focus 100% on real estate. Every strategy, funnel, and AI system is built specifically for property professionals — not generic marketing repurposed for real estate.",
  },
];

/* ─────────────────────── Helpers ─────────────────────── */

const tagColors: Record<string, string> = {
  Marketing: "bg-blue-50 text-blue-600 border-blue-100",
  Technology: "bg-violet-50 text-violet-600 border-violet-100",
  Strategy: "bg-amber-50 text-amber-700 border-amber-100",
  Branding: "bg-rose-50 text-rose-600 border-rose-100",
};

/* ─────────────────────── Arrow Icon ─────────────────────── */
function ArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
    </svg>
  );
}

/* ─────────────────────── Page ─────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-lato)]">

      {/* ═══════════════ NAVIGATION ═══════════════ */}
      <Header />      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
        key="structured-data"
      />
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative isolate overflow-hidden pt-16 pb-24 sm:pt-20 sm:pb-32">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]" />
          <div className="absolute right-0 top-0 -z-10 h-[600px] w-[600px] rounded-full bg-green-50 opacity-60 blur-[128px]" />
          <div className="absolute -left-48 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-50 opacity-50 blur-[128px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left — Text */}
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-200/80 bg-green-50/80 px-4 py-1.5 text-[13px] font-medium text-green-700 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Real Estate Marketing &amp; AI Agency
              </div>

              <h1 className="text-[2.5rem] font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.5rem]">
                The Growth Engine for
                <span className="mt-1 block bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  Real Estate Professionals
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-zinc-500">
                We help agents, developers &amp; investors generate more leads,
                close more deals, and build dominant brands — with marketing,
                automation &amp; AI systems that work around the clock.
              </p>

              <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
                <Link
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-green-600 px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-green-700"
                >
                  Book a Free Strategy Call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-7 py-3.5 text-[15px] font-semibold text-zinc-700 transition-all hover:border-zinc-300 hover:bg-zinc-50"
                >
                  Explore 18 Services
                </Link>
              </div>

              {/* Mini stats */}
              <div className="mt-12 flex gap-8">
                {[
                  { val: "3.2X", label: "Avg. ROI" },
                  { val: "500+", label: "Clients" },
                  { val: "24/7", label: "AI Systems" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-extrabold tracking-tight text-zinc-900">{s.val}</p>
                    <p className="text-[12px] font-medium text-zinc-400">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Image Collage */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Main image */}
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&q=80"
                    alt="Modern real estate"
                    width={800}
                    height={600}
                    className="h-[420px] w-full object-cover"
                    priority
                  />
                </div>
                {/* Floating card — top right */}
                <div className="absolute -right-6 -top-6 rounded-xl bg-white p-4 ring-1 ring-zinc-100">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
                      <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] text-zinc-400">Leads This Month</p>
                      <p className="text-lg font-bold text-zinc-900">+248%</p>
                    </div>
                  </div>
                </div>
                {/* Floating card — bottom left */}
                <div className="absolute -bottom-5 -left-5 rounded-xl bg-white p-4 ring-1 ring-zinc-100">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50">
                      <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] text-zinc-400">Cost Per Lead</p>
                      <p className="text-lg font-bold text-zinc-900">-68%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ HIGHLIGHTS (Why Us) ═══════════════ */}
      <section className="border-y border-zinc-100 bg-zinc-50/60 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <div key={h.title} className="group rounded-2xl bg-white p-6 ring-1 ring-zinc-100 transition hover:ring-green-200/60">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                  {h.icon}
                </div>
                <h3 className="text-[15px] font-semibold text-zinc-900">{h.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-zinc-500">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICES ═══════════════ */}
      <section id="services" className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-green-600">
              18 Specialized Services
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Everything Your Real Estate
              <br className="hidden sm:block" />
              Business Needs to Thrive
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-zinc-500">
              Four pillars of growth — each packed with specialized services designed exclusively for real estate.
            </p>
          </div>

          {/* Service cards with images */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allServices.map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-green-200"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <span className={`absolute right-3 top-3 rounded-md border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm ${tagColors[svc.tag]}`}>
                    {svc.tag}
                  </span>
                </div>
                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[15px] font-semibold leading-snug text-zinc-900 transition group-hover:text-green-600">
                    {svc.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-zinc-400">
                    {svc.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-[12px] font-semibold text-green-600 opacity-0 transition group-hover:opacity-100">
                    View details
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ RESULTS ═══════════════ */}
      <section id="results" className="relative overflow-hidden border-y border-zinc-100 bg-zinc-950 py-24 sm:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-green-900/20 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left — Image */}
            <div className="relative hidden lg:block">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=500&fit=crop&q=80"
                  alt="Analytics dashboard"
                  width={700}
                  height={500}
                  className="h-[380px] w-full object-cover rounded-2xl opacity-80"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent" />
            </div>

            {/* Right — Content */}
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-widest text-green-400">
                Proven Results
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Numbers That Speak
                <br />
                for Themselves
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-zinc-400">
                Our clients consistently see measurable growth across lead volume,
                conversion rates, and revenue.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  { num: "3.2X", label: "Average ROI", sub: "within 90 days" },
                  { num: "68%", label: "Lower CPL", sub: "vs. industry avg" },
                  { num: "500+", label: "Clients", sub: "across markets" },
                  { num: "2.4M+", label: "Leads Generated", sub: "and counting" },
                ].map((item) => (
                  <div key={item.num} className="rounded-xl bg-zinc-900/80 px-5 py-6 backdrop-blur-sm ring-1 ring-zinc-800/50">
                    <p className="text-3xl font-extrabold tracking-tight text-white">{item.num}</p>
                    <p className="mt-1 text-sm font-semibold text-zinc-300">{item.label}</p>
                    <p className="text-[12px] text-zinc-500">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PROCESS ═══════════════ */}
      <section id="process" className="py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-green-600">
              How It Works
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              From Strategy to Scale in 4 Steps
            </h2>
          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div key={step.num} className="group relative overflow-hidden rounded-2xl border border-zinc-100 bg-white transition">
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-sm font-extrabold text-green-600 backdrop-blur-sm">
                    {step.num}
                  </div>
                </div>
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-semibold text-zinc-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-zinc-500">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section id="testimonials" className="border-t border-zinc-100 bg-zinc-50/60 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-green-600">
              Client Stories
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Trusted by Real Estate Leaders
            </h2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.author}
                className="relative flex flex-col rounded-2xl bg-white p-7 ring-1 ring-zinc-100"
              >
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                    </svg>
                  ))}
                </div>

                <p
                  className="flex-1 text-[14px] leading-relaxed text-zinc-600"
                  dangerouslySetInnerHTML={{ __html: `&ldquo;${t.quote}&rdquo;` }}
                />

                <footer className="mt-6 flex items-center gap-3 border-t border-zinc-100 pt-5">
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
                  />
                  <div>
                    <p className="text-[13px] font-semibold text-zinc-900">{t.author}</p>
                    <p className="text-[12px] text-zinc-400">{t.role}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-green-600">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-14 divide-y divide-zinc-100">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-zinc-900 transition hover:text-green-600 [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <svg className="h-5 w-5 shrink-0 text-zinc-400 transition group-open:rotate-45" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </summary>
                <p className="mt-3 text-[14px] leading-relaxed text-zinc-500">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section id="contact" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=800&fit=crop&q=80"
            alt="Modern buildings"
            width={1920}
            height={800}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-emerald-800/90 to-teal-900/90" />
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem]" />

        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-[2.75rem] sm:leading-tight">
            Ready to Transform Your
            <br />
            Real Estate Business?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-green-100/90">
            Book a free strategy call. We&rsquo;ll audit your current marketing,
            identify quick wins, and map out a custom growth plan — no
            strings attached.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:hello@reallanding.com"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[15px] font-semibold text-green-700 transition hover:bg-green-50 sm:w-auto"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              hello@reallanding.com
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 py-3.5 text-[15px] font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 sm:w-auto"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              (555) 123-4567
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="border-t border-zinc-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
            {/* Brand column */}
            <div className="lg:col-span-4">
              <Link href="/" className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 text-sm font-bold text-white">
                  R
                </div>
                <span className="text-lg font-bold tracking-tight text-zinc-900">
                  Real<span className="text-green-600">Landing</span>
                </span>
              </Link>
              <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-zinc-400">
                The all-in-one marketing, automation &amp; AI agency built
                exclusively for real estate professionals.
              </p>
              <div className="mt-6 flex gap-3">
                {[
                  { label: "Facebook", d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" },
                  { label: "Instagram", d: "M16 3.5H8A4.5 4.5 0 003.5 8v8a4.5 4.5 0 004.5 4.5h8a4.5 4.5 0 004.5-4.5V8A4.5 4.5 0 0016 3.5zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm4.5-7a1 1 0 110-2 1 1 0 010 2z" },
                  { label: "LinkedIn", d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-100 text-zinc-400 transition hover:border-zinc-200 hover:text-zinc-600"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d={s.d} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {[
              {
                title: "Marketing",
                links: [
                  { label: "Social Media", href: "/services/social-media-marketing" },
                  { label: "Paid Advertising", href: "/services/paid-advertising" },
                  { label: "SEO", href: "/services/seo" },
                  { label: "Content Marketing", href: "/services/content-marketing" },
                  { label: "Video Marketing", href: "/services/video-marketing" },
                  { label: "Email Marketing", href: "/services/email-marketing" },
                ],
              },
              {
                title: "Technology",
                links: [
                  { label: "Website Design", href: "/services/website-design-development" },
                  { label: "AI Automation", href: "/services/ai-automation" },
                  { label: "CRM Setup", href: "/services/crm-sales-automation" },
                  { label: "WhatsApp Marketing", href: "/services/whatsapp-marketing" },
                  { label: "Lead Generation", href: "/services/lead-generation" },
                ],
              },
              {
                title: "Strategy",
                links: [
                  { label: "Branding", href: "/services/branding-market-positioning" },
                  { label: "Reputation", href: "/services/reputation-management" },
                  { label: "Analytics", href: "/services/analytics-performance" },
                  { label: "Sales Funnels", href: "/services/sales-funnel-automation" },
                  { label: "Growth Planning", href: "/services/strategic-growth-planning" },
                  { label: "Launch Campaigns", href: "/services/investor-project-launch" },
                ],
              },
            ].map((col) => (
              <div key={col.title} className="lg:col-span-2 lg:col-start-auto">
                <h4 className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-zinc-500 transition hover:text-green-600"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-zinc-100 pt-8 sm:flex-row">
            <p className="text-[12px] text-zinc-400">
              &copy; {new Date().getFullYear()} RealLanding. All rights reserved.
            </p>
            <div className="flex gap-6 text-[12px] text-zinc-400">
              <a href="#" className="transition hover:text-zinc-600">Privacy Policy</a>
              <a href="#" className="transition hover:text-zinc-600">Terms of Service</a>
              <a href="#" className="transition hover:text-zinc-600">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
