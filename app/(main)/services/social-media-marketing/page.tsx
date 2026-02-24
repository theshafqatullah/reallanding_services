import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Social Media Marketing for Real Estate | RealLanding",
  description:
    "Grow your real estate brand with strategic social media management — content creation, agent branding, reels, community management, and lead generation across Instagram, Facebook, LinkedIn & TikTok.",
  openGraph: {
    title: "Social Media Marketing for Real Estate | RealLanding",
    description:
      "Grow your real estate brand with strategic social media management — content creation, agent branding, reels, community management, and lead generation across Instagram, Facebook, LinkedIn & TikTok.",
    url: "https://reallanding.com/services/social-media-marketing",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-social-media-marketing.jpg",
        width: 1200,
        height: 630,
        alt: "Social Media Marketing for Real Estate | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing for Real Estate | RealLanding",
    description:
      "Grow your real estate brand with strategic social media management — content creation, agent branding, reels, community management, and lead generation across Instagram, Facebook, LinkedIn & TikTok.",
    images: ["https://reallanding.com/og-social-media-marketing.jpg"],
    site: "@RealLandingHQ",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Social Media Marketing",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "Grow your real estate brand with strategic social media management — content creation, agent branding, reels, community management, and lead generation across Instagram, Facebook, LinkedIn & TikTok.",
  "url": "https://reallanding.com/services/social-media-marketing",
  "category": "Real Estate Marketing"
};

const stats = [
  { value: "4.8B+", label: "Social Media Users Worldwide" },
  { value: "73%", label: "Of Agents Get Leads from Social" },
  { value: "10×", label: "More Engagement with Video Reels" },
  { value: "47%", label: "Of Buyers First Search Online" },
];

const services = [
  { icon: "📅", title: "Content Strategy & Calendar", description: "Data-driven content calendars aligned with market cycles, seasonal trends, listing inventory, and audience behavior patterns. The right content, at the right time, on the right platform — planned 30 days in advance." },
  { icon: "🎬", title: "Property Posts & Reels", description: "Scroll-stopping property showcases, cinematic reels, carousel walkthroughs, just-listed/just-sold content, and storytelling posts that spark inquiries and showcase your listings beautifully." },
  { icon: "💬", title: "Community Management", description: "We don't post and ghost. Our team responds to every comment, answers DMs within 2 hours, joins neighborhood groups, monitors brand mentions, and builds a community that refers you organically." },
  { icon: "🌟", title: "Agent Personal Branding", description: "Position yourself as the go-to local authority. We develop your unique voice, visual identity, thought-leadership content, and cross-platform presence that builds trust before a prospect ever calls." },
  { icon: "🔄", title: "Multi-Platform Management", description: "Instagram, Facebook, LinkedIn, TikTok, YouTube — managed presence across every platform with content natively optimized for each algorithm, audience, and format specification." },
  { icon: "📊", title: "Analytics & Growth Reporting", description: "Monthly reports beyond vanity metrics — reach, engagement rate, follower growth, link clicks, DM inquiries, lead attribution, and content-to-conversion tracking that proves ROI." },
];

const steps = [
  { n: "01", title: "Brand & Audience Audit", desc: "Deep-dive into your current social presence, competitor landscape, content gaps, and target audience personas to define clear opportunities." },
  { n: "02", title: "Strategy & Content Plan", desc: "Custom strategy with posting cadence, format mix (reels, carousels, stories), brand voice guidelines, hashtag research, and 30-day rolling calendar." },
  { n: "03", title: "Create & Publish", desc: "Our creative team produces high-quality posts, reels, stories, and carousels — then publishes on schedule with platform-specific optimizations." },
  { n: "04", title: "Engage & Grow", desc: "Active community management, comment responses, DM handling, collaboration outreach, and algorithm-optimized engagement tactics to accelerate growth." },
  { n: "05", title: "Report & Optimize", desc: "Monthly analytics review with actionable insights and strategy adjustments — double down on what works, pivot what doesn't, scale what converts." },
];

const benefits = [
  { title: "Consistent Professional Presence", desc: "No more wondering what to post. You get a predictable cadence of high-quality content that keeps your brand active and visible." },
  { title: "Scroll-Stopping Visuals", desc: "Property showcases, market insights, and lifestyle content designed to stop the scroll and spark engagement across every platform." },
  { title: "Authentic Personal Brand", desc: "Build long-term trust and recognition as a real person — not just another agent. Your unique story becomes your greatest marketing asset." },
  { title: "Organic Lead Generation", desc: "DM inquiries, profile visits, link clicks, and referrals that don't cost a dollar in ad spend — growing your pipeline naturally." },
  { title: "Cross-Platform Reach", desc: "Meet buyers, sellers, and investors wherever they spend time — from Instagram and Facebook to TikTok, LinkedIn, and YouTube." },
  { title: "Data-Driven Optimization", desc: "Every month we analyze what's working and refine the strategy — your social media gets smarter and more effective over time." },
];

const results = [
  { metric: "450%", label: "Average follower growth", period: "Within first 6 months" },
  { metric: "82", label: "DM inquiries per month", period: "Average for managed accounts" },
  { metric: "8.7%", label: "Engagement rate achieved", period: "vs 1.5% industry average" },
  { metric: "34", label: "Leads from social monthly", period: "Without paid advertising" },
];

const testimonials = [
  { quote: "I went from struggling to post once a week to having a professional, consistent presence across Instagram, Facebook, and TikTok. My DMs are now full of potential clients who found me through reels.", author: "Lauren K.", role: "Real Estate Agent, Phoenix AZ" },
  { quote: "RealLanding's team understands real estate social media at a level I've never seen. They turned my personal brand into a lead machine — I closed 3 deals last month solely from Instagram.", author: "James W.", role: "Luxury Agent, Scottsdale AZ" },
];

const faqs = [
  { question: "How many posts per week will I get?", answer: "Our standard packages include 4–5 posts per week across platforms, including a strategic mix of static posts, carousels, reels, and stories. Custom frequency and platform combinations are available based on your goals and budget." },
  { question: "Do I need to provide content or photos?", answer: "We handle everything — content ideation, copywriting, graphic design, and video editing. We also love incorporating your property photos, behind-the-scenes footage, and personal moments for authentic content that resonates with your audience." },
  { question: "Which platforms do you manage?", answer: "We manage Instagram, Facebook, LinkedIn, TikTok, and YouTube. Most real estate professionals see the best ROI from Instagram and Facebook, but we recommend the right platform mix based on your target audience, market, and content style." },
  { question: "How soon will I see results?", answer: "You'll see engagement improvements within 2–4 weeks, meaningful follower growth in 60–90 days, and consistent lead flow within 3–6 months. Social media is a compounding strategy — the longer we manage it, the stronger the results become." },
  { question: "Can I approve content before it goes live?", answer: "Absolutely. Every post goes through an approval workflow via a shared content calendar. You'll see captions, graphics, and scheduling 7+ days in advance, with full transparency and easy collaboration." },
  { question: "What makes your social media management different?", answer: "We exclusively serve real estate professionals. Our team understands property marketing, agent branding, market trends, and the content formats that actually generate leads in real estate — not generic social media management repackaged for your industry." },
];

const relatedServices = [
  { title: "Video Marketing", href: "/services/video-marketing", description: "Professional property tours, drone footage, and cinematic reels that fuel your social media content pipeline." },
  { title: "Content Marketing", href: "/services/content-marketing", description: "SEO blogs, neighborhood guides, and market reports that provide source material for weeks of social content." },
  { title: "Paid Advertising", href: "/services/paid-advertising", description: "Amplify your top-performing organic posts with targeted ad campaigns across Facebook, Instagram, and TikTok." },
];

export default function SocialMediaMarketingPage() {
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
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-green-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-green-400/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex justify-center mb-6 text-green-200 text-sm">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/#services" className="hover:text-white transition">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Social Media Marketing</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/20">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>
            Social Media Marketing for Real Estate
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Turn Your Social Profiles Into<br className="hidden md:block" /> Lead-Generating Machines</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-10 leading-relaxed">We create scroll-stopping content, build engaged communities, and position you as the go-to agent in your market — all without you lifting a finger.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Get a Free Strategy Call</Link>
            <Link href="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">See Our Portfolio</Link>
          </div>
          <p className="mt-6 text-green-200/70 text-sm">Managing 100+ real estate social accounts nationwide</p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-1">{s.value}</div>
              <div className="text-gray-500 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> Real Estate Social Specialists</span>
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> All Platforms Managed</span>
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> Content Approval Workflow</span>
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> Monthly Performance Reports</span>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Full-Service Social Media Management</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">From content creation to community building — everything you need to dominate social media in your market, managed by a team that lives and breathes real estate.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Social Media Performance That Delivers</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Real metrics from real estate professionals whose social media we manage — not vanity numbers, but business-driving results.</p>
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
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Why It Matters</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Why Real Estate Pros Choose Our Social Media Service</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Social media isn&apos;t optional anymore — it&apos;s where your next client is scrolling right now. Random posting doesn&apos;t work. You need a strategic, consistent presence that builds trust and drives inquiries.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">How We Grow Your Social Presence</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A five-step methodology that turns inconsistent posting into a strategic, lead-generating social media machine.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-green-200 via-emerald-400 to-green-200" />
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((s) => (
              <div key={s.n} className="text-center relative">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4 relative z-10 shadow-lg shadow-green-200">{s.n}</div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-100 hover:border-green-200 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-900 [&::-webkit-details-marker]:hidden">
                  {f.question}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 -mt-2">
                  <p className="text-gray-500 leading-relaxed">{f.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Related Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Amplify Your Social Media Results</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((s, i) => (
              <Link key={i} href={s.href} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-green-200 hover:shadow-lg hover:shadow-green-50 transition-all block">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-4">{s.description}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Dominate Social Media in Your Market?</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed">Book a free strategy call and we&apos;ll build a custom social media plan that turns followers into closings — starting with your first 30-day content calendar.</p>
          <Link href="/contact" className="inline-block bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Get Your Free Strategy Call</Link>
          <p className="mt-6 text-green-200/60 text-sm">Includes a free audit of your current social media presence</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
