import ServicePageLayout from "@/app/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lead Generation for Real Estate | RealLanding",
  description:
    "Multi-channel lead generation for real estate agents and teams. Facebook & Instagram lead ads, Google PPC, SEO leads, home valuation pages, IDX capture, and referral campaigns.",
  openGraph: {
    title: "Lead Generation for Real Estate | RealLanding",
    description:
      "Multi-channel lead generation for real estate agents and teams. Facebook & Instagram lead ads, Google PPC, SEO leads, home valuation pages, IDX capture, and referral campaigns.",
    url: "https://reallanding.com/services/lead-generation",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-lead-generation.jpg",
        width: 1200,
        height: 630,
        alt: "Lead Generation for Real Estate | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Generation for Real Estate | RealLanding",
    description:
      "Multi-channel lead generation for real estate agents and teams. Facebook & Instagram lead ads, Google PPC, SEO leads, home valuation pages, IDX capture, and referral campaigns.",
    images: ["https://reallanding.com/og-lead-generation.jpg"],
    site: "@RealLandingHQ",
  },
};


// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Lead Generation",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "Multi-channel lead generation for real estate agents and teams. Facebook & Instagram lead ads, Google PPC, SEO leads, home valuation pages, IDX capture, and referral campaigns.",
  "url": "https://reallanding.com/services/lead-generation",
  "category": "Real Estate Marketing"
};


const stats = [
  { value: "50,000+", label: "Leads Generated" },
  { value: "$8.40", label: "Average CPL" },
  { value: "14%", label: "Lead-to-Client Rate" },
  { value: "6.2×", label: "Average ROI" },
];

const services = [
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>), title: "Facebook & Instagram Lead Ads", description: "High-converting social media campaigns targeting buyers and sellers in your market. We build custom audiences, lookalikes, and retargeting funnels that generate exclusive leads at scale — with pre-filled forms that reduce friction." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>), title: "Google PPC Lead Campaigns", description: "Intent-driven search campaigns that capture buyers and sellers actively searching for real estate services. We manage keyword bidding, ad copy, landing pages, and conversion tracking to deliver the lowest cost per qualified lead." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>), title: "SEO-Driven Organic Leads", description: "Long-term organic lead generation through optimized neighborhood pages, market reports, and buyer/seller resource guides that rank on Google and deliver a compounding pipeline of free, high-intent leads month after month." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>), title: "Home Valuation Landing Pages", description: "Custom-built home valuation pages that capture seller leads by offering instant property estimates. Integrated with your CRM for automatic follow-up, these pages convert at 12–18% — turning curious homeowners into listing appointments." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /></svg>), title: "IDX & Listing-Based Lead Capture", description: "Turn your property search experience into a lead generation engine. We optimize IDX registration gates, saved search alerts, listing detail CTAs, and property-specific landing pages to capture and nurture active buyers." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>), title: "Referral & Sphere Campaigns", description: "Systematic campaigns to generate referrals from your past clients, sphere of influence, and professional network. Includes automated check-in sequences, review solicitation, and referral incentive programs that keep you top-of-mind." },
];

const steps = [
  { step: 1, title: "Market & Audience Analysis", description: "We study your target market, competition, ideal client profile, and current lead sources to identify the highest-opportunity channels and craft a data-backed strategy." },
  { step: 2, title: "Campaign Build & Creative", description: "We create high-converting ad creatives, landing pages, lead magnets, and form funnels — all tailored to your brand, market area, and specific buyer or seller persona." },
  { step: 3, title: "Launch & Optimize", description: "Campaigns go live across selected channels with daily monitoring. We A/B test ad copy, audiences, creative, and landing pages to continuously lower CPL and boost lead quality." },
  { step: 4, title: "CRM Integration & Nurture", description: "Every lead flows directly into your CRM with automatic tagging, assignment, and drip sequence activation — ensuring instant follow-up and zero leads falling through the cracks." },
  { step: 5, title: "Report, Refine & Scale", description: "Weekly performance reports, monthly strategy reviews, and ongoing optimization. As we identify winning formulas, we scale budget toward the channels delivering the best ROI." },
];

const benefits = [
  { title: "Predictable Pipeline", desc: "Stop relying on unpredictable referrals. Our lead generation systems deliver a consistent, controllable flow of new prospects every single week — rain or shine." },
  { title: "Multi-Channel Approach", desc: "We don&apos;t put all eggs in one basket. Leads come from Facebook, Google, SEO, home valuations, IDX, and referrals — so your pipeline never dries up if one channel fluctuates." },
  { title: "Exclusive Leads — Not Shared", desc: "Every lead we generate is exclusive to you. No shared leads, no bidding wars with other agents. These are your prospects, generated from your brand and campaigns." },
  { title: "Quality Over Quantity", desc: "We optimize for lead-to-client conversion, not just volume. Advanced targeting and qualification ensure you&apos;re talking to motivated buyers and sellers, not tire-kickers." },
  { title: "Automated Nurture", desc: "Leads that aren&apos;t ready today are nurtured automatically through intelligent drip campaigns until they&apos;re ready to buy or sell — turning cold leads into future closings." },
  { title: "Transparent Reporting", desc: "Real-time dashboards show exactly where every dollar goes, how many leads each channel produces, and what your true cost per closing is — no vanity metrics, just results." },
];

const results = [
  { metric: "50K+", label: "Total leads generated", period: "Across all client campaigns" },
  { metric: "$8.40", label: "Average cost per lead", period: "Blended across all channels" },
  { metric: "14%", label: "Lead-to-client conversion", period: "Industry avg is 2–3%" },
  { metric: "6.2×", label: "Average return on ad spend", period: "Within first 12 months" },
];

const testimonials = [
  { quote: "Before RealLanding, I was spending $3,000 a month on Zillow leads that every agent in town was calling. Now I get 60+ exclusive leads per month from Facebook and Google at half the cost — and they actually answer the phone because they came from my brand, not a portal.", author: "Rachel Dominguez", role: "Realtor, The Dominguez Group, San Antonio TX" },
  { quote: "RealLanding built us a lead generation machine. Between the home valuation pages and Google PPC campaigns, we went from 15 leads a month to over 120 — and our close rate went UP because the leads are better qualified. We&apos;ve added three agents just to handle the volume.", author: "Kevin Osei-Mensah", role: "Team Lead, Osei Realty Group, Charlotte NC" },
];

const faqs = [
  { question: "How is your lead quality compared to portal leads (Zillow, Realtor.com)?", answer: "Our leads consistently outperform portal leads because they're generated from your brand and targeted campaigns — not shared with multiple agents. Our clients see 14% lead-to-client conversion rates vs. the 1–3% typical of shared portal leads. You also build brand equity with every impression, which portals don't offer." },
  { question: "Are the leads exclusive to me?", answer: "Yes — 100% exclusive. Every lead we generate belongs to you alone. We never sell, share, or redistribute leads to other agents. They come from campaigns running under your brand, to your landing pages, into your CRM. They're your leads, period." },
  { question: "How much does lead generation cost?", answer: "Our management fees start at $1,500/month, with recommended ad budgets of $1,500–$10,000/month depending on your market size and goals. Total cost per lead typically ranges from $5–$25 depending on channel and market competition. We'll recommend a budget during your strategy session." },
  { question: "How many leads can I expect per month?", answer: "Lead volume depends on your budget, market, and channel mix. As a benchmark, most clients generating buyer and seller leads across Facebook, Google, and organic channels see 40–150+ leads per month on a $3,000–$5,000 total monthly spend. We'll project volume during your consultation." },
  { question: "Is there a long-term contract?", answer: "We offer month-to-month agreements after an initial 90-day commitment. The 90 days gives our campaigns enough time to optimize and deliver meaningful results. After that, you stay because the results speak for themselves — not because of a contract." },
  { question: "How quickly will I start getting leads?", answer: "Paid channels (Facebook, Google) typically deliver leads within the first 48–72 hours of campaign launch. Organic channels (SEO, content) take 3–6 months to ramp. Most clients see a full, optimized pipeline across all channels by month 3." },
];

const relatedServices = [
  { title: "Paid Advertising", href: "/services/paid-advertising", description: "Scale your lead generation with advanced PPC, social media advertising, and retargeting campaigns that maximize every dollar of ad spend." },
  { title: "CRM & Sales Automation", href: "/services/crm-sales-automation", description: "Ensure every lead is instantly followed up, nurtured, and tracked through your pipeline with a fully automated CRM system." },
  { title: "SEO", href: "/services/seo", description: "Build a long-term organic lead pipeline that compounds month over month and reduces your dependence on paid advertising." },
];

export default function LeadGenerationPage() {
  return (
    <ServicePageLayout data={{
      breadcrumb: "Lead Generation",
      badgeIcon: (<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>),
      badgeText: "Real Estate Lead Generation",
      title: `Generate Exclusive, High-Quality<br className="hidden md:block" /> Real Estate Leads on Demand`,
      description: `Multi-channel lead generation built for real estate agents and teams. Get a predictable, scalable pipeline of buyer and seller leads — exclusive to you, never shared.`,
      primaryCTA: "Get Your Free Lead Gen Strategy",
      secondaryCTA: "See Our Results",
      trustLine: "50,000+ exclusive leads generated for agents and teams nationwide",
      trustBar: ["100% Exclusive Leads", "Multi-Channel Strategy", "CRM Auto-Integration", "Transparent ROI Reporting"],
      stats,
      services,
      servicesHeading: "Our Solutions",
      servicesSubheading: `Six Proven Lead Generation Channels`,
      servicesDescription: `We don't rely on a single channel. Our multi-pronged approach ensures your pipeline stays full — even when algorithms change or ad costs fluctuate.`,
      results,
      resultsHeading: "Proven Results",
      resultsSubheading: `Lead Generation Performance`,
      resultsDescription: `Real numbers from real estate agents and teams using our lead generation systems.`,
      benefits,
      benefitsHeading: "Why Choose Us",
      benefitsSubheading: `Lead Generation That Actually Converts`,
      benefitsDescription: `Leads are only valuable if they become clients. Our system is built for conversion, not just volume.`,
      testimonials,
      testimonialHeading: "What Agents & Teams Say",
      steps,
      processHeading: "Our Process",
      processSubheading: `From Strategy to Steady Pipeline in Five Steps`,
      processDescription: `A systematic, data-driven approach to building a lead generation engine that delivers consistent, qualified prospects every month.`,
      faqs,
      faqHeading: `Common Questions About Lead Generation`,
      relatedServices,
      relatedHeading: "Related Services",
      relatedSubheading: `Maximize Your Lead Pipeline`,
      ctaHeading: `Ready to Fill Your Pipeline with Exclusive Leads?`,
      ctaDescription: `Book a free lead generation strategy session. We'll analyze your market, identify the highest-ROI channels, and map out a plan to deliver consistent, qualified leads every month.`,
      ctaCTA: "Get Your Free Lead Gen Strategy",
      ctaSubtext: "Includes a custom channel recommendation and ROI projection",
    }} />
  );
}
