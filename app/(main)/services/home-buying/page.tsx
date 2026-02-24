import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Home Buying Assistance | RealLanding",
  description:
    "Expert guidance through every step of the home buying journey — from finding the perfect property to negotiating the best deal and closing with confidence.",
};

const stats = [
  { value: "1,200+", label: "Families Helped" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "$45K", label: "Avg Saved on Purchase" },
  { value: "21 Days", label: "Avg Time to Offer" },
];

const services = [
  { icon: "🏡", title: "Buyer Consultation & Needs Analysis", description: "We start with a deep-dive consultation to understand your lifestyle, budget, commute needs, school preferences, and long-term goals — then build a custom home search strategy around what matters most to you." },
  { icon: "🔎", title: "Property Search & Shortlisting", description: "Gain access to MLS listings, off-market opportunities, pocket listings, and pre-foreclosures. We filter hundreds of properties down to a curated shortlist that matches your exact criteria — saving you weeks of scrolling." },
  { icon: "📊", title: "Market Analysis & Property Valuation", description: "Every property you consider gets a comprehensive comparative market analysis (CMA) including recent sold comps, price-per-square-foot trends, neighborhood appreciation rates, and days-on-market data to ensure you never overpay." },
  { icon: "📝", title: "Offer Strategy & Competitive Positioning", description: "In competitive markets, the right offer strategy wins. We craft compelling offers with strategic escalation clauses, appraisal gap coverage, and flexible terms that make sellers choose your offer over the rest." },
  { icon: "🤝", title: "Negotiation & Inspection Support", description: "From counter-offers to inspection repair requests, we negotiate aggressively on your behalf — leveraging market data and inspection findings to protect your investment and secure the best possible price and terms." },
  { icon: "🎯", title: "Closing Coordination & Move-In Support", description: "We coordinate with your lender, title company, attorney, and inspector to ensure a smooth closing. You&apos;ll get a day-by-day timeline, document checklists, and a dedicated point of contact through move-in day." },
];

const steps = [
  { step: 1, title: "Initial Consultation", description: "We discuss your goals, budget, preferred neighborhoods, must-haves, and deal-breakers to create a personalized home buying roadmap tailored to your needs." },
  { step: 2, title: "Pre-Approval & Planning", description: "We connect you with trusted lenders to secure pre-approval, determine your true budget, and set realistic expectations for your target market." },
  { step: 3, title: "Curated Property Tours", description: "We schedule private showings of hand-picked properties, providing CMA reports for each so you can make fast, informed decisions with confidence." },
  { step: 4, title: "Offer & Negotiation", description: "We craft a winning offer strategy, submit on your behalf, negotiate counter-offers, and manage inspection contingencies to protect your interests." },
  { step: 5, title: "Closing & Keys in Hand", description: "We manage every closing detail — from document review to final walkthrough — and hand you the keys to your new home on schedule." },
];

const benefits = [
  { title: "Save Thousands on Price", desc: "Our negotiation expertise and market data help buyers save an average of $45,000 off asking price through strategic offers and data-backed counter-proposals." },
  { title: "Access Off-Market Deals", desc: "Our agent network and industry relationships uncover pocket listings and off-market properties that never appear on Zillow, Redfin, or Realtor.com." },
  { title: "Reduce Time-to-Close", desc: "With pre-qualified shortlists, streamlined showings, and proactive coordination, our clients go from search to keys in 30% less time than average." },
  { title: "Navigate Competitive Markets", desc: "In bidding wars, our offer strategies — escalation clauses, personal letters, flexible closing dates — give you the edge that wins without overpaying." },
  { title: "Protect Your Investment", desc: "From inspection red flags to appraisal shortfalls, we identify and resolve issues before closing so you buy with confidence and zero surprises." },
  { title: "Stress-Free Experience", desc: "A dedicated buyer&apos;s agent handles every detail — scheduling, paperwork, vendor coordination, and communication — so you can focus on the excitement of finding your home." },
];

const results = [
  { metric: "1,200+", label: "Happy families in new homes", period: "Across 35+ markets nationwide" },
  { metric: "$45K", label: "Average savings per purchase", period: "Through expert negotiation" },
  { metric: "21 Days", label: "Avg time from search to offer", period: "50% faster than market average" },
  { metric: "98%", label: "Client satisfaction rating", period: "Based on 800+ post-close surveys" },
];

const testimonials = [
  { quote: "As first-time buyers in a crazy competitive market, we were terrified. RealLanding&apos;s team found us an off-market property $38K under our budget and handled everything from pre-approval to closing. We moved in three weeks ahead of schedule.", author: "Jessica & Michael T.", role: "First-Time Buyers, Denver CO" },
  { quote: "We relocated from New York to Austin for work and had 30 days to find a home. RealLanding scheduled 12 targeted showings in one weekend, helped us win a bidding war with a smart escalation clause, and coordinated a remote closing. Absolutely incredible service.", author: "Raj Patel", role: "Relocating Buyer, Austin TX" },
];

const faqs = [
  { question: "How much does it cost to use a buyer&apos;s agent?", answer: "In most transactions, the seller pays the buyer&apos;s agent commission — meaning our services come at no direct cost to you. We&apos;ll explain the full compensation structure during your initial consultation so there are never any surprises." },
  { question: "How long does the home buying process take?", answer: "On average, our clients go from initial consultation to closing in 45–60 days. The search phase typically takes 2–4 weeks, and the closing process takes another 30–45 days after an accepted offer. Timeline varies based on market conditions and financing." },
  { question: "What should I have ready before starting my home search?", answer: "Ideally, you&apos;ll want a mortgage pre-approval letter, a clear idea of your budget (including closing costs), a list of must-haves vs. nice-to-haves, and preferred neighborhoods. We&apos;ll help you organize everything during our first meeting." },
  { question: "Do you help with new construction purchases?", answer: "Absolutely. We represent buyers in new construction transactions, reviewing builder contracts, negotiating upgrades and incentives, monitoring construction timelines, and conducting pre-drywall and final inspections to protect your interests." },
  { question: "What happens if the home inspection reveals problems?", answer: "We review every inspection report line by line and advise you on which issues are deal-breakers vs. negotiation leverage. We&apos;ll request repairs, credits, or price reductions on your behalf — and if the property has serious structural issues, we&apos;ll recommend walking away." },
  { question: "Can you help me buy an investment property?", answer: "Yes — we work with investors of all levels. We analyze cap rates, cash-on-cash returns, rental comps, and neighborhood growth trajectories to help you identify properties that maximize your investment returns." },
];

const relatedServices = [
  { title: "Home Inspection Services", href: "/services/home-inspection", description: "Protect your investment with a comprehensive 150+ point inspection that uncovers hidden issues before you commit to purchasing your new home." },
  { title: "Home Selling Services", href: "/services/home-selling", description: "Selling your current home while buying a new one? Our coordinated buy-sell strategy ensures seamless timing and maximum value on both sides." },
  { title: "Paid Advertising", href: "/services/paid-advertising", description: "Find highly motivated sellers and off-market deals faster with targeted digital advertising campaigns across Google, Facebook, and Instagram." },
];

export default function HomeBuyingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-600 via-blue-700 to-sky-900 pt-32 pb-28">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-blue-400/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex justify-center mb-6 text-sky-200 text-sm">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/#services" className="hover:text-white transition">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Home Buying</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/20">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" /></svg>
            Home Buying Assistance for Real Estate
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Find Your Dream Home &<br className="hidden md:block" /> Buy It for the Best Price</h1>
          <p className="text-xl text-sky-100 max-w-3xl mx-auto mb-10 leading-relaxed">From first-time buyers to seasoned investors, our expert buyer&apos;s agents guide you through every step — finding the right property, negotiating the best deal, and closing with confidence.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-sky-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-sky-50 transition-all shadow-lg shadow-sky-900/20 hover:shadow-xl hover:shadow-sky-900/30 hover:-translate-y-0.5">Start Your Home Search</Link>
            <Link href="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">Book a Free Consultation</Link>
          </div>
          <p className="mt-6 text-sky-200/70 text-sm">Trusted by 1,200+ happy homeowners across the US</p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-sky-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> Licensed & Certified Agents</span>
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-sky-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> Buyer-First Commitment</span>
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-sky-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> Full MLS & Off-Market Access</span>
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-sky-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> No Hidden Fees</span>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">End-to-End Home Buying Support</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Six essential services that take you from first-time dreaming to front-door keys — with expert guidance and fierce advocacy at every stage.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-100/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-sky-50 to-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
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
            <span className="text-sky-400 font-semibold text-sm uppercase tracking-wider">Proven Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Helping Families Find Home — By the Numbers</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Here&apos;s what happens when experienced buyer&apos;s agents combine local market expertise with data-driven negotiation strategies.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((r, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <div className="text-4xl font-bold text-sky-400 mb-2">{r.metric}</div>
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
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">The Home Buying Advantage with RealLanding</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Six powerful reasons our clients consistently find better homes, pay less, and close faster than buyers who go it alone.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-sky-50/50 border border-sky-100 rounded-2xl p-6 hover:bg-sky-50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">What Our Buyers Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
                <svg className="absolute top-6 right-8 w-12 h-12 text-sky-100" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" /></svg>
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}</div>
                <p className="text-gray-600 leading-relaxed mb-6 relative z-10">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-bold text-gray-900">{t.author}</div>
                  <div className="text-sky-600 text-sm">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">From Dream Home to Front Door in Five Steps</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A proven, streamlined process that takes the stress out of home buying and puts you in your new home faster.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-sky-200 via-sky-400 to-sky-200" />
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center relative">
                <div className="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4 relative z-10 shadow-lg shadow-sky-200">{s.step}</div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Common Home Buying Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-100 hover:border-sky-200 transition-colors">
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
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Related Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Complete Your Home Buying Journey</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((rs, i) => (
              <Link key={i} href={rs.href} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-50 transition-all block">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">{rs.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-4">{rs.description}</p>
                <span className="text-sky-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-600 via-blue-700 to-sky-900 py-24">
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Find Your Dream Home?</h2>
          <p className="text-xl text-sky-100 mb-10 max-w-2xl mx-auto leading-relaxed">Book a free buyer&apos;s consultation and let our experts build a personalized home search strategy — so you can stop scrolling and start touring.</p>
          <Link href="/contact" className="inline-block bg-white text-sky-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-sky-50 transition-all shadow-lg shadow-sky-900/20 hover:shadow-xl hover:-translate-y-0.5">Schedule Your Free Consultation</Link>
          <p className="mt-6 text-sky-200/60 text-sm">No commitment required — get a personalized home buying plan in 30 minutes</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
