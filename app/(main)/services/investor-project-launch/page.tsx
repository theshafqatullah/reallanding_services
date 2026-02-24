import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Investor & Project Launch Marketing | RealLanding",
  description:
    "Launch campaigns for real estate investors, developers, and new construction projects. Pre-launch marketing, investor targeting, digital strategy, PR placement, and sales collateral.",
  openGraph: {
    title: "Investor & Project Launch Marketing | RealLanding",
    description:
      "Launch campaigns for real estate investors, developers, and new construction projects. Pre-launch marketing, investor targeting, digital strategy, PR placement, and sales collateral.",
    url: "https://reallanding.com/services/investor-project-launch",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-investor-project-launch.jpg",
        width: 1200,
        height: 630,
        alt: "Investor & Project Launch Marketing | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Investor & Project Launch Marketing | RealLanding",
    description:
      "Launch campaigns for real estate investors, developers, and new construction projects. Pre-launch marketing, investor targeting, digital strategy, PR placement, and sales collateral.",
    images: ["https://reallanding.com/og-investor-project-launch.jpg"],
    site: "@RealLandingHQ",
  },
};


// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Investor & Project Launch Marketing",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "Launch campaigns for real estate investors, developers, and new construction projects. Pre-launch marketing, investor targeting, digital strategy, PR placement, and sales collateral.",
  "url": "https://reallanding.com/services/investor-project-launch",
  "category": "Real Estate Marketing"
};


const stats = [
  { value: "$850M+", label: "Project Value Launched" },
  { value: "340%", label: "Average Pre-Sale Rate" },
  { value: "45+", label: "Projects Launched" },
  { value: "12,000+", label: "Investors Reached" },
];

const services = [
  { icon: "🏗️", title: "Project Branding & Positioning", description: "Craft a compelling brand identity for your development — from naming and visual identity to market positioning that differentiates your project in a crowded landscape and commands premium pricing." },
  { icon: "🚀", title: "Pre-Launch Marketing Campaigns", description: "Build buzz and capture early interest before ground breaks. We create teaser websites, waitlists, VIP preview events, and drip sequences that generate a qualified buyer pipeline before launch day." },
  { icon: "🎯", title: "Investor Targeting & Outreach", description: "Precision-targeted campaigns that reach accredited investors, family offices, and high-net-worth individuals through LinkedIn, programmatic display, private databases, and exclusive event networks." },
  { icon: "📱", title: "Digital Launch Strategy", description: "Multi-channel digital blitz across paid social, Google Ads, email, retargeting, and landing pages — orchestrated for maximum impact during your critical launch window and sustained momentum after." },
  { icon: "📰", title: "PR & Media Placement", description: "Secure earned media coverage in real estate publications, business journals, local press, and industry blogs. We handle press releases, media kits, journalist relationships, and interview coordination." },
  { icon: "📊", title: "Sales Collateral & Presentations", description: "Investor decks, project brochures, virtual tours, renderings integration, floor plan sheets, and presentation materials that convey credibility and close deals in the boardroom or sales gallery." },
];

const steps = [
  { step: 1, title: "Market & Feasibility Analysis", description: "We research your target market, competitive landscape, buyer demographics, and pricing benchmarks to shape a launch strategy grounded in real data." },
  { step: 2, title: "Brand & Creative Development", description: "We build your project brand from the ground up — name, logo, visual identity, messaging framework, and a cohesive story that resonates with your ideal buyer or investor." },
  { step: 3, title: "Pre-Launch Pipeline Build", description: "Before you go live, we generate a waitlist of qualified prospects through teaser campaigns, VIP events, broker outreach, and strategic partnerships." },
  { step: 4, title: "Launch Execution", description: "Coordinated multi-channel campaign activation — paid ads, PR blitz, email sequences, social media, and events all firing in sync for maximum launch-day impact." },
  { step: 5, title: "Sustain & Scale", description: "Post-launch optimization keeps momentum going with retargeting, nurture sequences, progress updates, and phase-release campaigns until the project is fully absorbed." },
];

const benefits = [
  { title: "Accelerated Sales Velocity", desc: "Pre-sell 30–50% of units before public launch with strategic waitlist campaigns and VIP preview events that create urgency and exclusivity." },
  { title: "Qualified Investor Pipeline", desc: "Reach accredited investors and high-net-worth buyers through precision targeting — no wasted spend on unqualified audiences." },
  { title: "Market Differentiation", desc: "Stand out in competitive markets with a project brand and positioning strategy that commands attention and premium pricing." },
  { title: "Comprehensive Launch Assets", desc: "Every asset you need — from investor decks and brochures to virtual tours and websites — produced under one roof for brand consistency." },
  { title: "Media Exposure", desc: "Earned media placements in top-tier publications amplify your reach and lend third-party credibility that paid ads alone can&apos;t replicate." },
  { title: "Data-Driven Targeting", desc: "Every campaign dollar is backed by demographic, psychographic, and behavioral data to ensure your message reaches the right audience at the right time." },
];

const results = [
  { metric: "$850M+", label: "Total project value launched", period: "Across all client projects" },
  { metric: "340%", label: "Average pre-sale rate lift", period: "Compared to market average" },
  { metric: "72%", label: "Of units sold before completion", period: "Across launched developments" },
  { metric: "4.2×", label: "Average ROI on launch spend", period: "Within first 12 months" },
];

const testimonials = [
  { quote: "RealLanding managed the full marketing launch for our 120-unit waterfront condo project. We had 85% pre-sold before construction topped off. Their investor targeting was incredibly precise — every lead was qualified and serious. The branding they created positioned us as the premium option in the market.", author: "Jonathan Reeves", role: "Managing Partner, Apex Development Group, Miami FL" },
  { quote: "We hired RealLanding to launch a 40-acre master-planned community and they delivered beyond expectations. The pre-launch campaign generated a 1,200-person waitlist, and we sold out Phase 1 in just three weeks. Their media placements in the Wall Street Journal and local press gave us instant credibility.", author: "Catherine Liu", role: "VP of Marketing, Horizon Communities, Scottsdale AZ" },
];

const faqs = [
  { question: "How far in advance should we start marketing before launch?", answer: "Ideally, 4–6 months before your public launch date. This gives us time for market research, brand development, pre-launch pipeline building, and PR outreach. Shorter timelines are possible — we've executed successful launches in as little as 8 weeks — but earlier engagement means a stronger pipeline on launch day." },
  { question: "How much does a project launch campaign cost?", answer: "Launch marketing budgets typically range from $25,000 to $150,000+ depending on project size, market, and scope. This includes brand development, digital advertising, PR, collateral production, and campaign management. We'll recommend a budget during our initial strategy session based on your project's specific needs and goals." },
  { question: "What types of projects do you work with?", answer: "We've launched condominiums, townhome communities, single-family subdivisions, mixed-use developments, luxury estates, and commercial real estate projects. Whether it's a 10-unit boutique building or a 500-unit master-planned community, we tailor our approach to the project type, price point, and target audience." },
  { question: "What marketing channels do you use for launches?", answer: "Our launch strategy is multi-channel: paid social (Facebook, Instagram, LinkedIn), Google Ads, programmatic display, email marketing, PR & media placement, broker outreach, VIP events, direct mail, retargeting, and SEO. The channel mix is customized based on your target buyer or investor profile." },
  { question: "Can you help with investor-only projects that aren't selling to end-users?", answer: "Absolutely. A significant portion of our work involves capital raise campaigns, investor outreach, and fund marketing. We create investor decks, data rooms, targeted LinkedIn campaigns, and private event strategies to connect developers with accredited investors and institutional capital." },
  { question: "Do you offer ongoing marketing after the initial launch?", answer: "Yes. Most projects require sustained marketing through sell-out. We offer ongoing campaign management for phase releases, construction milestone updates, price adjustments, and close-out campaigns. Think of launch as the beginning — we stay engaged until the last unit is sold." },
];

const relatedServices = [
  { title: "Paid Advertising", href: "/services/paid-advertising", description: "Amplify your project launch with targeted PPC, social media ads, and programmatic campaigns that drive qualified traffic at scale." },
  { title: "Branding & Market Positioning", href: "/services/branding-market-positioning", description: "Build a powerful brand identity and competitive positioning strategy that commands premium pricing and buyer loyalty." },
  { title: "Video Marketing", href: "/services/video-marketing", description: "Bring your project to life with cinematic drone footage, virtual tours, investor sizzle reels, and construction progress videos." },
];

export default function InvestorProjectLaunchPage() {
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
            <span className="text-white font-medium">Investor &amp; Project Launch</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/20">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>
            Real Estate Project Launch Marketing
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Launch Your Real Estate Project<br className="hidden md:block" /> with Maximum Market Impact</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-10 leading-relaxed">Full-service launch campaigns for developers, investors, and new construction projects. From pre-launch buzz to sell-out — we build pipelines, position brands, and drive sales velocity.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Get Your Launch Strategy</Link>
            <Link href="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">See Case Studies</Link>
          </div>
          <p className="mt-6 text-green-200/70 text-sm">45+ projects launched with $850M+ in combined value</p>
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
          {["Luxury & Mid-Market Projects", "Pre-Construction Specialists", "Accredited Investor Networks", "Full-Service Launch Execution"].map((item, i) => (
            <span key={i} className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> {item}</span>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">End-to-End Project Launch Marketing</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Everything you need to take a real estate project from concept to sold out — branding, campaigns, investor outreach, PR, and sales collateral under one roof.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-green-200 hover:shadow-lg hover:shadow-green-100/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Launch Performance Metrics</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Real numbers from real projects our team has launched for developers and investors.</p>
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
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Why Launch with Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">The Competitive Edge Your Project Needs</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">In a crowded market, the quality of your launch marketing determines your project&apos;s trajectory. We make sure yours stands out.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">What Developers &amp; Investors Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
                <svg className="absolute top-6 right-8 w-12 h-12 text-green-100" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" /></svg>
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <svg key={j} className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}</div>
                <p className="text-gray-600 leading-relaxed mb-6 relative z-10">&ldquo;{t.quote}&rdquo;</p>
                <div><div className="font-bold text-gray-900">{t.author}</div><div className="text-green-600 text-sm">{t.role}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">From Concept to Sold Out in Five Phases</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A proven, repeatable framework that maximizes pre-sales, accelerates absorption, and delivers measurable ROI on every launch dollar.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Common Questions About Project Launch Marketing</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-100 hover:border-green-200 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-900 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 -mt-2"><p className="text-gray-500 leading-relaxed">{faq.answer}</p></div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Amplify Your Launch</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Launch Your Next Real Estate Project?</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed">Book a free launch strategy session. We&apos;ll analyze your project, market, and competition — then map out a campaign that maximizes pre-sales and accelerates absorption.</p>
          <Link href="/contact" className="inline-block bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Get Your Free Launch Strategy</Link>
          <p className="mt-6 text-green-200/60 text-sm">Includes a custom market analysis and launch timeline</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
