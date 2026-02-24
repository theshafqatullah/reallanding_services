import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Analytics & Performance Tracking for Real Estate | RealLanding",
  description:
    "Custom KPI dashboards, ROI reporting, marketing attribution, and data-driven insights that help real estate professionals make smarter decisions and maximize returns.",
  openGraph: {
    title: "Analytics & Performance Tracking for Real Estate | RealLanding",
    description:
      "Custom KPI dashboards, ROI reporting, marketing attribution, and data-driven insights that help real estate professionals make smarter decisions and maximize returns.",
    url: "https://reallanding.com/services/analytics-performance",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-analytics-performance.jpg",
        width: 1200,
        height: 630,
        alt: "Analytics & Performance Tracking for Real Estate | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Analytics & Performance Tracking for Real Estate | RealLanding",
    description:
      "Custom KPI dashboards, ROI reporting, marketing attribution, and data-driven insights that help real estate professionals make smarter decisions and maximize returns.",
    images: ["https://reallanding.com/og-analytics-performance.jpg"],
    site: "@RealLandingHQ",
  },
};


// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Analytics & Performance Tracking",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "Custom KPI dashboards, ROI reporting, marketing attribution, and data-driven insights that help real estate professionals make smarter decisions and maximize returns.",
  "url": "https://reallanding.com/services/analytics-performance",
  "category": "Real Estate Marketing"
};


const stats = [
  { value: "42%", label: "Average ROI Improvement" },
  { value: "150+", label: "KPIs Tracked Per Client" },
  { value: "Real-Time", label: "Dashboard Updates" },
  { value: "100%", label: "Marketing Attribution Clarity" },
];

const services = [
  { icon: "📊", title: "Custom KPI Dashboards", description: "Live dashboards built for real estate that track lead volume, cost-per-lead, conversion rates, deal velocity, and revenue — organized by channel, campaign, and agent." },
  { icon: "💰", title: "ROI & Revenue Attribution", description: "Track every dollar from first click to closed deal. Know exactly which campaigns, channels, and keywords produce revenue — not just leads." },
  { icon: "📈", title: "Marketing Performance Reports", description: "Weekly and monthly reports that go beyond vanity metrics — actionable insights on what's working, what's not, and where to reallocate your budget for maximum ROI." },
  { icon: "🔍", title: "Conversion Funnel Analysis", description: "Identify exactly where leads drop off in your funnel. We pinpoint friction points and recommend data-backed optimizations to improve every stage." },
  { icon: "🏆", title: "Competitive Benchmarking", description: "See how your performance compares to market averages and top competitors. Benchmarks for CPL, conversion rates, listing views, and market share." },
  { icon: "🎯", title: "Predictive Forecasting", description: "Data models that predict lead volume, revenue trends, seasonal patterns, and campaign performance — so you can plan budgets and staffing with confidence." },
];

const steps = [
  { step: 1, title: "Data Audit", description: "We audit your current tracking setup, identify data gaps, and map every touchpoint in your marketing and sales funnel." },
  { step: 2, title: "Tracking Setup", description: "Implement proper tracking pixels, UTM structures, CRM integrations, call tracking, and conversion events across all channels." },
  { step: 3, title: "Dashboard Build", description: "Custom dashboards are designed and built to display the KPIs that matter most to your business, updated in real time." },
  { step: 4, title: "Analysis & Insights", description: "We analyze the data, identify trends, surface opportunities, and deliver actionable recommendations with every report." },
  { step: 5, title: "Optimize & Scale", description: "Data insights are applied to optimize campaigns, reallocate budget, and scale what works — creating a continuous improvement cycle." },
];

const benefits = [
  { title: "Know Your True ROI", desc: "No more guessing which marketing channels are profitable. See exact revenue attributed to every campaign and dollar spent." },
  { title: "Eliminate Wasted Spend", desc: "Data reveals underperforming campaigns immediately so you can cut waste and redirect budget to high-performing channels." },
  { title: "Make Faster Decisions", desc: "Real-time dashboards give you instant visibility into performance, so you can act on opportunities and issues in hours — not weeks." },
  { title: "Unify All Your Data", desc: "We connect your website, CRM, ad platforms, social media, and MLS data into a single source of truth." },
  { title: "Prove Marketing Value", desc: "Clear attribution reporting lets you demonstrate the tangible business impact of every marketing investment to stakeholders." },
  { title: "Forecast With Confidence", desc: "Predictive models let you plan budgets, set realistic targets, and anticipate market shifts before they happen." },
];

const results = [
  { metric: "42%", label: "Average ROI improvement", period: "After implementing analytics" },
  { metric: "$340K", label: "Average budget waste identified", period: "In first audit per client" },
  { metric: "3.1×", label: "Better lead quality scores", period: "With data-driven targeting" },
  { metric: "18 hrs", label: "Saved monthly on reporting", period: "Through automated dashboards" },
];

const testimonials = [
  { quote: "Before RealLanding, I had no idea which of my marketing channels was actually producing closings. Now I see exactly where every dollar goes and which campaigns bring real ROI. We've cut $4,000/month in wasted spend.", author: "Jennifer M.", role: "Team Lead, San Diego CA" },
  { quote: "The custom dashboards are incredible. I check them every morning and my whole team has visibility into our pipeline, lead quality, and campaign performance. It's completely changed how we make marketing decisions.", author: "Robert K.", role: "Broker/Owner, Denver CO" },
];

const faqs = [
  { question: "What tools and platforms do you integrate with?", answer: "We integrate with all major platforms: Google Analytics, Google Ads, Meta Ads, CRMs (Follow Up Boss, KvCORE, Sierra, HubSpot, Salesforce), MLS systems, call tracking (CallRail, CallTrackingMetrics), email platforms, and more. If it has data, we can connect it." },
  { question: "How long does it take to set up analytics?", answer: "Basic tracking and dashboard setup takes 1–2 weeks. Comprehensive multi-channel attribution with CRM integration and custom dashboards typically takes 3–4 weeks. You'll start seeing actionable data within the first week." },
  { question: "Do I need to change my existing tools?", answer: "No — we work with your existing tech stack. We add tracking layers, connect data sources, and build dashboards on top of what you already use. No need to switch platforms or learn new tools." },
  { question: "What makes this different from Google Analytics?", answer: "Google Analytics tracks website behavior. We build complete marketing-to-revenue attribution that connects ad spend → leads → showings → closings → revenue. Plus custom dashboards, automated reports, and strategic recommendations — not just raw data." },
  { question: "How is analytics consulting priced?", answer: "Setup fees range from $2,000–$5,000 depending on complexity. Monthly analytics management and reporting starts at $1,000/month. Enterprise teams with multiple offices and complex attribution needs receive custom quotes." },
  { question: "Can I see a sample dashboard before committing?", answer: "Yes — we offer a free analytics audit that includes a sample dashboard mockup based on your current data sources. This gives you a clear picture of what you would see before making any commitment." },
];

const relatedServices = [
  { title: "Paid Advertising", href: "/services/paid-advertising", description: "Maximize ad performance with data-driven campaign management and continuous optimization based on real analytics." },
  { title: "Conversion Rate Optimization", href: "/services/conversion-rate-optimization", description: "Use analytics insights to A/B test and optimize your funnels for higher conversion at every stage." },
  { title: "Strategic Growth Planning", href: "/services/strategic-growth-planning", description: "Build your long-term growth strategy on a solid foundation of data, forecasting, and market intelligence." },
];

export default function AnalyticsPerformancePage() {
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
            <span className="text-white font-medium">Analytics &amp; Performance</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/20">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            Data &amp; Intelligence
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Data-Driven Decisions That<br className="hidden md:block" /> Maximize Your Real Estate ROI</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-10 leading-relaxed">Custom dashboards, revenue attribution, and actionable analytics that show you exactly what&apos;s working — so every marketing dollar drives real results.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Get Your Free Analytics Audit</Link>
            <Link href="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">See a Sample Dashboard</Link>
          </div>
          <p className="mt-6 text-green-200/70 text-sm">Trusted by 300+ real estate teams to make smarter decisions</p>
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
          {["Google Analytics Certified", "Full-Funnel Attribution", "Real-Time Dashboards", "Automated Reports"].map((item, i) => (
            <span key={i} className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> {item}</span>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Analytics That Drive Smarter Real Estate Decisions</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">From campaign dashboards to predictive forecasting, we turn your raw data into clear, actionable intelligence that grows your business.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">The Impact of Data-Driven Marketing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">When you can see exactly what works, every decision gets better — and so do your results.</p>
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
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Why Analytics</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Stop Guessing, Start Growing</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Most real estate teams make marketing decisions based on gut feel. Analytics lets you make them based on facts — and the results speak for themselves.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">From Data Chaos to Crystal Clarity</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A proven five-step process that transforms scattered data into a powerful decision-making engine for your real estate business.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Common Questions About Analytics</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Amplify Your Analytics</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to See What Your Data Is Really Telling You?</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed">Book a free analytics audit and discover where your marketing budget is being wasted — and where it should be invested for maximum ROI.</p>
          <Link href="/contact" className="inline-block bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Get Your Free Analytics Audit</Link>
          <p className="mt-6 text-green-200/60 text-sm">Includes a custom dashboard mockup and data gap analysis</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
