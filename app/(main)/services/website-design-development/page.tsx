import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Website Design & Development for Real Estate | RealLanding",
  description:
    "Custom real estate websites with IDX integration, lead capture, SEO optimization, and stunning design. Mobile-first, fast-loading sites built to convert visitors into clients.",
};

const stats = [
  { value: "600+", label: "Websites Launched" },
  { value: "4.2s→1.8s", label: "Average Load Time" },
  { value: "340%", label: "More Leads vs Templates" },
  { value: "99.9%", label: "Uptime Guaranteed" },
];

const services = [
  { icon: "🎨", title: "Custom Website Design & UX", description: "Bespoke, conversion-optimized designs built from scratch for your brand — not cookie-cutter templates. Every layout, color, and interaction is crafted to guide visitors toward contacting you, registering for listings, or scheduling a showing." },
  { icon: "🏘️", title: "IDX & MLS Integration", description: "Seamless IDX property search integrated directly into your site so buyers can browse active listings, save favorites, and set up alerts — all while you capture their information automatically. We work with all major IDX providers and MLS boards." },
  { icon: "📥", title: "Lead Capture & CRO", description: "Strategically placed lead capture forms, home valuation widgets, property alerts, and gated content — all A/B tested and optimized for maximum conversion. Every page is designed with a clear call-to-action that turns anonymous visitors into identifiable leads." },
  { icon: "📱", title: "Mobile-First Development", description: "Over 65% of real estate searches happen on mobile. We build mobile-first, responsive websites that load fast, look stunning, and convert on every screen size — from iPhone to ultrawide desktop monitors." },
  { icon: "⚙️", title: "CMS & Content Management", description: "An intuitive content management system that lets you update listings, publish blog posts, add testimonials, and edit pages without touching code. We typically build on WordPress or Next.js depending on your needs and scale." },
  { icon: "🛡️", title: "Maintenance & Hosting", description: "Premium managed hosting with 99.9% uptime, daily backups, SSL certificates, security monitoring, plugin updates, and performance optimization. We keep your site fast, secure, and running flawlessly so you can focus on selling homes." },
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

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-sky-700 to-blue-900 pt-32 pb-28">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-sky-400/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex justify-center mb-6 text-blue-200 text-sm">
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
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">Beautiful, blazing-fast real estate websites with IDX integration, lead capture, and SEO optimization — custom-built to showcase your brand and generate leads 24/7.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg shadow-blue-900/20 hover:shadow-xl hover:-translate-y-0.5">Get Your Free Website Audit</Link>
            <Link href="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">See Our Portfolio</Link>
          </div>
          <p className="mt-6 text-blue-200/70 text-sm">600+ custom real estate websites launched for agents, teams & brokerages</p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
          {["Custom Design — No Templates", "IDX & MLS Integrated", "Mobile-First & Fast", "99.9% Uptime Hosting"].map((item, i) => (
            <span key={i} className="flex items-center gap-2"><svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> {item}</span>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">End-to-End Real Estate Web Solutions</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">From stunning custom design to robust IDX integration and ongoing maintenance — everything you need for a high-performing real estate website.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-sky-100 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
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
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Proven Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Website Performance Metrics</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Real numbers from real estate websites we&apos;ve designed, developed, and optimized.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((r, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <div className="text-4xl font-bold text-blue-400 mb-2">{r.metric}</div>
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
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Websites Built to Perform, Not Just Look Pretty</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">A beautiful site that doesn&apos;t generate leads is an expensive business card. We build sites that work as hard as you do.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 hover:bg-blue-50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">What Agents &amp; Brokers Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
                <svg className="absolute top-6 right-8 w-12 h-12 text-blue-100" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" /></svg>
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}</div>
                <p className="text-gray-600 leading-relaxed mb-6 relative z-10">&ldquo;{t.quote}&rdquo;</p>
                <div><div className="font-bold text-gray-900">{t.author}</div><div className="text-blue-600 text-sm">{t.role}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">From Concept to Launch in Five Phases</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A proven, structured process that delivers a pixel-perfect, high-converting real estate website — on time and on budget.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center relative">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4 relative z-10 shadow-lg shadow-blue-200">{s.step}</div>
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
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Common Questions About Web Design</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors">
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
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Related Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Maximize Your Website&apos;s Impact</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((rs, i) => (
              <Link key={i} href={rs.href} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all block">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{rs.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-4">{rs.description}</p>
                <span className="text-blue-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-sky-700 to-blue-900 py-24">
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for a Website That Actually Generates Leads?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">Book a free website consultation. We&apos;ll audit your current site, discuss your goals, and show you exactly how a custom-built real estate website can transform your online presence and lead flow.</p>
          <Link href="/contact" className="inline-block bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg shadow-blue-900/20 hover:shadow-xl hover:-translate-y-0.5">Get Your Free Website Audit</Link>
          <p className="mt-6 text-blue-200/60 text-sm">Includes a detailed performance report and conversion recommendations</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
