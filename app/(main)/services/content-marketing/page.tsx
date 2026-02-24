import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Content Marketing for Real Estate | RealLanding",
  description:
    "Attract qualified buyers, sellers, and investors with strategic real estate content — blog posts, market reports, neighborhood guides, and more that build authority and generate organic leads.",
  openGraph: {
    title: "Content Marketing for Real Estate | RealLanding",
    description:
      "Attract qualified buyers, sellers, and investors with strategic real estate content — blog posts, market reports, neighborhood guides, and more that build authority and generate organic leads.",
    url: "https://reallanding.com/services/content-marketing",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-content-marketing.jpg",
        width: 1200,
        height: 630,
        alt: "Content Marketing for Real Estate | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Marketing for Real Estate | RealLanding",
    description:
      "Attract qualified buyers, sellers, and investors with strategic real estate content — blog posts, market reports, neighborhood guides, and more that build authority and generate organic leads.",
    images: ["https://reallanding.com/og-content-marketing.jpg"],
    site: "@RealLandingHQ",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Content Marketing",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "Attract qualified buyers, sellers, and investors with strategic real estate content — blog posts, market reports, neighborhood guides, and more that build authority and generate organic leads.",
  "url": "https://reallanding.com/services/content-marketing",
  "category": "Real Estate Marketing"
};

const stats = [
  { value: "3×", label: "More Leads Than Outbound Marketing" },
  { value: "62%", label: "Lower Cost Per Lead vs Paid Ads" },
  { value: "70%", label: "Of Consumers Prefer Articles Over Ads" },
  { value: "6×", label: "Higher Conversion for Content Adopters" },
];

const services = [
  { icon: "✍️", title: "Blog Writing & SEO Content", description: "Keyword-optimized blog posts that rank on Google and attract organic traffic from buyers, sellers, and investors actively searching in your market. Every article targets high-intent keywords with conversion-optimized CTAs." },
  { icon: "📊", title: "Market Reports & Data Guides", description: "In-depth monthly and quarterly market analyses, pricing trends, absorption rates, and investment outlooks that position you as the definitive data source in your local real estate market." },
  { icon: "📧", title: "Email Newsletter Content", description: "Engaging weekly and monthly newsletters that keep your database warm, share exclusive market insights, highlight new listings, and drive repeat visits and referrals from past clients." },
  { icon: "🏆", title: "Case Studies & Success Stories", description: "Compelling client success stories, deal breakdowns, and before-and-after transformations that build social proof and show prospects exactly what partnering with you looks like." },
  { icon: "🏘️", title: "Neighborhood & Area Guides", description: "Hyper-local content covering schools, restaurants, commute times, lifestyle amenities, and market data that captures long-tail search traffic and positions you as the neighborhood expert." },
  { icon: "📹", title: "Content Repurposing & Distribution", description: "Transform every long-form piece into 10+ assets — social posts, carousels, email snippets, video scripts, infographics, and podcast outlines — maximizing ROI from every article." },
];

const steps = [
  { step: 1, title: "Research & Discovery", description: "We analyze your market, audit competitor content, conduct keyword research, and interview your team to identify the highest-impact content opportunities." },
  { step: 2, title: "Strategy & Calendar", description: "A data-driven content calendar is built around your goals, seasonal trends, listing inventory, and the exact topics your ideal clients search for." },
  { step: 3, title: "Create & Optimize", description: "Expert real estate writers produce high-quality, SEO-optimized content tailored to your brand voice, with custom graphics and conversion elements." },
  { step: 4, title: "Publish & Distribute", description: "Content is published on your site, shared across email and social channels, submitted to industry sites, and repurposed for maximum visibility." },
  { step: 5, title: "Measure & Iterate", description: "We track traffic, engagement, rankings, and lead generation — refining strategy monthly based on real performance data and market shifts." },
];

const benefits = [
  { title: "Builds Lasting Authority", desc: "Become the trusted voice in your market. Consistent, expert content positions you as the go-to resource buyers and sellers rely on." },
  { title: "Compounding Organic Leads", desc: "Every article is an asset that generates traffic and leads for years — reducing your dependence on paid advertising over time." },
  { title: "Nurtures the Full Funnel", desc: "From awareness-stage neighborhood guides to decision-stage case studies, content moves prospects through every stage of their journey." },
  { title: "Boosts Search Rankings", desc: "Fresh, keyword-rich content signals relevance to Google, improving your entire site's search visibility and domain authority." },
  { title: "Creates Shareable Assets", desc: "Market reports and guides get shared in community groups, forwarded to friends, and referenced by local media — expanding your reach organically." },
  { title: "Reduces Cost Per Acquisition", desc: "Content marketing costs 62% less than traditional marketing while generating 3× more leads — the most cost-effective long-term strategy." },
];

const results = [
  { metric: "287%", label: "Organic traffic growth", period: "Within 6 months" },
  { metric: "156", label: "Leads from blog content", period: "Per month, on average" },
  { metric: "42%", label: "Email open rates", period: "vs 21% industry average" },
  { metric: "3.2×", label: "Content ROI vs ad spend", period: "Over 12-month period" },
];

const testimonials = [
  { quote: "RealLanding's content strategy completely transformed our online presence. Our neighborhood guides now rank #1 in Google and bring in 80+ leads every month — without spending a dollar on ads.", author: "Jennifer T.", role: "Real Estate Team Leader, Denver CO" },
  { quote: "The market reports they create are so good that local news outlets started citing us as a source. That kind of authority is priceless for our brand and has led to multiple referral partnerships.", author: "Marcus R.", role: "Brokerage Owner, Charlotte NC" },
];

const faqs = [
  { question: "How often should we publish new content?", answer: "For most real estate businesses, 2–4 high-quality blog posts per month is the sweet spot. Consistency matters more than volume — a steady cadence of valuable content builds authority and search rankings faster than sporadic publishing. We'll recommend the right frequency based on your goals and competition." },
  { question: "What topics work best for real estate content marketing?", answer: "Neighborhood guides, market reports, homebuyer and seller tips, investment analysis, and local lifestyle content consistently perform best. We research your specific market to identify the topics and keywords that will drive the most qualified traffic and leads." },
  { question: "Who writes the content?", answer: "Our team of experienced content writers specializes in real estate. Every piece is researched, written, and edited by professionals who understand the industry — then reviewed by your dedicated strategist to ensure it aligns with your brand voice and market expertise." },
  { question: "How do you ensure content actually ranks on Google?", answer: "Every piece follows our proprietary SEO framework: keyword research, search intent matching, on-page optimization, internal linking strategy, and schema markup. We also build topical clusters that establish your site as an authority on specific real estate topics." },
  { question: "How do you measure content marketing success?", answer: "We track organic traffic growth, keyword rankings, time on page, lead form submissions, email signups, social shares, and content-attributed conversions. You'll receive monthly reports showing exactly how your content is performing and driving business results." },
  { question: "How long before content marketing delivers results?", answer: "You'll see engagement improvements immediately, traffic growth within 2–3 months, and significant lead generation by month 4–6. Content marketing is a compounding strategy — the longer you invest, the greater the returns as your content library and authority grow." },
];

const relatedServices = [
  { title: "SEO", href: "/services/seo", description: "Amplify your content's reach with technical and on-page SEO that ensures every article ranks for the right real estate keywords." },
  { title: "Social Media Marketing", href: "/services/social-media-marketing", description: "Extend your content's lifespan by repurposing blog posts into engaging social media content that grows your following and drives engagement." },
  { title: "Email Marketing", href: "/services/email-marketing", description: "Deliver your best content directly to prospects' inboxes with automated email campaigns that nurture leads from first touch to closing." },
];

export default function ContentMarketingPage() {
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
      <section className="relative overflow-hidden bg-gradient-to-br from-green-500 via-emerald-600 to-green-800 pt-32 pb-28">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-green-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-green-400/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex justify-center mb-6 text-green-200 text-sm">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/#services" className="hover:text-white transition">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Content Marketing</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/20">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
            Content Marketing for Real Estate
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Turn Expert Content Into Your<br className="hidden md:block" /> #1 Lead Generation Engine</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-10 leading-relaxed">Attract, educate, and convert your ideal real estate clients with strategic content that builds authority, drives organic traffic, and generates leads on autopilot — month after month.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Start Your Content Strategy</Link>
            <Link href="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">See Our Work</Link>
          </div>
          <p className="mt-6 text-green-200/70 text-sm">Strategic content for 150+ real estate brands nationwide</p>
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
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> Real Estate Content Experts</span>
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> SEO-Optimized Writing</span>
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> Multi-Format Distribution</span>
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> Performance Reporting</span>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Content That Attracts & Converts Real Estate Leads</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">From SEO blog posts to market reports and neighborhood guides — every piece of content is strategically designed to rank, engage, and generate business.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Content That Delivers Measurable Results</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">These aren&apos;t vanity metrics — they&apos;re real business outcomes from our content marketing strategies for real estate clients.</p>
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
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Why Content Marketing</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">The Compounding Growth Strategy for Real Estate Brands</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Great content works for you 24/7 — attracting organic traffic, building trust, and nurturing leads through every stage of the buying and selling journey without increasing your ad budget.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">From Research to Results in Five Steps</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A systematic approach to content that ensures every piece serves a strategic purpose and delivers measurable business outcomes.</p>
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

      {/* Content Types Showcase */}
      <section className="bg-gray-50 border-y border-gray-100 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">What You Get</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">A Content Engine Built for Real Estate</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-50 rounded-2xl p-8 border-2 border-green-200 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-bold px-4 py-1 rounded-full">MONTHLY DELIVERABLES</div>
              <h3 className="font-bold text-green-700 text-lg mb-6">What&apos;s Included</h3>
              <ul className="space-y-3">
                {["2–4 SEO-optimized blog posts (1,500+ words)", "1 monthly market report or data guide", "4 neighborhood/area content pieces", "Email newsletter content and templates", "Social media content repurposing (10+ assets)", "Monthly performance report with insights"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="font-bold text-gray-400 text-lg mb-6">DIY Content Approach</h3>
              <ul className="space-y-3">
                {["Inconsistent posting schedule", "No keyword research or SEO optimization", "Generic content that doesn't rank", "No distribution or repurposing strategy", "No performance tracking or analytics", "Hours spent writing instead of selling"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Common Questions About Content Marketing</h2>
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
      <section className="bg-gray-50 border-t border-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Related Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Amplify Your Content Results</h2>
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
      <section className="relative overflow-hidden bg-gradient-to-br from-green-500 via-emerald-600 to-green-800 py-24">
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-green-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-green-400/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Turn Content Into Your Biggest Lead Source?</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed">Book a free content strategy session and discover how strategic content can build your authority, grow organic traffic, and generate leads on autopilot.</p>
          <Link href="/contact" className="inline-block bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Schedule Your Free Strategy Call</Link>
          <p className="mt-6 text-green-200/60 text-sm">Free content audit included — see exactly where your biggest opportunities are</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
