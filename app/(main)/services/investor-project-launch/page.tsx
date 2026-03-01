import ServicePageLayout from "@/app/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor & Project Launch Marketing | RealLanding",
  description:
    "Launch campaigns for real estate investors, developers, and new construction projects. Pre-launch marketing, investor targeting, digital strategy, PR placement, and sales collateral.",
  openGraph: {
    title: "Investor & Project Launch Marketing | RealLanding",
    description:
      "Launch campaigns for real estate investors, developers, and new construction projects. Pre-launch marketing, investor targeting, digital strategy, PR placement, and sales collateral.",
    url: "https://reallanding.com/services/investor-project-launch",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-investor-project-launch.jpg",
        width: 1200,
        height: 630,
        alt: "Investor & Project Launch Marketing | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Investor & Project Launch Marketing | RealLanding",
    description:
      "Launch campaigns for real estate investors, developers, and new construction projects. Pre-launch marketing, investor targeting, digital strategy, PR placement, and sales collateral.",
    images: ["https://reallanding.com/og-investor-project-launch.jpg"],
    site: "@RealLandingHQ",
  },
};


// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Investor & Project Launch Marketing",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "Launch campaigns for real estate investors, developers, and new construction projects. Pre-launch marketing, investor targeting, digital strategy, PR placement, and sales collateral.",
  "url": "https://reallanding.com/services/investor-project-launch",
  "category": "Real Estate Marketing"
};


const stats = [
  { value: "$850M+", label: "Project Value Launched" },
  { value: "340%", label: "Average Pre-Sale Rate" },
  { value: "45+", label: "Projects Launched" },
  { value: "12,000+", label: "Investors Reached" },
];

const services = [
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>), title: "Project Branding & Positioning", description: "Craft a compelling brand identity for your development — from naming and visual identity to market positioning that differentiates your project in a crowded landscape and commands premium pricing." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>), title: "Pre-Launch Marketing Campaigns", description: "Build buzz and capture early interest before ground breaks. We create teaser websites, waitlists, VIP preview events, and drip sequences that generate a qualified buyer pipeline before launch day." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>), title: "Investor Targeting & Outreach", description: "Precision-targeted campaigns that reach accredited investors, family offices, and high-net-worth individuals through LinkedIn, programmatic display, private databases, and exclusive event networks." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>), title: "Digital Launch Strategy", description: "Multi-channel digital blitz across paid social, Google Ads, email, retargeting, and landing pages — orchestrated for maximum impact during your critical launch window and sustained momentum after." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" /></svg>), title: "PR & Media Placement", description: "Secure earned media coverage in real estate publications, business journals, local press, and industry blogs. We handle press releases, media kits, journalist relationships, and interview coordination." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>), title: "Sales Collateral & Presentations", description: "Investor decks, project brochures, virtual tours, renderings integration, floor plan sheets, and presentation materials that convey credibility and close deals in the boardroom or sales gallery." },
];

const steps = [
  { step: 1, title: "Market & Feasibility Analysis", description: "We research your target market, competitive landscape, buyer demographics, and pricing benchmarks to shape a launch strategy grounded in real data." },
  { step: 2, title: "Brand & Creative Development", description: "We build your project brand from the ground up — name, logo, visual identity, messaging framework, and a cohesive story that resonates with your ideal buyer or investor." },
  { step: 3, title: "Pre-Launch Pipeline Build", description: "Before you go live, we generate a waitlist of qualified prospects through teaser campaigns, VIP events, broker outreach, and strategic partnerships." },
  { step: 4, title: "Launch Execution", description: "Coordinated multi-channel campaign activation — paid ads, PR blitz, email sequences, social media, and events all firing in sync for maximum launch-day impact." },
  { step: 5, title: "Sustain & Scale", description: "Post-launch optimization keeps momentum going with retargeting, nurture sequences, progress updates, and phase-release campaigns until the project is fully absorbed." },
];

const benefits = [
  { title: "Accelerated Sales Velocity", desc: "Pre-sell 30–50% of units before public launch with strategic waitlist campaigns and VIP preview events that create urgency and exclusivity." },
  { title: "Qualified Investor Pipeline", desc: "Reach accredited investors and high-net-worth buyers through precision targeting — no wasted spend on unqualified audiences." },
  { title: "Market Differentiation", desc: "Stand out in competitive markets with a project brand and positioning strategy that commands attention and premium pricing." },
  { title: "Comprehensive Launch Assets", desc: "Every asset you need — from investor decks and brochures to virtual tours and websites — produced under one roof for brand consistency." },
  { title: "Media Exposure", desc: "Earned media placements in top-tier publications amplify your reach and lend third-party credibility that paid ads alone can&apos;t replicate." },
  { title: "Data-Driven Targeting", desc: "Every campaign dollar is backed by demographic, psychographic, and behavioral data to ensure your message reaches the right audience at the right time." },
];

const results = [
  { metric: "$850M+", label: "Total project value launched", period: "Across all client projects" },
  { metric: "340%", label: "Average pre-sale rate lift", period: "Compared to market average" },
  { metric: "72%", label: "Of units sold before completion", period: "Across launched developments" },
  { metric: "4.2×", label: "Average ROI on launch spend", period: "Within first 12 months" },
];

const testimonials = [
  { quote: "RealLanding managed the full marketing launch for our 120-unit waterfront condo project. We had 85% pre-sold before construction topped off. Their investor targeting was incredibly precise — every lead was qualified and serious. The branding they created positioned us as the premium option in the market.", author: "Jonathan Reeves", role: "Managing Partner, Apex Development Group, Miami FL" },
  { quote: "We hired RealLanding to launch a 40-acre master-planned community and they delivered beyond expectations. The pre-launch campaign generated a 1,200-person waitlist, and we sold out Phase 1 in just three weeks. Their media placements in the Wall Street Journal and local press gave us instant credibility.", author: "Catherine Liu", role: "VP of Marketing, Horizon Communities, Scottsdale AZ" },
];

const faqs = [
  { question: "How far in advance should we start marketing before launch?", answer: "Ideally, 4–6 months before your public launch date. This gives us time for market research, brand development, pre-launch pipeline building, and PR outreach. Shorter timelines are possible — we've executed successful launches in as little as 8 weeks — but earlier engagement means a stronger pipeline on launch day." },
  { question: "How much does a project launch campaign cost?", answer: "Launch marketing budgets typically range from $25,000 to $150,000+ depending on project size, market, and scope. This includes brand development, digital advertising, PR, collateral production, and campaign management. We'll recommend a budget during our initial strategy session based on your project's specific needs and goals." },
  { question: "What types of projects do you work with?", answer: "We've launched condominiums, townhome communities, single-family subdivisions, mixed-use developments, luxury estates, and commercial real estate projects. Whether it's a 10-unit boutique building or a 500-unit master-planned community, we tailor our approach to the project type, price point, and target audience." },
  { question: "What marketing channels do you use for launches?", answer: "Our launch strategy is multi-channel: paid social (Facebook, Instagram, LinkedIn), Google Ads, programmatic display, email marketing, PR & media placement, broker outreach, VIP events, direct mail, retargeting, and SEO. The channel mix is customized based on your target buyer or investor profile." },
  { question: "Can you help with investor-only projects that aren't selling to end-users?", answer: "Absolutely. A significant portion of our work involves capital raise campaigns, investor outreach, and fund marketing. We create investor decks, data rooms, targeted LinkedIn campaigns, and private event strategies to connect developers with accredited investors and institutional capital." },
  { question: "Do you offer ongoing marketing after the initial launch?", answer: "Yes. Most projects require sustained marketing through sell-out. We offer ongoing campaign management for phase releases, construction milestone updates, price adjustments, and close-out campaigns. Think of launch as the beginning — we stay engaged until the last unit is sold." },
];

const relatedServices = [
  { title: "Paid Advertising", href: "/services/paid-advertising", description: "Amplify your project launch with targeted PPC, social media ads, and programmatic campaigns that drive qualified traffic at scale." },
  { title: "Branding & Market Positioning", href: "/services/branding-market-positioning", description: "Build a powerful brand identity and competitive positioning strategy that commands premium pricing and buyer loyalty." },
  { title: "Video Marketing", href: "/services/video-marketing", description: "Bring your project to life with cinematic drone footage, virtual tours, investor sizzle reels, and construction progress videos." },
];

export default function InvestorProjectLaunchPage() {
  return (
    <ServicePageLayout data={{
      breadcrumb: "Investor & Project Launch",
      badgeIcon: (<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>),
      badgeText: "Real Estate Project Launch Marketing",
      title: `Launch Your Real Estate Project<br className="hidden md:block" /> with Maximum Market Impact`,
      description: `Full-service launch campaigns for developers, investors, and new construction projects. From pre-launch buzz to sell-out — we build pipelines, position brands, and drive sales velocity.`,
      primaryCTA: "Get Your Launch Strategy",
      secondaryCTA: "See Case Studies",
      trustLine: "45+ projects launched with $850M+ in combined value",
      trustBar: ["Luxury & Mid-Market Projects", "Pre-Construction Specialists", "Accredited Investor Networks", "Full-Service Launch Execution"],
      stats,
      services,
      servicesHeading: "Our Solutions",
      servicesSubheading: `End-to-End Project Launch Marketing`,
      servicesDescription: `Everything you need to take a real estate project from concept to sold out — branding, campaigns, investor outreach, PR, and sales collateral under one roof.`,
      results,
      resultsHeading: "Proven Results",
      resultsSubheading: `Launch Performance Metrics`,
      resultsDescription: `Real numbers from real projects our team has launched for developers and investors.`,
      benefits,
      benefitsHeading: "Why Launch with Us",
      benefitsSubheading: `The Competitive Edge Your Project Needs`,
      benefitsDescription: `In a crowded market, the quality of your launch marketing determines your project's trajectory. We make sure yours stands out.`,
      testimonials,
      testimonialHeading: "What Developers & Investors Say",
      steps,
      processHeading: "Our Process",
      processSubheading: `From Concept to Sold Out in Five Phases`,
      processDescription: `A proven, repeatable framework that maximizes pre-sales, accelerates absorption, and delivers measurable ROI on every launch dollar.`,
      faqs,
      faqHeading: `Common Questions About Project Launch Marketing`,
      relatedServices,
      relatedHeading: "Related Services",
      relatedSubheading: `Amplify Your Launch`,
      ctaHeading: `Ready to Launch Your Next Real Estate Project?`,
      ctaDescription: `Book a free launch strategy session. We'll analyze your project, market, and competition — then map out a campaign that maximizes pre-sales and accelerates absorption.`,
      ctaCTA: "Get Your Free Launch Strategy",
      ctaSubtext: "Includes a custom market analysis and launch timeline",
    }} />
  );
}
