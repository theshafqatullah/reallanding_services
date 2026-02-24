import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Home Selling Services | RealLanding",
  description:
    "Sell your home faster and for top dollar with expert pricing strategy, professional staging, stunning photography, and aggressive marketing that attracts qualified buyers.",
};

const stats = [
  { value: "2,400+", label: "Homes Sold" },
  { value: "102%", label: "Avg List-to-Sale Ratio" },
  { value: "18 Days", label: "Avg Days on Market" },
  { value: "$32K", label: "Avg Above Asking" },
];

const services = [
  { icon: "💰", title: "Pricing Strategy & Market Analysis", description: "We analyze comparable sales, active competition, neighborhood trends, and buyer demand to determine the optimal listing price — positioning your home to attract maximum interest while protecting your equity." },
  { icon: "🪑", title: "Staging Consultation & Design", description: "Our certified staging consultants transform your property into a buyer magnet — decluttering, rearranging, and adding strategic touches that highlight your home&apos;s best features and help buyers envision their future life there." },
  { icon: "📸", title: "Professional Photography & Media", description: "HDR photography, twilight shots, aerial drone footage, 3D virtual tours, and cinematic video walk-throughs that make your listing stand out in a sea of iPhone photos and generate 3× more showing requests." },
  { icon: "📣", title: "Listing Management & Marketing", description: "Your property goes live across MLS, Zillow, Realtor.com, Redfin, social media, email campaigns, and our exclusive buyer network — with optimized descriptions, strategic timing, and targeted digital advertising." },
  { icon: "✅", title: "Buyer Qualification & Showings", description: "We pre-screen every buyer for financial readiness before scheduling showings, manage open houses, collect real-time feedback, and ensure only serious, qualified prospects tour your property." },
  { icon: "🎯", title: "Negotiation & Closing Coordination", description: "From reviewing offers and negotiating counterterms to managing inspections, appraisals, and title work — we handle every detail through closing day so you net the highest possible price with minimal stress." },
];

const steps = [
  { step: 1, title: "Strategy & Pricing", description: "We conduct a deep-dive CMA, assess your property&apos;s unique selling points, and set a data-driven listing price designed to maximize buyer interest and final sale price." },
  { step: 2, title: "Prep & Stage", description: "Our staging team prepares your home for market — decluttering, making cosmetic improvements, and styling each room to photograph beautifully and appeal to your target buyer." },
  { step: 3, title: "Professional Media", description: "We capture stunning HDR photos, drone aerial shots, 3D tours, and cinematic video walk-throughs that make your listing irresistible across every platform." },
  { step: 4, title: "Launch & Market", description: "Your property goes live with a coordinated multi-channel launch — MLS syndication, social ads, email blasts, open houses, and agent networking to drive maximum traffic." },
  { step: 5, title: "Negotiate & Close", description: "We review every offer, negotiate the strongest terms, manage inspections and appraisals, and coordinate a smooth closing — putting the maximum net proceeds in your pocket." },
];

const benefits = [
  { title: "Sell Above Asking Price", desc: "Our clients sell for an average of $32K above asking price thanks to strategic pricing, professional presentation, and competitive offer management." },
  { title: "Faster Time to Close", desc: "Properties listed with RealLanding sell in an average of 18 days — 40% faster than the market average — because our marketing generates immediate, qualified buyer interest." },
  { title: "Professional Presentation", desc: "HDR photography, drone footage, staging, and 3D tours make your listing stand out and attract 3× more showing requests than properties with standard photos." },
  { title: "Maximum Market Exposure", desc: "Your home is seen by thousands of buyers through MLS, Zillow, social media advertising, email campaigns, and our exclusive network of qualified buyer leads." },
  { title: "Expert Negotiation", desc: "Our agents negotiate from a position of strength — leveraging multiple offers, market data, and strategic counterterms to maximize your net proceeds on every deal." },
  { title: "Stress-Free Process", desc: "From staging to closing, your dedicated listing agent handles every detail — showings, feedback, offers, inspections, appraisals, and paperwork — so you can focus on your next chapter." },
];

const results = [
  { metric: "2,400+", label: "Homes sold successfully", period: "Across 40+ markets nationwide" },
  { metric: "102%", label: "Average list-to-sale price ratio", period: "Consistently above asking" },
  { metric: "18 Days", label: "Average days on market", period: "40% faster than market avg" },
  { metric: "$32K", label: "Average amount above asking", period: "Through expert negotiation" },
];

const testimonials = [
  { quote: "We were nervous about selling in a slowing market, but RealLanding priced our home perfectly, staged it beautifully, and generated 14 showings in the first weekend. We accepted an offer $41K over asking in just 9 days. The whole experience was seamless from start to close.", author: "Karen & Tom W.", role: "Home Sellers, Raleigh NC" },
  { quote: "After a failed 6-month listing with another agent, we switched to RealLanding. They re-staged the property, shot new professional media, relaunched with a fresh marketing strategy, and sold our home in 3 weeks for $28K more than the previous agent&apos;s best offer.", author: "Daniel Nguyen", role: "Home Seller, Seattle WA" },
];

const faqs = [
  { question: "How do you determine the right listing price?", answer: "We perform a comprehensive comparative market analysis (CMA) that evaluates recent sold comps, active competition, price-per-square-foot trends, neighborhood conditions, and current buyer demand. The goal is to price your home at the sweet spot that maximizes interest and drives competitive offers — not too high to sit, not too low to leave money on the table." },
  { question: "How long will it take to sell my home?", answer: "Our average days on market is 18 days — significantly faster than the national average. However, timeline depends on pricing strategy, property condition, local market conditions, and seasonality. During your initial consultation, we&apos;ll set realistic expectations based on current data in your specific market." },
  { question: "What does it cost to sell with RealLanding?", answer: "Our listing commission is competitive with the local market, and we&apos;ll discuss all costs transparently during our initial meeting — including staging, photography, and marketing expenses. Many of these are included in our full-service packages. Our goal is to net you more money after all costs than you&apos;d receive with any other agent." },
  { question: "Do I need to stage my home?", answer: "Staged homes sell 73% faster and for 6–10% more than non-staged homes according to the National Association of Realtors. We provide a free staging consultation with every listing and recommend a level of staging appropriate for your property, price point, and market. Even minor staging adjustments can have a significant impact on buyer perception." },
  { question: "What happens if my home doesn&apos;t sell?", answer: "If your home doesn&apos;t receive an acceptable offer within the agreed timeframe, we regroup and adjust — whether that means a price adjustment, enhanced marketing, additional staging, or a temporary off-market strategy. We don&apos;t believe in long-term contracts that lock you in; our goal is to adapt quickly and deliver results." },
  { question: "Can you help me buy and sell at the same time?", answer: "Absolutely — this is one of our specialties. We coordinate simultaneous buy-sell transactions to align closing dates, bridge financing gaps, and minimize the stress of moving between homes. Many of our clients successfully sell their current home and close on their new one within the same week." },
];

const relatedServices = [
  { title: "Home Inspection Services", href: "/services/home-inspection", description: "Get a pre-listing inspection to identify and fix issues before going to market — eliminate surprises and accelerate your sale." },
  { title: "Home Buying Assistance", href: "/services/home-buying", description: "Selling and buying simultaneously? Our buyer&apos;s agents coordinate timing to ensure a seamless transition to your next home." },
  { title: "Social Media Marketing", href: "/services/social-media-marketing", description: "Amplify your listing&apos;s reach with targeted social media campaigns on Instagram, Facebook, and TikTok that put your property in front of thousands of active buyers." },
];

export default function HomeSellingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

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
            <span className="text-white font-medium">Home Selling</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/20">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>
            Full-Service Home Selling Solutions
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Sell Your Home Faster &<br className="hidden md:block" /> For the Highest Possible Price</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-10 leading-relaxed">From pricing strategy and professional staging to aggressive marketing and expert negotiation — we handle every detail so you net more money, close faster, and move on with confidence.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:shadow-green-900/30 hover:-translate-y-0.5">Get Your Free Home Valuation</Link>
            <Link href="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">See Our Selling Results</Link>
          </div>
          <p className="mt-6 text-green-200/70 text-sm">Trusted by 2,400+ homeowners who sold for top dollar</p>
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
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> Top 1% Listing Agents</span>
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> Professional Staging Included</span>
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> Multi-Channel Marketing</span>
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> No Lock-In Contracts</span>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Everything You Need to Sell for Top Dollar</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Six core services that work together to maximize your sale price, minimize your time on market, and make the entire selling experience seamless.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Selling Success — By the Numbers</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Here&apos;s what happens when you combine strategic pricing, professional presentation, and aggressive marketing with expert negotiation.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">The RealLanding Selling Advantage</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Six powerful reasons our sellers consistently get higher prices, faster closings, and a stress-free experience from listing to sold.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">What Our Sellers Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
                <svg className="absolute top-6 right-8 w-12 h-12 text-green-100" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" /></svg>
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <svg key={j} className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}</div>
                <p className="text-gray-600 leading-relaxed mb-6 relative z-10">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-bold text-gray-900">{t.author}</div>
                  <div className="text-green-600 text-sm">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">From Listing to SOLD in Five Steps</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A proven, results-driven process that maximizes your sale price and minimizes your time on market — every single time.</p>
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
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Common Home Selling Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-100 hover:border-green-200 transition-colors">
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
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Related Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Maximize Your Selling Success</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Sell Your Home for Top Dollar?</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed">Get a free, no-obligation home valuation and discover exactly what your property is worth in today&apos;s market — plus a custom selling strategy to maximize your net proceeds.</p>
          <Link href="/contact" className="inline-block bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Get Your Free Home Valuation</Link>
          <p className="mt-6 text-green-200/60 text-sm">No commitment required — get your personalized valuation in 24 hours</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
