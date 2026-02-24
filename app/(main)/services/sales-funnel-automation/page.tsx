import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Sales Funnel Automation for Real Estate | RealLanding",
  description:
    "Full-funnel automation for real estate — funnel strategy, landing pages, lead magnets, automated nurture sequences, retargeting funnels, appointment booking, and funnel analytics.",
  openGraph: {
    title: "Sales Funnel Automation for Real Estate | RealLanding",
    description:
      "Full-funnel automation for real estate — funnel strategy, landing pages, lead magnets, automated nurture sequences, retargeting funnels, appointment booking, and funnel analytics.",
    url: "https://reallanding.com/services/sales-funnel-automation",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-sales-funnel-automation.jpg",
        width: 1200,
        height: 630,
        alt: "Sales Funnel Automation for Real Estate | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales Funnel Automation for Real Estate | RealLanding",
    description:
      "Full-funnel automation for real estate — funnel strategy, landing pages, lead magnets, automated nurture sequences, retargeting funnels, appointment booking, and funnel analytics.",
    images: ["https://reallanding.com/og-sales-funnel-automation.jpg"],
    site: "@RealLandingHQ",
  },
};


// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Sales Funnel Automation",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "Full-funnel automation for real estate — funnel strategy, landing pages, lead magnets, automated nurture sequences, retargeting funnels, appointment booking, and funnel analytics.",
  "url": "https://reallanding.com/services/sales-funnel-automation",
  "category": "Real Estate Marketing"
};


const stats = [
  { value: "340%", label: "Average Funnel ROI" },
  { value: "8,500+", label: "Leads Funneled Monthly" },
  { value: "23%", label: "Funnel Conversion Rate" },
  { value: "$4.2M", label: "Revenue Attributed" },
];

const services = [
  { icon: "🏗️", title: "Funnel Strategy & Architecture", description: "We design the complete blueprint for your sales funnel — mapping every stage from first impression to signed contract. Each funnel is custom-architected around your market, client type, and business goals with clear conversion milestones and KPIs at every step." },
  { icon: "📄", title: "Landing Page & Lead Magnet Funnels", description: "High-converting landing pages paired with irresistible lead magnets — home valuation tools, neighborhood guides, buyer checklists, market reports — that capture contact information and immediately segment leads by intent, timeline, and property interest." },
  { icon: "📧", title: "Automated Nurture Sequences", description: "Multi-channel drip campaigns (email, SMS, voicemail drops) that educate, build trust, and move leads through your pipeline on autopilot. Every sequence is behavior-triggered and personalized — so the right message reaches the right lead at exactly the right time." },
  { icon: "🎯", title: "Retargeting & Remarketing Funnels", description: "Pixel-based retargeting campaigns across Facebook, Instagram, Google Display, and YouTube that re-engage leads who visited your site but didn&apos;t convert. We serve sequential ad creative that mirrors their funnel stage to pull them back in and advance them toward action." },
  { icon: "📅", title: "Appointment Booking Automation", description: "Frictionless scheduling funnels that let qualified leads book consultations, showings, and listing appointments directly into your calendar. Integrated with your CRM, these funnels send confirmations, reminders, and pre-appointment questionnaires automatically." },
  { icon: "📊", title: "Funnel Analytics & Optimization", description: "Real-time dashboards tracking every funnel metric — traffic, opt-in rates, email engagement, stage progression, appointment show rates, and revenue attribution. We continuously A/B test and optimize every element to maximize your conversion rate and ROI." },
];

const steps = [
  { step: 1, title: "Funnel Audit & Strategy", description: "We analyze your current lead flow, conversion gaps, and client journey to design a custom funnel architecture that maximizes the value of every lead entering your pipeline." },
  { step: 2, title: "Build & Integrate", description: "Our team builds landing pages, lead magnets, email sequences, SMS workflows, retargeting campaigns, and booking systems — all integrated with your CRM and ad platforms." },
  { step: 3, title: "Launch & Drive Traffic", description: "Funnels go live with traffic from your existing channels plus new paid campaigns. We monitor every stage in real-time, ensuring leads flow smoothly from capture to conversion." },
  { step: 4, title: "Test & Optimize", description: "Continuous A/B testing of headlines, CTAs, email subject lines, ad creative, and funnel sequences. Every optimization is data-driven, focused on improving conversion rates at each stage." },
  { step: 5, title: "Scale & Expand", description: "As winning funnels are identified, we scale ad spend, replicate top performers for new audiences, and build additional funnels targeting different segments — sellers, buyers, investors, relocators." },
];

const benefits = [
  { title: "Leads Never Fall Through the Cracks", desc: "Every lead that enters your funnel is automatically nurtured, followed up with, and moved toward a conversion event — no manual effort, no forgotten prospects, no lost revenue." },
  { title: "Convert While You Sleep", desc: "Your funnel works 24/7/365 — capturing leads, sending nurture emails, retargeting visitors, and booking appointments even when you&apos;re at a showing, on vacation, or asleep." },
  { title: "Shorter Sales Cycles", desc: "Automated nurture sequences educate and warm leads before they ever talk to you. By the time they book a call, they&apos;re pre-qualified, informed, and ready to move — cutting your sales cycle dramatically." },
  { title: "Predictable, Scalable Revenue", desc: "A well-built funnel turns lead generation from a guessing game into a math equation. You know your traffic, conversion rates, and revenue per lead — so scaling is a simple budget decision." },
  { title: "Multi-Touch Attribution", desc: "Our analytics track every touchpoint — ads, emails, pages, calls — so you know exactly which funnel stages and campaigns drive revenue. No more guessing where your closings come from." },
  { title: "Personalized at Scale", desc: "Behavior-triggered automations ensure every lead receives messaging tailored to their interests, timeline, and actions — delivering a personalized experience without manual work." },
];

const results = [
  { metric: "340%", label: "Average funnel ROI", period: "Across all client funnels" },
  { metric: "8,500+", label: "Leads funneled monthly", period: "Aggregate pipeline volume" },
  { metric: "23%", label: "Average conversion rate", period: "Landing page to appointment" },
  { metric: "$4.2M", label: "Revenue attributed to funnels", period: "Client-reported closings" },
];

const testimonials = [
  { quote: "Before RealLanding, I had a website and some Facebook ads — but no system connecting them. They built a complete seller funnel that takes a cold homeowner from seeing my ad to booking a listing appointment in 7 days flat. I went from 3 listing appointments a month to 14, and my cost per appointment dropped by 60%. This is the best investment I&apos;ve made in my business.", author: "Andrea Morales", role: "Listing Specialist, RE/MAX Elite, Houston TX" },
  { quote: "RealLanding built us a buyer funnel that&apos;s absolutely insane. A lead downloads our neighborhood guide, gets a 12-email nurture series over 30 days, sees retargeting ads the entire time, and then books a buyer consult directly on our calendar. Our team went from chasing leads to choosing which pre-qualified buyers to work with. The funnel does 90% of the selling for us.", author: "James Whitaker", role: "Team Lead, Whitaker Home Group, Atlanta GA" },
];

const faqs = [
  { question: "What exactly is a sales funnel in real estate?", answer: "A sales funnel is a systematic, automated process that guides a prospect from their first interaction with your brand (seeing an ad, visiting your website) all the way to becoming a client (booking an appointment, signing a listing agreement). It includes landing pages to capture leads, email/SMS sequences to nurture them, retargeting ads to stay top-of-mind, and booking systems to convert them — all running automatically." },
  { question: "How does funnel automation work with my existing CRM?", answer: "We integrate directly with all major real estate CRMs including Follow Up Boss, KvCORE, Sierra Interactive, LionDesk, Salesforce, and HubSpot. When a lead enters your funnel, they're automatically pushed to your CRM with proper tags, source attribution, and pipeline stage. Nurture actions can trigger CRM tasks and vice versa — creating a seamless, bi-directional workflow." },
  { question: "How long does it take to build and launch a funnel?", answer: "A single funnel (landing page + lead magnet + email sequence + retargeting setup + booking integration) typically takes 2–3 weeks to build and launch. A comprehensive multi-funnel system covering buyers, sellers, and different market segments takes 4–8 weeks. We prioritize launching your highest-impact funnel first so you start seeing results quickly." },
  { question: "What kind of results can I expect?", answer: "Results vary by market, budget, and funnel type, but our benchmarks are: 15–30% landing page conversion rates, 25–40% email open rates, 8–15% appointment booking rates from nurtured leads, and a 340% average ROI across all client funnels. Most clients see their first funnel-generated appointment within 1–2 weeks of launch." },
  { question: "How much does funnel automation cost?", answer: "Single funnel builds start at $3,000–$5,000 (one-time setup) plus $1,000–$2,000/month for ongoing management, optimization, and email/SMS platform costs. Comprehensive multi-funnel systems with retargeting, advanced analytics, and continuous optimization range from $3,000–$7,000/month. Ad spend for driving traffic to funnels is additional and recommended at $1,500–$5,000/month." },
  { question: "How is this different from regular marketing or lead generation?", answer: "Traditional marketing generates leads but often leaves the follow-up, nurturing, and conversion to manual effort. Funnel automation builds a complete system around every lead — from capture to close — ensuring no prospect is forgotten, every lead receives consistent nurture, and the entire process runs without manual intervention. It's the difference between catching fish one at a time and building a net that catches them automatically." },
];

const relatedServices = [
  { title: "CRM & Sales Automation", href: "/services/crm-sales-automation", description: "Pair your funnels with a fully optimized CRM that ensures every funnel-generated lead is tracked, nurtured, and closed efficiently." },
  { title: "Lead Generation", href: "/services/lead-generation", description: "Drive high-quality traffic into your funnels with multi-channel lead generation across Facebook, Google, SEO, and more." },
  { title: "Paid Advertising", href: "/services/paid-advertising", description: "Maximize funnel performance with expertly managed ad campaigns that drive targeted, cost-effective traffic to your landing pages." },
];

export default function SalesFunnelAutomationPage() {
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
            <span className="text-white font-medium">Sales Funnel Automation</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/20">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" /></svg>
            Funnel Automation
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Automate Your Entire Sales Funnel<br className="hidden md:block" /> from Lead to Closing</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-10 leading-relaxed">Full-funnel automation that captures leads, nurtures them on autopilot, books appointments, and drives closings — so your pipeline never stops working.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Get Your Free Funnel Strategy</Link>
            <Link href="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">See Funnel Results</Link>
          </div>
          <p className="mt-6 text-green-200/70 text-sm">8,500+ leads funneled monthly across our client base</p>
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
          {["Full CRM Integration", "Behavior-Triggered Automations", "Multi-Channel Sequences", "Real-Time Funnel Analytics"].map((item, i) => (
            <span key={i} className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> {item}</span>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">End-to-End Funnel Automation Services</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">We build, manage, and optimize every layer of your sales funnel — so leads convert to clients on autopilot.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Funnel Performance Metrics</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Real numbers from real estate professionals running our automated funnel systems.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Funnels That Work While You Don&apos;t</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Stop losing leads to poor follow-up. Our funnels ensure every prospect gets the right message at the right time — automatically.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">What Agents &amp; Teams Say</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">From Blueprint to Automated Pipeline in Five Steps</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A proven process for building sales funnels that capture, nurture, and convert real estate leads on autopilot.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Common Questions About Sales Funnel Automation</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Supercharge Your Funnel Performance</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build a Sales Funnel That Closes on Autopilot?</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed">Book a free funnel strategy session. We&apos;ll map your client journey, identify conversion gaps, and design a custom funnel system that turns leads into closings — automatically.</p>
          <Link href="/contact" className="inline-block bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Get Your Free Funnel Strategy</Link>
          <p className="mt-6 text-green-200/60 text-sm">Includes a custom funnel blueprint and conversion rate projection</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
