import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Property Management Services | RealLanding",
  description:
    "Professional property management for landlords and investors. Tenant screening, rent collection, maintenance coordination, property marketing, lease management, and financial reporting.",
};

const stats = [
  { value: "2,800+", label: "Units Managed" },
  { value: "97%", label: "Occupancy Rate" },
  { value: "$0", label: "Missed Rent Collected" },
  { value: "4.9★", label: "Average Owner Rating" },
];

const services = [
  { icon: "🔍", title: "Tenant Screening & Placement", description: "Comprehensive background checks including credit reports, criminal history, eviction records, employment verification, income confirmation, and rental references — ensuring only qualified, reliable tenants occupy your property." },
  { icon: "💰", title: "Rent Collection & Accounting", description: "Automated rent collection via online portals, direct deposit, and ACH transfers. We handle late notices, payment tracking, security deposit management, and full-service bookkeeping with monthly owner statements." },
  { icon: "🔧", title: "Maintenance Coordination", description: "24/7 maintenance request system with a vetted vendor network. From emergency repairs to routine upkeep, we coordinate every work order, approve costs within your thresholds, and ensure quality workmanship at competitive rates." },
  { icon: "📣", title: "Property Marketing & Listing", description: "Professional photography, compelling listing descriptions, syndication across 40+ rental platforms, virtual tours, and targeted social media campaigns to minimize vacancy and attract the best tenants fast." },
  { icon: "📋", title: "Lease Management & Renewals", description: "Legally compliant lease agreements, renewal negotiations, rent increase analysis based on market comps, move-in/move-out inspections, and proactive retention strategies that reduce turnover and keep quality tenants longer." },
  { icon: "📊", title: "Financial Reporting & Owner Portals", description: "Real-time owner dashboards with income/expense tracking, monthly P&L statements, year-end tax-ready reports (1099s), maintenance logs, and on-demand access to every document related to your property." },
];

const steps = [
  { step: 1, title: "Property Evaluation", description: "We conduct a thorough inspection of your property, assess its rental value based on market comps, and identify any improvements needed to maximize rent and attract quality tenants." },
  { step: 2, title: "Onboarding & Setup", description: "We set up your owner portal, establish vendor relationships, create marketing materials, and — if vacant — begin tenant acquisition immediately with professional listings and targeted outreach." },
  { step: 3, title: "Tenant Placement", description: "Rigorous screening process including credit, background, income, and rental history checks. We present qualified applicants for your review and execute legally compliant lease agreements." },
  { step: 4, title: "Day-to-Day Management", description: "We handle everything: rent collection, maintenance coordination, tenant communications, inspections, lease enforcement, and any issues that arise — so you don&apos;t have to." },
  { step: 5, title: "Reporting & Optimization", description: "Monthly financial reports, quarterly property reviews, annual rent analyses, and ongoing recommendations to increase your property&apos;s value and income over time." },
];

const benefits = [
  { title: "Passive Income Optimization", desc: "We maximize your rental income through strategic pricing, minimal vacancy, and cost-effective maintenance — turning your property into a truly passive investment." },
  { title: "Professional Tenant Screening", desc: "Our rigorous screening process reduces the risk of late payments, property damage, and evictions. We place tenants who pay on time and take care of your property." },
  { title: "Maintenance Handled", desc: "No more 2 AM phone calls about broken water heaters. Our 24/7 maintenance team and vetted vendor network handle every repair, large and small, within your budget." },
  { title: "Financial Transparency", desc: "Real-time dashboards, monthly statements, and tax-ready year-end reports give you complete visibility into your property&apos;s financial performance at all times." },
  { title: "Legal Compliance", desc: "We stay current on local, state, and federal landlord-tenant laws, fair housing regulations, and safety codes — protecting you from costly legal mistakes and liability." },
  { title: "Vacancy Minimization", desc: "Proactive lease renewals, competitive pricing analysis, and rapid-turnaround marketing ensure your property spends as few days vacant as possible." },
];

const results = [
  { metric: "97%", label: "Average occupancy rate", period: "Across all managed properties" },
  { metric: "8 days", label: "Average time to fill vacancy", period: "From listing to lease signing" },
  { metric: "99.2%", label: "On-time rent collection rate", period: "Consistent across portfolio" },
  { metric: "$0", label: "Owner out-of-pocket for missed rent", period: "Guaranteed rent program available" },
];

const testimonials = [
  { quote: "I own 12 rental units across three cities and managing them myself was a full-time job. RealLanding took over everything — tenant screening, maintenance, rent collection, and reporting. My occupancy went from 89% to 98%, and I haven&apos;t gotten a single midnight maintenance call in two years. This is truly passive income now.", author: "Marcus Whitfield", role: "Property Investor, Dallas TX" },
  { quote: "As an out-of-state investor, I needed a property management team I could trust completely. RealLanding has managed my four-unit building in Atlanta for 18 months and the results speak for themselves: zero evictions, on-time financials every month, and they even identified a rent increase opportunity that added $400/month to my income.", author: "Priya Nair", role: "Remote Property Owner, San Francisco CA" },
];

const faqs = [
  { question: "What are your property management fees?", answer: "Our standard management fee is 8–10% of collected monthly rent, depending on property type, unit count, and location. Leasing fees for new tenant placement are typically 50–100% of one month's rent. We're transparent about every fee upfront — no hidden charges. Volume discounts are available for portfolios of 5+ units." },
  { question: "What types of properties do you manage?", answer: "We manage single-family homes, duplexes, triplexes, small to mid-size apartment buildings (up to 100 units), condominiums, and townhomes. We work with individual landlords, multi-property investors, and small portfolio owners. Commercial property management is available on a case-by-case basis." },
  { question: "How do you handle reporting and owner communication?", answer: "Every owner gets access to a real-time web portal showing income, expenses, maintenance requests, lease details, and documents. Monthly statements are delivered by the 15th. We send immediate notifications for any major issues. You'll also have a dedicated property manager available by phone, email, or text." },
  { question: "What happens if a tenant needs to be evicted?", answer: "We follow a strict legal process: written notices per local law, payment plan negotiations if appropriate, formal eviction filing with our attorney network if necessary, and coordination with courts and law enforcement through resolution. Our thorough screening process means evictions are extremely rare — under 1% of our placements." },
  { question: "How quickly do you respond to maintenance requests?", answer: "Emergency requests (water leaks, no heat, security issues) receive immediate response within 1 hour, 24/7. Non-emergency requests are acknowledged within 4 hours and typically resolved within 24–48 hours depending on scope. Owners are notified of any repair exceeding their pre-set approval threshold before work begins." },
  { question: "Can I still be involved in decisions about my property?", answer: "Absolutely. You set the parameters — approval thresholds for maintenance costs, tenant criteria, rent pricing, and renovation decisions. We handle the day-to-day execution within your guidelines and consult you on any decisions outside those parameters. You're as hands-on or hands-off as you want to be." },
];

const relatedServices = [
  { title: "Real Estate Investment", href: "/services/real-estate-investment", description: "Identify high-yield investment properties and build a portfolio strategy that maximizes cash flow and long-term appreciation." },
  { title: "Home Selling", href: "/services/home-selling", description: "When it's time to sell an investment property, our marketing strategies maximize sale price and minimize time on market." },
  { title: "Analytics & Performance", href: "/services/analytics-performance", description: "Track portfolio performance, occupancy trends, and financial KPIs with custom dashboards and data-driven insights." },
];

export default function PropertyManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-600 via-neutral-700 to-stone-900 pt-32 pb-28">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-stone-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-neutral-400/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex justify-center mb-6 text-stone-300 text-sm">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/#services" className="hover:text-white transition">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Property Management</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/20">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" /></svg>
            Professional Property Management
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Hassle-Free Property Management<br className="hidden md:block" /> That Maximizes Your Returns</h1>
          <p className="text-xl text-stone-200 max-w-3xl mx-auto mb-10 leading-relaxed">Full-service property management for landlords and investors. We handle tenants, maintenance, rent collection, and reporting — so your rental income is truly passive.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-stone-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-stone-50 transition-all shadow-lg shadow-stone-900/20 hover:shadow-xl hover:-translate-y-0.5">Get a Free Property Evaluation</Link>
            <Link href="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">See Our Management Plans</Link>
          </div>
          <p className="mt-6 text-stone-300/70 text-sm">2,800+ units managed with a 97% occupancy rate</p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-stone-600 mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
          {["Licensed & Insured", "24/7 Maintenance Support", "Transparent Owner Portals", "Legally Compliant Leases"].map((item, i) => (
            <span key={i} className="flex items-center gap-2"><svg className="w-5 h-5 text-stone-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> {item}</span>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-stone-600 font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Complete Property Management Services</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Everything you need to protect your investment and maximize rental income — from tenant placement to financial reporting, all under one roof.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-stone-200 hover:shadow-lg hover:shadow-stone-100/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-stone-50 to-neutral-100 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
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
            <span className="text-stone-400 font-semibold text-sm uppercase tracking-wider">Proven Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Management Performance Metrics</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Real numbers from properties we manage for landlords and investors across the country.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((r, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <div className="text-4xl font-bold text-stone-400 mb-2">{r.metric}</div>
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
            <span className="text-stone-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Property Management That Protects Your Investment</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Your rental property is a significant investment. We treat it like our own — maximizing returns while minimizing your stress.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-stone-50/50 border border-stone-100 rounded-2xl p-6 hover:bg-stone-50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-stone-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
            <span className="text-stone-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">What Property Owners Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
                <svg className="absolute top-6 right-8 w-12 h-12 text-stone-100" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" /></svg>
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}</div>
                <p className="text-gray-600 leading-relaxed mb-6 relative z-10">&ldquo;{t.quote}&rdquo;</p>
                <div><div className="font-bold text-gray-900">{t.author}</div><div className="text-stone-600 text-sm">{t.role}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <span className="text-stone-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">From Onboarding to Ongoing Management</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A structured, transparent process that gets your property under professional management quickly and keeps it performing at its best.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-stone-200 via-stone-400 to-stone-200" />
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center relative">
                <div className="w-12 h-12 bg-stone-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4 relative z-10 shadow-lg shadow-stone-200">{s.step}</div>
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
            <span className="text-stone-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Common Questions About Property Management</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-100 hover:border-stone-200 transition-colors">
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
            <span className="text-stone-600 font-semibold text-sm uppercase tracking-wider">Related Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Grow Your Portfolio</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((rs, i) => (
              <Link key={i} href={rs.href} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-stone-200 hover:shadow-lg hover:shadow-stone-50 transition-all block">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-stone-600 transition-colors">{rs.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-4">{rs.description}</p>
                <span className="text-stone-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-600 via-neutral-700 to-stone-900 py-24">
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-stone-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-neutral-400/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for Truly Passive Rental Income?</h2>
          <p className="text-xl text-stone-200 mb-10 max-w-2xl mx-auto leading-relaxed">Book a free property evaluation. We&apos;ll assess your rental&apos;s market value, identify improvement opportunities, and show you exactly how our management can increase your net income.</p>
          <Link href="/contact" className="inline-block bg-white text-stone-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-stone-50 transition-all shadow-lg shadow-stone-900/20 hover:shadow-xl hover:-translate-y-0.5">Get Your Free Property Evaluation</Link>
          <p className="mt-6 text-stone-300/60 text-sm">Includes a rental market analysis and income projection</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
