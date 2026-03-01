import ServicePageLayout from "@/app/components/ServicePageLayout";
import type { Metadata } from "next";

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
    <ServicePageLayout data={{
      breadcrumb: "AI Automation",
      badgeIcon: (<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" /></svg>),
      badgeText: "AI & Technology",
      title: `AI-Powered Automation Built<br className="hidden md:block" /> for Real Estate Success`,
      description: `Chatbots, voice assistants, predictive analytics, and workflow automation that qualify leads, book showings, and close deals — even while you sleep.`,
      primaryCTA: "Get Your Free AI Audit",
      secondaryCTA: "See a Live Demo",
      trustLine: "Join 200+ real estate teams using our AI solutions",
      trustBar: ["GPT-4 & Claude Powered", "Real Estate–Trained Models", "CRM Integration Ready", "SOC 2 Compliant"],
      stats,
      services,
      servicesHeading: "Our Solutions",
      servicesSubheading: `AI Solutions for Every Part of Your Business`,
      servicesDescription: `From first lead contact to closing, our AI systems handle the heavy lifting so your team can focus on what they do best — building relationships and closing deals.`,
      results,
      resultsHeading: "Proven Results",
      resultsSubheading: `AI Performance Metrics`,
      resultsDescription: `Real results from real estate teams using our AI automation solutions.`,
      benefits,
      benefitsHeading: "Why AI Automation",
      benefitsSubheading: `Work Smarter, Close More, Grow Faster`,
      benefitsDescription: `AI automation isn't about replacing humans — it's about giving your team superpowers so they can accomplish more with less effort.`,
      testimonials,
      steps,
      processHeading: "Our Process",
      processSubheading: `From Audit to Automation in Five Steps`,
      processDescription: `We take a systematic, results-focused approach to implementing AI solutions that deliver real ROI from day one.`,
      faqs,
      faqHeading: `Common Questions About AI Automation`,
      relatedServices,
      relatedHeading: "Related Services",
      relatedSubheading: `Supercharge Your AI Strategy`,
      ctaHeading: `Ready to Put AI to Work for Your Real Estate Business?`,
      ctaDescription: `Book a free AI readiness audit and discover how automation can transform your lead conversion, save your team hours every day, and accelerate your growth.`,
      ctaCTA: "Get Your Free AI Audit",
      ctaSubtext: "Includes a custom automation roadmap and ROI projection",
    }} />
  );
}
