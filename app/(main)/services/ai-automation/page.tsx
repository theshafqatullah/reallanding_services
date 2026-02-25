import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { AnimatedSections } from "@/app/components/AnimateOnScroll";
import FAQAccordion from "@/app/components/FAQAccordion";

export const metadata: Metadata = {
  title: "AI Automation for Real Estate | RealLanding",
  description:
    "AI-powered chatbots, voice assistants, lead qualification, predictive analytics, and workflow automation built for real estate professionals.",
  openGraph: {
    title: "AI Automation for Real Estate | RealLanding",
    description:
      "AI-powered chatbots, voice assistants, lead qualification, predictive analytics, and workflow automation built for real estate professionals.",
    url: "https://reallanding.com/services/ai-automation",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-ai-automation.jpg",
        width: 1200,
        height: 630,
        alt: "AI Automation for Real Estate | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Real Estate | RealLanding",
    description:
      "AI-powered chatbots, voice assistants, lead qualification, predictive analytics, and workflow automation built for real estate professionals.",
    images: ["https://reallanding.com/og-ai-automation.jpg"],
    site: "@RealLandingHQ",
  },
};


// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI Automation",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "AI-powered chatbots, voice assistants, lead qualification, predictive analytics, and workflow automation built for real estate professionals.",
  "url": "https://reallanding.com/services/ai-automation",
  "category": "Real Estate Marketing"
};


const stats = [
  { value: "78%", label: "Faster Lead Response Time" },
  { value: "24/7", label: "Automated Lead Engagement" },
  { value: "3.4×", label: "More Qualified Leads Per Month" },
  { value: "62%", label: "Reduction in Manual Tasks" },
];

const services = [
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm7.5-9v1.5m-4.5 0v-1.5m0 0h4.5" /></svg>), title: "AI Chatbots & Virtual Assistants", description: "Intelligent chatbots that answer property questions, qualify leads, schedule showings, and capture contact information 24/7 — so you never miss an opportunity." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>), title: "AI Voice Assistants", description: "Conversational AI that handles inbound and outbound calls, follows up with leads, confirms appointments, and provides property details in natural human-like dialogue." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>), title: "Automated Lead Qualification", description: "AI-driven scoring and qualification systems that analyze lead behavior, budget, timeline, and intent to prioritize the hottest prospects for your team." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>), title: "Predictive Analytics", description: "Machine learning models that forecast market trends, identify likely sellers, predict listing prices, and surface the highest-converting neighborhoods for your campaigns." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>), title: "Workflow Automation", description: "End-to-end automation of repetitive tasks: drip campaigns, follow-up sequences, CRM updates, transaction coordination, and document management — all on autopilot." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>), title: "Smart Content Generation", description: "AI-assisted listing descriptions, market reports, social media captions, email copy, and blog outlines that maintain your brand voice while saving hours every week." },
];

const steps = [
  { step: 1, title: "AI Readiness Audit", description: "We analyze your current workflows, tech stack, and pain points to identify the highest-impact automation opportunities." },
  { step: 2, title: "Solution Design", description: "Custom AI architecture and workflow blueprints tailored to your team size, deal volume, and specific real estate niche." },
  { step: 3, title: "Build & Integrate", description: "We develop, train, and integrate AI systems into your existing CRM, website, phone system, and marketing platforms." },
  { step: 4, title: "Test & Optimize", description: "Rigorous testing with real conversations and scenarios, fine-tuning response accuracy, lead routing, and conversion flows." },
  { step: 5, title: "Monitor & Scale", description: "Ongoing performance monitoring, AI model retraining, and expansion to new use cases as your business grows." },
];

const benefits = [
  { title: "Never Miss a Lead Again", desc: "AI responds to inquiries in under 60 seconds, 24/7/365 — even at 2 AM on holidays when your competitors are sleeping." },
  { title: "Focus on Closing, Not Chasing", desc: "Automation handles the repetitive follow-ups, scheduling, and data entry so you can spend time on high-value activities." },
  { title: "Smarter Lead Prioritization", desc: "AI scoring analyzes dozens of signals to rank leads by conversion likelihood, so your team always calls the right prospect first." },
  { title: "Consistent Client Experience", desc: "Every lead gets the same high-quality, instant response regardless of time, volume, or team availability." },
  { title: "Scalable Without Hiring", desc: "Handle 10× the lead volume without adding headcount. AI systems scale automatically as your pipeline grows." },
  { title: "Data-Driven Decision Making", desc: "Predictive analytics surface insights about market timing, pricing strategy, and campaign performance that humans alone would miss." },
];

const results = [
  { metric: "78%", label: "Faster response time", period: "Avg across all clients" },
  { metric: "3.4×", label: "More qualified appointments", period: "Within first 90 days" },
  { metric: "$2.1M", label: "Additional revenue attributed", period: "To AI-qualified leads yearly" },
  { metric: "62%", label: "Reduction in manual work", period: "Tasks automated per team" },
];

const testimonials = [
  { quote: "The AI chatbot RealLanding built for our website has been a total game-changer. It qualifies leads, books showings, and follows up automatically. We've tripled our monthly appointments without adding a single team member.", author: "Marcus T.", role: "Broker, Austin TX" },
  { quote: "I was skeptical about AI voice assistants, but the system handles follow-up calls so naturally that clients don't even realize it's automated. It's freed up 20+ hours a week for my team to focus on closings.", author: "Diana S.", role: "Team Lead, Phoenix AZ" },
];

const faqs = [
  { question: "Will AI replace my team or my personal touch?", answer: "Not at all — AI enhances your team's capabilities. It handles the repetitive, time-consuming tasks (initial responses, follow-ups, scheduling, data entry) so your agents can focus on the high-value human interactions that actually close deals. Clients still work with real people for showings, negotiations, and closings." },
  { question: "How long does it take to set up AI automation?", answer: "A basic chatbot can be live within 1–2 weeks. More comprehensive solutions including voice assistants, CRM automation, and predictive analytics typically take 4–8 weeks for full implementation and training. We phase the rollout so you start seeing results quickly." },
  { question: "Does it integrate with my existing CRM and tools?", answer: "Yes. We integrate with all major real estate CRMs (Follow Up Boss, KvCORE, Sierra Interactive, Salesforce, HubSpot) as well as your website, phone system, email platform, and marketing tools. Custom integrations are available for any platform with an API." },
  { question: "How accurate are AI chatbot responses?", answer: "Our AI chatbots are trained specifically on your listings, market area, and brand guidelines. They achieve 92%+ accuracy for common real estate queries. For questions they can't confidently answer, they seamlessly escalate to your human team with full conversation context." },
  { question: "What does AI automation cost?", answer: "Pricing depends on the scope of automation. Chatbot-only solutions start at $500/month, while comprehensive AI suites (chatbot + voice + CRM automation + analytics) range from $2,000–$5,000/month. Every solution includes setup, training, and ongoing optimization." },
  { question: "Can I see a demo before committing?", answer: "Absolutely. We offer a free AI readiness audit and live demo tailored to your specific use case. You'll see exactly how the AI would interact with your leads and integrate with your existing workflow before making any commitment." },
];

const relatedServices = [
  { title: "CRM & Sales Automation", href: "/services/crm-sales-automation", description: "Pair AI intelligence with a fully optimized CRM pipeline for end-to-end sales automation." },
  { title: "Lead Generation", href: "/services/lead-generation", description: "Feed your AI systems with a steady stream of high-quality leads from multiple channels." },
  { title: "Sales Funnel Automation", href: "/services/sales-funnel-automation", description: "Automate your entire sales funnel from first touch to closing with AI-powered nurture sequences." },
];

export default function AIAutomationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        key="structured-data"
      />


      <AnimatedSections>
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
            <span className="text-white font-medium">AI Automation</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/20">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" /></svg>
            AI &amp; Technology
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">AI-Powered Automation Built<br className="hidden md:block" /> for Real Estate Success</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-10 leading-relaxed">Chatbots, voice assistants, predictive analytics, and workflow automation that qualify leads, book showings, and close deals — even while you sleep.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Get Your Free AI Audit</Link>
            <Link href="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">See a Live Demo</Link>
          </div>
          <p className="mt-6 text-green-200/70 text-sm">Join 200+ real estate teams using our AI solutions</p>
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
          {["GPT-4 & Claude Powered", "Real Estate–Trained Models", "CRM Integration Ready", "SOC 2 Compliant"].map((item, i) => (
            <span key={i} className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> {item}</span>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">AI Solutions for Every Part of Your Business</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">From first lead contact to closing, our AI systems handle the heavy lifting so your team can focus on what they do best — building relationships and closing deals.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-green-200 hover:shadow-lg hover:shadow-green-100/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-5 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">AI Performance Metrics</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Real results from real estate teams using our AI automation solutions.</p>
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
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Why AI Automation</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Work Smarter, Close More, Grow Faster</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">AI automation isn&apos;t about replacing humans — it&apos;s about giving your team superpowers so they can accomplish more with less effort.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">From Audit to Automation in Five Steps</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">We take a systematic, results-focused approach to implementing AI solutions that deliver real ROI from day one.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Common Questions About AI Automation</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Related Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Supercharge Your AI Strategy</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Put AI to Work for Your Real Estate Business?</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed">Book a free AI readiness audit and discover how automation can transform your lead conversion, save your team hours every day, and accelerate your growth.</p>
          <Link href="/contact" className="inline-block bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Get Your Free AI Audit</Link>
          <p className="mt-6 text-green-200/60 text-sm">Includes a custom automation roadmap and ROI projection</p>
        </div>
      </section>

      </AnimatedSections>
      <Footer />
    </div>
  );
}
