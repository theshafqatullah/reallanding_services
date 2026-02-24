import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Home Inspection Services | RealLanding",
  description:
    "Comprehensive home inspection services for buyers and sellers — 150+ point inspections, 48-hour report delivery, and 100% licensed inspectors you can trust.",
};

const stats = [
  { value: "5,000+", label: "Inspections Done" },
  { value: "48hr", label: "Report Delivery" },
  { value: "150+", label: "Point Inspection" },
  { value: "100%", label: "Licensed Inspectors" },
];

const services = [
  { icon: "🔍", title: "Pre-Purchase Home Inspection", description: "Our most comprehensive inspection covers every accessible system and component of the home — roof to foundation, attic to crawl space — giving buyers the full picture before they commit to the biggest purchase of their lives." },
  { icon: "📋", title: "Pre-Listing Seller Inspection", description: "Identify and address issues before listing your home. A pre-listing inspection eliminates surprise repair requests, accelerates negotiations, and gives buyers confidence — helping your property sell faster and at a higher price." },
  { icon: "☢️", title: "Radon Testing & Environmental", description: "We test for radon gas, mold, asbestos, and lead paint — invisible hazards that can impact your family&apos;s health and the property&apos;s value. Results are lab-verified and included in your comprehensive inspection report." },
  { icon: "🏗️", title: "Structural Assessment", description: "Our structural specialists examine foundations, load-bearing walls, framing, and settling patterns to identify cracks, shifts, and potential structural concerns that could lead to costly repairs down the road." },
  { icon: "⚡", title: "Systems & Mechanical Inspection", description: "We thoroughly evaluate HVAC, electrical panels, plumbing, water heaters, and all major mechanical systems — checking for code compliance, safety hazards, remaining useful life, and deferred maintenance issues." },
  { icon: "📊", title: "Detailed Digital Reporting", description: "Within 48 hours, you receive a comprehensive digital report with high-resolution photos, severity ratings, repair cost estimates, and prioritized recommendations — making it easy to understand, share, and act on findings." },
];

const steps = [
  { step: 1, title: "Schedule Your Inspection", description: "Book online or call us to schedule at a time that works for you. We accommodate rush requests and can often inspect within 24–48 hours of booking." },
  { step: 2, title: "On-Site Inspection", description: "Our licensed inspector arrives on-site and conducts a thorough 150+ point inspection lasting 2–4 hours, examining every accessible system, component, and surface." },
  { step: 3, title: "Walk-Through & Q&A", description: "We walk you through our findings on-site, answering questions in real time and pointing out key areas of concern so you understand the property&apos;s true condition." },
  { step: 4, title: "Digital Report Delivery", description: "Within 48 hours, you receive a detailed, photo-rich digital report with severity ratings, repair estimates, and prioritized action items for easy decision-making." },
  { step: 5, title: "Post-Report Consultation", description: "We remain available after delivery to clarify findings, discuss repair priorities, and help you or your agent build a strong negotiation strategy based on the results." },
];

const benefits = [
  { title: "Avoid Costly Surprises", desc: "Uncover hidden issues — from foundation cracks to outdated wiring — before you close, so you can negotiate repairs or walk away with confidence." },
  { title: "48-Hour Report Turnaround", desc: "We deliver detailed, photo-rich digital reports within 48 hours, keeping your transaction on schedule and your contingency deadlines on track." },
  { title: "150+ Point Inspection", desc: "Every inspection follows our comprehensive 150+ point checklist covering structure, roof, plumbing, electrical, HVAC, insulation, drainage, and more." },
  { title: "Licensed & Insured Inspectors", desc: "Every inspector on our team is state-licensed, fully insured, and averages 10+ years of residential inspection experience across all property types." },
  { title: "Negotiation Leverage", desc: "Our detailed findings and repair cost estimates give buyers and agents the data they need to negotiate credits, price reductions, or seller-funded repairs." },
  { title: "Peace of Mind", desc: "Whether you&apos;re buying your first home or selling your fifth, knowing the true condition of the property gives you the confidence to make smart decisions." },
];

const results = [
  { metric: "5,000+", label: "Inspections completed", period: "Across residential & commercial" },
  { metric: "48hr", label: "Average report delivery", period: "With rush options available" },
  { metric: "$12K", label: "Avg savings from findings", period: "Through negotiated repairs & credits" },
  { metric: "4.9/5", label: "Average client rating", period: "Based on 2,100+ reviews" },
];

const testimonials = [
  { quote: "The inspector found a cracked heat exchanger that could have been a carbon monoxide hazard. The seller had no idea. Thanks to RealLanding&apos;s thorough inspection, we negotiated a $14,000 credit and replaced the entire HVAC system before moving in.", author: "Amanda & Chris L.", role: "Home Buyers, Charlotte NC" },
  { quote: "As a listing agent, I recommend RealLanding&apos;s pre-listing inspections to every seller. My last client spent $2,800 on fixes that the inspector flagged, and we sold the home in 5 days with zero repair requests from the buyer. It pays for itself every time.", author: "Marcus Reeves", role: "Listing Agent, Phoenix AZ" },
];

const faqs = [
  { question: "What does a home inspection cover?", answer: "Our 150+ point inspection covers the roof, attic, insulation, exterior surfaces, foundation, basement, crawl space, structural components, plumbing, electrical systems, HVAC, water heaters, appliances, windows, doors, drainage, and grading. We also check for visible signs of water damage, mold, and pest activity." },
  { question: "How long does an inspection take?", answer: "A typical single-family home inspection takes 2–4 hours depending on the size, age, and condition of the property. Larger homes, older properties, or homes with additional structures (pools, detached garages) may take longer. We never rush — thoroughness is our priority." },
  { question: "How much does a home inspection cost?", answer: "Standard home inspections typically range from $350–$600 depending on the property size, age, and location. Add-on services like radon testing ($150), mold testing ($200), or sewer scope ($250) are available. We provide transparent pricing upfront with no hidden fees." },
  { question: "Should I attend the inspection?", answer: "We strongly encourage buyers to attend the final walk-through portion of the inspection. This is your opportunity to see the property&apos;s systems firsthand, ask questions, and learn about maintenance requirements. We typically schedule the walk-through for the last 30–60 minutes." },
  { question: "What happens if major issues are found?", answer: "If we uncover significant issues — structural problems, roof failures, electrical hazards — we document them thoroughly with photos and repair cost estimates. Your agent can then negotiate repairs, credits, or a price reduction. In some cases, inspection findings may justify walking away from the deal entirely." },
  { question: "Do you inspect new construction homes?", answer: "Absolutely. New construction inspections are critical because builders make mistakes too. We perform phase inspections (pre-drywall, pre-final, and final) to catch issues while they&apos;re still easy and inexpensive to fix — before drywall, flooring, and finishes cover them up." },
];

const relatedServices = [
  { title: "Home Buying Assistance", href: "/services/home-buying", description: "Pair your inspection with our expert buyer&apos;s agent services for full-service support from property search to closing day." },
  { title: "Home Selling Services", href: "/services/home-selling", description: "Get a pre-listing inspection to identify and fix issues before going to market — sell faster with fewer surprises." },
  { title: "Video Marketing", href: "/services/video-marketing", description: "Showcase your property&apos;s best features with professional video tours, drone footage, and virtual walk-throughs that attract serious buyers." },
];

export default function HomeInspectionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-600 via-gray-700 to-slate-900 pt-32 pb-28">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-slate-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-gray-400/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex justify-center mb-6 text-slate-300 text-sm">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/#services" className="hover:text-white transition">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Home Inspection</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/20">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
            Comprehensive Home Inspection Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Know Exactly What You&apos;re<br className="hidden md:block" /> Buying — Before You Buy</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed">Our licensed inspectors perform 150+ point evaluations covering every system and surface — delivering detailed, photo-rich reports within 48 hours so you can buy or sell with total confidence.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-50 transition-all shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/30 hover:-translate-y-0.5">Book an Inspection</Link>
            <Link href="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">View Sample Report</Link>
          </div>
          <p className="mt-6 text-slate-300/70 text-sm">Trusted by 5,000+ buyers, sellers, and agents nationwide</p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-slate-600 mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-slate-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> State-Licensed Inspectors</span>
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-slate-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> Fully Insured & Bonded</span>
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-slate-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> 48-Hour Report Guarantee</span>
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-slate-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> Transparent Pricing</span>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-slate-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Comprehensive Inspection Solutions</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Six specialized inspection services designed to give buyers, sellers, and agents complete visibility into a property&apos;s true condition.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
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
            <span className="text-slate-400 font-semibold text-sm uppercase tracking-wider">Proven Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Protecting Buyers & Sellers — By the Numbers</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Here&apos;s what happens when licensed inspectors combine years of experience with a meticulous 150+ point evaluation process.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((r, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <div className="text-4xl font-bold text-slate-400 mb-2">{r.metric}</div>
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
            <span className="text-slate-600 font-semibold text-sm uppercase tracking-wider">Why Inspect</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">The Smart Investment That Protects Your Biggest One</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">A professional home inspection costs a fraction of the property&apos;s value but can save you tens of thousands in unexpected repairs and safety hazards.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-slate-50/50 border border-slate-100 rounded-2xl p-6 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
            <span className="text-slate-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
                <svg className="absolute top-6 right-8 w-12 h-12 text-slate-100" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" /></svg>
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}</div>
                <p className="text-gray-600 leading-relaxed mb-6 relative z-10">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-bold text-gray-900">{t.author}</div>
                  <div className="text-slate-600 text-sm">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <span className="text-slate-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">From Booking to Report in Five Steps</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A straightforward, transparent process that gives you complete property insights with minimal disruption to your timeline.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-slate-200 via-slate-400 to-slate-200" />
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center relative">
                <div className="w-12 h-12 bg-slate-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4 relative z-10 shadow-lg shadow-slate-200">{s.step}</div>
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
            <span className="text-slate-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Common Home Inspection Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-100 hover:border-slate-200 transition-colors">
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
            <span className="text-slate-600 font-semibold text-sm uppercase tracking-wider">Related Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Complement Your Inspection</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((rs, i) => (
              <Link key={i} href={rs.href} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-50 transition-all block">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-slate-600 transition-colors">{rs.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-4">{rs.description}</p>
                <span className="text-slate-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-600 via-gray-700 to-slate-900 py-24">
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-slate-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gray-400/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Don&apos;t Buy or Sell Blind — Get a Professional Inspection</h2>
          <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">Schedule your comprehensive home inspection today and get a detailed, photo-rich report within 48 hours — so you can make the smartest decision of your life.</p>
          <Link href="/contact" className="inline-block bg-white text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-50 transition-all shadow-lg shadow-slate-900/20 hover:shadow-xl hover:-translate-y-0.5">Schedule Your Inspection</Link>
          <p className="mt-6 text-slate-300/60 text-sm">No commitment required — get a free quote in minutes</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
