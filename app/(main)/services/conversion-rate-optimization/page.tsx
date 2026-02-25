import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { AnimatedSections } from "@/app/components/AnimateOnScroll";
import FAQAccordion from "@/app/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Conversion Rate Optimization for Real Estate | RealLanding",
  description:
    "A/B testing, landing page optimization, funnel analysis, UX improvements, and data-driven CRO strategies that turn more visitors into leads and clients.",
  openGraph: {
    title: "Conversion Rate Optimization for Real Estate | RealLanding",
    description:
      "A/B testing, landing page optimization, funnel analysis, UX improvements, and data-driven CRO strategies that turn more visitors into leads and clients.",
    url: "https://reallanding.com/services/conversion-rate-optimization",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-conversion-rate-optimization.jpg",
        width: 1200,
        height: 630,
        alt: "Conversion Rate Optimization for Real Estate | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversion Rate Optimization for Real Estate | RealLanding",
    description:
      "A/B testing, landing page optimization, funnel analysis, UX improvements, and data-driven CRO strategies that turn more visitors into leads and clients.",
    images: ["https://reallanding.com/og-conversion-rate-optimization.jpg"],
    site: "@RealLandingHQ",
  },
};


// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Conversion Rate Optimization",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "A/B testing, landing page optimization, funnel analysis, UX improvements, and data-driven CRO strategies that turn more visitors into leads and clients.",
  "url": "https://reallanding.com/services/conversion-rate-optimization",
  "category": "Real Estate Marketing"
};


const stats = [
  { value: "147%", label: "Average Conversion Rate Increase" },
  { value: "2,400+", label: "A/B Tests Run for Clients" },
  { value: "$3.2M", label: "Additional Revenue Generated" },
  { value: "34%", label: "Lower Cost-Per-Lead" },
];

const services = [
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>), title: "A/B & Multivariate Testing", description: "Scientific testing of headlines, CTAs, layouts, images, forms, and copy to identify what converts best — eliminating guesswork with statistical confidence." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>), title: "Landing Page Optimization", description: "Design, test, and optimize high-converting landing pages for listings, lead magnets, home valuations, and buyer/seller funnels that maximize form submissions." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M21.015 4.356v4.992" /></svg>), title: "Funnel Analysis & Optimization", description: "Map and analyze every step of your conversion funnel to identify where leads drop off — then implement targeted fixes to plug the leaks." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>), title: "UX & Mobile Optimization", description: "Improve site speed, mobile responsiveness, navigation, and user flow to reduce friction and make it effortless for visitors to become leads." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>), title: "Form & CTA Optimization", description: "Optimize form fields, button copy, placement, and design to dramatically increase submission rates without sacrificing lead quality." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" /></svg>), title: "Heatmap & Behavior Analysis", description: "Use heatmaps, session recordings, and scroll tracking to understand exactly how visitors interact with your pages — then optimize based on real behavior." },
];

const steps = [
  { step: 1, title: "Audit & Analysis", description: "Comprehensive review of your website, funnels, analytics, and user behavior to identify the highest-impact optimization opportunities." },
  { step: 2, title: "Hypothesis Development", description: "Data-informed hypotheses about what changes will improve conversions, prioritized by potential impact and implementation effort." },
  { step: 3, title: "Test Design & Build", description: "Design and build test variations — new layouts, copy, forms, and CTAs — using best practices from 2,400+ real estate tests." },
  { step: 4, title: "Run & Monitor Tests", description: "Launch A/B tests with proper traffic allocation, monitor for statistical significance, and ensure clean data collection." },
  { step: 5, title: "Analyze & Implement", description: "Winning variations are permanently implemented, results are documented, and insights feed the next round of testing for continuous improvement." },
];

const benefits = [
  { title: "More Leads, Same Traffic", desc: "CRO extracts more value from your existing traffic — no need to spend more on ads when you can convert more of what you already have." },
  { title: "Lower Cost-Per-Lead", desc: "Higher conversion rates mean lower CPL across all channels. A 50% conversion improvement effectively cuts your ad costs in half." },
  { title: "Data-Driven Decisions", desc: "No more redesigning based on opinions. A/B testing gives you statistical proof of what works before committing to changes." },
  { title: "Compound Growth Effect", desc: "Every conversion improvement compounds. A 10% lift this month creates permanent value that benefits every future visitor." },
  { title: "Better User Experience", desc: "CRO improvements make your site easier to use, faster to load, and more intuitive — which improves brand perception too." },
  { title: "Higher Quality Leads", desc: "Optimized forms and funnels don't just produce more leads — they produce better-qualified leads by improving question flow and intent capture." },
];

const results = [
  { metric: "147%", label: "Average conversion lift", period: "Across all client campaigns" },
  { metric: "34%", label: "Lower cost-per-lead", period: "Without increasing ad spend" },
  { metric: "$3.2M", label: "Revenue attributed to CRO", period: "For our clients last year" },
  { metric: "89%", label: "Of tests produce winners", period: "Due to data-driven hypotheses" },
];

const testimonials = [
  { quote: "RealLanding redesigned our home valuation landing page and ran a series of A/B tests. Our conversion rate went from 3.2% to 11.8%. Same traffic, 3.7× more leads. The ROI on CRO is insane compared to just spending more on ads.", author: "Sarah W.", role: "Team Lead, Tampa FL" },
  { quote: "I had no idea how much revenue we were leaving on the table. The funnel analysis found that 62% of our mobile users were abandoning at step 2. After optimization, our mobile conversions tripled. It was the highest-ROI project we've done.", author: "Steve B.", role: "Broker/Owner, Portland OR" },
];

const faqs = [
  { question: "What's the difference between CRO and web design?", answer: "Web design creates the initial website. CRO optimizes it for performance using scientific testing. A beautiful website that doesn't convert is just an expensive brochure. CRO ensures your site actually turns visitors into leads and clients through data-driven improvements." },
  { question: "How long does it take to see CRO results?", answer: "Individual tests typically reach statistical significance in 2–4 weeks depending on traffic volume. Most clients see measurable conversion improvements within the first month, with compounding gains over 3–6 months as we run sequential tests." },
  { question: "How much traffic do I need for A/B testing?", answer: "Generally, you need at least 500–1,000 visitors per month to the pages being tested. If traffic is lower, we focus on high-impact changes based on heatmap data, UX best practices, and insights from our database of 2,400+ real estate tests." },
  { question: "Will CRO changes affect my SEO?", answer: "We're very careful about this. All CRO changes are implemented using best practices that preserve (and often improve) SEO. We avoid any changes that would negatively impact search rankings, page speed, or content quality." },
  { question: "What tools do you use for CRO?", answer: "We use industry-leading tools including Google Optimize, VWO, Hotjar, Microsoft Clarity, Google Analytics 4, and custom tracking setups. The specific tools depend on your tech stack and testing needs." },
  { question: "How is CRO priced?", answer: "CRO engagements start at $2,000/month for ongoing testing and optimization. One-time conversion audits with prioritized recommendations start at $1,500. Pricing scales based on traffic volume, number of funnels, and testing velocity." },
];

const relatedServices = [
  { title: "Paid Advertising", href: "/services/paid-advertising", description: "Maximize ROI on your ad spend by ensuring every click lands on a page optimized to convert." },
  { title: "Website Design & Development", href: "/services/website-design-development", description: "Build a high-converting website from the ground up with CRO principles baked into the design." },
  { title: "Analytics & Performance", href: "/services/analytics-performance", description: "Track and measure every optimization with comprehensive analytics and attribution dashboards." },
];

export default function CROPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        key="structured-data"
      />


      <AnimatedSections>
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
            <span className="text-white font-medium">Conversion Rate Optimization</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/20">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5-7.5L16.5 3m0 0L12 7.5m4.5-4.5v13.5" /></svg>
            Optimization &amp; Testing
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Turn More Visitors Into<br className="hidden md:block" /> Real Estate Leads &amp; Clients</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-10 leading-relaxed">A/B testing, landing page optimization, and funnel analysis that increase your conversion rates — generating more leads without spending more on traffic.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Get Your Free CRO Audit</Link>
            <Link href="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">See Case Studies</Link>
          </div>
          <p className="mt-6 text-green-200/70 text-sm">2,400+ A/B tests run for real estate clients</p>
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
          {["Statistical Rigor", "Real Estate–Specific Tests", "Heatmap & Behavior Analysis", "Continuous Optimization"].map((item, i) => (
            <span key={i} className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> {item}</span>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Scientific Optimization for Real Estate Websites</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">From A/B testing to UX improvements, every optimization is backed by data and designed to increase your bottom line.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">The Power of Conversion Optimization</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Small conversion improvements create massive bottom-line impact when compounded across all your traffic sources.</p>
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
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Why CRO</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Get More From Every Dollar You&apos;ve Already Spent</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">CRO is the highest-ROI marketing investment because it multiplies the value of all your existing traffic and campaigns.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">The Scientific CRO Process</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A rigorous, repeatable process that turns conversion optimization into a predictable growth engine for your real estate business.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Common Questions About CRO</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Related Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Maximize Your CRO Results</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Convert More Visitors Into Leads?</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed">Book a free conversion audit and discover exactly where your website is leaking leads — and how to fix it for more closings with the same traffic.</p>
          <Link href="/contact" className="inline-block bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Get Your Free CRO Audit</Link>
          <p className="mt-6 text-green-200/60 text-sm">Includes heatmap analysis and prioritized optimization roadmap</p>
        </div>
      </section>

      </AnimatedSections>
      <Footer />
    </div>
  );
}
