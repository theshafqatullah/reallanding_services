import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Lead Generation for Real Estate | RealLanding",
  description:
    "Multi-channel lead generation for real estate agents and teams. Facebook & Instagram lead ads, Google PPC, SEO leads, home valuation pages, IDX capture, and referral campaigns.",
};

const stats = [
  { value: "50,000+", label: "Leads Generated" },
  { value: "$8.40", label: "Average CPL" },
  { value: "14%", label: "Lead-to-Client Rate" },
  { value: "6.2×", label: "Average ROI" },
];

const services = [
  { icon: "📱", title: "Facebook & Instagram Lead Ads", description: "High-converting social media campaigns targeting buyers and sellers in your market. We build custom audiences, lookalikes, and retargeting funnels that generate exclusive leads at scale — with pre-filled forms that reduce friction." },
  { icon: "🔍", title: "Google PPC Lead Campaigns", description: "Intent-driven search campaigns that capture buyers and sellers actively searching for real estate services. We manage keyword bidding, ad copy, landing pages, and conversion tracking to deliver the lowest cost per qualified lead." },
  { icon: "📈", title: "SEO-Driven Organic Leads", description: "Long-term organic lead generation through optimized neighborhood pages, market reports, and buyer/seller resource guides that rank on Google and deliver a compounding pipeline of free, high-intent leads month after month." },
  { icon: "🏠", title: "Home Valuation Landing Pages", description: "Custom-built home valuation pages that capture seller leads by offering instant property estimates. Integrated with your CRM for automatic follow-up, these pages convert at 12–18% — turning curious homeowners into listing appointments." },
  { icon: "🗂️", title: "IDX & Listing-Based Lead Capture", description: "Turn your property search experience into a lead generation engine. We optimize IDX registration gates, saved search alerts, listing detail CTAs, and property-specific landing pages to capture and nurture active buyers." },
  { icon: "🤝", title: "Referral & Sphere Campaigns", description: "Systematic campaigns to generate referrals from your past clients, sphere of influence, and professional network. Includes automated check-in sequences, review solicitation, and referral incentive programs that keep you top-of-mind." },
];

const steps = [
  { step: 1, title: "Market & Audience Analysis", description: "We study your target market, competition, ideal client profile, and current lead sources to identify the highest-opportunity channels and craft a data-backed strategy." },
  { step: 2, title: "Campaign Build & Creative", description: "We create high-converting ad creatives, landing pages, lead magnets, and form funnels — all tailored to your brand, market area, and specific buyer or seller persona." },
  { step: 3, title: "Launch & Optimize", description: "Campaigns go live across selected channels with daily monitoring. We A/B test ad copy, audiences, creative, and landing pages to continuously lower CPL and boost lead quality." },
  { step: 4, title: "CRM Integration & Nurture", description: "Every lead flows directly into your CRM with automatic tagging, assignment, and drip sequence activation — ensuring instant follow-up and zero leads falling through the cracks." },
  { step: 5, title: "Report, Refine & Scale", description: "Weekly performance reports, monthly strategy reviews, and ongoing optimization. As we identify winning formulas, we scale budget toward the channels delivering the best ROI." },
];

const benefits = [
  { title: "Predictable Pipeline", desc: "Stop relying on unpredictable referrals. Our lead generation systems deliver a consistent, controllable flow of new prospects every single week — rain or shine." },
  { title: "Multi-Channel Approach", desc: "We don&apos;t put all eggs in one basket. Leads come from Facebook, Google, SEO, home valuations, IDX, and referrals — so your pipeline never dries up if one channel fluctuates." },
  { title: "Exclusive Leads — Not Shared", desc: "Every lead we generate is exclusive to you. No shared leads, no bidding wars with other agents. These are your prospects, generated from your brand and campaigns." },
  { title: "Quality Over Quantity", desc: "We optimize for lead-to-client conversion, not just volume. Advanced targeting and qualification ensure you&apos;re talking to motivated buyers and sellers, not tire-kickers." },
  { title: "Automated Nurture", desc: "Leads that aren&apos;t ready today are nurtured automatically through intelligent drip campaigns until they&apos;re ready to buy or sell — turning cold leads into future closings." },
  { title: "Transparent Reporting", desc: "Real-time dashboards show exactly where every dollar goes, how many leads each channel produces, and what your true cost per closing is — no vanity metrics, just results." },
];

const results = [
  { metric: "50K+", label: "Total leads generated", period: "Across all client campaigns" },
  { metric: "$8.40", label: "Average cost per lead", period: "Blended across all channels" },
  { metric: "14%", label: "Lead-to-client conversion", period: "Industry avg is 2–3%" },
  { metric: "6.2×", label: "Average return on ad spend", period: "Within first 12 months" },
];

const testimonials = [
  { quote: "Before RealLanding, I was spending $3,000 a month on Zillow leads that every agent in town was calling. Now I get 60+ exclusive leads per month from Facebook and Google at half the cost — and they actually answer the phone because they came from my brand, not a portal.", author: "Rachel Dominguez", role: "Realtor, The Dominguez Group, San Antonio TX" },
  { quote: "RealLanding built us a lead generation machine. Between the home valuation pages and Google PPC campaigns, we went from 15 leads a month to over 120 — and our close rate went UP because the leads are better qualified. We&apos;ve added three agents just to handle the volume.", author: "Kevin Osei-Mensah", role: "Team Lead, Osei Realty Group, Charlotte NC" },
];

const faqs = [
  { question: "How is your lead quality compared to portal leads (Zillow, Realtor.com)?", answer: "Our leads consistently outperform portal leads because they're generated from your brand and targeted campaigns — not shared with multiple agents. Our clients see 14% lead-to-client conversion rates vs. the 1–3% typical of shared portal leads. You also build brand equity with every impression, which portals don't offer." },
  { question: "Are the leads exclusive to me?", answer: "Yes — 100% exclusive. Every lead we generate belongs to you alone. We never sell, share, or redistribute leads to other agents. They come from campaigns running under your brand, to your landing pages, into your CRM. They're your leads, period." },
  { question: "How much does lead generation cost?", answer: "Our management fees start at $1,500/month, with recommended ad budgets of $1,500–$10,000/month depending on your market size and goals. Total cost per lead typically ranges from $5–$25 depending on channel and market competition. We'll recommend a budget during your strategy session." },
  { question: "How many leads can I expect per month?", answer: "Lead volume depends on your budget, market, and channel mix. As a benchmark, most clients generating buyer and seller leads across Facebook, Google, and organic channels see 40–150+ leads per month on a $3,000–$5,000 total monthly spend. We'll project volume during your consultation." },
  { question: "Is there a long-term contract?", answer: "We offer month-to-month agreements after an initial 90-day commitment. The 90 days gives our campaigns enough time to optimize and deliver meaningful results. After that, you stay because the results speak for themselves — not because of a contract." },
  { question: "How quickly will I start getting leads?", answer: "Paid channels (Facebook, Google) typically deliver leads within the first 48–72 hours of campaign launch. Organic channels (SEO, content) take 3–6 months to ramp. Most clients see a full, optimized pipeline across all channels by month 3." },
];

const relatedServices = [
  { title: "Paid Advertising", href: "/services/paid-advertising", description: "Scale your lead generation with advanced PPC, social media advertising, and retargeting campaigns that maximize every dollar of ad spend." },
  { title: "CRM & Sales Automation", href: "/services/crm-sales-automation", description: "Ensure every lead is instantly followed up, nurtured, and tracked through your pipeline with a fully automated CRM system." },
  { title: "SEO", href: "/services/seo", description: "Build a long-term organic lead pipeline that compounds month over month and reduces your dependence on paid advertising." },
];

export default function LeadGenerationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-emerald-700 to-teal-900 pt-32 pb-28">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex justify-center mb-6 text-teal-200 text-sm">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/#services" className="hover:text-white transition">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Lead Generation</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/20">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>
            Real Estate Lead Generation
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Generate Exclusive, High-Quality<br className="hidden md:block" /> Real Estate Leads on Demand</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto mb-10 leading-relaxed">Multi-channel lead generation built for real estate agents and teams. Get a predictable, scalable pipeline of buyer and seller leads — exclusive to you, never shared.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-teal-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal-50 transition-all shadow-lg shadow-teal-900/20 hover:shadow-xl hover:-translate-y-0.5">Get Your Free Lead Gen Strategy</Link>
            <Link href="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">See Our Results</Link>
          </div>
          <p className="mt-6 text-teal-200/70 text-sm">50,000+ exclusive leads generated for agents and teams nationwide</p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
          {["100% Exclusive Leads", "Multi-Channel Strategy", "CRM Auto-Integration", "Transparent ROI Reporting"].map((item, i) => (
            <span key={i} className="flex items-center gap-2"><svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> {item}</span>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Six Proven Lead Generation Channels</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">We don&apos;t rely on a single channel. Our multi-pronged approach ensures your pipeline stays full — even when algorithms change or ad costs fluctuate.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-100/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-50 to-emerald-100 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
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
            <span className="text-teal-400 font-semibold text-sm uppercase tracking-wider">Proven Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Lead Generation Performance</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Real numbers from real estate agents and teams using our lead generation systems.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((r, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <div className="text-4xl font-bold text-teal-400 mb-2">{r.metric}</div>
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
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Lead Generation That Actually Converts</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Leads are only valuable if they become clients. Our system is built for conversion, not just volume.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-teal-50/50 border border-teal-100 rounded-2xl p-6 hover:bg-teal-50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">What Agents &amp; Teams Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
                <svg className="absolute top-6 right-8 w-12 h-12 text-teal-100" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" /></svg>
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}</div>
                <p className="text-gray-600 leading-relaxed mb-6 relative z-10">&ldquo;{t.quote}&rdquo;</p>
                <div><div className="font-bold text-gray-900">{t.author}</div><div className="text-teal-600 text-sm">{t.role}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">From Strategy to Steady Pipeline in Five Steps</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A systematic, data-driven approach to building a lead generation engine that delivers consistent, qualified prospects every month.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-teal-200 via-teal-400 to-teal-200" />
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center relative">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4 relative z-10 shadow-lg shadow-teal-200">{s.step}</div>
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
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Common Questions About Lead Generation</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-100 hover:border-teal-200 transition-colors">
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
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Related Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Maximize Your Lead Pipeline</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((rs, i) => (
              <Link key={i} href={rs.href} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-50 transition-all block">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">{rs.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-4">{rs.description}</p>
                <span className="text-teal-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-emerald-700 to-teal-900 py-24">
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Fill Your Pipeline with Exclusive Leads?</h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto leading-relaxed">Book a free lead generation strategy session. We&apos;ll analyze your market, identify the highest-ROI channels, and map out a plan to deliver consistent, qualified leads every month.</p>
          <Link href="/contact" className="inline-block bg-white text-teal-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal-50 transition-all shadow-lg shadow-teal-900/20 hover:shadow-xl hover:-translate-y-0.5">Get Your Free Lead Gen Strategy</Link>
          <p className="mt-6 text-teal-200/60 text-sm">Includes a custom channel recommendation and ROI projection</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
