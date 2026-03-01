import ServicePageLayout from "@/app/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics & Performance Tracking for Real Estate | RealLanding",
  description:
    "Custom KPI dashboards, ROI reporting, marketing attribution, and data-driven insights that help real estate professionals make smarter decisions and maximize returns.",
  openGraph: {
    title: "Analytics & Performance Tracking for Real Estate | RealLanding",
    description:
      "Custom KPI dashboards, ROI reporting, marketing attribution, and data-driven insights that help real estate professionals make smarter decisions and maximize returns.",
    url: "https://reallanding.com/services/analytics-performance",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-analytics-performance.jpg",
        width: 1200,
        height: 630,
        alt: "Analytics & Performance Tracking for Real Estate | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Analytics & Performance Tracking for Real Estate | RealLanding",
    description:
      "Custom KPI dashboards, ROI reporting, marketing attribution, and data-driven insights that help real estate professionals make smarter decisions and maximize returns.",
    images: ["https://reallanding.com/og-analytics-performance.jpg"],
    site: "@RealLandingHQ",
  },
};


// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Analytics & Performance Tracking",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "Custom KPI dashboards, ROI reporting, marketing attribution, and data-driven insights that help real estate professionals make smarter decisions and maximize returns.",
  "url": "https://reallanding.com/services/analytics-performance",
  "category": "Real Estate Marketing"
};


const stats = [
  { value: "42%", label: "Average ROI Improvement" },
  { value: "150+", label: "KPIs Tracked Per Client" },
  { value: "Real-Time", label: "Dashboard Updates" },
  { value: "100%", label: "Marketing Attribution Clarity" },
];

const services = [
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>), title: "Custom KPI Dashboards", description: "Live dashboards built for real estate that track lead volume, cost-per-lead, conversion rates, deal velocity, and revenue — organized by channel, campaign, and agent." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>), title: "ROI & Revenue Attribution", description: "Track every dollar from first click to closed deal. Know exactly which campaigns, channels, and keywords produce revenue — not just leads." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>), title: "Marketing Performance Reports", description: "Weekly and monthly reports that go beyond vanity metrics — actionable insights on what's working, what's not, and where to reallocate your budget for maximum ROI." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>), title: "Conversion Funnel Analysis", description: "Identify exactly where leads drop off in your funnel. We pinpoint friction points and recommend data-backed optimizations to improve every stage." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.77.896m5.25-6.388V2.721" /></svg>), title: "Competitive Benchmarking", description: "See how your performance compares to market averages and top competitors. Benchmarks for CPL, conversion rates, listing views, and market share." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>), title: "Predictive Forecasting", description: "Data models that predict lead volume, revenue trends, seasonal patterns, and campaign performance — so you can plan budgets and staffing with confidence." },
];

const steps = [
  { step: 1, title: "Data Audit", description: "We audit your current tracking setup, identify data gaps, and map every touchpoint in your marketing and sales funnel." },
  { step: 2, title: "Tracking Setup", description: "Implement proper tracking pixels, UTM structures, CRM integrations, call tracking, and conversion events across all channels." },
  { step: 3, title: "Dashboard Build", description: "Custom dashboards are designed and built to display the KPIs that matter most to your business, updated in real time." },
  { step: 4, title: "Analysis & Insights", description: "We analyze the data, identify trends, surface opportunities, and deliver actionable recommendations with every report." },
  { step: 5, title: "Optimize & Scale", description: "Data insights are applied to optimize campaigns, reallocate budget, and scale what works — creating a continuous improvement cycle." },
];

const benefits = [
  { title: "Know Your True ROI", desc: "No more guessing which marketing channels are profitable. See exact revenue attributed to every campaign and dollar spent." },
  { title: "Eliminate Wasted Spend", desc: "Data reveals underperforming campaigns immediately so you can cut waste and redirect budget to high-performing channels." },
  { title: "Make Faster Decisions", desc: "Real-time dashboards give you instant visibility into performance, so you can act on opportunities and issues in hours — not weeks." },
  { title: "Unify All Your Data", desc: "We connect your website, CRM, ad platforms, social media, and MLS data into a single source of truth." },
  { title: "Prove Marketing Value", desc: "Clear attribution reporting lets you demonstrate the tangible business impact of every marketing investment to stakeholders." },
  { title: "Forecast With Confidence", desc: "Predictive models let you plan budgets, set realistic targets, and anticipate market shifts before they happen." },
];

const results = [
  { metric: "42%", label: "Average ROI improvement", period: "After implementing analytics" },
  { metric: "$340K", label: "Average budget waste identified", period: "In first audit per client" },
  { metric: "3.1×", label: "Better lead quality scores", period: "With data-driven targeting" },
  { metric: "18 hrs", label: "Saved monthly on reporting", period: "Through automated dashboards" },
];

const testimonials = [
  { quote: "Before RealLanding, I had no idea which of my marketing channels was actually producing closings. Now I see exactly where every dollar goes and which campaigns bring real ROI. We've cut $4,000/month in wasted spend.", author: "Jennifer M.", role: "Team Lead, San Diego CA" },
  { quote: "The custom dashboards are incredible. I check them every morning and my whole team has visibility into our pipeline, lead quality, and campaign performance. It's completely changed how we make marketing decisions.", author: "Robert K.", role: "Broker/Owner, Denver CO" },
];

const faqs = [
  { question: "What tools and platforms do you integrate with?", answer: "We integrate with all major platforms: Google Analytics, Google Ads, Meta Ads, CRMs (Follow Up Boss, KvCORE, Sierra, HubSpot, Salesforce), MLS systems, call tracking (CallRail, CallTrackingMetrics), email platforms, and more. If it has data, we can connect it." },
  { question: "How long does it take to set up analytics?", answer: "Basic tracking and dashboard setup takes 1–2 weeks. Comprehensive multi-channel attribution with CRM integration and custom dashboards typically takes 3–4 weeks. You'll start seeing actionable data within the first week." },
  { question: "Do I need to change my existing tools?", answer: "No — we work with your existing tech stack. We add tracking layers, connect data sources, and build dashboards on top of what you already use. No need to switch platforms or learn new tools." },
  { question: "What makes this different from Google Analytics?", answer: "Google Analytics tracks website behavior. We build complete marketing-to-revenue attribution that connects ad spend → leads → showings → closings → revenue. Plus custom dashboards, automated reports, and strategic recommendations — not just raw data." },
  { question: "How is analytics consulting priced?", answer: "Setup fees range from $2,000–$5,000 depending on complexity. Monthly analytics management and reporting starts at $1,000/month. Enterprise teams with multiple offices and complex attribution needs receive custom quotes." },
  { question: "Can I see a sample dashboard before committing?", answer: "Yes — we offer a free analytics audit that includes a sample dashboard mockup based on your current data sources. This gives you a clear picture of what you would see before making any commitment." },
];

const relatedServices = [
  { title: "Paid Advertising", href: "/services/paid-advertising", description: "Maximize ad performance with data-driven campaign management and continuous optimization based on real analytics." },
  { title: "Conversion Rate Optimization", href: "/services/conversion-rate-optimization", description: "Use analytics insights to A/B test and optimize your funnels for higher conversion at every stage." },
  { title: "Strategic Growth Planning", href: "/services/strategic-growth-planning", description: "Build your long-term growth strategy on a solid foundation of data, forecasting, and market intelligence." },
];

export default function AnalyticsPerformancePage() {
  return (
    <ServicePageLayout data={{
      breadcrumb: "Analytics & Performance",
      badgeIcon: (<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>),
      badgeText: "Data & Intelligence",
      title: `Data-Driven Decisions That<br className="hidden md:block" /> Maximize Your Real Estate ROI`,
      description: `Custom dashboards, revenue attribution, and actionable analytics that show you exactly what's working — so every marketing dollar drives real results.`,
      primaryCTA: "Get Your Free Analytics Audit",
      secondaryCTA: "See a Sample Dashboard",
      trustLine: "Trusted by 300+ real estate teams to make smarter decisions",
      trustBar: ["Google Analytics Certified", "Full-Funnel Attribution", "Real-Time Dashboards", "Automated Reports"],
      stats,
      services,
      servicesHeading: "Our Solutions",
      servicesSubheading: `Analytics That Drive Smarter Real Estate Decisions`,
      servicesDescription: `From campaign dashboards to predictive forecasting, we turn your raw data into clear, actionable intelligence that grows your business.`,
      results,
      resultsHeading: "Proven Results",
      resultsSubheading: `The Impact of Data-Driven Marketing`,
      resultsDescription: `When you can see exactly what works, every decision gets better — and so do your results.`,
      benefits,
      benefitsHeading: "Why Analytics",
      benefitsSubheading: `Stop Guessing, Start Growing`,
      benefitsDescription: `Most real estate teams make marketing decisions based on gut feel. Analytics lets you make them based on facts — and the results speak for themselves.`,
      testimonials,
      steps,
      processHeading: "Our Process",
      processSubheading: `From Data Chaos to Crystal Clarity`,
      processDescription: `A proven five-step process that transforms scattered data into a powerful decision-making engine for your real estate business.`,
      faqs,
      faqHeading: `Common Questions About Analytics`,
      relatedServices,
      relatedHeading: "Related Services",
      relatedSubheading: `Amplify Your Analytics`,
      ctaHeading: `Ready to See What Your Data Is Really Telling You?`,
      ctaDescription: `Book a free analytics audit and discover where your marketing budget is being wasted — and where it should be invested for maximum ROI.`,
      ctaCTA: "Get Your Free Analytics Audit",
      ctaSubtext: "Includes a custom dashboard mockup and data gap analysis",
    }} />
  );
}
