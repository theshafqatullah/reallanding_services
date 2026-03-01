import ServicePageLayout from "@/app/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales Funnel Automation for Real Estate | RealLanding",
  description:
    "Full-funnel automation for real estate — funnel strategy, landing pages, lead magnets, automated nurture sequences, retargeting funnels, appointment booking, and funnel analytics.",
  openGraph: {
    title: "Sales Funnel Automation for Real Estate | RealLanding",
    description:
      "Full-funnel automation for real estate — funnel strategy, landing pages, lead magnets, automated nurture sequences, retargeting funnels, appointment booking, and funnel analytics.",
    url: "https://reallanding.com/services/sales-funnel-automation",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-sales-funnel-automation.jpg",
        width: 1200,
        height: 630,
        alt: "Sales Funnel Automation for Real Estate | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales Funnel Automation for Real Estate | RealLanding",
    description:
      "Full-funnel automation for real estate — funnel strategy, landing pages, lead magnets, automated nurture sequences, retargeting funnels, appointment booking, and funnel analytics.",
    images: ["https://reallanding.com/og-sales-funnel-automation.jpg"],
    site: "@RealLandingHQ",
  },
};


// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Sales Funnel Automation",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "Full-funnel automation for real estate — funnel strategy, landing pages, lead magnets, automated nurture sequences, retargeting funnels, appointment booking, and funnel analytics.",
  "url": "https://reallanding.com/services/sales-funnel-automation",
  "category": "Real Estate Marketing"
};


const stats = [
  { value: "340%", label: "Average Funnel ROI" },
  { value: "8,500+", label: "Leads Funneled Monthly" },
  { value: "23%", label: "Funnel Conversion Rate" },
  { value: "$4.2M", label: "Revenue Attributed" },
];

const services = [
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>), title: "Funnel Strategy & Architecture", description: "We design the complete blueprint for your sales funnel — mapping every stage from first impression to signed contract. Each funnel is custom-architected around your market, client type, and business goals with clear conversion milestones and KPIs at every step." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>), title: "Landing Page & Lead Magnet Funnels", description: "High-converting landing pages paired with irresistible lead magnets — home valuation tools, neighborhood guides, buyer checklists, market reports — that capture contact information and immediately segment leads by intent, timeline, and property interest." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>), title: "Automated Nurture Sequences", description: "Multi-channel drip campaigns (email, SMS, voicemail drops) that educate, build trust, and move leads through your pipeline on autopilot. Every sequence is behavior-triggered and personalized — so the right message reaches the right lead at exactly the right time." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>), title: "Retargeting & Remarketing Funnels", description: "Pixel-based retargeting campaigns across Facebook, Instagram, Google Display, and YouTube that re-engage leads who visited your site but didn&apos;t convert. We serve sequential ad creative that mirrors their funnel stage to pull them back in and advance them toward action." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>), title: "Appointment Booking Automation", description: "Frictionless scheduling funnels that let qualified leads book consultations, showings, and listing appointments directly into your calendar. Integrated with your CRM, these funnels send confirmations, reminders, and pre-appointment questionnaires automatically." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>), title: "Funnel Analytics & Optimization", description: "Real-time dashboards tracking every funnel metric — traffic, opt-in rates, email engagement, stage progression, appointment show rates, and revenue attribution. We continuously A/B test and optimize every element to maximize your conversion rate and ROI." },
];

const steps = [
  { step: 1, title: "Funnel Audit & Strategy", description: "We analyze your current lead flow, conversion gaps, and client journey to design a custom funnel architecture that maximizes the value of every lead entering your pipeline." },
  { step: 2, title: "Build & Integrate", description: "Our team builds landing pages, lead magnets, email sequences, SMS workflows, retargeting campaigns, and booking systems — all integrated with your CRM and ad platforms." },
  { step: 3, title: "Launch & Drive Traffic", description: "Funnels go live with traffic from your existing channels plus new paid campaigns. We monitor every stage in real-time, ensuring leads flow smoothly from capture to conversion." },
  { step: 4, title: "Test & Optimize", description: "Continuous A/B testing of headlines, CTAs, email subject lines, ad creative, and funnel sequences. Every optimization is data-driven, focused on improving conversion rates at each stage." },
  { step: 5, title: "Scale & Expand", description: "As winning funnels are identified, we scale ad spend, replicate top performers for new audiences, and build additional funnels targeting different segments — sellers, buyers, investors, relocators." },
];

const benefits = [
  { title: "Leads Never Fall Through the Cracks", desc: "Every lead that enters your funnel is automatically nurtured, followed up with, and moved toward a conversion event — no manual effort, no forgotten prospects, no lost revenue." },
  { title: "Convert While You Sleep", desc: "Your funnel works 24/7/365 — capturing leads, sending nurture emails, retargeting visitors, and booking appointments even when you&apos;re at a showing, on vacation, or asleep." },
  { title: "Shorter Sales Cycles", desc: "Automated nurture sequences educate and warm leads before they ever talk to you. By the time they book a call, they&apos;re pre-qualified, informed, and ready to move — cutting your sales cycle dramatically." },
  { title: "Predictable, Scalable Revenue", desc: "A well-built funnel turns lead generation from a guessing game into a math equation. You know your traffic, conversion rates, and revenue per lead — so scaling is a simple budget decision." },
  { title: "Multi-Touch Attribution", desc: "Our analytics track every touchpoint — ads, emails, pages, calls — so you know exactly which funnel stages and campaigns drive revenue. No more guessing where your closings come from." },
  { title: "Personalized at Scale", desc: "Behavior-triggered automations ensure every lead receives messaging tailored to their interests, timeline, and actions — delivering a personalized experience without manual work." },
];

const results = [
  { metric: "340%", label: "Average funnel ROI", period: "Across all client funnels" },
  { metric: "8,500+", label: "Leads funneled monthly", period: "Aggregate pipeline volume" },
  { metric: "23%", label: "Average conversion rate", period: "Landing page to appointment" },
  { metric: "$4.2M", label: "Revenue attributed to funnels", period: "Client-reported closings" },
];

const testimonials = [
  { quote: "Before RealLanding, I had a website and some Facebook ads — but no system connecting them. They built a complete seller funnel that takes a cold homeowner from seeing my ad to booking a listing appointment in 7 days flat. I went from 3 listing appointments a month to 14, and my cost per appointment dropped by 60%. This is the best investment I&apos;ve made in my business.", author: "Andrea Morales", role: "Listing Specialist, RE/MAX Elite, Houston TX" },
  { quote: "RealLanding built us a buyer funnel that&apos;s absolutely insane. A lead downloads our neighborhood guide, gets a 12-email nurture series over 30 days, sees retargeting ads the entire time, and then books a buyer consult directly on our calendar. Our team went from chasing leads to choosing which pre-qualified buyers to work with. The funnel does 90% of the selling for us.", author: "James Whitaker", role: "Team Lead, Whitaker Home Group, Atlanta GA" },
];

const faqs = [
  { question: "What exactly is a sales funnel in real estate?", answer: "A sales funnel is a systematic, automated process that guides a prospect from their first interaction with your brand (seeing an ad, visiting your website) all the way to becoming a client (booking an appointment, signing a listing agreement). It includes landing pages to capture leads, email/SMS sequences to nurture them, retargeting ads to stay top-of-mind, and booking systems to convert them — all running automatically." },
  { question: "How does funnel automation work with my existing CRM?", answer: "We integrate directly with all major real estate CRMs including Follow Up Boss, KvCORE, Sierra Interactive, LionDesk, Salesforce, and HubSpot. When a lead enters your funnel, they're automatically pushed to your CRM with proper tags, source attribution, and pipeline stage. Nurture actions can trigger CRM tasks and vice versa — creating a seamless, bi-directional workflow." },
  { question: "How long does it take to build and launch a funnel?", answer: "A single funnel (landing page + lead magnet + email sequence + retargeting setup + booking integration) typically takes 2–3 weeks to build and launch. A comprehensive multi-funnel system covering buyers, sellers, and different market segments takes 4–8 weeks. We prioritize launching your highest-impact funnel first so you start seeing results quickly." },
  { question: "What kind of results can I expect?", answer: "Results vary by market, budget, and funnel type, but our benchmarks are: 15–30% landing page conversion rates, 25–40% email open rates, 8–15% appointment booking rates from nurtured leads, and a 340% average ROI across all client funnels. Most clients see their first funnel-generated appointment within 1–2 weeks of launch." },
  { question: "How much does funnel automation cost?", answer: "Single funnel builds start at $3,000–$5,000 (one-time setup) plus $1,000–$2,000/month for ongoing management, optimization, and email/SMS platform costs. Comprehensive multi-funnel systems with retargeting, advanced analytics, and continuous optimization range from $3,000–$7,000/month. Ad spend for driving traffic to funnels is additional and recommended at $1,500–$5,000/month." },
  { question: "How is this different from regular marketing or lead generation?", answer: "Traditional marketing generates leads but often leaves the follow-up, nurturing, and conversion to manual effort. Funnel automation builds a complete system around every lead — from capture to close — ensuring no prospect is forgotten, every lead receives consistent nurture, and the entire process runs without manual intervention. It's the difference between catching fish one at a time and building a net that catches them automatically." },
];

const relatedServices = [
  { title: "CRM & Sales Automation", href: "/services/crm-sales-automation", description: "Pair your funnels with a fully optimized CRM that ensures every funnel-generated lead is tracked, nurtured, and closed efficiently." },
  { title: "Lead Generation", href: "/services/lead-generation", description: "Drive high-quality traffic into your funnels with multi-channel lead generation across Facebook, Google, SEO, and more." },
  { title: "Paid Advertising", href: "/services/paid-advertising", description: "Maximize funnel performance with expertly managed ad campaigns that drive targeted, cost-effective traffic to your landing pages." },
];

export default function SalesFunnelAutomationPage() {
  return (
    <ServicePageLayout data={{
      breadcrumb: "Sales Funnel Automation",
      badgeIcon: (<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" /></svg>),
      badgeText: "Funnel Automation",
      title: `Automate Your Entire Sales Funnel<br className="hidden md:block" /> from Lead to Closing`,
      description: `Full-funnel automation that captures leads, nurtures them on autopilot, books appointments, and drives closings — so your pipeline never stops working.`,
      primaryCTA: "Get Your Free Funnel Strategy",
      secondaryCTA: "See Funnel Results",
      trustLine: "8,500+ leads funneled monthly across our client base",
      trustBar: ["Full CRM Integration", "Behavior-Triggered Automations", "Multi-Channel Sequences", "Real-Time Funnel Analytics"],
      stats,
      services,
      servicesHeading: "Our Solutions",
      servicesSubheading: `End-to-End Funnel Automation Services`,
      servicesDescription: `We build, manage, and optimize every layer of your sales funnel — so leads convert to clients on autopilot.`,
      results,
      resultsHeading: "Proven Results",
      resultsSubheading: `Funnel Performance Metrics`,
      resultsDescription: `Real numbers from real estate professionals running our automated funnel systems.`,
      benefits,
      benefitsHeading: "Why Choose Us",
      benefitsSubheading: `Funnels That Work While You Don't`,
      benefitsDescription: `Stop losing leads to poor follow-up. Our funnels ensure every prospect gets the right message at the right time — automatically.`,
      testimonials,
      testimonialHeading: "What Agents & Teams Say",
      steps,
      processHeading: "Our Process",
      processSubheading: `From Blueprint to Automated Pipeline in Five Steps`,
      processDescription: `A proven process for building sales funnels that capture, nurture, and convert real estate leads on autopilot.`,
      faqs,
      faqHeading: `Common Questions About Sales Funnel Automation`,
      relatedServices,
      relatedHeading: "Related Services",
      relatedSubheading: `Supercharge Your Funnel Performance`,
      ctaHeading: `Ready to Build a Sales Funnel That Closes on Autopilot?`,
      ctaDescription: `Book a free funnel strategy session. We'll map your client journey, identify conversion gaps, and design a custom funnel system that turns leads into closings — automatically.`,
      ctaCTA: "Get Your Free Funnel Strategy",
      ctaSubtext: "Includes a custom funnel blueprint and conversion rate projection",
    }} />
  );
}
