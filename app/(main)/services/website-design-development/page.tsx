import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Website Design & Development for Real Estate | RealLanding",
  description:
    "Custom real estate websites with IDX integration, lead capture, SEO optimization, and stunning design. Mobile-first, fast-loading sites built to convert visitors into clients.",
  openGraph: {
    title: "Website Design & Development for Real Estate | RealLanding",
    description:
      "Custom real estate websites with IDX integration, lead capture, SEO optimization, and stunning design. Mobile-first, fast-loading sites built to convert visitors into clients.",
    url: "https://reallanding.com/services/website-design-development",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-website-design-development.jpg",
        width: 1200,
        height: 630,
        alt: "Website Design & Development for Real Estate | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design & Development for Real Estate | RealLanding",
    description:
      "Custom real estate websites with IDX integration, lead capture, SEO optimization, and stunning design. Mobile-first, fast-loading sites built to convert visitors into clients.",
    images: ["https://reallanding.com/og-website-design-development.jpg"],
    site: "@RealLandingHQ",
  },
};


// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Website Design & Development",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "Custom real estate websites with IDX integration, lead capture, SEO optimization, and stunning design. Mobile-first, fast-loading sites built to convert visitors into clients.",
  "url": "https://reallanding.com/services/website-design-development",
  "category": "Real Estate Marketing"
};


const stats = [
  { value: "600+", label: "Websites Launched" },
  { value: "4.2s→1.8s", label: "Average Load Time" },
  { value: "340%", label: "More Leads vs Templates" },
  { value: "99.9%", label: "Uptime Guaranteed" },
];

const services = [
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>), title: "Custom Website Design & UX", description: "Bespoke, conversion-optimized designs built from scratch for your brand — not cookie-cutter templates. Every layout, color, and interaction is crafted to guide visitors toward contacting you, registering for listings, or scheduling a showing." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" /></svg>), title: "IDX & MLS Integration", description: "Seamless IDX property search integrated directly into your site so buyers can browse active listings, save favorites, and set up alerts — all while you capture their information automatically. We work with all major IDX providers and MLS boards." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" /></svg>), title: "Lead Capture & CRO", description: "Strategically placed lead capture forms, home valuation widgets, property alerts, and gated content — all A/B tested and optimized for maximum conversion. Every page is designed with a clear call-to-action that turns anonymous visitors into identifiable leads." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>), title: "Mobile-First Development", description: "Over 65% of real estate searches happen on mobile. We build mobile-first, responsive websites that load fast, look stunning, and convert on every screen size — from iPhone to ultrawide desktop monitors." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>), title: "CMS & Content Management", description: "An intuitive content management system that lets you update listings, publish blog posts, add testimonials, and edit pages without touching code. We typically build on WordPress or Next.js depending on your needs and scale." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>), title: "Maintenance & Hosting", description: "Premium managed hosting with 99.9% uptime, daily backups, SSL certificates, security monitoring, plugin updates, and performance optimization. We keep your site fast, secure, and running flawlessly so you can focus on selling homes." },
];

const steps = [
  { step: 1, title: "Discovery & Planning", description: "We learn your brand, goals, target audience, and competitive landscape. We audit your current site (if applicable), define the sitemap, and create a detailed project brief and timeline." },
  { step: 2, title: "Design & Prototyping", description: "Our designers create wireframes and high-fidelity mockups for desktop and mobile. You review and approve every page before a single line of code is written — ensuring the final product matches your vision exactly." },
  { step: 3, title: "Development & Integration", description: "We build your site with clean, semantic code, set up IDX/MLS integration, connect your CRM, implement lead capture forms, and optimize every page for speed and SEO performance." },
  { step: 4, title: "Testing & Launch", description: "Rigorous QA testing across devices (iPhone, Android, tablets, desktops), browsers (Chrome, Safari, Firefox, Edge), and screen sizes. We test forms, IDX search, page speed, and SEO before going live." },
  { step: 5, title: "Optimization & Support", description: "Post-launch, we monitor performance, run A/B tests on key conversion pages, implement analytics, and provide ongoing maintenance and support to ensure your site keeps improving." },
];

const benefits = [
  { title: "Built for Conversion", desc: "Every design decision is made to increase lead capture — from strategic CTA placement and form design to page flow, trust signals, and micro-interactions that guide visitors toward action." },
  { title: "Lightning-Fast Performance", desc: "We optimize Core Web Vitals, compress images, leverage CDNs, and write efficient code to deliver sub-2-second load times — because every extra second costs you 7% in conversions." },
  { title: "SEO-Ready Architecture", desc: "Proper heading hierarchy, schema markup, XML sitemaps, optimized meta tags, clean URLs, and mobile-first indexing — your site is built to rank from day one, not retrofitted later." },
  { title: "IDX That Actually Converts", desc: "Unlike generic IDX plugins that look bolted on, our integrations are seamlessly designed into your site&apos;s UX — making property search feel native and capturing leads at every interaction point." },
  { title: "Own Your Platform", desc: "You own your website, your domain, your code, and your data — nothing is locked behind a proprietary platform. If you ever leave (you won&apos;t), you take everything with you." },
  { title: "Ongoing Evolution", desc: "Your website isn&apos;t a one-time project — it&apos;s a living asset. We continuously optimize, A/B test, and enhance based on real user data to ensure it performs better every quarter." },
];

const results = [
  { metric: "600+", label: "Real estate websites launched", period: "For agents, teams & brokerages" },
  { metric: "340%", label: "More leads than template sites", period: "Average across client portfolio" },
  { metric: "1.8s", label: "Average page load time", period: "Down from 4.2s industry avg" },
  { metric: "4.7%", label: "Average site conversion rate", period: "vs 0.5–1% industry average" },
];

const testimonials = [
  { quote: "Our old template site generated maybe 5 leads a month and looked like every other agent&apos;s site in town. RealLanding built us a custom site with integrated IDX, home valuations, and neighborhood guides — we now get 40+ leads per month and our clients constantly compliment how professional it looks. The site paid for itself in the first closing.", author: "Jessica Tran", role: "Realtor, The Tran Team, Phoenix AZ" },
  { quote: "We needed a site that could handle 15,000+ active listings from three MLS boards, support 60 agents, and still load fast on mobile. RealLanding delivered — and the lead capture system they built has become our single biggest source of buyer leads. Our agents actually want to drive traffic to our site now instead of Zillow.", author: "Robert Castellano", role: "Managing Broker, Castellano & Associates, Chicago IL" },
];

const faqs = [
  { question: "How long does it take to build a real estate website?", answer: "A typical custom real estate website takes 6–10 weeks from kickoff to launch. Simple agent sites may be faster (4–6 weeks), while large brokerage sites with IDX integration and multiple agent profiles can take 10–14 weeks. We'll provide a detailed timeline during discovery." },
  { question: "How much does a custom real estate website cost?", answer: "Our custom real estate websites range from $5,000–$15,000 for agent and team sites, and $15,000–$40,000+ for brokerage and enterprise sites with advanced IDX, agent management, and custom functionality. Monthly maintenance and hosting plans start at $150/month." },
  { question: "Which IDX providers do you work with?", answer: "We integrate with all major IDX providers including iHomefinder, IDX Broker, Showcase IDX, and custom RETS/RESO Web API feeds. We'll recommend the best option based on your MLS board, budget, and feature requirements. We also build custom property search experiences using direct MLS data feeds." },
  { question: "Do you provide hosting and maintenance?", answer: "Yes — every site includes our managed hosting package with 99.9% uptime, daily backups, SSL, security monitoring, WordPress core and plugin updates, and monthly performance reports. We also provide a support ticket system for content updates and technical issues." },
  { question: "Can I update content and add blog posts myself?", answer: "Absolutely. Every site includes an intuitive CMS (content management system) with a visual editor for publishing blog posts, updating pages, adding testimonials, and managing listings. We provide training and documentation so you or your team can make updates without any technical knowledge." },
  { question: "Is SEO included in the website build?", answer: "Yes — every site is built with on-page SEO best practices including proper heading structure, meta tags, schema markup, image optimization, XML sitemaps, and mobile-first responsive design. For ongoing SEO campaigns (link building, content strategy, keyword targeting), see our dedicated SEO service." },
];

const relatedServices = [
  { title: "SEO", href: "/services/seo", description: "Drive organic traffic to your new website with real estate SEO strategies that rank your listings and neighborhood pages on Google." },
  { title: "Conversion Rate Optimization", href: "/services/conversion-rate-optimization", description: "Maximize the ROI of your website traffic with data-driven A/B testing, UX improvements, and lead funnel optimization." },
  { title: "Branding & Market Positioning", href: "/services/branding-market-positioning", description: "Pair your new website with a cohesive brand identity that differentiates you and builds trust with buyers and sellers." },
];

export default function WebsiteDesignDevelopmentPage() {
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
            <span className="text-white font-medium">Website Design &amp; Development</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/20">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>
            Real Estate Website Design &amp; Development
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Custom Real Estate Websites<br className="hidden md:block" /> That Convert Visitors into Clients</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-10 leading-relaxed">Beautiful, blazing-fast real estate websites with IDX integration, lead capture, and SEO optimization — custom-built to showcase your brand and generate leads 24/7.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Get Your Free Website Audit</Link>
            <Link href="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">See Our Portfolio</Link>
          </div>
          <p className="mt-6 text-green-200/70 text-sm">600+ custom real estate websites launched for agents, teams & brokerages</p>
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
          {["Custom Design — No Templates", "IDX & MLS Integrated", "Mobile-First & Fast", "99.9% Uptime Hosting"].map((item, i) => (
            <span key={i} className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> {item}</span>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">End-to-End Real Estate Web Solutions</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">From stunning custom design to robust IDX integration and ongoing maintenance — everything you need for a high-performing real estate website.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Website Performance Metrics</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Real numbers from real estate websites we&apos;ve designed, developed, and optimized.</p>
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
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Websites Built to Perform, Not Just Look Pretty</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">A beautiful site that doesn&apos;t generate leads is an expensive business card. We build sites that work as hard as you do.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">What Agents &amp; Brokers Say</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">From Concept to Launch in Five Phases</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A proven, structured process that delivers a pixel-perfect, high-converting real estate website — on time and on budget.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Common Questions About Web Design</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Maximize Your Website&apos;s Impact</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for a Website That Actually Generates Leads?</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed">Book a free website consultation. We&apos;ll audit your current site, discuss your goals, and show you exactly how a custom-built real estate website can transform your online presence and lead flow.</p>
          <Link href="/contact" className="inline-block bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Get Your Free Website Audit</Link>
          <p className="mt-6 text-green-200/60 text-sm">Includes a detailed performance report and conversion recommendations</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
