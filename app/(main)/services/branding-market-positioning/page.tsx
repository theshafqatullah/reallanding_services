import ServicePageLayout from "@/app/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding & Market Positioning for Real Estate | RealLanding",
  description:
    "Strategic brand identity, visual design, market positioning, and brand storytelling that differentiate your real estate business and attract ideal clients.",
  openGraph: {
    title: "Branding & Market Positioning for Real Estate | RealLanding",
    description:
      "Strategic brand identity, visual design, market positioning, and brand storytelling that differentiate your real estate business and attract ideal clients.",
    url: "https://reallanding.com/services/branding-market-positioning",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-branding-market-positioning.jpg",
        width: 1200,
        height: 630,
        alt: "Branding & Market Positioning for Real Estate | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Branding & Market Positioning for Real Estate | RealLanding",
    description:
      "Strategic brand identity, visual design, market positioning, and brand storytelling that differentiate your real estate business and attract ideal clients.",
    images: ["https://reallanding.com/og-branding-market-positioning.jpg"],
    site: "@RealLandingHQ",
  },
};


// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Branding & Market Positioning",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "Strategic brand identity, visual design, market positioning, and brand storytelling that differentiate your real estate business and attract ideal clients.",
  "url": "https://reallanding.com/services/branding-market-positioning",
  "category": "Real Estate Marketing"
};


const stats = [
  { value: "89%", label: "Of Buyers Choose Agents by Brand Trust" },
  { value: "5.5×", label: "More Referrals for Strong Brands" },
  { value: "23%", label: "Higher Commission for Premium Brands" },
  { value: "340+", label: "Real Estate Brands Built" },
];

const services = [
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>), title: "Brand Identity Design", description: "Complete visual identity including logo, colors, typography, photography style, and brand guidelines that make you instantly recognizable in your market." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" /></svg>), title: "Brand Strategy & Positioning", description: "Define your unique value proposition, ideal client profile, competitive differentiation, and brand promise — the strategic foundation everything else builds on." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487z" /></svg>), title: "Brand Voice & Messaging", description: "Develop a consistent brand voice, taglines, elevator pitches, and messaging frameworks that resonate with your target audience across every touchpoint." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" /></svg>), title: "Professional Brand Photography", description: "High-quality headshots, lifestyle photography, team photos, and environmental portraits that communicate professionalism, personality, and approachability." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>), title: "Brand Collateral & Templates", description: "Branded templates for listing presentations, CMAs, social media, business cards, signage, email signatures, and marketing materials — all pixel-perfect." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.77.896m5.25-6.388V2.721" /></svg>), title: "Brand Audit & Refresh", description: "Evaluate your existing brand's strengths, weaknesses, and market perception. Refresh outdated elements while preserving equity you've already built." },
];

const steps = [
  { step: 1, title: "Discovery & Research", description: "Deep dive into your goals, market, competition, ideal clients, and current brand perception through interviews and market analysis." },
  { step: 2, title: "Strategy & Positioning", description: "Define your unique positioning, brand promise, personality, and competitive differentiation in a detailed brand strategy document." },
  { step: 3, title: "Visual Identity Design", description: "Create logo concepts, color palettes, typography, and visual elements through a collaborative design process with revisions." },
  { step: 4, title: "Collateral & Templates", description: "Design all branded materials — presentations, social templates, signage, stationery, and marketing collateral for immediate use." },
  { step: 5, title: "Launch & Guidelines", description: "Deliver comprehensive brand guidelines and launch strategy to ensure consistent implementation across all channels and team members." },
];

const benefits = [
  { title: "Attract Premium Clients", desc: "A premium brand attracts premium clients who value quality over price — leading to higher-value deals and better commission rates." },
  { title: "Stand Out Instantly", desc: "In a sea of generic real estate brands, a distinctive identity makes you memorable and ensures prospects choose you over competitors." },
  { title: "Build Trust Before Contact", desc: "Consistent, professional branding signals credibility and expertise — prospects trust you before they've even spoken with you." },
  { title: "Command Higher Fees", desc: "Agents with strong brands can charge premium commissions because clients perceive greater value in working with an established brand." },
  { title: "Generate More Referrals", desc: "A memorable brand stays top-of-mind with past clients, making them far more likely to refer friends, family, and colleagues." },
  { title: "Consistent Marketing", desc: "Brand guidelines and templates ensure every marketing piece looks professional, saving time and preventing off-brand content." },
];

const results = [
  { metric: "89%", label: "Of clients say brand trust matters", period: "When choosing an agent" },
  { metric: "5.5×", label: "More referral business", period: "For branded vs unbranded agents" },
  { metric: "23%", label: "Higher average commission", period: "For premium-branded agents" },
  { metric: "42%", label: "Faster listing acquisitions", period: "With professional branding" },
];

const testimonials = [
  { quote: "The brand RealLanding created for my team is absolutely stunning. We went from looking like every other agent to having a luxury brand that attracts high-net-worth clients. Our average deal size has increased 40% since the rebrand.", author: "Victoria L.", role: "Team Lead, Scottsdale AZ" },
  { quote: "I put off branding for years thinking it wasn't worth the investment. I was so wrong. The brand strategy and visual identity RealLanding built has transformed how clients perceive my business. I get compliments on my marketing constantly.", author: "David R.", role: "Solo Agent, Charlotte NC" },
];

const faqs = [
  { question: "How long does a full branding project take?", answer: "A complete brand identity project (strategy, visual design, collateral, and guidelines) typically takes 6–8 weeks from kickoff to final delivery. Brand audits and refreshes can be completed in 3–4 weeks. Rush timelines are available." },
  { question: "What if I already have a logo I like?", answer: "We can work with your existing logo as a foundation and build a comprehensive brand system around it — including colors, typography, photography direction, messaging, and collateral templates. Not every project needs to start from scratch." },
  { question: "Do you help with implementation after the brand is designed?", answer: "Yes. We can handle full implementation including website design, social media setup, signage production coordination, email templates, and CRM customization. We also provide brand guidelines to empower your team to maintain consistency." },
  { question: "How is branding different from marketing?", answer: "Branding is WHO you are — your identity, positioning, and promise. Marketing is HOW you communicate it. Strong branding makes all your marketing more effective because every piece starts from a place of clarity and consistency." },
  { question: "What's included in a brand strategy?", answer: "Our brand strategy includes: market and competitive analysis, ideal client profiles, unique value proposition, brand positioning statement, personality and voice guidelines, messaging framework, taglines, and an elevator pitch — all documented in a comprehensive strategy deck." },
  { question: "How much does branding cost?", answer: "Brand audits start at $1,500. Logo and visual identity packages range from $3,000–$8,000. Full brand strategy with identity design, collateral, and guidelines ranges from $8,000–$20,000 depending on scope. Every project is custom-quoted after a discovery call." },
];

const relatedServices = [
  { title: "Website Design & Development", href: "/services/website-design-development", description: "Translate your brand into a stunning, high-converting website that embodies your visual identity and messaging." },
  { title: "Social Media Marketing", href: "/services/social-media-marketing", description: "Deploy your new brand across all social platforms with a consistent voice, visual style, and content strategy." },
  { title: "Content Marketing", href: "/services/content-marketing", description: "Create branded blog posts, market reports, and guides that reinforce your authority and attract ideal clients." },
];

export default function BrandingPage() {
  return (
    <ServicePageLayout data={{
      breadcrumb: "Branding & Market Positioning",
      badgeIcon: (<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>),
      badgeText: "Brand & Identity",
      title: `Build a Real Estate Brand<br className="hidden md:block" /> That Commands Attention`,
      description: `Strategic brand identity, market positioning, and visual design that differentiate you from every other agent and attract your ideal clients.`,
      primaryCTA: "Start Your Brand Project",
      secondaryCTA: "See Our Portfolio",
      trustLine: "340+ real estate brands designed and launched",
      trustBar: ["Award-Winning Designers", "Real Estate–Specific Expertise", "Full Identity Systems", "Comprehensive Brand Guidelines"],
      stats,
      services,
      servicesHeading: "Our Services",
      servicesSubheading: `Everything You Need for a Standout Brand`,
      servicesDescription: `From strategic positioning to visual design, we build complete brand systems that make real estate professionals unforgettable.`,
      results,
      resultsHeading: "Proven Impact",
      resultsSubheading: `The Business Value of Strong Branding`,
      resultsDescription: `A professional brand isn't a luxury — it's the highest-leverage investment you can make in your real estate business.`,
      benefits,
      benefitsHeading: "Why Branding Matters",
      benefitsSubheading: `Your Brand Is Your Most Valuable Asset`,
      benefitsDescription: `In a market where buyers and sellers have endless choices, your brand is what makes them choose you — before price, before reputation, before anything else.`,
      testimonials,
      steps,
      processHeading: "Our Process",
      processSubheading: `From Discovery to a Distinctive Brand`,
      processDescription: `Our proven five-step branding process ensures strategic clarity at every stage and a final product you're proud to put your name behind.`,
      faqs,
      faqHeading: `Common Questions About Branding`,
      relatedServices,
      relatedHeading: "Related Services",
      relatedSubheading: `Bring Your Brand to Life`,
      ctaHeading: `Ready to Build a Brand That Stands Out?`,
      ctaDescription: `Book a free brand consultation and discover how strategic positioning and professional design can transform your real estate business.`,
      ctaCTA: "Book Your Free Brand Consultation",
      ctaSubtext: "Includes a complimentary brand audit and positioning analysis",
    }} />
  );
}
