import ServicePageLayout from "@/app/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paid Advertising for Real Estate | RealLanding",
  description:
    "Drive qualified buyer and seller leads with high-performance paid advertising campaigns across Google, Facebook, Instagram, TikTok, and YouTube — built exclusively for real estate professionals.",
  openGraph: {
    title: "Paid Advertising for Real Estate | RealLanding",
    description:
      "Drive qualified buyer and seller leads with high-performance paid advertising campaigns across Google, Facebook, Instagram, TikTok, and YouTube — built exclusively for real estate professionals.",
    url: "https://reallanding.com/services/paid-advertising",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-paid-advertising.jpg",
        width: 1200,
        height: 630,
        alt: "Paid Advertising for Real Estate | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paid Advertising for Real Estate | RealLanding",
    description:
      "Drive qualified buyer and seller leads with high-performance paid advertising campaigns across Google, Facebook, Instagram, TikTok, and YouTube — built exclusively for real estate professionals.",
    images: ["https://reallanding.com/og-paid-advertising.jpg"],
    site: "@RealLandingHQ",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Paid Advertising",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "Drive qualified buyer and seller leads with high-performance paid advertising campaigns across Google, Facebook, Instagram, TikTok, and YouTube — built exclusively for real estate professionals.",
  "url": "https://reallanding.com/services/paid-advertising",
  "category": "Real Estate Marketing"
};

const stats = [
  { value: "5.2×", label: "Average ROAS Across Clients" },
  { value: "$14", label: "Average Cost Per Qualified Lead" },
  { value: "38%", label: "Lower CPA vs Industry Average" },
  { value: "72hr", label: "Time to First Leads" },
];

const services = [
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>), title: "Google Ads & Search Campaigns", description: "Capture high-intent buyers and sellers actively searching for properties, agents, and real estate services. We build hyper-targeted search, display, and Performance Max campaigns that convert at scale." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>), title: "Facebook & Instagram Ads", description: "Reach exactly the right audiences with scroll-stopping listing showcases, virtual tour promotions, lead magnet campaigns, and lookalike targeting that fills your pipeline with qualified prospects." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" /></svg>), title: "YouTube & Video Advertising", description: "Engage prospective clients with cinematic property walkthroughs, market updates, and agent introduction videos. Video ads deliver the highest engagement rates across all formats." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M21.015 4.356v4.992" /></svg>), title: "Retargeting & Remarketing", description: "Re-engage the 97% of visitors who left without converting. Our retargeting sequences across display, social, and video keep your brand top-of-mind until they&apos;re ready to act." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>), title: "TikTok & Emerging Platforms", description: "Tap into younger demographics, first-time homebuyers, and early adopters with native short-form video ads optimized for TikTok, Pinterest, and Snapchat audiences." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" /></svg>), title: "Landing Pages & Conversion Funnels", description: "Every campaign includes dedicated, high-converting landing pages with A/B tested headlines, forms, and CTAs — designed to turn ad clicks into booked appointments." },
];

const steps = [
  { step: 1, title: "Account & Market Audit", description: "We analyze your existing ad accounts, competitor landscape, and local market data to identify untapped opportunities and wasted spend." },
  { step: 2, title: "Strategy & Media Plan", description: "Custom media plan with audience segments, budget allocation, platform selection, creative briefs, and conversion goals aligned to your pipeline targets." },
  { step: 3, title: "Creative Production", description: "Our team designs compelling ad creatives — carousel listings, video tours, lead magnets, and dynamic ads — optimized for each platform&apos;s algorithm." },
  { step: 4, title: "Launch & Test", description: "Campaigns launch with precise targeting, A/B testing frameworks, conversion tracking, and UTM parameters fully configured from day one." },
  { step: 5, title: "Optimize & Scale", description: "Continuous bid management, audience refinement, creative rotation, and budget reallocation ensure your cost per lead decreases as volume grows." },
];

const benefits = [
  { title: "Leads on Demand", desc: "Unlike organic strategies that take months, paid ads can generate qualified leads within 48–72 hours of campaign launch." },
  { title: "Laser-Precision Targeting", desc: "Reach buyers by location, income, life events, homeownership status, browsing behavior, and dozens of other targeting parameters." },
  { title: "Fully Measurable ROI", desc: "Every dollar is tracked from impression to closed deal. Know exactly which campaigns, ads, and audiences deliver the best returns." },
  { title: "Flexible & Scalable Budgets", desc: "Start small and scale up as you see results. Pause, pivot, or double down on winning campaigns — you&apos;re always in control." },
  { title: "Multi-Platform Presence", desc: "Reach your audience wherever they spend time — Google, Facebook, Instagram, YouTube, TikTok, and programmatic display networks." },
  { title: "Dedicated Real Estate Specialist", desc: "Your campaigns are managed by an ad strategist who understands real estate cycles, seasonal trends, and what makes buyers click." },
];

const results = [
  { metric: "127", label: "Qualified leads per month", period: "Average across clients" },
  { metric: "$8.40", label: "Cost per lead achieved", period: "For top-performing campaigns" },
  { metric: "6.1×", label: "Return on ad spend", period: "Across all platforms" },
  { metric: "340%", label: "Pipeline value increase", period: "Within first quarter" },
];

const testimonials = [
  { quote: "RealLanding cut our cost per lead in half while tripling our monthly lead volume. Their Facebook and Google strategy completely transformed our business — we went from 20 leads a month to over 100.", author: "Michael S.", role: "Real Estate Team Lead, Dallas TX" },
  { quote: "The retargeting campaigns alone paid for the entire engagement. We're now closing deals from prospects who visited our site months ago — because RealLanding's ads kept us in front of them.", author: "Amanda L.", role: "Luxury Agent, San Diego CA" },
];

const faqs = [
  { question: "What budget do I need to start paid advertising?", answer: "Most agents see meaningful results starting at $1,500–$3,000 per month in ad spend (plus management fees). We'll recommend a budget based on your market competitiveness, lead volume goals, and the platforms that will deliver the best ROI for your specific situation." },
  { question: "Which platforms work best for real estate ads?", answer: "Google Ads captures high-intent searches from active buyers and sellers, while Facebook and Instagram excel at visual listing promotion and brand awareness. We typically recommend a blended approach and reallocate spend based on performance data — most clients see the best results with a Google + Meta combination." },
  { question: "How quickly will I see leads?", answer: "Paid campaigns can generate leads within 48–72 hours of launch. Optimization over the first 2–4 weeks typically reduces cost per lead by 25–40% as we refine targeting, creative, and bidding strategies based on real conversion data." },
  { question: "How do you track and report results?", answer: "You'll receive a live dashboard tracking impressions, clicks, leads, cost per lead, and return on ad spend in real time. We also provide bi-weekly strategy calls to review performance, discuss optimization opportunities, and align on upcoming campaigns." },
  { question: "Can I pause or adjust campaigns anytime?", answer: "Absolutely. We offer full flexibility to pause, scale, or pivot campaigns based on seasonal demand, listing inventory changes, or shifting business priorities. There are no long-term contracts — you stay because it works." },
  { question: "What makes your ad management different from other agencies?", answer: "We exclusively serve real estate professionals. Our team understands buyer and seller psychology, seasonal market patterns, and the exact ad formats and targeting parameters that work for property marketing. We also build custom landing pages for every campaign — most agencies skip this critical step." },
];

const relatedServices = [
  { title: "Lead Generation", href: "/services/lead-generation", description: "Build a predictable pipeline of buyer and seller leads with multi-channel acquisition strategies that work alongside your paid campaigns." },
  { title: "Social Media Marketing", href: "/services/social-media-marketing", description: "Grow your brand organically and nurture prospects with engaging social content that supports and amplifies your paid efforts." },
  { title: "Conversion Rate Optimization", href: "/services/conversion-rate-optimization", description: "Turn more of your website visitors and ad clicks into booked appointments with data-driven landing page and funnel optimization." },
];

export default function PaidAdvertisingPage() {
  return (
    <ServicePageLayout data={{
      breadcrumb: "Paid Advertising",
      badgeIcon: (<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>),
      badgeText: "Paid Advertising for Real Estate",
      title: `Generate Leads on Demand with<br className="hidden md:block" /> High-Performance Paid Ads`,
      description: `Put your listings and services in front of motivated buyers and sellers the moment they're searching — across Google, social media, and video platforms with campaigns that deliver predictable ROI.`,
      primaryCTA: "Get Your Free Ad Audit",
      secondaryCTA: "View Case Studies",
      trustLine: "$2M+ in ad spend managed for real estate professionals",
      trustBar: ["Google Premier Partner", "Meta Business Partner", "Real-Time Dashboards", "No Long-Term Contracts"],
      stats,
      services,
      servicesHeading: "Our Services",
      servicesSubheading: `Full-Spectrum Paid Advertising Solutions`,
      servicesDescription: `Every major ad platform, managed by specialists who understand real estate marketing — from search intent to social scroll behavior.`,
      results,
      resultsHeading: "Proven Results",
      resultsSubheading: `Performance That Speaks for Itself`,
      resultsDescription: `Real numbers from real estate professionals who trust us to manage their ad spend and deliver pipeline growth.`,
      benefits,
      benefitsHeading: "Why Paid Ads",
      benefitsSubheading: `The Fastest Path to Predictable Real Estate Leads`,
      benefitsDescription: `While organic strategies build long-term equity, paid advertising delivers qualified leads immediately — giving you full control over volume, targeting, and spend.`,
      testimonials,
      steps,
      processHeading: "Our Process",
      processSubheading: `From Audit to Lead Generation in Five Steps`,
      processDescription: `A battle-tested methodology refined across hundreds of real estate campaigns and millions of dollars in managed ad spend.`,
      faqs,
      faqHeading: `Common Questions About Paid Advertising`,
      relatedServices,
      relatedHeading: "Related Services",
      relatedSubheading: `Amplify Your Ad Results`,
      ctaHeading: `Ready to Turn Ad Spend into Closed Deals?`,
      ctaDescription: `Book a free strategy session and discover how our paid advertising campaigns can fill your pipeline with qualified buyer and seller leads — starting this week.`,
      ctaCTA: "Schedule Your Free Consultation",
      ctaSubtext: "Free ad account audit included — even if you don't sign up",
    }} />
  );
}
