import ServicePageLayout from "@/app/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO for Real Estate | RealLanding",
  description:
    "Dominate local and organic search results with real estate SEO strategies that drive qualified buyer and seller traffic to your website — month after month.",
  openGraph: {
    title: "SEO for Real Estate | RealLanding",
    description:
      "Dominate local and organic search results with real estate SEO strategies that drive qualified buyer and seller traffic to your website — month after month.",
    url: "https://reallanding.com/services/seo",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-seo.jpg",
        width: 1200,
        height: 630,
        alt: "SEO for Real Estate | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO for Real Estate | RealLanding",
    description:
      "Dominate local and organic search results with real estate SEO strategies that drive qualified buyer and seller traffic to your website — month after month.",
    images: ["https://reallanding.com/og-seo.jpg"],
    site: "@RealLandingHQ",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "SEO",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "Dominate local and organic search results with real estate SEO strategies that drive qualified buyer and seller traffic to your website — month after month.",
  "url": "https://reallanding.com/services/seo",
  "category": "Real Estate Marketing"
};

const stats = [
  { value: "93%", label: "Online Experiences Begin with Search" },
  { value: "75%", label: "Of Clicks Go to Page-One Results" },
  { value: "14.6%", label: "SEO Lead Close Rate vs 1.7% Outbound" },
  { value: "5.3×", label: "Average ROI on SEO Investment" },
];

const services = [
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>), title: "Local SEO & Google Business Profile", description: "Dominate the local map pack and 'near me' searches so buyers and sellers in your area find you first. We optimize your GBP listing, manage reviews, build local citations, and ensure consistent NAP data across 60+ directories." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>), title: "On-Page Optimization", description: "Every page on your site is meticulously optimized — from title tags and meta descriptions to header hierarchy, internal linking structure, image alt text, and schema markup for rich search results." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>), title: "Technical SEO & Core Web Vitals", description: "We audit and fix site speed issues, eliminate crawl errors, implement structured data, optimize for mobile-first indexing, and ensure your site architecture helps search engines discover every property page." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487z" /></svg>), title: "Content & Blog Strategy", description: "Data-driven neighborhood guides, monthly market reports, homebuyer resources, and long-form authority content that attracts organic traffic and positions you as the local expert buyers and sellers trust." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>), title: "Link Building & Digital PR", description: "White-hat backlink acquisition from real estate directories, local media outlets, industry publications, and community organizations that boost your domain authority and drive referral traffic." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>), title: "Keyword Research & Mapping", description: "Deep analysis of search intent — from 'homes for sale in [city]' to long-tail neighborhood queries and investor-focused terms — mapped strategically across your entire site architecture." },
];

const steps = [
  { step: 1, title: "Comprehensive SEO Audit", description: "We analyze your site's technical health, content gaps, backlink profile, and competitive positioning across 200+ ranking factors to create a prioritized roadmap." },
  { step: 2, title: "Keyword & Market Research", description: "We map high-value, intent-driven keywords to every page — targeting buyers, sellers, investors, and renters in your specific market areas with precision." },
  { step: 3, title: "On-Site & Technical Fixes", description: "We optimize your site structure, metadata, internal links, schema markup, and Core Web Vitals — making your site fast, crawlable, and search-engine friendly." },
  { step: 4, title: "Content Production & Link Building", description: "We produce SEO-driven blog posts, neighborhood pages, and resource guides while simultaneously acquiring authoritative backlinks to boost rankings." },
  { step: 5, title: "Monitor, Report & Refine", description: "Weekly rank tracking, monthly traffic & conversion reports, and quarterly strategy reviews ensure your SEO investment delivers compounding returns." },
];

const benefits = [
  { title: "Compounding Traffic", desc: "Unlike paid ads that stop when you stop spending, SEO traffic compounds over time — every month builds on the last." },
  { title: "Local Map Pack Dominance", desc: "Appear at the top of Google Maps results when buyers search for agents, brokerages, or properties in your area." },
  { title: "Higher Trust & Credibility", desc: "Organic search listings are trusted 5.66× more than paid ads — ranking well signals authority to prospects." },
  { title: "Lower Cost Per Lead", desc: "SEO delivers leads at 61% lower cost than outbound marketing, with a 14.6% close rate vs 1.7% for outbound." },
  { title: "Qualified, Intent-Driven Traffic", desc: "Every visitor found you by actively searching — these are motivated buyers and sellers ready to take action." },
  { title: "Competitive Moat", desc: "Strong SEO positions create a barrier that competitors can't easily replicate, giving you a durable market advantage." },
];

const results = [
  { metric: "312%", label: "Increase in organic traffic", period: "Within 8 months" },
  { metric: "48", label: "Keywords on page one of Google", period: "From zero previous rankings" },
  { metric: "$11", label: "Average cost per organic lead", period: "vs $47 from paid channels" },
  { metric: "2.4×", label: "More listing appointments booked", period: "Quarter over quarter growth" },
];

const testimonials = [
  { quote: "RealLanding's SEO strategy took us from invisible to page one for every major keyword in our market. We went from 200 monthly visitors to over 3,000 in under a year — and the leads just keep coming.", author: "Sarah M.", role: "Brokerage Owner, Austin TX" },
  { quote: "Within 6 months, we were ranking #1 for 'homes for sale in [our city]' and the map pack. Our organic leads now account for 40% of our total pipeline — at a fraction of what we spend on ads.", author: "David K.", role: "Team Lead, Miami FL" },
];

const faqs = [
  { question: "How long does it take to see SEO results?", answer: "Most real estate sites see measurable ranking improvements within 3–6 months, with significant traffic growth by month 6–12. SEO is a long-term investment that compounds — early gains accelerate over time as your domain authority grows." },
  { question: "What's the difference between local and national SEO?", answer: "Local SEO focuses on ranking in your specific market area — think 'realtor in [city]' and Google Map Pack results. National SEO targets broader terms. For most agents and brokerages, local SEO delivers the highest-quality leads because it captures people actively searching in your service area." },
  { question: "How much does real estate SEO cost?", answer: "Our SEO packages for real estate professionals typically range from $1,500–$5,000 per month depending on market size, competition, and scope. We'll recommend a plan that fits your goals and budget during your free consultation." },
  { question: "What's included in your SEO services?", answer: "Every engagement includes a technical audit, keyword research, on-page optimization, content strategy, link building, Google Business Profile management, monthly reporting, and a dedicated SEO strategist who knows real estate inside and out." },
  { question: "Do you guarantee first-page rankings?", answer: "No ethical SEO provider can guarantee specific rankings — Google's algorithm considers 200+ factors. What we guarantee is a proven, transparent process and consistent month-over-month growth in organic traffic and leads. Our track record speaks for itself." },
  { question: "Can SEO work alongside my paid advertising?", answer: "Absolutely — and it should. SEO and PPC are complementary. While paid ads deliver immediate results, SEO builds a long-term pipeline. Together, they dominate the search results page and give you multiple touchpoints with potential clients." },
];

const relatedServices = [
  { title: "Content Marketing", href: "/services/content-marketing", description: "Fuel your SEO strategy with high-quality blog posts, market reports, and neighborhood guides that rank and convert organic traffic into leads." },
  { title: "Website Design & Development", href: "/services/website-design-development", description: "Build a fast, mobile-optimized real estate website that provides the rock-solid technical foundation for strong search rankings." },
  { title: "Analytics & Performance", href: "/services/analytics-performance", description: "Track keyword rankings, organic traffic, and lead attribution to measure the true ROI of your SEO investment in real time." },
];

export default function SEOPage() {
  return (
    <ServicePageLayout data={{
      breadcrumb: "SEO",
      badgeIcon: (<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>),
      badgeText: "Search Engine Optimization for Real Estate",
      title: `Rank Higher, Get Found First &<br className="hidden md:block" /> Close More Real Estate Deals`,
      description: `Turn Google into your #1 lead source with proven SEO strategies built exclusively for real estate agents, brokerages, and property companies. Drive compounding organic traffic that reduces your cost per lead every month.`,
      primaryCTA: "Get Your Free SEO Audit",
      secondaryCTA: "See Our Results",
      trustLine: "Trusted by 200+ real estate professionals across the US",
      trustBar: ["Google Partner Certified", "Real Estate SEO Specialists", "Transparent Monthly Reporting", "No Long-Term Contracts"],
      stats,
      services,
      servicesHeading: "Our Services",
      servicesSubheading: `Comprehensive Real Estate SEO Solutions`,
      servicesDescription: `Six core pillars of our SEO methodology — each one engineered for the unique challenges of ranking real estate websites in competitive local markets.`,
      results,
      resultsHeading: "Proven Results",
      resultsSubheading: `Real Results for Real Estate Professionals`,
      resultsDescription: `Here's what happens when you combine expert SEO strategy with deep real estate industry knowledge.`,
      benefits,
      benefitsHeading: "Why SEO",
      benefitsSubheading: `The Smartest Long-Term Investment for Real Estate Growth`,
      benefitsDescription: `SEO puts your brand in front of buyers and sellers at the exact moment they're searching — delivering compounding organic traffic that reduces your cost per lead month after month.`,
      testimonials,
      steps,
      processHeading: "Our Process",
      processSubheading: `From Audit to Rankings in Five Steps`,
      processDescription: `A proven, repeatable methodology that consistently delivers results for real estate businesses of every size.`,
      faqs,
      faqHeading: `Common Questions About Real Estate SEO`,
      relatedServices,
      relatedHeading: "Related Services",
      relatedSubheading: `Amplify Your SEO Results`,
      ctaHeading: `Ready to Own Page One in Your Market?`,
      ctaDescription: `Book a free SEO audit and discover exactly how much organic traffic and leads you're leaving on the table — and the step-by-step plan to capture them.`,
      ctaCTA: "Schedule Your Free SEO Audit",
      ctaSubtext: "No commitment required — get actionable insights in 30 minutes",
      comparison: {
        genericTitle: "Generic SEO Agency",
        recommendedTitle: "RealLanding SEO",
        genericItems: ["Cookie-cutter strategies for all industries", "No understanding of real estate search intent", "Generic content that doesn't convert", "Vanity metrics without business impact", "Long-term contracts with hidden fees", "Outsourced work with no accountability"],
        recommendedItems: ["Strategies built specifically for real estate", "Deep understanding of buyer & seller intent", "Conversion-focused content that generates leads", "Transparent ROI tracking & lead attribution", "Month-to-month flexibility, no lock-ins", "Dedicated strategist & in-house team"],
      },
    }} />
  );
}
