import ServicePageLayout from "@/app/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Marketing for Real Estate | RealLanding",
  description:
    "Grow your real estate brand with strategic social media management — content creation, agent branding, reels, community management, and lead generation across Instagram, Facebook, LinkedIn & TikTok.",
  openGraph: {
    title: "Social Media Marketing for Real Estate | RealLanding",
    description:
      "Grow your real estate brand with strategic social media management — content creation, agent branding, reels, community management, and lead generation across Instagram, Facebook, LinkedIn & TikTok.",
    url: "https://reallanding.com/services/social-media-marketing",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-social-media-marketing.jpg",
        width: 1200,
        height: 630,
        alt: "Social Media Marketing for Real Estate | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing for Real Estate | RealLanding",
    description:
      "Grow your real estate brand with strategic social media management — content creation, agent branding, reels, community management, and lead generation across Instagram, Facebook, LinkedIn & TikTok.",
    images: ["https://reallanding.com/og-social-media-marketing.jpg"],
    site: "@RealLandingHQ",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Social Media Marketing",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "Grow your real estate brand with strategic social media management — content creation, agent branding, reels, community management, and lead generation across Instagram, Facebook, LinkedIn & TikTok.",
  "url": "https://reallanding.com/services/social-media-marketing",
  "category": "Real Estate Marketing"
};

const stats = [
  { value: "4.8B+", label: "Social Media Users Worldwide" },
  { value: "73%", label: "Of Agents Get Leads from Social" },
  { value: "10×", label: "More Engagement with Video Reels" },
  { value: "47%", label: "Of Buyers First Search Online" },
];

const services = [
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>), title: "Content Strategy & Calendar", description: "Data-driven content calendars aligned with market cycles, seasonal trends, listing inventory, and audience behavior patterns. The right content, at the right time, on the right platform — planned 30 days in advance." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" /></svg>), title: "Property Posts & Reels", description: "Scroll-stopping property showcases, cinematic reels, carousel walkthroughs, just-listed/just-sold content, and storytelling posts that spark inquiries and showcase your listings beautifully." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>), title: "Community Management", description: "We don't post and ghost. Our team responds to every comment, answers DMs within 2 hours, joins neighborhood groups, monitors brand mentions, and builds a community that refers you organically." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" /></svg>), title: "Agent Personal Branding", description: "Position yourself as the go-to local authority. We develop your unique voice, visual identity, thought-leadership content, and cross-platform presence that builds trust before a prospect ever calls." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M21.015 4.356v4.992" /></svg>), title: "Multi-Platform Management", description: "Instagram, Facebook, LinkedIn, TikTok, YouTube — managed presence across every platform with content natively optimized for each algorithm, audience, and format specification." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>), title: "Analytics & Growth Reporting", description: "Monthly reports beyond vanity metrics — reach, engagement rate, follower growth, link clicks, DM inquiries, lead attribution, and content-to-conversion tracking that proves ROI." },
];

const steps = [
  { step: 1, title: "Brand & Audience Audit", description: "Deep-dive into your current social presence, competitor landscape, content gaps, and target audience personas to define clear opportunities." },
  { step: 2, title: "Strategy & Content Plan", description: "Custom strategy with posting cadence, format mix (reels, carousels, stories), brand voice guidelines, hashtag research, and 30-day rolling calendar." },
  { step: 3, title: "Create & Publish", description: "Our creative team produces high-quality posts, reels, stories, and carousels — then publishes on schedule with platform-specific optimizations." },
  { step: 4, title: "Engage & Grow", description: "Active community management, comment responses, DM handling, collaboration outreach, and algorithm-optimized engagement tactics to accelerate growth." },
  { step: 5, title: "Report & Optimize", description: "Monthly analytics review with actionable insights and strategy adjustments — double down on what works, pivot what doesn't, scale what converts." },
];

const benefits = [
  { title: "Consistent Professional Presence", desc: "No more wondering what to post. You get a predictable cadence of high-quality content that keeps your brand active and visible." },
  { title: "Scroll-Stopping Visuals", desc: "Property showcases, market insights, and lifestyle content designed to stop the scroll and spark engagement across every platform." },
  { title: "Authentic Personal Brand", desc: "Build long-term trust and recognition as a real person — not just another agent. Your unique story becomes your greatest marketing asset." },
  { title: "Organic Lead Generation", desc: "DM inquiries, profile visits, link clicks, and referrals that don't cost a dollar in ad spend — growing your pipeline naturally." },
  { title: "Cross-Platform Reach", desc: "Meet buyers, sellers, and investors wherever they spend time — from Instagram and Facebook to TikTok, LinkedIn, and YouTube." },
  { title: "Data-Driven Optimization", desc: "Every month we analyze what's working and refine the strategy — your social media gets smarter and more effective over time." },
];

const results = [
  { metric: "450%", label: "Average follower growth", period: "Within first 6 months" },
  { metric: "82", label: "DM inquiries per month", period: "Average for managed accounts" },
  { metric: "8.7%", label: "Engagement rate achieved", period: "vs 1.5% industry average" },
  { metric: "34", label: "Leads from social monthly", period: "Without paid advertising" },
];

const testimonials = [
  { quote: "I went from struggling to post once a week to having a professional, consistent presence across Instagram, Facebook, and TikTok. My DMs are now full of potential clients who found me through reels.", author: "Lauren K.", role: "Real Estate Agent, Phoenix AZ" },
  { quote: "RealLanding's team understands real estate social media at a level I've never seen. They turned my personal brand into a lead machine — I closed 3 deals last month solely from Instagram.", author: "James W.", role: "Luxury Agent, Scottsdale AZ" },
];

const faqs = [
  { question: "How many posts per week will I get?", answer: "Our standard packages include 4–5 posts per week across platforms, including a strategic mix of static posts, carousels, reels, and stories. Custom frequency and platform combinations are available based on your goals and budget." },
  { question: "Do I need to provide content or photos?", answer: "We handle everything — content ideation, copywriting, graphic design, and video editing. We also love incorporating your property photos, behind-the-scenes footage, and personal moments for authentic content that resonates with your audience." },
  { question: "Which platforms do you manage?", answer: "We manage Instagram, Facebook, LinkedIn, TikTok, and YouTube. Most real estate professionals see the best ROI from Instagram and Facebook, but we recommend the right platform mix based on your target audience, market, and content style." },
  { question: "How soon will I see results?", answer: "You'll see engagement improvements within 2–4 weeks, meaningful follower growth in 60–90 days, and consistent lead flow within 3–6 months. Social media is a compounding strategy — the longer we manage it, the stronger the results become." },
  { question: "Can I approve content before it goes live?", answer: "Absolutely. Every post goes through an approval workflow via a shared content calendar. You'll see captions, graphics, and scheduling 7+ days in advance, with full transparency and easy collaboration." },
  { question: "What makes your social media management different?", answer: "We exclusively serve real estate professionals. Our team understands property marketing, agent branding, market trends, and the content formats that actually generate leads in real estate — not generic social media management repackaged for your industry." },
];

const relatedServices = [
  { title: "Video Marketing", href: "/services/video-marketing", description: "Professional property tours, drone footage, and cinematic reels that fuel your social media content pipeline." },
  { title: "Content Marketing", href: "/services/content-marketing", description: "SEO blogs, neighborhood guides, and market reports that provide source material for weeks of social content." },
  { title: "Paid Advertising", href: "/services/paid-advertising", description: "Amplify your top-performing organic posts with targeted ad campaigns across Facebook, Instagram, and TikTok." },
];

export default function SocialMediaMarketingPage() {
  return (
    <ServicePageLayout data={{
      breadcrumb: "Social Media Marketing",
      badgeIcon: (<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>),
      badgeText: "Social Media Marketing for Real Estate",
      title: `Turn Your Social Profiles Into<br className="hidden md:block" /> Lead-Generating Machines`,
      description: `We create scroll-stopping content, build engaged communities, and position you as the go-to agent in your market — all without you lifting a finger.`,
      primaryCTA: "Get a Free Strategy Call",
      secondaryCTA: "See Our Portfolio",
      trustLine: "Managing 100+ real estate social accounts nationwide",
      trustBar: ["Real Estate Social Specialists", "All Platforms Managed", "Content Approval Workflow", "Monthly Performance Reports"],
      stats,
      services,
      servicesHeading: "What We Do",
      servicesSubheading: `Full-Service Social Media Management`,
      servicesDescription: `From content creation to community building — everything you need to dominate social media in your market, managed by a team that lives and breathes real estate.`,
      results,
      resultsHeading: "Proven Results",
      resultsSubheading: `Social Media Performance That Delivers`,
      resultsDescription: `Real metrics from real estate professionals whose social media we manage — not vanity numbers, but business-driving results.`,
      benefits,
      benefitsHeading: "Why It Matters",
      benefitsSubheading: `Why Real Estate Pros Choose Our Social Media Service`,
      benefitsDescription: `Social media isn't optional anymore — it's where your next client is scrolling right now. Random posting doesn't work. You need a strategic, consistent presence that builds trust and drives inquiries.`,
      testimonials,
      steps,
      processHeading: "Our Process",
      processSubheading: `How We Grow Your Social Presence`,
      processDescription: `A five-step methodology that turns inconsistent posting into a strategic, lead-generating social media machine.`,
      faqs,
      faqHeading: `Common Questions`,
      relatedServices,
      relatedHeading: "Related Services",
      relatedSubheading: `Amplify Your Social Media Results`,
      ctaHeading: `Ready to Dominate Social Media in Your Market?`,
      ctaDescription: `Book a free strategy call and we'll build a custom social media plan that turns followers into closings — starting with your first 30-day content calendar.`,
      ctaCTA: "Get Your Free Strategy Call",
      ctaSubtext: "Includes a free audit of your current social media presence",
    }} />
  );
}
