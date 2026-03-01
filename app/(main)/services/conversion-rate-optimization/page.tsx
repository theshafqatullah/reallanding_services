import ServicePageLayout from "@/app/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conversion Rate Optimization for Real Estate | RealLanding",
  description:
    "A/B testing, landing page optimization, funnel analysis, UX improvements, and data-driven CRO strategies that turn more visitors into leads and clients.",
  openGraph: {
    title: "Conversion Rate Optimization for Real Estate | RealLanding",
    description:
      "A/B testing, landing page optimization, funnel analysis, UX improvements, and data-driven CRO strategies that turn more visitors into leads and clients.",
    url: "https://reallanding.com/services/conversion-rate-optimization",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-conversion-rate-optimization.jpg",
        width: 1200,
        height: 630,
        alt: "Conversion Rate Optimization for Real Estate | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversion Rate Optimization for Real Estate | RealLanding",
    description:
      "A/B testing, landing page optimization, funnel analysis, UX improvements, and data-driven CRO strategies that turn more visitors into leads and clients.",
    images: ["https://reallanding.com/og-conversion-rate-optimization.jpg"],
    site: "@RealLandingHQ",
  },
};


// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Conversion Rate Optimization",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "A/B testing, landing page optimization, funnel analysis, UX improvements, and data-driven CRO strategies that turn more visitors into leads and clients.",
  "url": "https://reallanding.com/services/conversion-rate-optimization",
  "category": "Real Estate Marketing"
};


const stats = [
  { value: "147%", label: "Average Conversion Rate Increase" },
  { value: "2,400+", label: "A/B Tests Run for Clients" },
  { value: "$3.2M", label: "Additional Revenue Generated" },
  { value: "34%", label: "Lower Cost-Per-Lead" },
];

const services = [
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>), title: "A/B & Multivariate Testing", description: "Scientific testing of headlines, CTAs, layouts, images, forms, and copy to identify what converts best — eliminating guesswork with statistical confidence." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>), title: "Landing Page Optimization", description: "Design, test, and optimize high-converting landing pages for listings, lead magnets, home valuations, and buyer/seller funnels that maximize form submissions." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M21.015 4.356v4.992" /></svg>), title: "Funnel Analysis & Optimization", description: "Map and analyze every step of your conversion funnel to identify where leads drop off — then implement targeted fixes to plug the leaks." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>), title: "UX & Mobile Optimization", description: "Improve site speed, mobile responsiveness, navigation, and user flow to reduce friction and make it effortless for visitors to become leads." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>), title: "Form & CTA Optimization", description: "Optimize form fields, button copy, placement, and design to dramatically increase submission rates without sacrificing lead quality." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" /></svg>), title: "Heatmap & Behavior Analysis", description: "Use heatmaps, session recordings, and scroll tracking to understand exactly how visitors interact with your pages — then optimize based on real behavior." },
];

const steps = [
  { step: 1, title: "Audit & Analysis", description: "Comprehensive review of your website, funnels, analytics, and user behavior to identify the highest-impact optimization opportunities." },
  { step: 2, title: "Hypothesis Development", description: "Data-informed hypotheses about what changes will improve conversions, prioritized by potential impact and implementation effort." },
  { step: 3, title: "Test Design & Build", description: "Design and build test variations — new layouts, copy, forms, and CTAs — using best practices from 2,400+ real estate tests." },
  { step: 4, title: "Run & Monitor Tests", description: "Launch A/B tests with proper traffic allocation, monitor for statistical significance, and ensure clean data collection." },
  { step: 5, title: "Analyze & Implement", description: "Winning variations are permanently implemented, results are documented, and insights feed the next round of testing for continuous improvement." },
];

const benefits = [
  { title: "More Leads, Same Traffic", desc: "CRO extracts more value from your existing traffic — no need to spend more on ads when you can convert more of what you already have." },
  { title: "Lower Cost-Per-Lead", desc: "Higher conversion rates mean lower CPL across all channels. A 50% conversion improvement effectively cuts your ad costs in half." },
  { title: "Data-Driven Decisions", desc: "No more redesigning based on opinions. A/B testing gives you statistical proof of what works before committing to changes." },
  { title: "Compound Growth Effect", desc: "Every conversion improvement compounds. A 10% lift this month creates permanent value that benefits every future visitor." },
  { title: "Better User Experience", desc: "CRO improvements make your site easier to use, faster to load, and more intuitive — which improves brand perception too." },
  { title: "Higher Quality Leads", desc: "Optimized forms and funnels don't just produce more leads — they produce better-qualified leads by improving question flow and intent capture." },
];

const results = [
  { metric: "147%", label: "Average conversion lift", period: "Across all client campaigns" },
  { metric: "34%", label: "Lower cost-per-lead", period: "Without increasing ad spend" },
  { metric: "$3.2M", label: "Revenue attributed to CRO", period: "For our clients last year" },
  { metric: "89%", label: "Of tests produce winners", period: "Due to data-driven hypotheses" },
];

const testimonials = [
  { quote: "RealLanding redesigned our home valuation landing page and ran a series of A/B tests. Our conversion rate went from 3.2% to 11.8%. Same traffic, 3.7× more leads. The ROI on CRO is insane compared to just spending more on ads.", author: "Sarah W.", role: "Team Lead, Tampa FL" },
  { quote: "I had no idea how much revenue we were leaving on the table. The funnel analysis found that 62% of our mobile users were abandoning at step 2. After optimization, our mobile conversions tripled. It was the highest-ROI project we've done.", author: "Steve B.", role: "Broker/Owner, Portland OR" },
];

const faqs = [
  { question: "What's the difference between CRO and web design?", answer: "Web design creates the initial website. CRO optimizes it for performance using scientific testing. A beautiful website that doesn't convert is just an expensive brochure. CRO ensures your site actually turns visitors into leads and clients through data-driven improvements." },
  { question: "How long does it take to see CRO results?", answer: "Individual tests typically reach statistical significance in 2–4 weeks depending on traffic volume. Most clients see measurable conversion improvements within the first month, with compounding gains over 3–6 months as we run sequential tests." },
  { question: "How much traffic do I need for A/B testing?", answer: "Generally, you need at least 500–1,000 visitors per month to the pages being tested. If traffic is lower, we focus on high-impact changes based on heatmap data, UX best practices, and insights from our database of 2,400+ real estate tests." },
  { question: "Will CRO changes affect my SEO?", answer: "We're very careful about this. All CRO changes are implemented using best practices that preserve (and often improve) SEO. We avoid any changes that would negatively impact search rankings, page speed, or content quality." },
  { question: "What tools do you use for CRO?", answer: "We use industry-leading tools including Google Optimize, VWO, Hotjar, Microsoft Clarity, Google Analytics 4, and custom tracking setups. The specific tools depend on your tech stack and testing needs." },
  { question: "How is CRO priced?", answer: "CRO engagements start at $2,000/month for ongoing testing and optimization. One-time conversion audits with prioritized recommendations start at $1,500. Pricing scales based on traffic volume, number of funnels, and testing velocity." },
];

const relatedServices = [
  { title: "Paid Advertising", href: "/services/paid-advertising", description: "Maximize ROI on your ad spend by ensuring every click lands on a page optimized to convert." },
  { title: "Website Design & Development", href: "/services/website-design-development", description: "Build a high-converting website from the ground up with CRO principles baked into the design." },
  { title: "Analytics & Performance", href: "/services/analytics-performance", description: "Track and measure every optimization with comprehensive analytics and attribution dashboards." },
];

export default function CROPage() {
  return (
    <ServicePageLayout data={{
      breadcrumb: "Conversion Rate Optimization",
      badgeIcon: (<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5-7.5L16.5 3m0 0L12 7.5m4.5-4.5v13.5" /></svg>),
      badgeText: "Optimization & Testing",
      title: `Turn More Visitors Into<br className="hidden md:block" /> Real Estate Leads &amp; Clients`,
      description: `A/B testing, landing page optimization, and funnel analysis that increase your conversion rates — generating more leads without spending more on traffic.`,
      primaryCTA: "Get Your Free CRO Audit",
      secondaryCTA: "See Case Studies",
      trustLine: "2,400+ A/B tests run for real estate clients",
      trustBar: ["Statistical Rigor", "Real Estate–Specific Tests", "Heatmap & Behavior Analysis", "Continuous Optimization"],
      stats,
      services,
      servicesHeading: "Our Services",
      servicesSubheading: `Scientific Optimization for Real Estate Websites`,
      servicesDescription: `From A/B testing to UX improvements, every optimization is backed by data and designed to increase your bottom line.`,
      results,
      resultsHeading: "Proven Results",
      resultsSubheading: `The Power of Conversion Optimization`,
      resultsDescription: `Small conversion improvements create massive bottom-line impact when compounded across all your traffic sources.`,
      benefits,
      benefitsHeading: "Why CRO",
      benefitsSubheading: `Get More From Every Dollar You've Already Spent`,
      benefitsDescription: `CRO is the highest-ROI marketing investment because it multiplies the value of all your existing traffic and campaigns.`,
      testimonials,
      steps,
      processHeading: "Our Process",
      processSubheading: `The Scientific CRO Process`,
      processDescription: `A rigorous, repeatable process that turns conversion optimization into a predictable growth engine for your real estate business.`,
      faqs,
      faqHeading: `Common Questions About CRO`,
      relatedServices,
      relatedHeading: "Related Services",
      relatedSubheading: `Maximize Your CRO Results`,
      ctaHeading: `Ready to Convert More Visitors Into Leads?`,
      ctaDescription: `Book a free conversion audit and discover exactly where your website is leaking leads — and how to fix it for more closings with the same traffic.`,
      ctaCTA: "Get Your Free CRO Audit",
      ctaSubtext: "Includes heatmap analysis and prioritized optimization roadmap",
    }} />
  );
}
