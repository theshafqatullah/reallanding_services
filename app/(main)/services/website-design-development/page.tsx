import ServicePageLayout from "@/app/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Design & Development for Real Estate | RealLanding",
  description:
    "Custom real estate websites with IDX integration, lead capture, SEO optimization, and stunning design. Mobile-first, fast-loading sites built to convert visitors into clients.",
  openGraph: {
    title: "Website Design & Development for Real Estate | RealLanding",
    description:
      "Custom real estate websites with IDX integration, lead capture, SEO optimization, and stunning design. Mobile-first, fast-loading sites built to convert visitors into clients.",
    url: "https://reallanding.com/services/website-design-development",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-website-design-development.jpg",
        width: 1200,
        height: 630,
        alt: "Website Design & Development for Real Estate | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design & Development for Real Estate | RealLanding",
    description:
      "Custom real estate websites with IDX integration, lead capture, SEO optimization, and stunning design. Mobile-first, fast-loading sites built to convert visitors into clients.",
    images: ["https://reallanding.com/og-website-design-development.jpg"],
    site: "@RealLandingHQ",
  },
};


// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Website Design & Development",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "Custom real estate websites with IDX integration, lead capture, SEO optimization, and stunning design. Mobile-first, fast-loading sites built to convert visitors into clients.",
  "url": "https://reallanding.com/services/website-design-development",
  "category": "Real Estate Marketing"
};


const stats = [
  { value: "600+", label: "Websites Launched" },
  { value: "4.2s→1.8s", label: "Average Load Time" },
  { value: "340%", label: "More Leads vs Templates" },
  { value: "99.9%", label: "Uptime Guaranteed" },
];

const services = [
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>), title: "Custom Website Design & UX", description: "Bespoke, conversion-optimized designs built from scratch for your brand — not cookie-cutter templates. Every layout, color, and interaction is crafted to guide visitors toward contacting you, registering for listings, or scheduling a showing." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" /></svg>), title: "IDX & MLS Integration", description: "Seamless IDX property search integrated directly into your site so buyers can browse active listings, save favorites, and set up alerts — all while you capture their information automatically. We work with all major IDX providers and MLS boards." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" /></svg>), title: "Lead Capture & CRO", description: "Strategically placed lead capture forms, home valuation widgets, property alerts, and gated content — all A/B tested and optimized for maximum conversion. Every page is designed with a clear call-to-action that turns anonymous visitors into identifiable leads." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>), title: "Mobile-First Development", description: "Over 65% of real estate searches happen on mobile. We build mobile-first, responsive websites that load fast, look stunning, and convert on every screen size — from iPhone to ultrawide desktop monitors." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>), title: "CMS & Content Management", description: "An intuitive content management system that lets you update listings, publish blog posts, add testimonials, and edit pages without touching code. We typically build on WordPress or Next.js depending on your needs and scale." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>), title: "Maintenance & Hosting", description: "Premium managed hosting with 99.9% uptime, daily backups, SSL certificates, security monitoring, plugin updates, and performance optimization. We keep your site fast, secure, and running flawlessly so you can focus on selling homes." },
];

const steps = [
  { step: 1, title: "Discovery & Planning", description: "We learn your brand, goals, target audience, and competitive landscape. We audit your current site (if applicable), define the sitemap, and create a detailed project brief and timeline." },
  { step: 2, title: "Design & Prototyping", description: "Our designers create wireframes and high-fidelity mockups for desktop and mobile. You review and approve every page before a single line of code is written — ensuring the final product matches your vision exactly." },
  { step: 3, title: "Development & Integration", description: "We build your site with clean, semantic code, set up IDX/MLS integration, connect your CRM, implement lead capture forms, and optimize every page for speed and SEO performance." },
  { step: 4, title: "Testing & Launch", description: "Rigorous QA testing across devices (iPhone, Android, tablets, desktops), browsers (Chrome, Safari, Firefox, Edge), and screen sizes. We test forms, IDX search, page speed, and SEO before going live." },
  { step: 5, title: "Optimization & Support", description: "Post-launch, we monitor performance, run A/B tests on key conversion pages, implement analytics, and provide ongoing maintenance and support to ensure your site keeps improving." },
];

const benefits = [
  { title: "Built for Conversion", desc: "Every design decision is made to increase lead capture — from strategic CTA placement and form design to page flow, trust signals, and micro-interactions that guide visitors toward action." },
  { title: "Lightning-Fast Performance", desc: "We optimize Core Web Vitals, compress images, leverage CDNs, and write efficient code to deliver sub-2-second load times — because every extra second costs you 7% in conversions." },
  { title: "SEO-Ready Architecture", desc: "Proper heading hierarchy, schema markup, XML sitemaps, optimized meta tags, clean URLs, and mobile-first indexing — your site is built to rank from day one, not retrofitted later." },
  { title: "IDX That Actually Converts", desc: "Unlike generic IDX plugins that look bolted on, our integrations are seamlessly designed into your site&apos;s UX — making property search feel native and capturing leads at every interaction point." },
  { title: "Own Your Platform", desc: "You own your website, your domain, your code, and your data — nothing is locked behind a proprietary platform. If you ever leave (you won&apos;t), you take everything with you." },
  { title: "Ongoing Evolution", desc: "Your website isn&apos;t a one-time project — it&apos;s a living asset. We continuously optimize, A/B test, and enhance based on real user data to ensure it performs better every quarter." },
];

const results = [
  { metric: "600+", label: "Real estate websites launched", period: "For agents, teams & brokerages" },
  { metric: "340%", label: "More leads than template sites", period: "Average across client portfolio" },
  { metric: "1.8s", label: "Average page load time", period: "Down from 4.2s industry avg" },
  { metric: "4.7%", label: "Average site conversion rate", period: "vs 0.5–1% industry average" },
];

const testimonials = [
  { quote: "Our old template site generated maybe 5 leads a month and looked like every other agent&apos;s site in town. RealLanding built us a custom site with integrated IDX, home valuations, and neighborhood guides — we now get 40+ leads per month and our clients constantly compliment how professional it looks. The site paid for itself in the first closing.", author: "Jessica Tran", role: "Realtor, The Tran Team, Phoenix AZ" },
  { quote: "We needed a site that could handle 15,000+ active listings from three MLS boards, support 60 agents, and still load fast on mobile. RealLanding delivered — and the lead capture system they built has become our single biggest source of buyer leads. Our agents actually want to drive traffic to our site now instead of Zillow.", author: "Robert Castellano", role: "Managing Broker, Castellano & Associates, Chicago IL" },
];

const faqs = [
  { question: "How long does it take to build a real estate website?", answer: "A typical custom real estate website takes 6–10 weeks from kickoff to launch. Simple agent sites may be faster (4–6 weeks), while large brokerage sites with IDX integration and multiple agent profiles can take 10–14 weeks. We'll provide a detailed timeline during discovery." },
  { question: "How much does a custom real estate website cost?", answer: "Our custom real estate websites range from $5,000–$15,000 for agent and team sites, and $15,000–$40,000+ for brokerage and enterprise sites with advanced IDX, agent management, and custom functionality. Monthly maintenance and hosting plans start at $150/month." },
  { question: "Which IDX providers do you work with?", answer: "We integrate with all major IDX providers including iHomefinder, IDX Broker, Showcase IDX, and custom RETS/RESO Web API feeds. We'll recommend the best option based on your MLS board, budget, and feature requirements. We also build custom property search experiences using direct MLS data feeds." },
  { question: "Do you provide hosting and maintenance?", answer: "Yes — every site includes our managed hosting package with 99.9% uptime, daily backups, SSL, security monitoring, WordPress core and plugin updates, and monthly performance reports. We also provide a support ticket system for content updates and technical issues." },
  { question: "Can I update content and add blog posts myself?", answer: "Absolutely. Every site includes an intuitive CMS (content management system) with a visual editor for publishing blog posts, updating pages, adding testimonials, and managing listings. We provide training and documentation so you or your team can make updates without any technical knowledge." },
  { question: "Is SEO included in the website build?", answer: "Yes — every site is built with on-page SEO best practices including proper heading structure, meta tags, schema markup, image optimization, XML sitemaps, and mobile-first responsive design. For ongoing SEO campaigns (link building, content strategy, keyword targeting), see our dedicated SEO service." },
];

const relatedServices = [
  { title: "SEO", href: "/services/seo", description: "Drive organic traffic to your new website with real estate SEO strategies that rank your listings and neighborhood pages on Google." },
  { title: "Conversion Rate Optimization", href: "/services/conversion-rate-optimization", description: "Maximize the ROI of your website traffic with data-driven A/B testing, UX improvements, and lead funnel optimization." },
  { title: "Branding & Market Positioning", href: "/services/branding-market-positioning", description: "Pair your new website with a cohesive brand identity that differentiates you and builds trust with buyers and sellers." },
];

export default function WebsiteDesignDevelopmentPage() {
  return (
    <ServicePageLayout data={{
      breadcrumb: "Website Design & Development",
      badgeIcon: (<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>),
      badgeText: "Real Estate Website Design & Development",
      title: `Custom Real Estate Websites<br className="hidden md:block" /> That Convert Visitors into Clients`,
      description: `Beautiful, blazing-fast real estate websites with IDX integration, lead capture, and SEO optimization — custom-built to showcase your brand and generate leads 24/7.`,
      primaryCTA: "Get Your Free Website Audit",
      secondaryCTA: "See Our Portfolio",
      trustLine: "600+ custom real estate websites launched for agents, teams & brokerages",
      trustBar: ["Custom Design — No Templates", "IDX & MLS Integrated", "Mobile-First & Fast", "99.9% Uptime Hosting"],
      stats,
      services,
      servicesHeading: "Our Solutions",
      servicesSubheading: `End-to-End Real Estate Web Solutions`,
      servicesDescription: `From stunning custom design to robust IDX integration and ongoing maintenance — everything you need for a high-performing real estate website.`,
      results,
      resultsHeading: "Proven Results",
      resultsSubheading: `Website Performance Metrics`,
      resultsDescription: `Real numbers from real estate websites we've designed, developed, and optimized.`,
      benefits,
      benefitsHeading: "Why Choose Us",
      benefitsSubheading: `Websites Built to Perform, Not Just Look Pretty`,
      benefitsDescription: `A beautiful site that doesn't generate leads is an expensive business card. We build sites that work as hard as you do.`,
      testimonials,
      testimonialHeading: "What Agents & Brokers Say",
      steps,
      processHeading: "Our Process",
      processSubheading: `From Concept to Launch in Five Phases`,
      processDescription: `A proven, structured process that delivers a pixel-perfect, high-converting real estate website — on time and on budget.`,
      faqs,
      faqHeading: `Common Questions About Web Design`,
      relatedServices,
      relatedHeading: "Related Services",
      relatedSubheading: `Maximize Your Website's Impact`,
      ctaHeading: `Ready for a Website That Actually Generates Leads?`,
      ctaDescription: `Book a free website consultation. We'll audit your current site, discuss your goals, and show you exactly how a custom-built real estate website can transform your online presence and lead flow.`,
      ctaCTA: "Get Your Free Website Audit",
      ctaSubtext: "Includes a detailed performance report and conversion recommendations",
    }} />
  );
}
