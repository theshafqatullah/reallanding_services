import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Real Estate Investment Consulting | RealLanding",
  description:
    "Expert real estate investment consulting — market analysis, portfolio strategy, ROI projections, acquisition due diligence, and investment property marketing for investors.",
  openGraph: {
    title: "Real Estate Investment Consulting | RealLanding",
    description:
      "Expert real estate investment consulting — market analysis, portfolio strategy, ROI projections, acquisition due diligence, and investment property marketing for investors.",
    url: "https://reallanding.com/services/real-estate-investment",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-real-estate-investment.jpg",
        width: 1200,
        height: 630,
        alt: "Real Estate Investment Consulting | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Investment Consulting | RealLanding",
    description:
      "Expert real estate investment consulting — market analysis, portfolio strategy, ROI projections, acquisition due diligence, and investment property marketing for investors.",
    images: ["https://reallanding.com/og-real-estate-investment.jpg"],
    site: "@RealLandingHQ",
  },
};


// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Real Estate Investment Consulting",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "Expert real estate investment consulting — market analysis, portfolio strategy, ROI projections, acquisition due diligence, and investment property marketing for investors.",
  "url": "https://reallanding.com/services/real-estate-investment",
  "category": "Real Estate Marketing"
};


const stats = [
  { value: "$2.4B+", label: "Portfolio Value Managed" },
  { value: "18%", label: "Average Annual ROI" },
  { value: "450+", label: "Investment Properties Acquired" },
  { value: "95%", label: "Client Retention Rate" },
];

const services = [
  { icon: "📊", title: "Market & Opportunity Analysis", description: "Deep-dive research into local and national markets to uncover high-yield investment opportunities. We analyze supply-demand dynamics, rental trends, appreciation forecasts, and demographic shifts to pinpoint neighborhoods poised for growth before the competition catches on." },
  { icon: "🏗️", title: "Investment Strategy & Portfolio Planning", description: "Custom investment blueprints aligned to your risk tolerance, capital reserves, and long-term wealth goals. Whether you&apos;re building a buy-and-hold rental portfolio, flipping distressed properties, or syndicating commercial deals, we architect a roadmap that compounds returns year after year." },
  { icon: "📈", title: "Financial Modeling & ROI Projections", description: "Institutional-grade financial models that project cash-on-cash returns, cap rates, IRR, and equity appreciation over 5-, 10-, and 20-year horizons. Every acquisition decision is backed by rigorous numbers — not gut feelings." },
  { icon: "🔍", title: "Acquisition Due Diligence", description: "Comprehensive pre-purchase analysis covering property condition, title review, zoning compliance, environmental risk, tenant lease audits, and comparable sales validation. We ensure every deal is airtight before you sign on the dotted line." },
  { icon: "🏠", title: "Investment Property Marketing", description: "Attract qualified tenants, buyers, or partners with professional property marketing. From listing optimization and virtual tours to targeted digital campaigns, we maximize exposure and minimize vacancy for every asset in your portfolio." },
  { icon: "🚪", title: "Exit Strategy & Disposition", description: "Strategic disposition planning that maximizes your return at sale. We time the market, stage the asset, identify the optimal buyer pool, and execute a marketing plan designed to generate competitive offers and close above asking price." },
];

const steps = [
  { step: 1, title: "Discovery & Goal Setting", description: "We assess your current portfolio, investment experience, available capital, and financial goals to define a clear investment thesis and success criteria." },
  { step: 2, title: "Market Research & Deal Sourcing", description: "Our analysts scan target markets for properties that match your criteria — running comps, rental analyses, and growth projections on every potential acquisition." },
  { step: 3, title: "Due Diligence & Underwriting", description: "Each shortlisted property undergoes rigorous financial modeling and physical due diligence. We stress-test every assumption so you invest with confidence." },
  { step: 4, title: "Acquisition & Onboarding", description: "We guide you through offer negotiation, financing coordination, closing logistics, and property onboarding — whether it&apos;s your first rental or your fiftieth." },
  { step: 5, title: "Optimize, Report & Scale", description: "Ongoing portfolio performance tracking, quarterly reviews, and reinvestment planning. We continuously identify opportunities to improve returns and scale your holdings." },
];

const benefits = [
  { title: "Data-Driven Decisions", desc: "Every recommendation is backed by institutional-quality market data, financial modeling, and trend analysis — eliminating guesswork from your investment decisions." },
  { title: "Risk-Adjusted Returns", desc: "We don&apos;t chase the highest returns blindly. Our strategies balance yield against risk, ensuring your portfolio weathers market cycles and delivers consistent, sustainable growth." },
  { title: "End-to-End Support", desc: "From sourcing your first deal to executing a 1031 exchange on your tenth, we&apos;re with you at every stage of the investment lifecycle — no gaps, no handoffs." },
  { title: "Market-Tested Strategies", desc: "Our methodologies have been refined across $2.4B+ in portfolio value. You benefit from proven playbooks that have performed in bull markets, corrections, and everything in between." },
  { title: "Time-Saving Expertise", desc: "Skip the learning curve. Our analysts do the research, run the numbers, and vet the deals — so you invest your capital, not hundreds of hours of your own time." },
  { title: "Transparent Reporting", desc: "Real-time dashboards and quarterly portfolio reports give you complete visibility into property performance, cash flow, equity growth, and portfolio-wide ROI." },
];

const results = [
  { metric: "$2.4B+", label: "Total portfolio value managed", period: "Across all client portfolios" },
  { metric: "18%", label: "Average annual ROI", period: "Blended across strategies" },
  { metric: "450+", label: "Investment properties acquired", period: "In 38 U.S. markets" },
  { metric: "95%", label: "Client retention rate", period: "Year-over-year renewal" },
];

const testimonials = [
  { quote: "RealLanding completely transformed how I approach real estate investing. Their financial models and market analysis helped me acquire seven rental properties in two years — all cash-flow positive from day one. My portfolio is generating 21% annual returns and I barely lift a finger thanks to their ongoing advisory.", author: "Marcus Whitfield", role: "Private Investor, Dallas TX" },
  { quote: "As a physician with zero real estate experience, I needed a team I could trust. RealLanding walked me through every step — from identifying the right markets to closing my first duplex. Eighteen months later, I own four properties across two states and my passive income covers my student loan payments entirely.", author: "Dr. Priya Ramanathan", role: "Real Estate Investor, Nashville TN" },
];

const faqs = [
  { question: "What is the minimum investment required to get started?", answer: "There is no strict minimum to engage our consulting services. However, for direct property acquisitions, we typically recommend investors have at least $50,000–$100,000 in available capital (cash or accessible equity) to comfortably acquire and properly reserve for your first investment property. We also work with investors pooling capital through partnerships and syndications with lower individual minimums." },
  { question: "Which markets do you cover?", answer: "We actively analyze and invest in over 40 U.S. markets spanning the Sun Belt, Midwest, and emerging secondary cities. Our strongest deal flow is currently in Texas, Florida, Tennessee, Georgia, North Carolina, and Ohio — but we continuously evaluate new markets based on population growth, job creation, landlord-friendliness, and yield potential." },
  { question: "How are projected returns calculated?", answer: "We use institutional-grade financial models that incorporate purchase price, closing costs, renovation budgets, financing terms, rental income, vacancy assumptions, operating expenses, property management fees, tax implications, and appreciation projections. Every model includes base-case, upside, and downside scenarios so you understand the full range of outcomes before committing capital." },
  { question: "How do you mitigate investment risk?", answer: "Risk mitigation is built into every step: diversification across markets and property types, conservative underwriting assumptions, thorough physical and legal due diligence, adequate cash reserves, landlord-favorable lease structures, and ongoing portfolio monitoring. We never recommend a deal that doesn't meet our minimum return and risk thresholds." },
  { question: "How do I get started with your investment consulting?", answer: "Book a free investment strategy session through our contact page. We'll discuss your financial goals, investment experience, available capital, and timeline. From there, we'll develop a custom investment plan and begin sourcing opportunities that match your criteria — typically within 2–3 weeks of our initial consultation." },
  { question: "What are your consulting fees?", answer: "Our advisory fees depend on the scope of engagement. Market analysis and strategy packages start at $2,500. Ongoing portfolio advisory retainers range from $1,500–$5,000/month depending on portfolio size and complexity. For acquisition-specific work, we often structure fees as a percentage of deal value. All fees are transparent and outlined before any engagement begins." },
];

const relatedServices = [
  { title: "Property Management", href: "/services/property-management", description: "Protect and grow your investment returns with full-service property management that maximizes occupancy and minimizes owner headaches." },
  { title: "Strategic Growth Planning", href: "/services/strategic-growth-planning", description: "Scale your real estate business or portfolio with a data-driven growth roadmap customized to your market and goals." },
  { title: "Analytics & Performance", href: "/services/analytics-performance", description: "Track every dollar of your investment portfolio with real-time analytics dashboards and actionable performance insights." },
];

export default function RealEstateInvestmentPage() {
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
            <span className="text-white font-medium">Real Estate Investment</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/20">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Investment Consulting
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Build Wealth Through Strategic<br className="hidden md:block" /> Real Estate Investing</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-10 leading-relaxed">Expert investment consulting — market analysis, portfolio strategy, ROI projections, and acquisition support — so every dollar you deploy works harder.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Get Your Free Investment Strategy</Link>
            <Link href="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">See Portfolio Results</Link>
          </div>
          <p className="mt-6 text-green-200/70 text-sm">$2.4B+ in portfolio value managed across 38 U.S. markets</p>
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
          {["Data-Driven Underwriting", "Risk-Adjusted Portfolios", "Institutional-Grade Models", "Transparent Fee Structure"].map((item, i) => (
            <span key={i} className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> {item}</span>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Full-Spectrum Investment Consulting</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">From opportunity identification to exit execution, we cover every stage of the real estate investment lifecycle with data-driven expertise.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Investment Performance Metrics</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Real numbers from real portfolios managed and advised by our investment team.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Invest Smarter, Not Harder</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Our consulting is designed for investors who want institutional-quality guidance without the institutional price tag.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">What Investors Say</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">From Strategy to Steady Returns in Five Steps</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A disciplined, research-driven process that takes you from investment thesis to income-producing portfolio — without the costly trial and error.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Common Questions About Investment Consulting</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Maximize Your Investment Returns</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build a High-Performing Real Estate Portfolio?</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed">Book a free investment strategy session. We&apos;ll analyze your goals, identify the highest-yield markets, and build a custom roadmap to grow your wealth through real estate.</p>
          <Link href="/contact" className="inline-block bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Get Your Free Investment Strategy</Link>
          <p className="mt-6 text-green-200/60 text-sm">Includes a custom market analysis and ROI projection for your first deal</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
