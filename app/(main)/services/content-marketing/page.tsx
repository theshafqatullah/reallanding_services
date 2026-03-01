import ServicePageLayout from "@/app/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Marketing for Real Estate | RealLanding",
  description:
    "Attract qualified buyers, sellers, and investors with strategic real estate content — blog posts, market reports, neighborhood guides, and more that build authority and generate organic leads.",
  openGraph: {
    title: "Content Marketing for Real Estate | RealLanding",
    description:
      "Attract qualified buyers, sellers, and investors with strategic real estate content — blog posts, market reports, neighborhood guides, and more that build authority and generate organic leads.",
    url: "https://reallanding.com/services/content-marketing",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-content-marketing.jpg",
        width: 1200,
        height: 630,
        alt: "Content Marketing for Real Estate | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Marketing for Real Estate | RealLanding",
    description:
      "Attract qualified buyers, sellers, and investors with strategic real estate content — blog posts, market reports, neighborhood guides, and more that build authority and generate organic leads.",
    images: ["https://reallanding.com/og-content-marketing.jpg"],
    site: "@RealLandingHQ",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Content Marketing",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "Attract qualified buyers, sellers, and investors with strategic real estate content — blog posts, market reports, neighborhood guides, and more that build authority and generate organic leads.",
  "url": "https://reallanding.com/services/content-marketing",
  "category": "Real Estate Marketing"
};

const stats = [
  { value: "3×", label: "More Leads Than Outbound Marketing" },
  { value: "62%", label: "Lower Cost Per Lead vs Paid Ads" },
  { value: "70%", label: "Of Consumers Prefer Articles Over Ads" },
  { value: "6×", label: "Higher Conversion for Content Adopters" },
];

const services = [
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487z" /></svg>), title: "Blog Writing & SEO Content", description: "Keyword-optimized blog posts that rank on Google and attract organic traffic from buyers, sellers, and investors actively searching in your market. Every article targets high-intent keywords with conversion-optimized CTAs." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>), title: "Market Reports & Data Guides", description: "In-depth monthly and quarterly market analyses, pricing trends, absorption rates, and investment outlooks that position you as the definitive data source in your local real estate market." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>), title: "Email Newsletter Content", description: "Engaging weekly and monthly newsletters that keep your database warm, share exclusive market insights, highlight new listings, and drive repeat visits and referrals from past clients." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.77.896m5.25-6.388V2.721" /></svg>), title: "Case Studies & Success Stories", description: "Compelling client success stories, deal breakdowns, and before-and-after transformations that build social proof and show prospects exactly what partnering with you looks like." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" /></svg>), title: "Neighborhood & Area Guides", description: "Hyper-local content covering schools, restaurants, commute times, lifestyle amenities, and market data that captures long-tail search traffic and positions you as the neighborhood expert." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" /></svg>), title: "Content Repurposing & Distribution", description: "Transform every long-form piece into 10+ assets — social posts, carousels, email snippets, video scripts, infographics, and podcast outlines — maximizing ROI from every article." },
];

const steps = [
  { step: 1, title: "Research & Discovery", description: "We analyze your market, audit competitor content, conduct keyword research, and interview your team to identify the highest-impact content opportunities." },
  { step: 2, title: "Strategy & Calendar", description: "A data-driven content calendar is built around your goals, seasonal trends, listing inventory, and the exact topics your ideal clients search for." },
  { step: 3, title: "Create & Optimize", description: "Expert real estate writers produce high-quality, SEO-optimized content tailored to your brand voice, with custom graphics and conversion elements." },
  { step: 4, title: "Publish & Distribute", description: "Content is published on your site, shared across email and social channels, submitted to industry sites, and repurposed for maximum visibility." },
  { step: 5, title: "Measure & Iterate", description: "We track traffic, engagement, rankings, and lead generation — refining strategy monthly based on real performance data and market shifts." },
];

const benefits = [
  { title: "Builds Lasting Authority", desc: "Become the trusted voice in your market. Consistent, expert content positions you as the go-to resource buyers and sellers rely on." },
  { title: "Compounding Organic Leads", desc: "Every article is an asset that generates traffic and leads for years — reducing your dependence on paid advertising over time." },
  { title: "Nurtures the Full Funnel", desc: "From awareness-stage neighborhood guides to decision-stage case studies, content moves prospects through every stage of their journey." },
  { title: "Boosts Search Rankings", desc: "Fresh, keyword-rich content signals relevance to Google, improving your entire site's search visibility and domain authority." },
  { title: "Creates Shareable Assets", desc: "Market reports and guides get shared in community groups, forwarded to friends, and referenced by local media — expanding your reach organically." },
  { title: "Reduces Cost Per Acquisition", desc: "Content marketing costs 62% less than traditional marketing while generating 3× more leads — the most cost-effective long-term strategy." },
];

const results = [
  { metric: "287%", label: "Organic traffic growth", period: "Within 6 months" },
  { metric: "156", label: "Leads from blog content", period: "Per month, on average" },
  { metric: "42%", label: "Email open rates", period: "vs 21% industry average" },
  { metric: "3.2×", label: "Content ROI vs ad spend", period: "Over 12-month period" },
];

const testimonials = [
  { quote: "RealLanding's content strategy completely transformed our online presence. Our neighborhood guides now rank #1 in Google and bring in 80+ leads every month — without spending a dollar on ads.", author: "Jennifer T.", role: "Real Estate Team Leader, Denver CO" },
  { quote: "The market reports they create are so good that local news outlets started citing us as a source. That kind of authority is priceless for our brand and has led to multiple referral partnerships.", author: "Marcus R.", role: "Brokerage Owner, Charlotte NC" },
];

const faqs = [
  { question: "How often should we publish new content?", answer: "For most real estate businesses, 2–4 high-quality blog posts per month is the sweet spot. Consistency matters more than volume — a steady cadence of valuable content builds authority and search rankings faster than sporadic publishing. We'll recommend the right frequency based on your goals and competition." },
  { question: "What topics work best for real estate content marketing?", answer: "Neighborhood guides, market reports, homebuyer and seller tips, investment analysis, and local lifestyle content consistently perform best. We research your specific market to identify the topics and keywords that will drive the most qualified traffic and leads." },
  { question: "Who writes the content?", answer: "Our team of experienced content writers specializes in real estate. Every piece is researched, written, and edited by professionals who understand the industry — then reviewed by your dedicated strategist to ensure it aligns with your brand voice and market expertise." },
  { question: "How do you ensure content actually ranks on Google?", answer: "Every piece follows our proprietary SEO framework: keyword research, search intent matching, on-page optimization, internal linking strategy, and schema markup. We also build topical clusters that establish your site as an authority on specific real estate topics." },
  { question: "How do you measure content marketing success?", answer: "We track organic traffic growth, keyword rankings, time on page, lead form submissions, email signups, social shares, and content-attributed conversions. You'll receive monthly reports showing exactly how your content is performing and driving business results." },
  { question: "How long before content marketing delivers results?", answer: "You'll see engagement improvements immediately, traffic growth within 2–3 months, and significant lead generation by month 4–6. Content marketing is a compounding strategy — the longer you invest, the greater the returns as your content library and authority grow." },
];

const relatedServices = [
  { title: "SEO", href: "/services/seo", description: "Amplify your content's reach with technical and on-page SEO that ensures every article ranks for the right real estate keywords." },
  { title: "Social Media Marketing", href: "/services/social-media-marketing", description: "Extend your content's lifespan by repurposing blog posts into engaging social media content that grows your following and drives engagement." },
  { title: "Email Marketing", href: "/services/email-marketing", description: "Deliver your best content directly to prospects' inboxes with automated email campaigns that nurture leads from first touch to closing." },
];

export default function ContentMarketingPage() {
  return (
    <ServicePageLayout data={{
      breadcrumb: "Content Marketing",
      badgeIcon: (<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>),
      badgeText: "Content Marketing for Real Estate",
      title: `Turn Expert Content Into Your<br className="hidden md:block" /> #1 Lead Generation Engine`,
      description: `Attract, educate, and convert your ideal real estate clients with strategic content that builds authority, drives organic traffic, and generates leads on autopilot — month after month.`,
      primaryCTA: "Start Your Content Strategy",
      secondaryCTA: "See Our Work",
      trustLine: "Strategic content for 150+ real estate brands nationwide",
      trustBar: ["Real Estate Content Experts", "SEO-Optimized Writing", "Multi-Format Distribution", "Performance Reporting"],
      stats,
      services,
      servicesHeading: "Our Services",
      servicesSubheading: `Content That Attracts & Converts Real Estate Leads`,
      servicesDescription: `From SEO blog posts to market reports and neighborhood guides — every piece of content is strategically designed to rank, engage, and generate business.`,
      results,
      resultsHeading: "Proven Results",
      resultsSubheading: `Content That Delivers Measurable Results`,
      resultsDescription: `These aren't vanity metrics — they're real business outcomes from our content marketing strategies for real estate clients.`,
      benefits,
      benefitsHeading: "Why Content Marketing",
      benefitsSubheading: `The Compounding Growth Strategy for Real Estate Brands`,
      benefitsDescription: `Great content works for you 24/7 — attracting organic traffic, building trust, and nurturing leads through every stage of the buying and selling journey without increasing your ad budget.`,
      testimonials,
      steps,
      processHeading: "Our Process",
      processSubheading: `From Research to Results in Five Steps`,
      processDescription: `A systematic approach to content that ensures every piece serves a strategic purpose and delivers measurable business outcomes.`,
      faqs,
      faqHeading: `Common Questions About Content Marketing`,
      relatedServices,
      relatedHeading: "Related Services",
      relatedSubheading: `Amplify Your Content Results`,
      ctaHeading: `Ready to Turn Content Into Your Biggest Lead Source?`,
      ctaDescription: `Book a free content strategy session and discover how strategic content can build your authority, grow organic traffic, and generate leads on autopilot.`,
      ctaCTA: "Schedule Your Free Strategy Call",
      ctaSubtext: "Free content audit included — see exactly where your biggest opportunities are",
    }} />
  );
}
