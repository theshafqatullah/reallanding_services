import ServicePageLayout from "@/app/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic Growth Planning for Real Estate | RealLanding",
  description:
    "Comprehensive growth strategy for real estate businesses — market analysis, business planning, revenue forecasting, team scaling, geographic expansion, and competitive positioning.",
  openGraph: {
    title: "Strategic Growth Planning for Real Estate | RealLanding",
    description:
      "Comprehensive growth strategy for real estate businesses — market analysis, business planning, revenue forecasting, team scaling, geographic expansion, and competitive positioning.",
    url: "https://reallanding.com/services/strategic-growth-planning",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-strategic-growth-planning.jpg",
        width: 1200,
        height: 630,
        alt: "Strategic Growth Planning for Real Estate | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategic Growth Planning for Real Estate | RealLanding",
    description:
      "Comprehensive growth strategy for real estate businesses — market analysis, business planning, revenue forecasting, team scaling, geographic expansion, and competitive positioning.",
    images: ["https://reallanding.com/og-strategic-growth-planning.jpg"],
    site: "@RealLandingHQ",
  },
};


// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Strategic Growth Planning",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "Comprehensive growth strategy for real estate businesses — market analysis, business planning, revenue forecasting, team scaling, geographic expansion, and competitive positioning.",
  "url": "https://reallanding.com/services/strategic-growth-planning",
  "category": "Real Estate Marketing"
};


const stats = [
  { value: "$180M+", label: "Revenue Growth Planned" },
  { value: "89%", label: "Goal Achievement Rate" },
  { value: "250+", label: "Growth Plans Delivered" },
  { value: "3.2×", label: "Average Revenue Growth" },
];

const services = [
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>), title: "Market Analysis & Growth Mapping", description: "Deep-dive analysis of your local market dynamics, demographic trends, absorption rates, and opportunity gaps. We identify exactly where the growth potential lies — which neighborhoods, price points, and client segments offer the biggest upside for your business." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>), title: "Business Plan & Revenue Modeling", description: "A fully custom business plan with detailed revenue projections, expense modeling, and break-even analysis. We map every transaction type, average commission, and lead source to build a realistic, achievable financial roadmap for the next 12–36 months." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>), title: "Team Structure & Scaling Strategy", description: "Know exactly when and who to hire — buyer agents, listing specialists, ISAs, transaction coordinators, or marketing staff. We design the optimal org chart and compensation structure to scale profitably without burning cash or overextending." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" /></svg>), title: "Geographic Expansion Planning", description: "Thinking about expanding into new markets, opening a second office, or launching a new team in another city? We evaluate market viability, competition density, licensing requirements, and resource allocation to make expansion decisions data-driven." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>), title: "Competitive Positioning & Differentiation", description: "Analyze your top competitors, identify white-space opportunities, and craft a unique value proposition that separates you from the sea of agents in your market. We help you own a niche that drives referrals and commands premium commissions." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>), title: "Quarterly Reviews & Accountability", description: "Growth doesn&apos;t happen without accountability. We conduct structured quarterly business reviews, compare actuals vs. projections, recalibrate goals, and ensure your team stays on track with clear KPIs and action items every 90 days." },
];

const steps = [
  { step: 1, title: "Discovery & Assessment", description: "We audit your current business — financials, team, lead sources, market position, and operational efficiency — to establish a clear baseline and identify growth bottlenecks." },
  { step: 2, title: "Growth Strategy Development", description: "Using data from the assessment, we build a comprehensive growth plan with specific revenue targets, team milestones, market expansion timelines, and competitive strategies." },
  { step: 3, title: "Implementation Roadmap", description: "Your plan becomes an actionable 90-day sprint roadmap with weekly priorities, responsible owners, resource requirements, and measurable milestones to keep momentum high." },
  { step: 4, title: "Execute & Measure", description: "Your team executes against the roadmap while we track KPIs in real time — transactions, revenue, lead conversion, team performance, and market share gains." },
  { step: 5, title: "Optimize & Scale", description: "Quarterly reviews identify what&apos;s working, what needs adjustment, and where to double down. We continuously refine the strategy to accelerate growth and eliminate waste." },
];

const benefits = [
  { title: "Clarity & Direction", desc: "Stop operating on intuition. A documented growth plan gives you and your team a clear destination, defined priorities, and measurable milestones — so every dollar and hour is invested, not wasted." },
  { title: "Data-Driven Decisions", desc: "Every recommendation is backed by market data, financial modeling, and competitive analysis — not guesswork. You&apos;ll make hiring, expansion, and investment decisions with confidence." },
  { title: "Scalable Team Blueprint", desc: "Know exactly when to hire your next agent, ISA, or admin — and what their ROI will be before you make the offer. Our team scaling models prevent both premature hires and missed growth windows." },
  { title: "Revenue Predictability", desc: "Move from inconsistent closings to predictable, projectable revenue. Our financial models break down exactly how many leads, appointments, and transactions you need per month to hit your targets." },
  { title: "Competitive Advantage", desc: "Most agents don&apos;t have a business plan — let alone a growth strategy. Having one puts you in the top 5% and gives you an unfair advantage when recruiting, attracting clients, and negotiating partnerships." },
  { title: "Accountability Framework", desc: "Plans without accountability are just wishes. Our quarterly review process ensures goals are tracked, course corrections are made early, and your team stays focused on high-impact activities." },
];

const results = [
  { metric: "$180M+", label: "Cumulative revenue growth planned", period: "Across all client engagements" },
  { metric: "89%", label: "Client goal achievement rate", period: "Measured at 12-month mark" },
  { metric: "3.2×", label: "Average revenue growth", period: "Within first 18 months" },
  { metric: "67%", label: "Clients expanded to new markets", period: "Within 24 months of planning" },
];

const testimonials = [
  { quote: "Before RealLanding, we were a $12M team running on gut instinct. They built us a 3-year growth plan with quarterly milestones, a hiring roadmap, and a geographic expansion strategy. We hit $31M in year two — a number I never would have set for myself without their data showing it was possible. The quarterly reviews kept us honest and moving forward.", author: "Marcus Whitfield", role: "Broker/Owner, Whitfield Realty Group, Dallas TX" },
  { quote: "I was stuck at 40 transactions a year for three years straight. RealLanding&apos;s growth assessment showed me I was leaving $400K on the table by not having a buyer&apos;s agent and by ignoring the new-construction segment. Within 14 months of implementing the plan, I closed 78 transactions and added two agents to my team. The clarity alone was worth 10x the investment.", author: "Lauren Fujimoto", role: "Team Lead, Fujimoto & Associates, Portland OR" },
];

const faqs = [
  { question: "Who needs strategic growth planning?", answer: "Any real estate professional who wants to scale intentionally — whether you're a solo agent looking to build a team, a team leader aiming to double production, or a broker planning to open a new office or expand into new markets. If you've plateaued or are growing but feel chaotic, a structured plan changes everything." },
  { question: "How quickly will I see ROI from a growth plan?", answer: "Most clients see measurable traction within the first 90 days as the immediate-impact action items take effect. Significant revenue growth typically materializes within 6–12 months. Our 89% goal achievement rate at the 12-month mark speaks to the speed and reliability of the process." },
  { question: "What's included in a growth plan?", answer: "A comprehensive plan includes market analysis, SWOT assessment, financial modeling with revenue projections, team structure and hiring roadmap, competitive positioning strategy, geographic expansion analysis (if applicable), quarterly KPI dashboards, and a 90-day sprint roadmap with weekly action items." },
  { question: "How does growth planning work with my existing business plan?", answer: "If you have an existing plan, we audit it against current market data and your actual performance to identify gaps and missed opportunities. We then enhance or rebuild it with data-driven projections and actionable strategies. Most clients find their existing plans are either outdated, too vague, or lacking the financial and competitive analysis needed to be truly actionable." },
  { question: "Do I need a certain team size to benefit?", answer: "Not at all. We work with solo agents doing $3M in volume all the way up to 50+ agent brokerages doing $500M+. The strategies scale to your situation — a solo agent's plan focuses on building the foundation for a team, while a large brokerage's plan may focus on market share, recruiting, and operational efficiency." },
  { question: "How much does strategic growth planning cost?", answer: "Our growth planning engagements range from $3,500 for a one-time comprehensive plan to $2,000–$5,000/month for ongoing strategy and quarterly review retainers. The investment is calibrated to your business size and complexity. Every client we've worked with has seen multiples of their investment returned in the first year." },
];

const relatedServices = [
  { title: "Analytics & Performance", href: "/services/analytics-performance", description: "Track every KPI in your growth plan with real-time dashboards that measure revenue, transactions, lead conversion, and market share." },
  { title: "Branding & Market Positioning", href: "/services/branding-market-positioning", description: "Establish a differentiated brand that supports your competitive positioning strategy and attracts premium clients." },
  { title: "Lead Generation", href: "/services/lead-generation", description: "Execute the lead generation channels identified in your growth plan to build a predictable, scalable pipeline." },
];

export default function StrategicGrowthPlanningPage() {
  return (
    <ServicePageLayout data={{
      breadcrumb: "Strategic Growth Planning",
      badgeIcon: (<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>),
      badgeText: "Strategic Growth Planning for Real Estate",
      title: `Scale Your Real Estate Business<br className="hidden md:block" /> with a Data-Driven Growth Plan`,
      description: `Stop guessing. Start growing. We build comprehensive growth strategies for real estate teams and brokerages — from market analysis and revenue modeling to team scaling and geographic expansion.`,
      primaryCTA: "Get Your Free Growth Assessment",
      secondaryCTA: "See Our Results",
      trustLine: "250+ growth plans delivered for real estate businesses nationwide",
      trustBar: ["Data-Driven Strategies", "Quarterly Accountability Reviews", "Custom Revenue Modeling", "Expansion-Ready Plans"],
      stats,
      services,
      servicesHeading: "Our Solutions",
      servicesSubheading: `Six Pillars of Strategic Growth`,
      servicesDescription: `A holistic approach that covers every dimension of your real estate business — from financials and team to market position and expansion.`,
      results,
      resultsHeading: "Proven Results",
      resultsSubheading: `Growth Planning Performance`,
      resultsDescription: `Real outcomes from real estate businesses that invested in strategic, data-driven growth planning.`,
      benefits,
      benefitsHeading: "Why Choose Us",
      benefitsSubheading: `Growth Planning That Drives Real Results`,
      benefitsDescription: `Most agents don't have a business plan. Having a data-backed growth strategy puts you ahead of 95% of the competition.`,
      testimonials,
      testimonialHeading: "What Leaders & Teams Say",
      steps,
      processHeading: "Our Process",
      processSubheading: `From Assessment to Accelerated Growth in Five Steps`,
      processDescription: `A structured, repeatable process that transforms your vision into a documented, executable, and accountable growth plan.`,
      faqs,
      faqHeading: `Common Questions About Growth Planning`,
      relatedServices,
      relatedHeading: "Related Services",
      relatedSubheading: `Accelerate Your Growth Plan`,
      ctaHeading: `Ready to Build Your Growth Roadmap?`,
      ctaDescription: `Book a free growth assessment. We'll evaluate your business, identify your biggest opportunities, and outline a strategic plan to reach your revenue and expansion goals.`,
      ctaCTA: "Get Your Free Growth Assessment",
      ctaSubtext: "Includes a complimentary business audit and opportunity analysis",
    }} />
  );
}
