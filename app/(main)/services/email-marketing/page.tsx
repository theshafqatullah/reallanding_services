import ServicePageLayout from "@/app/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Marketing for Real Estate | RealLanding",
  description:
    "Drip campaigns, newsletters, automated sequences, list segmentation, and email marketing strategies that nurture leads and keep you top of mind with clients.",
  openGraph: {
    title: "Email Marketing for Real Estate | RealLanding",
    description:
      "Drip campaigns, newsletters, automated sequences, list segmentation, and email marketing strategies that nurture leads and keep you top of mind with clients.",
    url: "https://reallanding.com/services/email-marketing",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-email-marketing.jpg",
        width: 1200,
        height: 630,
        alt: "Email Marketing for Real Estate | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Email Marketing for Real Estate | RealLanding",
    description:
      "Drip campaigns, newsletters, automated sequences, list segmentation, and email marketing strategies that nurture leads and keep you top of mind with clients.",
    images: ["https://reallanding.com/og-email-marketing.jpg"],
    site: "@RealLandingHQ",
  },
};


// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Email Marketing",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "Drip campaigns, newsletters, automated sequences, list segmentation, and email marketing strategies that nurture leads and keep you top of mind with clients.",
  "url": "https://reallanding.com/services/email-marketing",
  "category": "Real Estate Marketing"
};


const stats = [
  { value: "$42", label: "Average Return Per $1 Spent" },
  { value: "38%", label: "Average Open Rate We Achieve" },
  { value: "6.2%", label: "Click-Through Rate (Industry: 2.1%)" },
  { value: "24%", label: "Of Closings From Email Nurture" },
];

const services = [
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>), title: "Drip Campaign Design", description: "Multi-touch automated email sequences for buyer leads, seller leads, past clients, open house attendees, and sphere of influence — customized to your brand and market." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" /></svg>), title: "Monthly Newsletters", description: "Professionally designed newsletters with market updates, featured listings, local insights, and thought leadership content that keep you top of mind every month." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>), title: "List Segmentation & Targeting", description: "Segment your database by buyer/seller intent, price range, area, engagement level, and lifecycle stage for hyper-relevant messaging that converts." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>), title: "A/B Testing & Optimization", description: "Continuous testing of subject lines, send times, content formats, CTAs, and design to maximize open rates, clicks, and conversions over time." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>), title: "Listing & Open House Emails", description: "Beautiful listing announcement emails, just-listed/just-sold campaigns, open house invitations, and price reduction alerts that generate immediate interest." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" /></svg>), title: "Deliverability & Technical Setup", description: "Domain authentication (SPF, DKIM, DMARC), warm-up strategies, inbox placement monitoring, and list hygiene to ensure your emails reach the inbox." },
];

const steps = [
  { step: 1, title: "Audit & Strategy", description: "Review your current email presence, list quality, deliverability, and goals to build a comprehensive email marketing strategy." },
  { step: 2, title: "List Cleanup & Segmentation", description: "Clean your database, remove invalid addresses, deduplicate contacts, and create targeted segments for relevant messaging." },
  { step: 3, title: "Content & Design", description: "Create branded email templates, write compelling copy, and design automated sequences tailored to each audience segment." },
  { step: 4, title: "Launch & Automate", description: "Deploy campaigns, activate automations, and set up trigger-based emails that send the right message at the right time." },
  { step: 5, title: "Optimize & Report", description: "Monitor performance, run A/B tests, optimize content and timing, and deliver detailed monthly reports with actionable insights." },
];

const benefits = [
  { title: "Highest ROI Channel", desc: "Email marketing generates $42 for every $1 spent — making it the most cost-effective marketing channel available to real estate professionals." },
  { title: "Stay Top of Mind", desc: "Regular, valuable emails keep you in front of past clients and leads for months or years — so when they're ready to transact, you're the first call." },
  { title: "Nurture Cold Leads", desc: "Most real estate leads take 6–18 months to convert. Automated drip campaigns nurture them through the entire journey without manual effort." },
  { title: "Generate Repeat Business", desc: "Past client email sequences drive referrals and repeat transactions — the most profitable business any agent can get." },
  { title: "Scale Personal Touch", desc: "Automation lets you send personalized, timely messages to thousands of contacts while maintaining a one-to-one feel." },
  { title: "Own Your Audience", desc: "Unlike social media followers, your email list is an asset you own. Algorithm changes can't take away your direct line to clients." },
];

const results = [
  { metric: "$42", label: "Return per $1 spent", period: "Industry-leading ROI" },
  { metric: "38%", label: "Average open rate", period: "vs 21% industry average" },
  { metric: "24%", label: "Of client closings", period: "Attributed to email nurture" },
  { metric: "12K+", label: "Campaigns sent monthly", period: "For our managed clients" },
];

const testimonials = [
  { quote: "RealLanding's email drip campaigns have been a game-changer for our long-term lead nurture. We've had leads that went cold come back 8–12 months later and close because our emails kept us top of mind. Last year, 30% of our closings were from email-nurtured leads.", author: "Amanda T.", role: "Team Lead, Raleigh NC" },
  { quote: "The monthly market update newsletters alone are worth the investment. My clients constantly tell me how valuable the content is. It's driven a steady stream of referrals and repeat business that I never would have captured otherwise.", author: "Kevin L.", role: "Solo Agent, Sacramento CA" },
];

const faqs = [
  { question: "Which email platforms do you work with?", answer: "We work with all major email platforms including Mailchimp, ActiveCampaign, Follow Up Boss's built-in email, KvCORE, Constant Contact, ConvertKit, HubSpot, and Brevo. We can also recommend the best platform for your specific needs and budget." },
  { question: "How often should I email my list?", answer: "For most real estate professionals, 2–4 emails per month is the sweet spot. This includes one monthly newsletter, listing alerts as needed, and automated drip emails. We test frequencies to find what generates the best engagement for your specific audience." },
  { question: "Won't frequent emails annoy my contacts?", answer: "Not if the content is valuable and relevant. Our emails provide genuine value — market insights, useful tips, and relevant listings — not spam. Well-segmented, valuable emails actually strengthen your relationship with contacts. Unsubscribe rates are typically under 0.5%." },
  { question: "Can you write the email content for me?", answer: "Yes — that's one of our core services. Our real estate copywriters create all email content including drip sequences, newsletters, listing announcements, and special campaigns. Content is written in your brand voice and approved before sending." },
  { question: "How do I grow my email list?", answer: "We help with list growth strategies including lead magnets (home valuation tools, guides), website opt-in forms, open house sign-in capture, social media lead generation, and CRM integration to ensure every contact enters your email funnel." },
  { question: "How is email marketing priced?", answer: "Email marketing management starts at $800/month including strategy, content creation, design, automation setup, and monthly reporting. One-time email system setup (templates, automations, list cleanup) starts at $2,000. Pricing scales based on list size and campaign volume." },
];

const relatedServices = [
  { title: "CRM & Sales Automation", href: "/services/crm-sales-automation", description: "Integrate your email campaigns directly with your CRM for seamless lead nurture and sales automation." },
  { title: "Content Marketing", href: "/services/content-marketing", description: "Repurpose blog content and market reports into engaging email content that drives clicks and conversations." },
  { title: "Lead Generation", href: "/services/lead-generation", description: "Grow your email list with high-quality leads from multiple channels that enter your nurture sequences." },
];

export default function EmailMarketingPage() {
  return (
    <ServicePageLayout data={{
      breadcrumb: "Email Marketing",
      badgeIcon: (<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>),
      badgeText: "Email & Nurture",
      title: `Email Marketing That Nurtures<br className="hidden md:block" /> Leads &amp; Drives Closings`,
      description: `Automated drip campaigns, monthly newsletters, and targeted email sequences that keep you top of mind and turn cold leads into closed deals.`,
      primaryCTA: "Get Your Free Email Audit",
      secondaryCTA: "See Sample Campaigns",
      trustLine: "12,000+ email campaigns sent monthly for our clients",
      trustBar: ["SPF/DKIM/DMARC Compliant", "CAN-SPAM & GDPR Compliant", "All Major Platforms", "Deliverability Experts"],
      stats,
      services,
      servicesHeading: "Our Services",
      servicesSubheading: `Email Solutions for Real Estate Professionals`,
      servicesDescription: `From automated drip campaigns to beautifully designed newsletters, we handle every aspect of your email marketing strategy.`,
      results,
      resultsHeading: "Proven Results",
      resultsSubheading: `Email Performance That Delivers`,
      resultsDescription: `Our managed email campaigns consistently outperform industry averages by 2–3× on every metric.`,
      benefits,
      benefitsHeading: "Why Email Marketing",
      benefitsSubheading: `The Most Profitable Marketing Channel`,
      benefitsDescription: `Email delivers the highest ROI of any marketing channel and gives you direct access to your audience — no algorithms, no middlemen.`,
      testimonials,
      steps,
      processHeading: "Our Process",
      processSubheading: `From List to Loyal Clients`,
      processDescription: `A structured email marketing process that turns your contact list into a revenue-generating machine.`,
      faqs,
      faqHeading: `Common Questions About Email Marketing`,
      relatedServices,
      relatedHeading: "Related Services",
      relatedSubheading: `Amplify Your Email Strategy`,
      ctaHeading: `Ready to Turn Your Email List Into a Revenue Machine?`,
      ctaDescription: `Book a free email audit and discover how strategic email marketing can nurture your leads, drive referrals, and generate more closings.`,
      ctaCTA: "Get Your Free Email Audit",
      ctaSubtext: "Includes deliverability check and campaign strategy outline",
    }} />
  );
}
