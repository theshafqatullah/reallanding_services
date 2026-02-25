import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { AnimatedSections } from "@/app/components/AnimateOnScroll";
import FAQAccordion from "@/app/components/FAQAccordion";

export const metadata: Metadata = {
  title: "CRM & Sales Automation for Real Estate | RealLanding",
  description:
    "CRM setup, pipeline management, automated follow-ups, lead routing, and sales automation systems that help real estate teams close more deals with less effort.",
  openGraph: {
    title: "CRM & Sales Automation for Real Estate | RealLanding",
    description:
      "CRM setup, pipeline management, automated follow-ups, lead routing, and sales automation systems that help real estate teams close more deals with less effort.",
    url: "https://reallanding.com/services/crm-sales-automation",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-crm-sales-automation.jpg",
        width: 1200,
        height: 630,
        alt: "CRM & Sales Automation for Real Estate | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CRM & Sales Automation for Real Estate | RealLanding",
    description:
      "CRM setup, pipeline management, automated follow-ups, lead routing, and sales automation systems that help real estate teams close more deals with less effort.",
    images: ["https://reallanding.com/og-crm-sales-automation.jpg"],
    site: "@RealLandingHQ",
  },
};


// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "CRM & Sales Automation",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "CRM setup, pipeline management, automated follow-ups, lead routing, and sales automation systems that help real estate teams close more deals with less effort.",
  "url": "https://reallanding.com/services/crm-sales-automation",
  "category": "Real Estate Marketing"
};


const stats = [
  { value: "67%", label: "More Deals Closed Per Agent" },
  { value: "4.2×", label: "Faster Lead Follow-Up Time" },
  { value: "29%", label: "Higher Close Rate" },
  { value: "15 hrs", label: "Saved Per Agent Weekly" },
];

const services = [
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>), title: "CRM Setup & Migration", description: "Full implementation of your CRM from scratch or migration from another platform — including data cleaning, field mapping, pipeline stages, and custom configurations." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>), title: "Automated Lead Routing", description: "Intelligent lead distribution based on zip code, price range, lead source, agent availability, and performance — ensuring every lead gets to the right person instantly." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>), title: "Drip Campaign Automation", description: "Set-and-forget nurture sequences for buyers, sellers, past clients, and sphere of influence — automated emails and texts that keep you top of mind for months." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>), title: "Pipeline & Deal Management", description: "Customized pipeline stages with automated task creation, deadline tracking, milestone alerts, and reporting so nothing falls through the cracks." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>), title: "Integration & Sync", description: "Connect your CRM with your website, IDX, ad platforms, email, phone system, transaction management, and marketing tools — creating one unified system." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>), title: "Automated Follow-Up Sequences", description: "Multi-channel follow-up sequences via email, SMS, voicemail drops, and task reminders that ensure every lead gets contacted within minutes, not days." },
];

const steps = [
  { step: 1, title: "Audit & Strategy", description: "Deep dive into your current sales process, tools, pain points, and goals to design an optimal CRM and automation strategy." },
  { step: 2, title: "CRM Configuration", description: "Set up or migrate your CRM with custom fields, pipeline stages, tags, lead sources, and automation triggers tailored to real estate." },
  { step: 3, title: "Automation Build", description: "Build and configure automated workflows — lead routing, follow-up sequences, task automation, notification triggers, and drip campaigns." },
  { step: 4, title: "Integration & Testing", description: "Connect all tools, run end-to-end tests with real scenarios, and ensure data flows correctly across every integration point." },
  { step: 5, title: "Training & Optimization", description: "Train your team on the new system, monitor adoption and performance, and continuously optimize based on real usage data." },
];

const benefits = [
  { title: "Never Lose a Lead", desc: "Automated routing and instant follow-ups ensure every lead is engaged within minutes, regardless of when they come in or how busy your team is." },
  { title: "Close More Deals", desc: "Structured pipelines and automated task management keep agents focused on the highest-value activities — showing homes and negotiating offers." },
  { title: "Automate Repetitive Tasks", desc: "Data entry, follow-up emails, task creation, status updates, and reporting happen automatically — freeing 15+ hours per agent per week." },
  { title: "One System for Everything", desc: "No more switching between 10 tools. Your CRM becomes the single command center for leads, transactions, marketing, and communication." },
  { title: "Scale Without Chaos", desc: "As your team grows, automated systems ensure consistent processes, onboarding is faster, and performance is trackable at agent and team level." },
  { title: "Data-Driven Sales Coaching", desc: "CRM analytics reveal which agents, lead sources, and processes produce the best results — enabling targeted coaching and resource allocation." },
];

const results = [
  { metric: "67%", label: "More deals closed per agent", period: "After CRM optimization" },
  { metric: "4.2×", label: "Faster lead response time", period: "With automated routing" },
  { metric: "15 hrs", label: "Saved per agent weekly", period: "Through task automation" },
  { metric: "$1.8M", label: "Additional revenue per team", period: "Average annual attributable gain" },
];

const testimonials = [
  { quote: "Before RealLanding set up our CRM, we were losing leads left and right. Now every lead gets an instant response, automated follow-up, and is routed to the right agent. Our close rate went from 2.1% to 5.8% in six months.", author: "Michael P.", role: "Team Lead, Dallas TX" },
  { quote: "The drip campaigns alone have been worth the investment ten times over. We've had past clients come back 18 months later saying they always remembered us because of the monthly emails. Automation is a game-changer.", author: "Lisa G.", role: "Broker/Owner, Miami FL" },
];

const faqs = [
  { question: "Which CRMs do you work with?", answer: "We work with all major real estate CRMs including Follow Up Boss, KvCORE, Sierra Interactive, LionDesk, Chime, CINC, BoomTown, Real Geeks, HubSpot, and Salesforce. If you're choosing a CRM, we'll recommend the best fit for your team size, budget, and needs." },
  { question: "Can you migrate data from my current CRM?", answer: "Yes — we handle the entire migration including contact data, notes, tags, transaction history, and communication logs. We clean and deduplicate data during the migration so you start fresh with a clean, organized database." },
  { question: "How long does CRM setup take?", answer: "Basic CRM setup and configuration takes 1–2 weeks. Full implementation with automations, integrations, drip campaigns, and team training typically takes 4–6 weeks. Complex migrations from legacy systems may take 6–8 weeks." },
  { question: "Do you provide team training?", answer: "Absolutely. Every engagement includes hands-on training for your team — live sessions, recorded tutorials, and written SOPs. We also offer ongoing support and refresher training as new team members join or features are added." },
  { question: "What kind of automations can you set up?", answer: "Almost anything: lead routing, instant follow-ups, drip campaigns, birthday/anniversary emails, listing alert triggers, showing feedback requests, transaction milestone tasks, close anniversary outreach, referral requests, and more. If it's repetitive, we can automate it." },
  { question: "How is CRM automation priced?", answer: "CRM setup and configuration starts at $3,000. Monthly management and optimization starts at $1,500/month. Full implementations with complex automations and integrations range from $5,000–$15,000 depending on team size and scope." },
];

const relatedServices = [
  { title: "AI Automation", href: "/services/ai-automation", description: "Add AI chatbots and voice assistants to your CRM for 24/7 lead engagement and intelligent qualification." },
  { title: "Lead Generation", href: "/services/lead-generation", description: "Fill your CRM pipeline with high-quality leads from multiple channels — all automatically routed and tracked." },
  { title: "Email Marketing", href: "/services/email-marketing", description: "Power your drip campaigns with professional email templates, segmentation, and deliverability optimization." },
];

export default function CRMSalesAutomationPage() {
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
            <span className="text-white font-medium">CRM &amp; Sales Automation</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/20">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>
            Sales &amp; Automation
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Close More Deals With Smart<br className="hidden md:block" /> CRM &amp; Sales Automation</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-10 leading-relaxed">Automated lead routing, follow-up sequences, pipeline management, and CRM optimization that help your team respond faster, sell smarter, and close more.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Get a Free CRM Audit</Link>
            <Link href="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">See Automation Demos</Link>
          </div>
          <p className="mt-6 text-green-200/70 text-sm">Trusted by 400+ real estate teams to automate their sales process</p>
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
          {["All Major CRMs Supported", "Data Migration Included", "Team Training Provided", "Ongoing Optimization"].map((item, i) => (
            <span key={i} className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> {item}</span>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">End-to-End CRM &amp; Sales Automation</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">From CRM setup to advanced automation, we build systems that ensure no lead, no task, and no follow-up ever falls through the cracks.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">CRM Automation Impact</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">When your sales process runs on automation, every agent closes more deals with less effort.</p>
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
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Why CRM Automation</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Your Sales Process on Autopilot</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Let automation handle the repetitive work so your agents can do what they do best — build relationships and close deals.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">From Audit to Automated Sales Machine</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A structured approach that transforms your CRM from an expensive contact list into a powerful sales automation engine.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Common Questions About CRM Automation</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Related Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Power Up Your CRM</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Automate Your Sales Process?</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed">Book a free CRM audit and discover how automation can help your team close more deals, respond faster, and scale without chaos.</p>
          <Link href="/contact" className="inline-block bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Get Your Free CRM Audit</Link>
          <p className="mt-6 text-green-200/60 text-sm">Includes CRM health score and automation opportunity report</p>
        </div>
      </section>

      </AnimatedSections>
      <Footer />
    </div>
  );
}
