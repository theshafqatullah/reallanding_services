import ServicePageLayout from "@/app/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Buying Assistance | RealLanding",
  description:
    "Expert guidance through every step of the home buying journey — from finding the perfect property to negotiating the best deal and closing with confidence.",
  openGraph: {
    title: "Home Buying Assistance | RealLanding",
    description:
      "Expert guidance through every step of the home buying journey — from finding the perfect property to negotiating the best deal and closing with confidence.",
    url: "https://reallanding.com/services/home-buying",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-home-buying.jpg",
        width: 1200,
        height: 630,
        alt: "Home Buying Assistance | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Buying Assistance | RealLanding",
    description:
      "Expert guidance through every step of the home buying journey — from finding the perfect property to negotiating the best deal and closing with confidence.",
    images: ["https://reallanding.com/og-home-buying.jpg"],
    site: "@RealLandingHQ",
  },
};


// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Home Buying Assistance",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "Expert guidance through every step of the home buying journey — from finding the perfect property to negotiating the best deal and closing with confidence.",
  "url": "https://reallanding.com/services/home-buying",
  "category": "Real Estate Marketing"
};


const stats = [
  { value: "1,200+", label: "Families Helped" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "$45K", label: "Avg Saved on Purchase" },
  { value: "21 Days", label: "Avg Time to Offer" },
];

const services = [
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>), title: "Buyer Consultation & Needs Analysis", description: "We start with a deep-dive consultation to understand your lifestyle, budget, commute needs, school preferences, and long-term goals — then build a custom home search strategy around what matters most to you." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" /></svg>), title: "Property Search & Shortlisting", description: "Gain access to MLS listings, off-market opportunities, pocket listings, and pre-foreclosures. We filter hundreds of properties down to a curated shortlist that matches your exact criteria — saving you weeks of scrolling." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>), title: "Market Analysis & Property Valuation", description: "Every property you consider gets a comprehensive comparative market analysis (CMA) including recent sold comps, price-per-square-foot trends, neighborhood appreciation rates, and days-on-market data to ensure you never overpay." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>), title: "Offer Strategy & Competitive Positioning", description: "In competitive markets, the right offer strategy wins. We craft compelling offers with strategic escalation clauses, appraisal gap coverage, and flexible terms that make sellers choose your offer over the rest." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>), title: "Negotiation & Inspection Support", description: "From counter-offers to inspection repair requests, we negotiate aggressively on your behalf — leveraging market data and inspection findings to protect your investment and secure the best possible price and terms." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>), title: "Closing Coordination & Move-In Support", description: "We coordinate with your lender, title company, attorney, and inspector to ensure a smooth closing. You&apos;ll get a day-by-day timeline, document checklists, and a dedicated point of contact through move-in day." },
];

const steps = [
  { step: 1, title: "Initial Consultation", description: "We discuss your goals, budget, preferred neighborhoods, must-haves, and deal-breakers to create a personalized home buying roadmap tailored to your needs." },
  { step: 2, title: "Pre-Approval & Planning", description: "We connect you with trusted lenders to secure pre-approval, determine your true budget, and set realistic expectations for your target market." },
  { step: 3, title: "Curated Property Tours", description: "We schedule private showings of hand-picked properties, providing CMA reports for each so you can make fast, informed decisions with confidence." },
  { step: 4, title: "Offer & Negotiation", description: "We craft a winning offer strategy, submit on your behalf, negotiate counter-offers, and manage inspection contingencies to protect your interests." },
  { step: 5, title: "Closing & Keys in Hand", description: "We manage every closing detail — from document review to final walkthrough — and hand you the keys to your new home on schedule." },
];

const benefits = [
  { title: "Save Thousands on Price", desc: "Our negotiation expertise and market data help buyers save an average of $45,000 off asking price through strategic offers and data-backed counter-proposals." },
  { title: "Access Off-Market Deals", desc: "Our agent network and industry relationships uncover pocket listings and off-market properties that never appear on Zillow, Redfin, or Realtor.com." },
  { title: "Reduce Time-to-Close", desc: "With pre-qualified shortlists, streamlined showings, and proactive coordination, our clients go from search to keys in 30% less time than average." },
  { title: "Navigate Competitive Markets", desc: "In bidding wars, our offer strategies — escalation clauses, personal letters, flexible closing dates — give you the edge that wins without overpaying." },
  { title: "Protect Your Investment", desc: "From inspection red flags to appraisal shortfalls, we identify and resolve issues before closing so you buy with confidence and zero surprises." },
  { title: "Stress-Free Experience", desc: "A dedicated buyer&apos;s agent handles every detail — scheduling, paperwork, vendor coordination, and communication — so you can focus on the excitement of finding your home." },
];

const results = [
  { metric: "1,200+", label: "Happy families in new homes", period: "Across 35+ markets nationwide" },
  { metric: "$45K", label: "Average savings per purchase", period: "Through expert negotiation" },
  { metric: "21 Days", label: "Avg time from search to offer", period: "50% faster than market average" },
  { metric: "98%", label: "Client satisfaction rating", period: "Based on 800+ post-close surveys" },
];

const testimonials = [
  { quote: "As first-time buyers in a crazy competitive market, we were terrified. RealLanding&apos;s team found us an off-market property $38K under our budget and handled everything from pre-approval to closing. We moved in three weeks ahead of schedule.", author: "Jessica & Michael T.", role: "First-Time Buyers, Denver CO" },
  { quote: "We relocated from New York to Austin for work and had 30 days to find a home. RealLanding scheduled 12 targeted showings in one weekend, helped us win a bidding war with a smart escalation clause, and coordinated a remote closing. Absolutely incredible service.", author: "Raj Patel", role: "Relocating Buyer, Austin TX" },
];

const faqs = [
  { question: "How much does it cost to use a buyer&apos;s agent?", answer: "In most transactions, the seller pays the buyer&apos;s agent commission — meaning our services come at no direct cost to you. We&apos;ll explain the full compensation structure during your initial consultation so there are never any surprises." },
  { question: "How long does the home buying process take?", answer: "On average, our clients go from initial consultation to closing in 45–60 days. The search phase typically takes 2–4 weeks, and the closing process takes another 30–45 days after an accepted offer. Timeline varies based on market conditions and financing." },
  { question: "What should I have ready before starting my home search?", answer: "Ideally, you&apos;ll want a mortgage pre-approval letter, a clear idea of your budget (including closing costs), a list of must-haves vs. nice-to-haves, and preferred neighborhoods. We&apos;ll help you organize everything during our first meeting." },
  { question: "Do you help with new construction purchases?", answer: "Absolutely. We represent buyers in new construction transactions, reviewing builder contracts, negotiating upgrades and incentives, monitoring construction timelines, and conducting pre-drywall and final inspections to protect your interests." },
  { question: "What happens if the home inspection reveals problems?", answer: "We review every inspection report line by line and advise you on which issues are deal-breakers vs. negotiation leverage. We&apos;ll request repairs, credits, or price reductions on your behalf — and if the property has serious structural issues, we&apos;ll recommend walking away." },
  { question: "Can you help me buy an investment property?", answer: "Yes — we work with investors of all levels. We analyze cap rates, cash-on-cash returns, rental comps, and neighborhood growth trajectories to help you identify properties that maximize your investment returns." },
];

const relatedServices = [
  { title: "Home Inspection Services", href: "/services/home-inspection", description: "Protect your investment with a comprehensive 150+ point inspection that uncovers hidden issues before you commit to purchasing your new home." },
  { title: "Home Selling Services", href: "/services/home-selling", description: "Selling your current home while buying a new one? Our coordinated buy-sell strategy ensures seamless timing and maximum value on both sides." },
  { title: "Paid Advertising", href: "/services/paid-advertising", description: "Find highly motivated sellers and off-market deals faster with targeted digital advertising campaigns across Google, Facebook, and Instagram." },
];

export default function HomeBuyingPage() {
  return (
    <ServicePageLayout data={{
      breadcrumb: "Home Buying",
      badgeIcon: (<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" /></svg>),
      badgeText: "Home Buying Assistance for Real Estate",
      title: `Find Your Dream Home &<br className="hidden md:block" /> Buy It for the Best Price`,
      description: `From first-time buyers to seasoned investors, our expert buyer's agents guide you through every step — finding the right property, negotiating the best deal, and closing with confidence.`,
      primaryCTA: "Start Your Home Search",
      secondaryCTA: "Book a Free Consultation",
      trustLine: "Trusted by 1,200+ happy homeowners across the US",
      trustBar: ["Licensed & Certified Agents", "Buyer-First Commitment", "Full MLS & Off-Market Access", "No Hidden Fees"],
      stats,
      services,
      servicesHeading: "Our Services",
      servicesSubheading: `End-to-End Home Buying Support`,
      servicesDescription: `Six essential services that take you from first-time dreaming to front-door keys — with expert guidance and fierce advocacy at every stage.`,
      results,
      resultsHeading: "Proven Results",
      resultsSubheading: `Helping Families Find Home — By the Numbers`,
      resultsDescription: `Here's what happens when experienced buyer's agents combine local market expertise with data-driven negotiation strategies.`,
      benefits,
      benefitsHeading: "Why Choose Us",
      benefitsSubheading: `The Home Buying Advantage with RealLanding`,
      benefitsDescription: `Six powerful reasons our clients consistently find better homes, pay less, and close faster than buyers who go it alone.`,
      testimonials,
      testimonialHeading: "What Our Buyers Say",
      steps,
      processHeading: "Our Process",
      processSubheading: `From Dream Home to Front Door in Five Steps`,
      processDescription: `A proven, streamlined process that takes the stress out of home buying and puts you in your new home faster.`,
      faqs,
      faqHeading: `Common Home Buying Questions`,
      relatedServices,
      relatedHeading: "Related Services",
      relatedSubheading: `Complete Your Home Buying Journey`,
      ctaHeading: `Ready to Find Your Dream Home?`,
      ctaDescription: `Book a free buyer's consultation and let our experts build a personalized home search strategy — so you can stop scrolling and start touring.`,
      ctaCTA: "Schedule Your Free Consultation",
      ctaSubtext: "No commitment required — get a personalized home buying plan in 30 minutes",
    }} />
  );
}
