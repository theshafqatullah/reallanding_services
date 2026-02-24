import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Strategic Growth Planning for Real Estate | RealLanding",
  description:
    "Comprehensive growth strategy for real estate businesses — market analysis, business planning, revenue forecasting, team scaling, geographic expansion, and competitive positioning.",
};

const stats = [
  { value: "$180M+", label: "Revenue Growth Planned" },
  { value: "89%", label: "Goal Achievement Rate" },
  { value: "250+", label: "Growth Plans Delivered" },
  { value: "3.2×", label: "Average Revenue Growth" },
];

const services = [
  { icon: "📊", title: "Market Analysis & Growth Mapping", description: "Deep-dive analysis of your local market dynamics, demographic trends, absorption rates, and opportunity gaps. We identify exactly where the growth potential lies — which neighborhoods, price points, and client segments offer the biggest upside for your business." },
  { icon: "📋", title: "Business Plan & Revenue Modeling", description: "A fully custom business plan with detailed revenue projections, expense modeling, and break-even analysis. We map every transaction type, average commission, and lead source to build a realistic, achievable financial roadmap for the next 12–36 months." },
  { icon: "👥", title: "Team Structure & Scaling Strategy", description: "Know exactly when and who to hire — buyer agents, listing specialists, ISAs, transaction coordinators, or marketing staff. We design the optimal org chart and compensation structure to scale profitably without burning cash or overextending." },
  { icon: "🗺️", title: "Geographic Expansion Planning", description: "Thinking about expanding into new markets, opening a second office, or launching a new team in another city? We evaluate market viability, competition density, licensing requirements, and resource allocation to make expansion decisions data-driven." },
  { icon: "🎯", title: "Competitive Positioning & Differentiation", description: "Analyze your top competitors, identify white-space opportunities, and craft a unique value proposition that separates you from the sea of agents in your market. We help you own a niche that drives referrals and commands premium commissions." },
  { icon: "📅", title: "Quarterly Reviews & Accountability", description: "Growth doesn&apos;t happen without accountability. We conduct structured quarterly business reviews, compare actuals vs. projections, recalibrate goals, and ensure your team stays on track with clear KPIs and action items every 90 days." },
];

const steps = [
  { step: 1, title: "Discovery & Assessment", description: "We audit your current business — financials, team, lead sources, market position, and operational efficiency — to establish a clear baseline and identify growth bottlenecks." },
  { step: 2, title: "Growth Strategy Development", description: "Using data from the assessment, we build a comprehensive growth plan with specific revenue targets, team milestones, market expansion timelines, and competitive strategies." },
  { step: 3, title: "Implementation Roadmap", description: "Your plan becomes an actionable 90-day sprint roadmap with weekly priorities, responsible owners, resource requirements, and measurable milestones to keep momentum high." },
  { step: 4, title: "Execute & Measure", description: "Your team executes against the roadmap while we track KPIs in real time — transactions, revenue, lead conversion, team performance, and market share gains." },
  { step: 5, title: "Optimize & Scale", description: "Quarterly reviews identify what&apos;s working, what needs adjustment, and where to double down. We continuously refine the strategy to accelerate growth and eliminate waste." },
];

const benefits = [
  { title: "Clarity & Direction", desc: "Stop operating on intuition. A documented growth plan gives you and your team a clear destination, defined priorities, and measurable milestones — so every dollar and hour is invested, not wasted." },
  { title: "Data-Driven Decisions", desc: "Every recommendation is backed by market data, financial modeling, and competitive analysis — not guesswork. You&apos;ll make hiring, expansion, and investment decisions with confidence." },
  { title: "Scalable Team Blueprint", desc: "Know exactly when to hire your next agent, ISA, or admin — and what their ROI will be before you make the offer. Our team scaling models prevent both premature hires and missed growth windows." },
  { title: "Revenue Predictability", desc: "Move from inconsistent closings to predictable, projectable revenue. Our financial models break down exactly how many leads, appointments, and transactions you need per month to hit your targets." },
  { title: "Competitive Advantage", desc: "Most agents don&apos;t have a business plan — let alone a growth strategy. Having one puts you in the top 5% and gives you an unfair advantage when recruiting, attracting clients, and negotiating partnerships." },
  { title: "Accountability Framework", desc: "Plans without accountability are just wishes. Our quarterly review process ensures goals are tracked, course corrections are made early, and your team stays focused on high-impact activities." },
];

const results = [
  { metric: "$180M+", label: "Cumulative revenue growth planned", period: "Across all client engagements" },
  { metric: "89%", label: "Client goal achievement rate", period: "Measured at 12-month mark" },
  { metric: "3.2×", label: "Average revenue growth", period: "Within first 18 months" },
  { metric: "67%", label: "Clients expanded to new markets", period: "Within 24 months of planning" },
];

const testimonials = [
  { quote: "Before RealLanding, we were a $12M team running on gut instinct. They built us a 3-year growth plan with quarterly milestones, a hiring roadmap, and a geographic expansion strategy. We hit $31M in year two — a number I never would have set for myself without their data showing it was possible. The quarterly reviews kept us honest and moving forward.", author: "Marcus Whitfield", role: "Broker/Owner, Whitfield Realty Group, Dallas TX" },
  { quote: "I was stuck at 40 transactions a year for three years straight. RealLanding&apos;s growth assessment showed me I was leaving $400K on the table by not having a buyer&apos;s agent and by ignoring the new-construction segment. Within 14 months of implementing the plan, I closed 78 transactions and added two agents to my team. The clarity alone was worth 10x the investment.", author: "Lauren Fujimoto", role: "Team Lead, Fujimoto & Associates, Portland OR" },
];

const faqs = [
  { question: "Who needs strategic growth planning?", answer: "Any real estate professional who wants to scale intentionally — whether you're a solo agent looking to build a team, a team leader aiming to double production, or a broker planning to open a new office or expand into new markets. If you've plateaued or are growing but feel chaotic, a structured plan changes everything." },
  { question: "How quickly will I see ROI from a growth plan?", answer: "Most clients see measurable traction within the first 90 days as the immediate-impact action items take effect. Significant revenue growth typically materializes within 6–12 months. Our 89% goal achievement rate at the 12-month mark speaks to the speed and reliability of the process." },
  { question: "What's included in a growth plan?", answer: "A comprehensive plan includes market analysis, SWOT assessment, financial modeling with revenue projections, team structure and hiring roadmap, competitive positioning strategy, geographic expansion analysis (if applicable), quarterly KPI dashboards, and a 90-day sprint roadmap with weekly action items." },
  { question: "How does growth planning work with my existing business plan?", answer: "If you have an existing plan, we audit it against current market data and your actual performance to identify gaps and missed opportunities. We then enhance or rebuild it with data-driven projections and actionable strategies. Most clients find their existing plans are either outdated, too vague, or lacking the financial and competitive analysis needed to be truly actionable." },
  { question: "Do I need a certain team size to benefit?", answer: "Not at all. We work with solo agents doing $3M in volume all the way up to 50+ agent brokerages doing $500M+. The strategies scale to your situation — a solo agent's plan focuses on building the foundation for a team, while a large brokerage's plan may focus on market share, recruiting, and operational efficiency." },
  { question: "How much does strategic growth planning cost?", answer: "Our growth planning engagements range from $3,500 for a one-time comprehensive plan to $2,000–$5,000/month for ongoing strategy and quarterly review retainers. The investment is calibrated to your business size and complexity. Every client we've worked with has seen multiples of their investment returned in the first year." },
];

const relatedServices = [
  { title: "Analytics & Performance", href: "/services/analytics-performance", description: "Track every KPI in your growth plan with real-time dashboards that measure revenue, transactions, lead conversion, and market share." },
  { title: "Branding & Market Positioning", href: "/services/branding-market-positioning", description: "Establish a differentiated brand that supports your competitive positioning strategy and attracts premium clients." },
  { title: "Lead Generation", href: "/services/lead-generation", description: "Execute the lead generation channels identified in your growth plan to build a predictable, scalable pipeline." },
];

export default function StrategicGrowthPlanningPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-600 via-pink-700 to-rose-900 pt-32 pb-28">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-rose-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-pink-400/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex justify-center mb-6 text-rose-200 text-sm">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/#services" className="hover:text-white transition">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Strategic Growth Planning</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/20">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            Strategic Growth Planning for Real Estate
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Scale Your Real Estate Business<br className="hidden md:block" /> with a Data-Driven Growth Plan</h1>
          <p className="text-xl text-rose-100 max-w-3xl mx-auto mb-10 leading-relaxed">Stop guessing. Start growing. We build comprehensive growth strategies for real estate teams and brokerages — from market analysis and revenue modeling to team scaling and geographic expansion.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-rose-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-rose-50 transition-all shadow-lg shadow-rose-900/20 hover:shadow-xl hover:-translate-y-0.5">Get Your Free Growth Assessment</Link>
            <Link href="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">See Our Results</Link>
          </div>
          <p className="mt-6 text-rose-200/70 text-sm">250+ growth plans delivered for real estate businesses nationwide</p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-rose-600 mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
          {["Data-Driven Strategies", "Quarterly Accountability Reviews", "Custom Revenue Modeling", "Expansion-Ready Plans"].map((item, i) => (
            <span key={i} className="flex items-center gap-2"><svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> {item}</span>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-rose-600 font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Six Pillars of Strategic Growth</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A holistic approach that covers every dimension of your real estate business — from financials and team to market position and expansion.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-100/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-rose-50 to-pink-100 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
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
            <span className="text-rose-400 font-semibold text-sm uppercase tracking-wider">Proven Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Growth Planning Performance</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Real outcomes from real estate businesses that invested in strategic, data-driven growth planning.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((r, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <div className="text-4xl font-bold text-rose-400 mb-2">{r.metric}</div>
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
            <span className="text-rose-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Growth Planning That Drives Real Results</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Most agents don&apos;t have a business plan. Having a data-backed growth strategy puts you ahead of 95% of the competition.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-rose-50/50 border border-rose-100 rounded-2xl p-6 hover:bg-rose-50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-rose-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
            <span className="text-rose-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">What Leaders &amp; Teams Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
                <svg className="absolute top-6 right-8 w-12 h-12 text-rose-100" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" /></svg>
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}</div>
                <p className="text-gray-600 leading-relaxed mb-6 relative z-10">&ldquo;{t.quote}&rdquo;</p>
                <div><div className="font-bold text-gray-900">{t.author}</div><div className="text-rose-600 text-sm">{t.role}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <span className="text-rose-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">From Assessment to Accelerated Growth in Five Steps</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A structured, repeatable process that transforms your vision into a documented, executable, and accountable growth plan.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-rose-200 via-rose-400 to-rose-200" />
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center relative">
                <div className="w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4 relative z-10 shadow-lg shadow-rose-200">{s.step}</div>
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
            <span className="text-rose-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Common Questions About Growth Planning</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-100 hover:border-rose-200 transition-colors">
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
            <span className="text-rose-600 font-semibold text-sm uppercase tracking-wider">Related Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Accelerate Your Growth Plan</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((rs, i) => (
              <Link key={i} href={rs.href} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-50 transition-all block">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">{rs.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-4">{rs.description}</p>
                <span className="text-rose-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-600 via-pink-700 to-rose-900 py-24">
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-rose-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-pink-400/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Your Growth Roadmap?</h2>
          <p className="text-xl text-rose-100 mb-10 max-w-2xl mx-auto leading-relaxed">Book a free growth assessment. We&apos;ll evaluate your business, identify your biggest opportunities, and outline a strategic plan to reach your revenue and expansion goals.</p>
          <Link href="/contact" className="inline-block bg-white text-rose-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-rose-50 transition-all shadow-lg shadow-rose-900/20 hover:shadow-xl hover:-translate-y-0.5">Get Your Free Growth Assessment</Link>
          <p className="mt-6 text-rose-200/60 text-sm">Includes a complimentary business audit and opportunity analysis</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
