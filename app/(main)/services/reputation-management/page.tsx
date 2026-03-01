import ServicePageLayout from "@/app/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reputation Management for Real Estate | RealLanding",
  description:
    "Online reputation management for real estate professionals — review generation, monitoring, negative review resolution, Google Business Profile optimization, and social proof marketing.",
  openGraph: {
    title: "Reputation Management for Real Estate | RealLanding",
    description:
      "Online reputation management for real estate professionals — review generation, monitoring, negative review resolution, Google Business Profile optimization, and social proof marketing.",
    url: "https://reallanding.com/services/reputation-management",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-reputation-management.jpg",
        width: 1200,
        height: 630,
        alt: "Reputation Management for Real Estate | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reputation Management for Real Estate | RealLanding",
    description:
      "Online reputation management for real estate professionals — review generation, monitoring, negative review resolution, Google Business Profile optimization, and social proof marketing.",
    images: ["https://reallanding.com/og-reputation-management.jpg"],
    site: "@RealLandingHQ",
  },
};


// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Reputation Management",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "Online reputation management for real estate professionals — review generation, monitoring, negative review resolution, Google Business Profile optimization, and social proof marketing.",
  "url": "https://reallanding.com/services/reputation-management",
  "category": "Real Estate Marketing"
};


const stats = [
  { value: "4.8 ★", label: "Average Client Rating" },
  { value: "340%", label: "More Reviews Generated" },
  { value: "92%", label: "Negative Review Resolution" },
  { value: "500+", label: "Agents Protected" },
];

const services = [
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>), title: "Review Generation Campaigns", description: "Automated, perfectly-timed review request sequences sent via email, SMS, and QR code after every closing, showing, or service interaction. We make it effortless for happy clients to leave glowing 5-star reviews on the platforms that matter most — Google, Zillow, Realtor.com, and Facebook." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>), title: "Review Monitoring & Alerts", description: "Real-time monitoring of every review, mention, and comment about your brand across 50+ platforms. Instant alerts ensure you never miss a new review — positive or negative — so you can respond quickly and stay in control of the conversation." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>), title: "Negative Review Response & Resolution", description: "Professional, empathetic response strategies for negative reviews that protect your brand and often convert unhappy reviewers into advocates. We handle flagging fake or policy-violating reviews, crafting replies, and escalating removals when appropriate — all within 24 hours." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>), title: "Google Business Profile Optimization", description: "Full optimization of your Google Business Profile for maximum local visibility: accurate NAP data, keyword-rich descriptions, service area configuration, regular photo uploads, Q&A management, and Google Posts that keep your listing active and authoritative in local search results." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" /></svg>), title: "Testimonial Collection & Marketing", description: "We produce and distribute video and written testimonials from your happiest clients. From coordinating interviews to editing polished testimonial videos and distributing them across your website, social media, and ad campaigns — turning satisfied clients into your most powerful marketing asset." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" /></svg>), title: "Social Proof Strategy", description: "Strategic placement of reviews, ratings, testimonials, and trust badges across your entire digital presence — website, landing pages, email signatures, social profiles, and ad creative. We engineer social proof into every touchpoint to boost conversion rates at every stage of the client journey." },
];

const steps = [
  { step: 1, title: "Reputation Audit", description: "We analyze your current online reputation across all platforms — identifying strengths, vulnerabilities, negative reviews, missing profiles, and opportunities to improve your star rating and review volume." },
  { step: 2, title: "Strategy & Setup", description: "Custom reputation management plan including platform prioritization, review request templates, response protocols, monitoring tool configuration, and Google Business Profile optimization." },
  { step: 3, title: "Review Generation Launch", description: "Automated review request campaigns go live — triggered by closings, appointments, and milestones in your CRM. Happy clients receive perfectly-timed, friction-free prompts to share their experience." },
  { step: 4, title: "Monitor & Respond", description: "Continuous monitoring across all platforms with same-day responses to every review. Negative reviews are triaged, responded to professionally, and escalated for removal when they violate platform policies." },
  { step: 5, title: "Amplify & Report", description: "Top reviews and testimonials are repurposed into marketing assets. Monthly reports track rating improvements, review volume, response times, and the impact of social proof on lead conversion." },
];

const benefits = [
  { title: "Win the Trust Battle", desc: "93% of consumers read online reviews before choosing a service provider. A strong review profile is the single most influential factor in a prospect&apos;s decision to call you — or your competitor." },
  { title: "Higher Search Rankings", desc: "Google&apos;s local algorithm heavily weights review quantity, quality, and recency. More 5-star reviews directly improve your Google Maps and local pack rankings, driving more organic leads." },
  { title: "Faster Lead Conversion", desc: "Prospects who see 50+ reviews with a 4.8+ rating convert at nearly double the rate of those who see sparse or average reviews. Social proof accelerates the decision-making process." },
  { title: "Damage Control on Autopilot", desc: "Negative reviews happen to everyone. Our monitoring and response system ensures bad reviews are addressed within hours — not weeks — minimizing their impact on your reputation and rankings." },
  { title: "Consistent Review Flow", desc: "No more begging for reviews or remembering to ask. Our automated campaigns generate a steady stream of fresh reviews every month, keeping your profiles active and algorithmically favored." },
  { title: "Competitive Differentiation", desc: "In markets where every agent claims to be \"the best,\" a dominant review profile proves it. We help you build an undeniable track record that separates you from the competition." },
];

const results = [
  { metric: "4.8 ★", label: "Average client star rating", period: "Across all managed profiles" },
  { metric: "340%", label: "Increase in review volume", period: "Within first 6 months" },
  { metric: "92%", label: "Negative review resolution", period: "Resolved or removed" },
  { metric: "500+", label: "Agents & teams protected", period: "Reputation managed nationwide" },
];

const testimonials = [
  { quote: "I had 12 Google reviews when I hired RealLanding — and two of them were negative from years ago. Within six months, I had 87 reviews with a 4.9 rating. The automated system makes it so easy that I don&apos;t even think about it anymore. My listing appointments doubled because sellers Google me before our first call, and they love what they see.", author: "Jennifer Castillo", role: "Realtor, Keller Williams, Miami FL" },
  { quote: "A disgruntled buyer left a scathing one-star review that was completely fabricated. RealLanding crafted a professional response within two hours, submitted a removal request to Google, and had it taken down within a week. Meanwhile, they helped me generate 15 new five-star reviews that month to bury any lingering damage. Absolute lifesavers.", author: "Tom Brennan", role: "Broker/Owner, Brennan Realty Group, Denver CO" },
];

const faqs = [
  { question: "How do you generate reviews without violating platform guidelines?", answer: "We use 100% compliant methods — automated email and SMS sequences that politely request feedback after a positive client interaction. We never incentivize reviews, post fake reviews, or use review gating (filtering out negative reviewers). Every review platform has specific guidelines, and our system is designed to stay within them at all times." },
  { question: "Can you remove fake or unfair negative reviews?", answer: "We can't guarantee removal — that's ultimately up to the platform. However, we have an 85%+ success rate in getting reviews that violate platform policies (fake reviews, spam, conflicts of interest, irrelevant content) flagged and removed. For reviews that are real but unfair, we craft professional responses that minimize their impact and demonstrate your commitment to client satisfaction." },
  { question: "How long does it take to see results?", answer: "Most clients see a noticeable increase in review volume within the first 30 days as automated campaigns activate. Meaningful rating improvements (e.g., moving from 4.2 to 4.7+) typically take 3–6 months depending on your starting point and transaction volume. Google Business Profile optimization gains usually show within 4–8 weeks." },
  { question: "Which platforms do you monitor and manage?", answer: "We monitor and manage reviews across Google, Zillow, Realtor.com, Facebook, Yelp, Trulia, Homes.com, the BBB, and any niche platforms relevant to your market. Our monitoring system also tracks social media mentions, blog references, and news articles so you have complete visibility into your online reputation." },
  { question: "Does reputation management help with SEO?", answer: "Absolutely. Google has confirmed that review signals (quantity, velocity, diversity, and star rating) are a significant ranking factor in local search. Agents with more high-quality reviews consistently rank higher in Google Maps and the local 3-pack. Our GBP optimization work further compounds these gains." },
  { question: "What does reputation management cost?", answer: "Our reputation management packages start at $800/month for individual agents and scale to $2,500–$5,000/month for teams and brokerages with multiple locations. Every package includes review generation, monitoring, response management, GBP optimization, and monthly reporting. Custom enterprise pricing is available for large brokerages." },
];

const relatedServices = [
  { title: "Social Media Marketing", href: "/services/social-media-marketing", description: "Amplify your stellar reputation across social platforms with strategic content that showcases your reviews and client success stories." },
  { title: "Branding & Market Positioning", href: "/services/branding-market-positioning", description: "Build a cohesive brand identity that complements your online reputation and positions you as the market authority." },
  { title: "Content Marketing", href: "/services/content-marketing", description: "Create compelling content that reinforces your credibility, showcases expertise, and drives organic traffic to your optimized profiles." },
];

export default function ReputationManagementPage() {
  return (
    <ServicePageLayout data={{
      breadcrumb: "Reputation Management",
      badgeIcon: (<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0l-4.725 2.885a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>),
      badgeText: "Reputation Management",
      title: `Protect &amp; Amplify Your<br className="hidden md:block" /> Real Estate Reputation`,
      description: `Review generation, monitoring, negative review resolution, and social proof marketing — so prospects trust you before they ever pick up the phone.`,
      primaryCTA: "Get Your Free Reputation Audit",
      secondaryCTA: "See Client Results",
      trustLine: "500+ agents and teams trust us to protect their online reputation",
      trustBar: ["50+ Platforms Monitored", "Same-Day Response", "100% Guideline Compliant", "Monthly Performance Reports"],
      stats,
      services,
      servicesHeading: "Our Solutions",
      servicesSubheading: `Complete Reputation Management Suite`,
      servicesDescription: `From generating five-star reviews to neutralizing negative ones, we manage every facet of your online reputation so you can focus on closing deals.`,
      results,
      resultsHeading: "Proven Results",
      resultsSubheading: `Reputation Performance Metrics`,
      resultsDescription: `Real results from real estate professionals who trust us to protect and grow their online reputation.`,
      benefits,
      benefitsHeading: "Why Choose Us",
      benefitsSubheading: `Your Reputation Is Your Most Valuable Asset`,
      benefitsDescription: `In real estate, trust is everything. We ensure your online presence reflects the quality of service you actually deliver.`,
      testimonials,
      testimonialHeading: "What Agents & Teams Say",
      steps,
      processHeading: "Our Process",
      processSubheading: `From Vulnerability to Five-Star Dominance in Five Steps`,
      processDescription: `A systematic approach to building, protecting, and amplifying the online reputation that drives your real estate business.`,
      faqs,
      faqHeading: `Common Questions About Reputation Management`,
      relatedServices,
      relatedHeading: "Related Services",
      relatedSubheading: `Strengthen Your Brand Presence`,
      ctaHeading: `Ready to Own Your Online Reputation?`,
      ctaDescription: `Book a free reputation audit. We'll analyze your current online presence, identify vulnerabilities, and map out a plan to build a 5-star reputation that wins listings and converts leads.`,
      ctaCTA: "Get Your Free Reputation Audit",
      ctaSubtext: "Includes a full review analysis across Google, Zillow, and Realtor.com",
    }} />
  );
}
