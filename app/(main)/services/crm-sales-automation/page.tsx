import ServicePageLayout from "@/app/components/ServicePageLayout";
import type { Metadata } from "next";

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
    <ServicePageLayout data={{
      breadcrumb: "CRM & Sales Automation",
      badgeIcon: (<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>),
      badgeText: "Sales & Automation",
      title: `Close More Deals With Smart<br className="hidden md:block" /> CRM &amp; Sales Automation`,
      description: `Automated lead routing, follow-up sequences, pipeline management, and CRM optimization that help your team respond faster, sell smarter, and close more.`,
      primaryCTA: "Get a Free CRM Audit",
      secondaryCTA: "See Automation Demos",
      trustLine: "Trusted by 400+ real estate teams to automate their sales process",
      trustBar: ["All Major CRMs Supported", "Data Migration Included", "Team Training Provided", "Ongoing Optimization"],
      stats,
      services,
      servicesHeading: "Our Services",
      servicesSubheading: `End-to-End CRM & Sales Automation`,
      servicesDescription: `From CRM setup to advanced automation, we build systems that ensure no lead, no task, and no follow-up ever falls through the cracks.`,
      results,
      resultsHeading: "Proven Results",
      resultsSubheading: `CRM Automation Impact`,
      resultsDescription: `When your sales process runs on automation, every agent closes more deals with less effort.`,
      benefits,
      benefitsHeading: "Why CRM Automation",
      benefitsSubheading: `Your Sales Process on Autopilot`,
      benefitsDescription: `Let automation handle the repetitive work so your agents can do what they do best — build relationships and close deals.`,
      testimonials,
      steps,
      processHeading: "Our Process",
      processSubheading: `From Audit to Automated Sales Machine`,
      processDescription: `A structured approach that transforms your CRM from an expensive contact list into a powerful sales automation engine.`,
      faqs,
      faqHeading: `Common Questions About CRM Automation`,
      relatedServices,
      relatedHeading: "Related Services",
      relatedSubheading: `Power Up Your CRM`,
      ctaHeading: `Ready to Automate Your Sales Process?`,
      ctaDescription: `Book a free CRM audit and discover how automation can help your team close more deals, respond faster, and scale without chaos.`,
      ctaCTA: "Get Your Free CRM Audit",
      ctaSubtext: "Includes CRM health score and automation opportunity report",
    }} />
  );
}
