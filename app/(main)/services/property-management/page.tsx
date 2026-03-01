import ServicePageLayout from "@/app/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Management Services | RealLanding",
  description:
    "Professional property management for landlords and investors. Tenant screening, rent collection, maintenance coordination, property marketing, lease management, and financial reporting.",
  openGraph: {
    title: "Property Management Services | RealLanding",
    description:
      "Professional property management for landlords and investors. Tenant screening, rent collection, maintenance coordination, property marketing, lease management, and financial reporting.",
    url: "https://reallanding.com/services/property-management",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-property-management.jpg",
        width: 1200,
        height: 630,
        alt: "Property Management Services | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Property Management Services | RealLanding",
    description:
      "Professional property management for landlords and investors. Tenant screening, rent collection, maintenance coordination, property marketing, lease management, and financial reporting.",
    images: ["https://reallanding.com/og-property-management.jpg"],
    site: "@RealLandingHQ",
  },
};


// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Property Management Services",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "Professional property management for landlords and investors. Tenant screening, rent collection, maintenance coordination, property marketing, lease management, and financial reporting.",
  "url": "https://reallanding.com/services/property-management",
  "category": "Real Estate Marketing"
};


const stats = [
  { value: "2,800+", label: "Units Managed" },
  { value: "97%", label: "Occupancy Rate" },
  { value: "$0", label: "Missed Rent Collected" },
  { value: "4.9 ★", label: "Average Owner Rating" },
];

const services = [
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>), title: "Tenant Screening & Placement", description: "Comprehensive background checks including credit reports, criminal history, eviction records, employment verification, income confirmation, and rental references — ensuring only qualified, reliable tenants occupy your property." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>), title: "Rent Collection & Accounting", description: "Automated rent collection via online portals, direct deposit, and ACH transfers. We handle late notices, payment tracking, security deposit management, and full-service bookkeeping with monthly owner statements." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" /></svg>), title: "Maintenance Coordination", description: "24/7 maintenance request system with a vetted vendor network. From emergency repairs to routine upkeep, we coordinate every work order, approve costs within your thresholds, and ensure quality workmanship at competitive rates." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" /></svg>), title: "Property Marketing & Listing", description: "Professional photography, compelling listing descriptions, syndication across 40+ rental platforms, virtual tours, and targeted social media campaigns to minimize vacancy and attract the best tenants fast." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>), title: "Lease Management & Renewals", description: "Legally compliant lease agreements, renewal negotiations, rent increase analysis based on market comps, move-in/move-out inspections, and proactive retention strategies that reduce turnover and keep quality tenants longer." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>), title: "Financial Reporting & Owner Portals", description: "Real-time owner dashboards with income/expense tracking, monthly P&L statements, year-end tax-ready reports (1099s), maintenance logs, and on-demand access to every document related to your property." },
];

const steps = [
  { step: 1, title: "Property Evaluation", description: "We conduct a thorough inspection of your property, assess its rental value based on market comps, and identify any improvements needed to maximize rent and attract quality tenants." },
  { step: 2, title: "Onboarding & Setup", description: "We set up your owner portal, establish vendor relationships, create marketing materials, and — if vacant — begin tenant acquisition immediately with professional listings and targeted outreach." },
  { step: 3, title: "Tenant Placement", description: "Rigorous screening process including credit, background, income, and rental history checks. We present qualified applicants for your review and execute legally compliant lease agreements." },
  { step: 4, title: "Day-to-Day Management", description: "We handle everything: rent collection, maintenance coordination, tenant communications, inspections, lease enforcement, and any issues that arise — so you don&apos;t have to." },
  { step: 5, title: "Reporting & Optimization", description: "Monthly financial reports, quarterly property reviews, annual rent analyses, and ongoing recommendations to increase your property&apos;s value and income over time." },
];

const benefits = [
  { title: "Passive Income Optimization", desc: "We maximize your rental income through strategic pricing, minimal vacancy, and cost-effective maintenance — turning your property into a truly passive investment." },
  { title: "Professional Tenant Screening", desc: "Our rigorous screening process reduces the risk of late payments, property damage, and evictions. We place tenants who pay on time and take care of your property." },
  { title: "Maintenance Handled", desc: "No more 2 AM phone calls about broken water heaters. Our 24/7 maintenance team and vetted vendor network handle every repair, large and small, within your budget." },
  { title: "Financial Transparency", desc: "Real-time dashboards, monthly statements, and tax-ready year-end reports give you complete visibility into your property&apos;s financial performance at all times." },
  { title: "Legal Compliance", desc: "We stay current on local, state, and federal landlord-tenant laws, fair housing regulations, and safety codes — protecting you from costly legal mistakes and liability." },
  { title: "Vacancy Minimization", desc: "Proactive lease renewals, competitive pricing analysis, and rapid-turnaround marketing ensure your property spends as few days vacant as possible." },
];

const results = [
  { metric: "97%", label: "Average occupancy rate", period: "Across all managed properties" },
  { metric: "8 days", label: "Average time to fill vacancy", period: "From listing to lease signing" },
  { metric: "99.2%", label: "On-time rent collection rate", period: "Consistent across portfolio" },
  { metric: "$0", label: "Owner out-of-pocket for missed rent", period: "Guaranteed rent program available" },
];

const testimonials = [
  { quote: "I own 12 rental units across three cities and managing them myself was a full-time job. RealLanding took over everything — tenant screening, maintenance, rent collection, and reporting. My occupancy went from 89% to 98%, and I haven&apos;t gotten a single midnight maintenance call in two years. This is truly passive income now.", author: "Marcus Whitfield", role: "Property Investor, Dallas TX" },
  { quote: "As an out-of-state investor, I needed a property management team I could trust completely. RealLanding has managed my four-unit building in Atlanta for 18 months and the results speak for themselves: zero evictions, on-time financials every month, and they even identified a rent increase opportunity that added $400/month to my income.", author: "Priya Nair", role: "Remote Property Owner, San Francisco CA" },
];

const faqs = [
  { question: "What are your property management fees?", answer: "Our standard management fee is 8–10% of collected monthly rent, depending on property type, unit count, and location. Leasing fees for new tenant placement are typically 50–100% of one month's rent. We're transparent about every fee upfront — no hidden charges. Volume discounts are available for portfolios of 5+ units." },
  { question: "What types of properties do you manage?", answer: "We manage single-family homes, duplexes, triplexes, small to mid-size apartment buildings (up to 100 units), condominiums, and townhomes. We work with individual landlords, multi-property investors, and small portfolio owners. Commercial property management is available on a case-by-case basis." },
  { question: "How do you handle reporting and owner communication?", answer: "Every owner gets access to a real-time web portal showing income, expenses, maintenance requests, lease details, and documents. Monthly statements are delivered by the 15th. We send immediate notifications for any major issues. You'll also have a dedicated property manager available by phone, email, or text." },
  { question: "What happens if a tenant needs to be evicted?", answer: "We follow a strict legal process: written notices per local law, payment plan negotiations if appropriate, formal eviction filing with our attorney network if necessary, and coordination with courts and law enforcement through resolution. Our thorough screening process means evictions are extremely rare — under 1% of our placements." },
  { question: "How quickly do you respond to maintenance requests?", answer: "Emergency requests (water leaks, no heat, security issues) receive immediate response within 1 hour, 24/7. Non-emergency requests are acknowledged within 4 hours and typically resolved within 24–48 hours depending on scope. Owners are notified of any repair exceeding their pre-set approval threshold before work begins." },
  { question: "Can I still be involved in decisions about my property?", answer: "Absolutely. You set the parameters — approval thresholds for maintenance costs, tenant criteria, rent pricing, and renovation decisions. We handle the day-to-day execution within your guidelines and consult you on any decisions outside those parameters. You're as hands-on or hands-off as you want to be." },
];

const relatedServices = [
  { title: "Real Estate Investment", href: "/services/real-estate-investment", description: "Identify high-yield investment properties and build a portfolio strategy that maximizes cash flow and long-term appreciation." },
  { title: "Home Selling", href: "/services/home-selling", description: "When it's time to sell an investment property, our marketing strategies maximize sale price and minimize time on market." },
  { title: "Analytics & Performance", href: "/services/analytics-performance", description: "Track portfolio performance, occupancy trends, and financial KPIs with custom dashboards and data-driven insights." },
];

export default function PropertyManagementPage() {
  return (
    <ServicePageLayout data={{
      breadcrumb: "Property Management",
      badgeIcon: (<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" /></svg>),
      badgeText: "Professional Property Management",
      title: `Hassle-Free Property Management<br className="hidden md:block" /> That Maximizes Your Returns`,
      description: ``,
      primaryCTA: "Get a Free Property Evaluation",
      secondaryCTA: "See Our Management Plans",
      trustLine: "Trusted by 200+ property owners and investors nationwide",
      trustBar: ["Licensed & Insured", "24/7 Maintenance Support", "Transparent Owner Portals", "Legally Compliant Leases"],
      stats,
      services,
      servicesHeading: "Our Solutions",
      servicesSubheading: `Complete Property Management Services`,
      servicesDescription: `Everything you need to protect your investment and maximize rental income — from tenant placement to financial reporting, all under one roof.`,
      results,
      resultsHeading: "Proven Results",
      resultsSubheading: `Management Performance Metrics`,
      resultsDescription: `Real numbers from properties we manage for landlords and investors across the country.`,
      benefits,
      benefitsHeading: "Why Choose Us",
      benefitsSubheading: `Property Management That Protects Your Investment`,
      benefitsDescription: `Your rental property is a significant investment. We treat it like our own — maximizing returns while minimizing your stress.`,
      testimonials,
      testimonialHeading: "What Property Owners Say",
      steps,
      processHeading: "Our Process",
      processSubheading: `From Onboarding to Ongoing Management`,
      processDescription: `A structured, transparent process that gets your property under professional management quickly and keeps it performing at its best.`,
      faqs,
      faqHeading: `Common Questions About Property Management`,
      relatedServices,
      relatedHeading: "Related Services",
      relatedSubheading: `Grow Your Portfolio`,
      ctaHeading: `Ready for Truly Passive Rental Income?`,
      ctaDescription: ``,
      ctaCTA: "Get Your Free Property Evaluation",
      ctaSubtext: "",
    }} />
  );
}
