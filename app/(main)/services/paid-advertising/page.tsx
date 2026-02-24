import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Paid Advertising for Real Estate | RealLanding",
  description:
    "Drive qualified buyer and seller leads with high-performance paid advertising campaigns across Google, Facebook, Instagram, TikTok, and YouTube — built exclusively for real estate professionals.",
  openGraph: {
    title: "Paid Advertising for Real Estate | RealLanding",
    description:
      "Drive qualified buyer and seller leads with high-performance paid advertising campaigns across Google, Facebook, Instagram, TikTok, and YouTube — built exclusively for real estate professionals.",
    url: "https://reallanding.com/services/paid-advertising",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-paid-advertising.jpg",
        width: 1200,
        height: 630,
        alt: "Paid Advertising for Real Estate | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paid Advertising for Real Estate | RealLanding",
    description:
      "Drive qualified buyer and seller leads with high-performance paid advertising campaigns across Google, Facebook, Instagram, TikTok, and YouTube — built exclusively for real estate professionals.",
    images: ["https://reallanding.com/og-paid-advertising.jpg"],
    site: "@RealLandingHQ",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Paid Advertising",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "Drive qualified buyer and seller leads with high-performance paid advertising campaigns across Google, Facebook, Instagram, TikTok, and YouTube — built exclusively for real estate professionals.",
  "url": "https://reallanding.com/services/paid-advertising",
  "category": "Real Estate Marketing"
};

const stats = [
  { value: "5.2×", label: "Average ROAS Across Clients" },
  { value: "$14", label: "Average Cost Per Qualified Lead" },
  { value: "38%", label: "Lower CPA vs Industry Average" },
  { value: "72hr", label: "Time to First Leads" },
];

const services = [
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>), title: "Google Ads & Search Campaigns", description: "Capture high-intent buyers and sellers actively searching for properties, agents, and real estate services. We build hyper-targeted search, display, and Performance Max campaigns that convert at scale." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>), title: "Facebook & Instagram Ads", description: "Reach exactly the right audiences with scroll-stopping listing showcases, virtual tour promotions, lead magnet campaigns, and lookalike targeting that fills your pipeline with qualified prospects." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" /></svg>), title: "YouTube & Video Advertising", description: "Engage prospective clients with cinematic property walkthroughs, market updates, and agent introduction videos. Video ads deliver the highest engagement rates across all formats." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M21.015 4.356v4.992" /></svg>), title: "Retargeting & Remarketing", description: "Re-engage the 97% of visitors who left without converting. Our retargeting sequences across display, social, and video keep your brand top-of-mind until they&apos;re ready to act." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>), title: "TikTok & Emerging Platforms", description: "Tap into younger demographics, first-time homebuyers, and early adopters with native short-form video ads optimized for TikTok, Pinterest, and Snapchat audiences." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" /></svg>), title: "Landing Pages & Conversion Funnels", description: "Every campaign includes dedicated, high-converting landing pages with A/B tested headlines, forms, and CTAs — designed to turn ad clicks into booked appointments." },
];

const steps = [
  { step: 1, title: "Account & Market Audit", description: "We analyze your existing ad accounts, competitor landscape, and local market data to identify untapped opportunities and wasted spend." },
  { step: 2, title: "Strategy & Media Plan", description: "Custom media plan with audience segments, budget allocation, platform selection, creative briefs, and conversion goals aligned to your pipeline targets." },
  { step: 3, title: "Creative Production", description: "Our team designs compelling ad creatives — carousel listings, video tours, lead magnets, and dynamic ads — optimized for each platform&apos;s algorithm." },
  { step: 4, title: "Launch & Test", description: "Campaigns launch with precise targeting, A/B testing frameworks, conversion tracking, and UTM parameters fully configured from day one." },
  { step: 5, title: "Optimize & Scale", description: "Continuous bid management, audience refinement, creative rotation, and budget reallocation ensure your cost per lead decreases as volume grows." },
];

const benefits = [
  { title: "Leads on Demand", desc: "Unlike organic strategies that take months, paid ads can generate qualified leads within 48–72 hours of campaign launch." },
  { title: "Laser-Precision Targeting", desc: "Reach buyers by location, income, life events, homeownership status, browsing behavior, and dozens of other targeting parameters." },
  { title: "Fully Measurable ROI", desc: "Every dollar is tracked from impression to closed deal. Know exactly which campaigns, ads, and audiences deliver the best returns." },
  { title: "Flexible & Scalable Budgets", desc: "Start small and scale up as you see results. Pause, pivot, or double down on winning campaigns — you&apos;re always in control." },
  { title: "Multi-Platform Presence", desc: "Reach your audience wherever they spend time — Google, Facebook, Instagram, YouTube, TikTok, and programmatic display networks." },
  { title: "Dedicated Real Estate Specialist", desc: "Your campaigns are managed by an ad strategist who understands real estate cycles, seasonal trends, and what makes buyers click." },
];

const results = [
  { metric: "127", label: "Qualified leads per month", period: "Average across clients" },
  { metric: "$8.40", label: "Cost per lead achieved", period: "For top-performing campaigns" },
  { metric: "6.1×", label: "Return on ad spend", period: "Across all platforms" },
  { metric: "340%", label: "Pipeline value increase", period: "Within first quarter" },
];

const testimonials = [
  { quote: "RealLanding cut our cost per lead in half while tripling our monthly lead volume. Their Facebook and Google strategy completely transformed our business — we went from 20 leads a month to over 100.", author: "Michael S.", role: "Real Estate Team Lead, Dallas TX" },
  { quote: "The retargeting campaigns alone paid for the entire engagement. We're now closing deals from prospects who visited our site months ago — because RealLanding's ads kept us in front of them.", author: "Amanda L.", role: "Luxury Agent, San Diego CA" },
];

const faqs = [
  { question: "What budget do I need to start paid advertising?", answer: "Most agents see meaningful results starting at $1,500–$3,000 per month in ad spend (plus management fees). We'll recommend a budget based on your market competitiveness, lead volume goals, and the platforms that will deliver the best ROI for your specific situation." },
  { question: "Which platforms work best for real estate ads?", answer: "Google Ads captures high-intent searches from active buyers and sellers, while Facebook and Instagram excel at visual listing promotion and brand awareness. We typically recommend a blended approach and reallocate spend based on performance data — most clients see the best results with a Google + Meta combination." },
  { question: "How quickly will I see leads?", answer: "Paid campaigns can generate leads within 48–72 hours of launch. Optimization over the first 2–4 weeks typically reduces cost per lead by 25–40% as we refine targeting, creative, and bidding strategies based on real conversion data." },
  { question: "How do you track and report results?", answer: "You'll receive a live dashboard tracking impressions, clicks, leads, cost per lead, and return on ad spend in real time. We also provide bi-weekly strategy calls to review performance, discuss optimization opportunities, and align on upcoming campaigns." },
  { question: "Can I pause or adjust campaigns anytime?", answer: "Absolutely. We offer full flexibility to pause, scale, or pivot campaigns based on seasonal demand, listing inventory changes, or shifting business priorities. There are no long-term contracts — you stay because it works." },
  { question: "What makes your ad management different from other agencies?", answer: "We exclusively serve real estate professionals. Our team understands buyer and seller psychology, seasonal market patterns, and the exact ad formats and targeting parameters that work for property marketing. We also build custom landing pages for every campaign — most agencies skip this critical step." },
];

const relatedServices = [
  { title: "Lead Generation", href: "/services/lead-generation", description: "Build a predictable pipeline of buyer and seller leads with multi-channel acquisition strategies that work alongside your paid campaigns." },
  { title: "Social Media Marketing", href: "/services/social-media-marketing", description: "Grow your brand organically and nurture prospects with engaging social content that supports and amplifies your paid efforts." },
  { title: "Conversion Rate Optimization", href: "/services/conversion-rate-optimization", description: "Turn more of your website visitors and ad clicks into booked appointments with data-driven landing page and funnel optimization." },
];

export default function PaidAdvertisingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        key="structured-data"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-700 to-green-900 pt-32 pb-28">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-green-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-green-400/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex justify-center mb-6 text-green-200 text-sm">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/#services" className="hover:text-white transition">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Paid Advertising</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/20">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
            Paid Advertising for Real Estate
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Generate Leads on Demand with<br className="hidden md:block" /> High-Performance Paid Ads</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-10 leading-relaxed">Put your listings and services in front of motivated buyers and sellers the moment they&apos;re searching — across Google, social media, and video platforms with campaigns that deliver predictable ROI.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Get Your Free Ad Audit</Link>
            <Link href="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">View Case Studies</Link>
          </div>
          <p className="mt-6 text-green-200/70 text-sm">$2M+ in ad spend managed for real estate professionals</p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> Google Premier Partner</span>
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> Meta Business Partner</span>
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> Real-Time Dashboards</span>
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> No Long-Term Contracts</span>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Full-Spectrum Paid Advertising Solutions</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Every major ad platform, managed by specialists who understand real estate marketing — from search intent to social scroll behavior.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-green-200 hover:shadow-lg hover:shadow-green-100/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-5 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed text-[15px]">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results Showcase */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Proven Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Performance That Speaks for Itself</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Real numbers from real estate professionals who trust us to manage their ad spend and deliver pipeline growth.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((r, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <div className="text-4xl font-bold text-green-400 mb-2">{r.metric}</div>
                <div className="text-white font-medium mb-1">{r.label}</div>
                <div className="text-gray-500 text-sm">{r.period}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Why Paid Ads</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">The Fastest Path to Predictable Real Estate Leads</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">While organic strategies build long-term equity, paid advertising delivers qualified leads immediately — giving you full control over volume, targeting, and spend.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-green-50/50 border border-green-100 rounded-2xl p-6 hover:bg-green-50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="font-bold text-gray-900">{b.title}</h3>
                </div>
                <p className="text-gray-500 text-[15px] leading-relaxed pl-11">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 border-y border-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
                <svg className="absolute top-6 right-8 w-12 h-12 text-green-100" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" /></svg>
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <svg key={j} className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}</div>
                <p className="text-gray-600 leading-relaxed mb-6 relative z-10">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-bold text-gray-900">{t.author}</div>
                  <div className="text-green-600 text-sm">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">From Audit to Lead Generation in Five Steps</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A battle-tested methodology refined across hundreds of real estate campaigns and millions of dollars in managed ad spend.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-green-200 via-emerald-400 to-green-200" />
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center relative">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4 relative z-10 shadow-lg shadow-green-200">{s.step}</div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 border-y border-gray-100 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Common Questions About Paid Advertising</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-100 hover:border-green-200 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-900 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 -mt-2">
                  <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Related Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Amplify Your Ad Results</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((rs, i) => (
              <Link key={i} href={rs.href} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-green-200 hover:shadow-lg hover:shadow-green-50 transition-all block">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">{rs.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-4">{rs.description}</p>
                <span className="text-green-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-700 to-green-900 py-24">
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-green-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-green-400/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Turn Ad Spend into Closed Deals?</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed">Book a free strategy session and discover how our paid advertising campaigns can fill your pipeline with qualified buyer and seller leads — starting this week.</p>
          <Link href="/contact" className="inline-block bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Schedule Your Free Consultation</Link>
          <p className="mt-6 text-green-200/60 text-sm">Free ad account audit included — even if you don&apos;t sign up</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
