import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Branding & Market Positioning for Real Estate | RealLanding",
  description:
    "Strategic brand identity, visual design, market positioning, and brand storytelling that differentiate your real estate business and attract ideal clients.",
};

const stats = [
  { value: "89%", label: "Of Buyers Choose Agents by Brand Trust" },
  { value: "5.5×", label: "More Referrals for Strong Brands" },
  { value: "23%", label: "Higher Commission for Premium Brands" },
  { value: "340+", label: "Real Estate Brands Built" },
];

const services = [
  { icon: "🎨", title: "Brand Identity Design", description: "Complete visual identity including logo, colors, typography, photography style, and brand guidelines that make you instantly recognizable in your market." },
  { icon: "📐", title: "Brand Strategy & Positioning", description: "Define your unique value proposition, ideal client profile, competitive differentiation, and brand promise — the strategic foundation everything else builds on." },
  { icon: "✍️", title: "Brand Voice & Messaging", description: "Develop a consistent brand voice, taglines, elevator pitches, and messaging frameworks that resonate with your target audience across every touchpoint." },
  { icon: "📸", title: "Professional Brand Photography", description: "High-quality headshots, lifestyle photography, team photos, and environmental portraits that communicate professionalism, personality, and approachability." },
  { icon: "📋", title: "Brand Collateral & Templates", description: "Branded templates for listing presentations, CMAs, social media, business cards, signage, email signatures, and marketing materials — all pixel-perfect." },
  { icon: "🏆", title: "Brand Audit & Refresh", description: "Evaluate your existing brand's strengths, weaknesses, and market perception. Refresh outdated elements while preserving equity you've already built." },
];

const steps = [
  { step: 1, title: "Discovery & Research", description: "Deep dive into your goals, market, competition, ideal clients, and current brand perception through interviews and market analysis." },
  { step: 2, title: "Strategy & Positioning", description: "Define your unique positioning, brand promise, personality, and competitive differentiation in a detailed brand strategy document." },
  { step: 3, title: "Visual Identity Design", description: "Create logo concepts, color palettes, typography, and visual elements through a collaborative design process with revisions." },
  { step: 4, title: "Collateral & Templates", description: "Design all branded materials — presentations, social templates, signage, stationery, and marketing collateral for immediate use." },
  { step: 5, title: "Launch & Guidelines", description: "Deliver comprehensive brand guidelines and launch strategy to ensure consistent implementation across all channels and team members." },
];

const benefits = [
  { title: "Attract Premium Clients", desc: "A premium brand attracts premium clients who value quality over price — leading to higher-value deals and better commission rates." },
  { title: "Stand Out Instantly", desc: "In a sea of generic real estate brands, a distinctive identity makes you memorable and ensures prospects choose you over competitors." },
  { title: "Build Trust Before Contact", desc: "Consistent, professional branding signals credibility and expertise — prospects trust you before they've even spoken with you." },
  { title: "Command Higher Fees", desc: "Agents with strong brands can charge premium commissions because clients perceive greater value in working with an established brand." },
  { title: "Generate More Referrals", desc: "A memorable brand stays top-of-mind with past clients, making them far more likely to refer friends, family, and colleagues." },
  { title: "Consistent Marketing", desc: "Brand guidelines and templates ensure every marketing piece looks professional, saving time and preventing off-brand content." },
];

const results = [
  { metric: "89%", label: "Of clients say brand trust matters", period: "When choosing an agent" },
  { metric: "5.5×", label: "More referral business", period: "For branded vs unbranded agents" },
  { metric: "23%", label: "Higher average commission", period: "For premium-branded agents" },
  { metric: "42%", label: "Faster listing acquisitions", period: "With professional branding" },
];

const testimonials = [
  { quote: "The brand RealLanding created for my team is absolutely stunning. We went from looking like every other agent to having a luxury brand that attracts high-net-worth clients. Our average deal size has increased 40% since the rebrand.", author: "Victoria L.", role: "Team Lead, Scottsdale AZ" },
  { quote: "I put off branding for years thinking it wasn't worth the investment. I was so wrong. The brand strategy and visual identity RealLanding built has transformed how clients perceive my business. I get compliments on my marketing constantly.", author: "David R.", role: "Solo Agent, Charlotte NC" },
];

const faqs = [
  { question: "How long does a full branding project take?", answer: "A complete brand identity project (strategy, visual design, collateral, and guidelines) typically takes 6–8 weeks from kickoff to final delivery. Brand audits and refreshes can be completed in 3–4 weeks. Rush timelines are available." },
  { question: "What if I already have a logo I like?", answer: "We can work with your existing logo as a foundation and build a comprehensive brand system around it — including colors, typography, photography direction, messaging, and collateral templates. Not every project needs to start from scratch." },
  { question: "Do you help with implementation after the brand is designed?", answer: "Yes. We can handle full implementation including website design, social media setup, signage production coordination, email templates, and CRM customization. We also provide brand guidelines to empower your team to maintain consistency." },
  { question: "How is branding different from marketing?", answer: "Branding is WHO you are — your identity, positioning, and promise. Marketing is HOW you communicate it. Strong branding makes all your marketing more effective because every piece starts from a place of clarity and consistency." },
  { question: "What's included in a brand strategy?", answer: "Our brand strategy includes: market and competitive analysis, ideal client profiles, unique value proposition, brand positioning statement, personality and voice guidelines, messaging framework, taglines, and an elevator pitch — all documented in a comprehensive strategy deck." },
  { question: "How much does branding cost?", answer: "Brand audits start at $1,500. Logo and visual identity packages range from $3,000–$8,000. Full brand strategy with identity design, collateral, and guidelines ranges from $8,000–$20,000 depending on scope. Every project is custom-quoted after a discovery call." },
];

const relatedServices = [
  { title: "Website Design & Development", href: "/services/website-design-development", description: "Translate your brand into a stunning, high-converting website that embodies your visual identity and messaging." },
  { title: "Social Media Marketing", href: "/services/social-media-marketing", description: "Deploy your new brand across all social platforms with a consistent voice, visual style, and content strategy." },
  { title: "Content Marketing", href: "/services/content-marketing", description: "Create branded blog posts, market reports, and guides that reinforce your authority and attract ideal clients." },
];

export default function BrandingPage() {
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
            <span className="text-white font-medium">Branding &amp; Market Positioning</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/20">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>
            Brand &amp; Identity
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Build a Real Estate Brand<br className="hidden md:block" /> That Commands Attention</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-10 leading-relaxed">Strategic brand identity, market positioning, and visual design that differentiate you from every other agent and attract your ideal clients.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Start Your Brand Project</Link>
            <Link href="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">See Our Portfolio</Link>
          </div>
          <p className="mt-6 text-green-200/70 text-sm">340+ real estate brands designed and launched</p>
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
          {["Award-Winning Designers", "Real Estate–Specific Expertise", "Full Identity Systems", "Comprehensive Brand Guidelines"].map((item, i) => (
            <span key={i} className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> {item}</span>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Everything You Need for a Standout Brand</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">From strategic positioning to visual design, we build complete brand systems that make real estate professionals unforgettable.</p>
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
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Proven Impact</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">The Business Value of Strong Branding</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A professional brand isn&apos;t a luxury — it&apos;s the highest-leverage investment you can make in your real estate business.</p>
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
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Why Branding Matters</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Your Brand Is Your Most Valuable Asset</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">In a market where buyers and sellers have endless choices, your brand is what makes them choose you — before price, before reputation, before anything else.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">What Our Clients Say</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">From Discovery to a Distinctive Brand</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Our proven five-step branding process ensures strategic clarity at every stage and a final product you&apos;re proud to put your name behind.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Common Questions About Branding</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Bring Your Brand to Life</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build a Brand That Stands Out?</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed">Book a free brand consultation and discover how strategic positioning and professional design can transform your real estate business.</p>
          <Link href="/contact" className="inline-block bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Book Your Free Brand Consultation</Link>
          <p className="mt-6 text-green-200/60 text-sm">Includes a complimentary brand audit and positioning analysis</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
