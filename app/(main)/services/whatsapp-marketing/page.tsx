import ServicePageLayout from "@/app/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WhatsApp Marketing for Real Estate | RealLanding",
  description:
    "WhatsApp Business API marketing for real estate — broadcast campaigns, automated chatbots, CRM integration, listing alerts, and client communication that drives engagement and closings.",
  openGraph: {
    title: "WhatsApp Marketing for Real Estate | RealLanding",
    description:
      "WhatsApp Business API marketing for real estate — broadcast campaigns, automated chatbots, CRM integration, listing alerts, and client communication that drives engagement and closings.",
    url: "https://reallanding.com/services/whatsapp-marketing",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-whatsapp-marketing.jpg",
        width: 1200,
        height: 630,
        alt: "WhatsApp Marketing for Real Estate | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Marketing for Real Estate | RealLanding",
    description:
      "WhatsApp Business API marketing for real estate — broadcast campaigns, automated chatbots, CRM integration, listing alerts, and client communication that drives engagement and closings.",
    images: ["https://reallanding.com/og-whatsapp-marketing.jpg"],
    site: "@RealLandingHQ",
  },
};


// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "WhatsApp Marketing",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "WhatsApp Business API marketing for real estate — broadcast campaigns, automated chatbots, CRM integration, listing alerts, and client communication that drives engagement and closings.",
  "url": "https://reallanding.com/services/whatsapp-marketing",
  "category": "Real Estate Marketing"
};


const stats = [
  { value: "98%", label: "Message Open Rate" },
  { value: "45%", label: "Response Rate" },
  { value: "3.8×", label: "More Engagement vs Email" },
  { value: "10,000+", label: "Messages Monthly" },
];

const services = [
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>), title: "WhatsApp Business API Setup", description: "Full setup and verification of your WhatsApp Business API account — including business profile optimization, green badge verification, and compliance configuration. We handle the technical integration so you can start messaging at scale from day one." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" /></svg>), title: "Broadcast Campaigns & Lists", description: "Reach hundreds or thousands of prospects simultaneously with targeted broadcast messages — new listings, open house invitations, market updates, and price reductions. We segment your audience by buyer type, location, budget, and engagement history for maximum relevance." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm7.5-9v1.5m-4.5 0v-1.5m0 0h4.5" /></svg>), title: "Automated Chatbot Flows", description: "24/7 intelligent chatbot flows that qualify leads, answer common questions, schedule showings, and collect contact information — all within WhatsApp. Buyers get instant responses while you focus on closings, not repetitive conversations." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>), title: "CRM & Lead Integration", description: "Every WhatsApp conversation syncs directly with your CRM — lead details, chat history, property interests, and follow-up tasks are automatically logged. No manual data entry, no leads falling through the cracks between platforms." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>), title: "Listing Alert Automation", description: "Automated listing alerts sent via WhatsApp the moment a matching property hits the market. Buyers receive rich media messages with photos, pricing, and one-tap links to schedule a tour — delivered where they&apos;re already spending 30+ minutes per day." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>), title: "Client Communication & Follow-Up", description: "Structured follow-up sequences for every stage of the client journey — from initial inquiry to post-closing check-in. Drip campaigns, anniversary messages, and review requests keep you top-of-mind and generate referrals on autopilot." },
];

const steps = [
  { step: 1, title: "Strategy & Setup", description: "We audit your current communication channels, define your WhatsApp marketing strategy, segment your audience, and set measurable KPIs for open rates, response rates, and lead conversion." },
  { step: 2, title: "API Configuration", description: "Full WhatsApp Business API setup — account verification, business profile creation, webhook integration with your CRM, and compliance configuration to meet Meta&apos;s messaging policies." },
  { step: 3, title: "Content & Templates", description: "We craft pre-approved message templates for listings, follow-ups, open houses, market updates, and nurture sequences — all optimized for engagement and compliant with WhatsApp&apos;s template approval process." },
  { step: 4, title: "Automation Build", description: "We build chatbot flows, listing alert triggers, broadcast segmentation rules, and CRM sync automations — creating a fully hands-free communication engine that runs 24/7." },
  { step: 5, title: "Launch & Optimize", description: "Campaigns go live with real-time monitoring. We track open rates, response rates, and lead quality, then continuously A/B test message timing, content, and audience segments to maximize ROI." },
];

const benefits = [
  { title: "Unmatched Open Rates", desc: "WhatsApp messages achieve 98% open rates compared to 20–25% for email. Your listings, updates, and follow-ups are actually seen — not buried in a spam folder or ignored inbox." },
  { title: "Instant Two-Way Communication", desc: "Unlike email or SMS blasts, WhatsApp enables real conversations. Buyers can reply instantly, ask questions, request photos, and schedule showings — all in a single thread you can track." },
  { title: "Rich Media Messages", desc: "Send property photos, virtual tour videos, location pins, PDF brochures, and interactive buttons — all within WhatsApp. Listings come alive in a way that plain text emails and SMS can&apos;t match." },
  { title: "Global Reach & Familiarity", desc: "WhatsApp has 2+ billion users worldwide — and it&apos;s the primary messaging app in many US markets with international buyers. Meet clients where they already communicate, not where you wish they would." },
  { title: "Automated & Scalable", desc: "Chatbots handle initial qualification, FAQs, and scheduling while broadcast campaigns reach thousands at once. Scale your communication without scaling your team or your hours." },
  { title: "CRM-Connected Intelligence", desc: "Every message, response, and interaction feeds directly into your CRM — giving you a complete picture of each lead&apos;s engagement history and enabling intelligent, personalized follow-up at scale." },
];

const results = [
  { metric: "98%", label: "Average message open rate", period: "Across all client campaigns" },
  { metric: "45%", label: "Average response rate", period: "vs 2–5% for email campaigns" },
  { metric: "3.8×", label: "More engagement than email", period: "Measured by reply rate" },
  { metric: "22%", label: "Lead-to-showing conversion", period: "From WhatsApp conversations" },
];

const testimonials = [
  { quote: "I work a lot with international buyers relocating to Miami, and WhatsApp is how they communicate — period. RealLanding set up automated listing alerts, a chatbot that qualifies buyers in Spanish and English, and broadcast campaigns for new developments. My response rate went from 3% with email to 48% on WhatsApp. I closed $4.2M in my first quarter using it.", author: "Alejandra Reyes", role: "Luxury Agent, Miami Beach FL" },
  { quote: "We were skeptical about WhatsApp marketing until RealLanding showed us the data. Now we send open house invitations, just-listed alerts, and market updates to segmented lists — and the engagement is insane. We had 34 showing requests from a single broadcast message for a new listing. Our email campaigns never came close to that.", author: "Derek Washington", role: "Team Lead, Washington & Partners, Houston TX" },
];

const faqs = [
  { question: "What's the difference between WhatsApp Business API and regular WhatsApp Business?", answer: "The free WhatsApp Business app is designed for small businesses and limits you to manual, one-at-a-time messaging from a single phone. The WhatsApp Business API is an enterprise solution that enables automated messages, broadcast campaigns to thousands, chatbot integration, CRM syncing, and multi-agent access — all essential for scaling real estate communication." },
  { question: "Is WhatsApp marketing compliant with regulations?", answer: "Yes — when done correctly. We ensure full compliance with Meta's WhatsApp Business Policy, which requires opt-in consent before messaging, approved message templates for outbound campaigns, and clear opt-out mechanisms. We handle the compliance setup so you can message confidently without risking account suspension." },
  { question: "How much does WhatsApp marketing cost?", answer: "Our WhatsApp marketing packages start at $1,200/month including API fees, campaign management, chatbot setup, and CRM integration. WhatsApp Business API charges per-conversation fees (typically $0.02–$0.08 per conversation depending on category), which are billed separately. We'll estimate total costs during your consultation." },
  { question: "Are there message limits on WhatsApp Business API?", answer: "New API accounts start with a messaging limit of 1,000 unique contacts per 24 hours. As your account quality rating improves, this increases to 10,000 and eventually 100,000+ contacts per day. We manage your account health to ensure rapid tier upgrades and uninterrupted campaign delivery." },
  { question: "How does the template approval process work?", answer: "WhatsApp requires pre-approval for outbound message templates (business-initiated messages). We write and submit templates optimized for approval — typically receiving approval within 24–48 hours. Once approved, templates can be used indefinitely. Replies within a 24-hour window allow free-form messaging without template restrictions." },
  { question: "Can WhatsApp integrate with my existing CRM?", answer: "Yes — we integrate WhatsApp Business API with all major real estate CRMs including Follow Up Boss, KvCORE, Sierra Interactive, LionDesk, HubSpot, and Salesforce. Conversations, lead data, and engagement history sync automatically so your team has full context in one place." },
];

const relatedServices = [
  { title: "Email Marketing", href: "/services/email-marketing", description: "Complement your WhatsApp campaigns with targeted email sequences for long-form content, market reports, and newsletter-style nurture." },
  { title: "CRM & Sales Automation", href: "/services/crm-sales-automation", description: "Ensure every WhatsApp lead is automatically logged, tagged, and routed through your CRM with intelligent follow-up workflows." },
  { title: "AI Automation", href: "/services/ai-automation", description: "Power your WhatsApp chatbots with AI-driven conversation flows that qualify leads and book appointments automatically." },
];

export default function WhatsAppMarketingPage() {
  return (
    <ServicePageLayout data={{
      breadcrumb: "WhatsApp Marketing",
      badgeIcon: (<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>),
      badgeText: "WhatsApp Marketing for Real Estate",
      title: `Reach Buyers &amp; Sellers Where<br className="hidden md:block" /> They Actually Read Messages`,
      description: `98% open rates. 45% response rates. WhatsApp Business API marketing built for real estate — automated chatbots, broadcast campaigns, listing alerts, and CRM-connected follow-up that drives real engagement.`,
      primaryCTA: "Get Your Free WhatsApp Strategy",
      secondaryCTA: "See Our Results",
      trustLine: "10,000+ messages delivered monthly for real estate clients",
      trustBar: ["Official WhatsApp API Partner", "Fully Compliant Messaging", "CRM Auto-Sync", "24/7 Chatbot Automation"],
      stats,
      services,
      servicesHeading: "Our Solutions",
      servicesSubheading: `Complete WhatsApp Marketing Suite`,
      servicesDescription: `From API setup to automated chatbots and broadcast campaigns — everything you need to turn WhatsApp into your highest-engagement marketing channel.`,
      results,
      resultsHeading: "Proven Results",
      resultsSubheading: `WhatsApp Marketing Performance`,
      resultsDescription: `Real engagement metrics from real estate professionals using our WhatsApp marketing systems.`,
      benefits,
      benefitsHeading: "Why Choose Us",
      benefitsSubheading: `WhatsApp Marketing That Drives Real Conversations`,
      benefitsDescription: `Stop shouting into the void with emails no one reads. Start conversations on the platform your clients check 80+ times a day.`,
      testimonials,
      testimonialHeading: "What Agents & Teams Say",
      steps,
      processHeading: "Our Process",
      processSubheading: `From Setup to Scale in Five Steps`,
      processDescription: `A structured process that gets your WhatsApp marketing live fast — with the automation and compliance framework to scale confidently.`,
      faqs,
      faqHeading: `Common Questions About WhatsApp Marketing`,
      relatedServices,
      relatedHeading: "Related Services",
      relatedSubheading: `Amplify Your Messaging Strategy`,
      ctaHeading: `Ready to Turn WhatsApp into Your #1 Engagement Channel?`,
      ctaDescription: `Book a free WhatsApp marketing strategy session. We'll evaluate your audience, design your chatbot flows, and map out a campaign plan that delivers 98% open rates and real conversations.`,
      ctaCTA: "Get Your Free WhatsApp Strategy",
      ctaSubtext: "Includes a custom chatbot flow mockup and campaign roadmap",
    }} />
  );
}
