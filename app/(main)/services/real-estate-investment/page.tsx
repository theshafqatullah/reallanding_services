import ServicePageLayout from "@/app/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Investment Consulting | RealLanding",
  description:
    "Expert real estate investment consulting — market analysis, portfolio strategy, ROI projections, acquisition due diligence, and investment property marketing for investors.",
  openGraph: {
    title: "Real Estate Investment Consulting | RealLanding",
    description:
      "Expert real estate investment consulting — market analysis, portfolio strategy, ROI projections, acquisition due diligence, and investment property marketing for investors.",
    url: "https://reallanding.com/services/real-estate-investment",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-real-estate-investment.jpg",
        width: 1200,
        height: 630,
        alt: "Real Estate Investment Consulting | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Investment Consulting | RealLanding",
    description:
      "Expert real estate investment consulting — market analysis, portfolio strategy, ROI projections, acquisition due diligence, and investment property marketing for investors.",
    images: ["https://reallanding.com/og-real-estate-investment.jpg"],
    site: "@RealLandingHQ",
  },
};


// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Real Estate Investment Consulting",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "Expert real estate investment consulting — market analysis, portfolio strategy, ROI projections, acquisition due diligence, and investment property marketing for investors.",
  "url": "https://reallanding.com/services/real-estate-investment",
  "category": "Real Estate Marketing"
};


const stats = [
  { value: "$2.4B+", label: "Portfolio Value Managed" },
  { value: "18%", label: "Average Annual ROI" },
  { value: "450+", label: "Investment Properties Acquired" },
  { value: "95%", label: "Client Retention Rate" },
];

const services = [
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>), title: "Market & Opportunity Analysis", description: "Deep-dive research into local and national markets to uncover high-yield investment opportunities. We analyze supply-demand dynamics, rental trends, appreciation forecasts, and demographic shifts to pinpoint neighborhoods poised for growth before the competition catches on." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>), title: "Investment Strategy & Portfolio Planning", description: "Custom investment blueprints aligned to your risk tolerance, capital reserves, and long-term wealth goals. Whether you&apos;re building a buy-and-hold rental portfolio, flipping distressed properties, or syndicating commercial deals, we architect a roadmap that compounds returns year after year." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>), title: "Financial Modeling & ROI Projections", description: "Institutional-grade financial models that project cash-on-cash returns, cap rates, IRR, and equity appreciation over 5-, 10-, and 20-year horizons. Every acquisition decision is backed by rigorous numbers — not gut feelings." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>), title: "Acquisition Due Diligence", description: "Comprehensive pre-purchase analysis covering property condition, title review, zoning compliance, environmental risk, tenant lease audits, and comparable sales validation. We ensure every deal is airtight before you sign on the dotted line." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>), title: "Investment Property Marketing", description: "Attract qualified tenants, buyers, or partners with professional property marketing. From listing optimization and virtual tours to targeted digital campaigns, we maximize exposure and minimize vacancy for every asset in your portfolio." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" /></svg>), title: "Exit Strategy & Disposition", description: "Strategic disposition planning that maximizes your return at sale. We time the market, stage the asset, identify the optimal buyer pool, and execute a marketing plan designed to generate competitive offers and close above asking price." },
];

const steps = [
  { step: 1, title: "Discovery & Goal Setting", description: "We assess your current portfolio, investment experience, available capital, and financial goals to define a clear investment thesis and success criteria." },
  { step: 2, title: "Market Research & Deal Sourcing", description: "Our analysts scan target markets for properties that match your criteria — running comps, rental analyses, and growth projections on every potential acquisition." },
  { step: 3, title: "Due Diligence & Underwriting", description: "Each shortlisted property undergoes rigorous financial modeling and physical due diligence. We stress-test every assumption so you invest with confidence." },
  { step: 4, title: "Acquisition & Onboarding", description: "We guide you through offer negotiation, financing coordination, closing logistics, and property onboarding — whether it&apos;s your first rental or your fiftieth." },
  { step: 5, title: "Optimize, Report & Scale", description: "Ongoing portfolio performance tracking, quarterly reviews, and reinvestment planning. We continuously identify opportunities to improve returns and scale your holdings." },
];

const benefits = [
  { title: "Data-Driven Decisions", desc: "Every recommendation is backed by institutional-quality market data, financial modeling, and trend analysis — eliminating guesswork from your investment decisions." },
  { title: "Risk-Adjusted Returns", desc: "We don&apos;t chase the highest returns blindly. Our strategies balance yield against risk, ensuring your portfolio weathers market cycles and delivers consistent, sustainable growth." },
  { title: "End-to-End Support", desc: "From sourcing your first deal to executing a 1031 exchange on your tenth, we&apos;re with you at every stage of the investment lifecycle — no gaps, no handoffs." },
  { title: "Market-Tested Strategies", desc: "Our methodologies have been refined across $2.4B+ in portfolio value. You benefit from proven playbooks that have performed in bull markets, corrections, and everything in between." },
  { title: "Time-Saving Expertise", desc: "Skip the learning curve. Our analysts do the research, run the numbers, and vet the deals — so you invest your capital, not hundreds of hours of your own time." },
  { title: "Transparent Reporting", desc: "Real-time dashboards and quarterly portfolio reports give you complete visibility into property performance, cash flow, equity growth, and portfolio-wide ROI." },
];

const results = [
  { metric: "$2.4B+", label: "Total portfolio value managed", period: "Across all client portfolios" },
  { metric: "18%", label: "Average annual ROI", period: "Blended across strategies" },
  { metric: "450+", label: "Investment properties acquired", period: "In 38 U.S. markets" },
  { metric: "95%", label: "Client retention rate", period: "Year-over-year renewal" },
];

const testimonials = [
  { quote: "RealLanding completely transformed how I approach real estate investing. Their financial models and market analysis helped me acquire seven rental properties in two years — all cash-flow positive from day one. My portfolio is generating 21% annual returns and I barely lift a finger thanks to their ongoing advisory.", author: "Marcus Whitfield", role: "Private Investor, Dallas TX" },
  { quote: "As a physician with zero real estate experience, I needed a team I could trust. RealLanding walked me through every step — from identifying the right markets to closing my first duplex. Eighteen months later, I own four properties across two states and my passive income covers my student loan payments entirely.", author: "Dr. Priya Ramanathan", role: "Real Estate Investor, Nashville TN" },
];

const faqs = [
  { question: "What is the minimum investment required to get started?", answer: "There is no strict minimum to engage our consulting services. However, for direct property acquisitions, we typically recommend investors have at least $50,000–$100,000 in available capital (cash or accessible equity) to comfortably acquire and properly reserve for your first investment property. We also work with investors pooling capital through partnerships and syndications with lower individual minimums." },
  { question: "Which markets do you cover?", answer: "We actively analyze and invest in over 40 U.S. markets spanning the Sun Belt, Midwest, and emerging secondary cities. Our strongest deal flow is currently in Texas, Florida, Tennessee, Georgia, North Carolina, and Ohio — but we continuously evaluate new markets based on population growth, job creation, landlord-friendliness, and yield potential." },
  { question: "How are projected returns calculated?", answer: "We use institutional-grade financial models that incorporate purchase price, closing costs, renovation budgets, financing terms, rental income, vacancy assumptions, operating expenses, property management fees, tax implications, and appreciation projections. Every model includes base-case, upside, and downside scenarios so you understand the full range of outcomes before committing capital." },
  { question: "How do you mitigate investment risk?", answer: "Risk mitigation is built into every step: diversification across markets and property types, conservative underwriting assumptions, thorough physical and legal due diligence, adequate cash reserves, landlord-favorable lease structures, and ongoing portfolio monitoring. We never recommend a deal that doesn't meet our minimum return and risk thresholds." },
  { question: "How do I get started with your investment consulting?", answer: "Book a free investment strategy session through our contact page. We'll discuss your financial goals, investment experience, available capital, and timeline. From there, we'll develop a custom investment plan and begin sourcing opportunities that match your criteria — typically within 2–3 weeks of our initial consultation." },
  { question: "What are your consulting fees?", answer: "Our advisory fees depend on the scope of engagement. Market analysis and strategy packages start at $2,500. Ongoing portfolio advisory retainers range from $1,500–$5,000/month depending on portfolio size and complexity. For acquisition-specific work, we often structure fees as a percentage of deal value. All fees are transparent and outlined before any engagement begins." },
];

const relatedServices = [
  { title: "Property Management", href: "/services/property-management", description: "Protect and grow your investment returns with full-service property management that maximizes occupancy and minimizes owner headaches." },
  { title: "Strategic Growth Planning", href: "/services/strategic-growth-planning", description: "Scale your real estate business or portfolio with a data-driven growth roadmap customized to your market and goals." },
  { title: "Analytics & Performance", href: "/services/analytics-performance", description: "Track every dollar of your investment portfolio with real-time analytics dashboards and actionable performance insights." },
];

export default function RealEstateInvestmentPage() {
  return (
    <ServicePageLayout data={{
      breadcrumb: "Real Estate Investment",
      badgeIcon: (<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
      badgeText: "Investment Consulting",
      title: `Build Wealth Through Strategic<br className="hidden md:block" /> Real Estate Investing`,
      description: `Expert investment consulting — market analysis, portfolio strategy, ROI projections, and acquisition support — so every dollar you deploy works harder.`,
      primaryCTA: "Get Your Free Investment Strategy",
      secondaryCTA: "See Portfolio Results",
      trustLine: "$2.4B+ in portfolio value managed across 38 U.S. markets",
      trustBar: ["Data-Driven Underwriting", "Risk-Adjusted Portfolios", "Institutional-Grade Models", "Transparent Fee Structure"],
      stats,
      services,
      servicesHeading: "Our Solutions",
      servicesSubheading: `Full-Spectrum Investment Consulting`,
      servicesDescription: `From opportunity identification to exit execution, we cover every stage of the real estate investment lifecycle with data-driven expertise.`,
      results,
      resultsHeading: "Proven Results",
      resultsSubheading: `Investment Performance Metrics`,
      resultsDescription: `Real numbers from real portfolios managed and advised by our investment team.`,
      benefits,
      benefitsHeading: "Why Choose Us",
      benefitsSubheading: `Invest Smarter, Not Harder`,
      benefitsDescription: `Our consulting is designed for investors who want institutional-quality guidance without the institutional price tag.`,
      testimonials,
      testimonialHeading: "What Investors Say",
      steps,
      processHeading: "Our Process",
      processSubheading: `From Strategy to Steady Returns in Five Steps`,
      processDescription: `A disciplined, research-driven process that takes you from investment thesis to income-producing portfolio — without the costly trial and error.`,
      faqs,
      faqHeading: `Common Questions About Investment Consulting`,
      relatedServices,
      relatedHeading: "Related Services",
      relatedSubheading: `Maximize Your Investment Returns`,
      ctaHeading: `Ready to Build a High-Performing Real Estate Portfolio?`,
      ctaDescription: `Book a free investment strategy session. We'll analyze your goals, identify the highest-yield markets, and build a custom roadmap to grow your wealth through real estate.`,
      ctaCTA: "Get Your Free Investment Strategy",
      ctaSubtext: "Includes a custom market analysis and ROI projection for your first deal",
    }} />
  );
}
