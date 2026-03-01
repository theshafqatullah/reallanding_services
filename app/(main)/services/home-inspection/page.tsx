import ServicePageLayout from "@/app/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Inspection Services | RealLanding",
  description:
    "Comprehensive home inspection services for buyers and sellers — 150+ point inspections, 48-hour report delivery, and 100% licensed inspectors you can trust.",
  openGraph: {
    title: "Home Inspection Services | RealLanding",
    description:
      "Comprehensive home inspection services for buyers and sellers — 150+ point inspections, 48-hour report delivery, and 100% licensed inspectors you can trust.",
    url: "https://reallanding.com/services/home-inspection",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-home-inspection.jpg",
        width: 1200,
        height: 630,
        alt: "Home Inspection Services | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Inspection Services | RealLanding",
    description:
      "Comprehensive home inspection services for buyers and sellers — 150+ point inspections, 48-hour report delivery, and 100% licensed inspectors you can trust.",
    images: ["https://reallanding.com/og-home-inspection.jpg"],
    site: "@RealLandingHQ",
  },
};


// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Home Inspection Services",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "Comprehensive home inspection services for buyers and sellers — 150+ point inspections, 48-hour report delivery, and 100% licensed inspectors you can trust.",
  "url": "https://reallanding.com/services/home-inspection",
  "category": "Real Estate Marketing"
};


const stats = [
  { value: "5,000+", label: "Inspections Done" },
  { value: "48hr", label: "Report Delivery" },
  { value: "150+", label: "Point Inspection" },
  { value: "100%", label: "Licensed Inspectors" },
];

const services = [
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>), title: "Pre-Purchase Home Inspection", description: "Our most comprehensive inspection covers every accessible system and component of the home — roof to foundation, attic to crawl space — giving buyers the full picture before they commit to the biggest purchase of their lives." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>), title: "Pre-Listing Seller Inspection", description: "Identify and address issues before listing your home. A pre-listing inspection eliminates surprise repair requests, accelerates negotiations, and gives buyers confidence — helping your property sell faster and at a higher price." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>), title: "Radon Testing & Environmental", description: "We test for radon gas, mold, asbestos, and lead paint — invisible hazards that can impact your family&apos;s health and the property&apos;s value. Results are lab-verified and included in your comprehensive inspection report." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>), title: "Structural Assessment", description: "Our structural specialists examine foundations, load-bearing walls, framing, and settling patterns to identify cracks, shifts, and potential structural concerns that could lead to costly repairs down the road." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>), title: "Systems & Mechanical Inspection", description: "We thoroughly evaluate HVAC, electrical panels, plumbing, water heaters, and all major mechanical systems — checking for code compliance, safety hazards, remaining useful life, and deferred maintenance issues." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>), title: "Detailed Digital Reporting", description: "Within 48 hours, you receive a comprehensive digital report with high-resolution photos, severity ratings, repair cost estimates, and prioritized recommendations — making it easy to understand, share, and act on findings." },
];

const steps = [
  { step: 1, title: "Schedule Your Inspection", description: "Book online or call us to schedule at a time that works for you. We accommodate rush requests and can often inspect within 24–48 hours of booking." },
  { step: 2, title: "On-Site Inspection", description: "Our licensed inspector arrives on-site and conducts a thorough 150+ point inspection lasting 2–4 hours, examining every accessible system, component, and surface." },
  { step: 3, title: "Walk-Through & Q&A", description: "We walk you through our findings on-site, answering questions in real time and pointing out key areas of concern so you understand the property&apos;s true condition." },
  { step: 4, title: "Digital Report Delivery", description: "Within 48 hours, you receive a detailed, photo-rich digital report with severity ratings, repair estimates, and prioritized action items for easy decision-making." },
  { step: 5, title: "Post-Report Consultation", description: "We remain available after delivery to clarify findings, discuss repair priorities, and help you or your agent build a strong negotiation strategy based on the results." },
];

const benefits = [
  { title: "Avoid Costly Surprises", desc: "Uncover hidden issues — from foundation cracks to outdated wiring — before you close, so you can negotiate repairs or walk away with confidence." },
  { title: "48-Hour Report Turnaround", desc: "We deliver detailed, photo-rich digital reports within 48 hours, keeping your transaction on schedule and your contingency deadlines on track." },
  { title: "150+ Point Inspection", desc: "Every inspection follows our comprehensive 150+ point checklist covering structure, roof, plumbing, electrical, HVAC, insulation, drainage, and more." },
  { title: "Licensed & Insured Inspectors", desc: "Every inspector on our team is state-licensed, fully insured, and averages 10+ years of residential inspection experience across all property types." },
  { title: "Negotiation Leverage", desc: "Our detailed findings and repair cost estimates give buyers and agents the data they need to negotiate credits, price reductions, or seller-funded repairs." },
  { title: "Peace of Mind", desc: "Whether you&apos;re buying your first home or selling your fifth, knowing the true condition of the property gives you the confidence to make smart decisions." },
];

const results = [
  { metric: "5,000+", label: "Inspections completed", period: "Across residential & commercial" },
  { metric: "48hr", label: "Average report delivery", period: "With rush options available" },
  { metric: "$12K", label: "Avg savings from findings", period: "Through negotiated repairs & credits" },
  { metric: "4.9/5", label: "Average client rating", period: "Based on 2,100+ reviews" },
];

const testimonials = [
  { quote: "The inspector found a cracked heat exchanger that could have been a carbon monoxide hazard. The seller had no idea. Thanks to RealLanding&apos;s thorough inspection, we negotiated a $14,000 credit and replaced the entire HVAC system before moving in.", author: "Amanda & Chris L.", role: "Home Buyers, Charlotte NC" },
  { quote: "As a listing agent, I recommend RealLanding&apos;s pre-listing inspections to every seller. My last client spent $2,800 on fixes that the inspector flagged, and we sold the home in 5 days with zero repair requests from the buyer. It pays for itself every time.", author: "Marcus Reeves", role: "Listing Agent, Phoenix AZ" },
];

const faqs = [
  { question: "What does a home inspection cover?", answer: "Our 150+ point inspection covers the roof, attic, insulation, exterior surfaces, foundation, basement, crawl space, structural components, plumbing, electrical systems, HVAC, water heaters, appliances, windows, doors, drainage, and grading. We also check for visible signs of water damage, mold, and pest activity." },
  { question: "How long does an inspection take?", answer: "A typical single-family home inspection takes 2–4 hours depending on the size, age, and condition of the property. Larger homes, older properties, or homes with additional structures (pools, detached garages) may take longer. We never rush — thoroughness is our priority." },
  { question: "How much does a home inspection cost?", answer: "Standard home inspections typically range from $350–$600 depending on the property size, age, and location. Add-on services like radon testing ($150), mold testing ($200), or sewer scope ($250) are available. We provide transparent pricing upfront with no hidden fees." },
  { question: "Should I attend the inspection?", answer: "We strongly encourage buyers to attend the final walk-through portion of the inspection. This is your opportunity to see the property&apos;s systems firsthand, ask questions, and learn about maintenance requirements. We typically schedule the walk-through for the last 30–60 minutes." },
  { question: "What happens if major issues are found?", answer: "If we uncover significant issues — structural problems, roof failures, electrical hazards — we document them thoroughly with photos and repair cost estimates. Your agent can then negotiate repairs, credits, or a price reduction. In some cases, inspection findings may justify walking away from the deal entirely." },
  { question: "Do you inspect new construction homes?", answer: "Absolutely. New construction inspections are critical because builders make mistakes too. We perform phase inspections (pre-drywall, pre-final, and final) to catch issues while they&apos;re still easy and inexpensive to fix — before drywall, flooring, and finishes cover them up." },
];

const relatedServices = [
  { title: "Home Buying Assistance", href: "/services/home-buying", description: "Pair your inspection with our expert buyer&apos;s agent services for full-service support from property search to closing day." },
  { title: "Home Selling Services", href: "/services/home-selling", description: "Get a pre-listing inspection to identify and fix issues before going to market — sell faster with fewer surprises." },
  { title: "Video Marketing", href: "/services/video-marketing", description: "Showcase your property&apos;s best features with professional video tours, drone footage, and virtual walk-throughs that attract serious buyers." },
];

export default function HomeInspectionPage() {
  return (
    <ServicePageLayout data={{
      breadcrumb: "Home Inspection",
      badgeIcon: (<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>),
      badgeText: "Comprehensive Home Inspection Services",
      title: `Know Exactly What You&apos;re<br className="hidden md:block" /> Buying — Before You Buy`,
      description: ``,
      primaryCTA: "Book an Inspection",
      secondaryCTA: "View Sample Report",
      trustLine: "Trusted by 1,500+ homeowners and agents across the US",
      trustBar: ["State-Licensed Inspectors", "Fully Insured & Bonded", "48-Hour Report Guarantee", "Transparent Pricing"],
      stats,
      services,
      servicesHeading: "Our Services",
      servicesSubheading: `Comprehensive Inspection Solutions`,
      servicesDescription: `Six specialized inspection services designed to give buyers, sellers, and agents complete visibility into a property's true condition.`,
      results,
      resultsHeading: "Proven Results",
      resultsSubheading: `Protecting Buyers & Sellers — By the Numbers`,
      resultsDescription: `Here's what happens when licensed inspectors combine years of experience with a meticulous 150+ point evaluation process.`,
      benefits,
      benefitsHeading: "Why Inspect",
      benefitsSubheading: `The Smart Investment That Protects Your Biggest One`,
      benefitsDescription: `A professional home inspection costs a fraction of the property's value but can save you tens of thousands in unexpected repairs and safety hazards.`,
      testimonials,
      steps,
      processHeading: "Our Process",
      processSubheading: `From Booking to Report in Five Steps`,
      processDescription: `A straightforward, transparent process that gives you complete property insights with minimal disruption to your timeline.`,
      faqs,
      faqHeading: `Common Home Inspection Questions`,
      relatedServices,
      relatedHeading: "Related Services",
      relatedSubheading: `Complement Your Inspection`,
      ctaHeading: `Don't Buy or Sell Blind — Get a Professional Inspection`,
      ctaDescription: ``,
      ctaCTA: "Schedule Your Inspection",
      ctaSubtext: "",
    }} />
  );
}
