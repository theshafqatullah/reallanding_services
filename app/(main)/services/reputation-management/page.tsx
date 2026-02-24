import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

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
  { value: (<>4.8<svg className="inline-block w-5 h-5 text-yellow-400 ml-0.5 -mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg></>), label: "Average Client Rating" },
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
  { metric: (<>4.8<svg className="inline-block w-5 h-5 text-yellow-400 ml-0.5 -mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg></>), label: "Average client star rating", period: "Across all managed profiles" },
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
    <div className="min-h-screen bg-white">
      <Header />
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        key="structured-data"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-700 to-green-900 pt-32 pb-28">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-green-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-green-400/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex justify-center mb-6 text-green-200 text-sm">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/#services" className="hover:text-white transition">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Reputation Management</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/20">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0l-4.725 2.885a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
            Reputation Management
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Protect &amp; Amplify Your<br className="hidden md:block" /> Real Estate Reputation</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-10 leading-relaxed">Review generation, monitoring, negative review resolution, and social proof marketing — so prospects trust you before they ever pick up the phone.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Get Your Free Reputation Audit</Link>
            <Link href="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">See Client Results</Link>
          </div>
          <p className="mt-6 text-green-200/70 text-sm">500+ agents and teams trust us to protect their online reputation</p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
          {["50+ Platforms Monitored", "Same-Day Response", "100% Guideline Compliant", "Monthly Performance Reports"].map((item, i) => (
            <span key={i} className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> {item}</span>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Complete Reputation Management Suite</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">From generating five-star reviews to neutralizing negative ones, we manage every facet of your online reputation so you can focus on closing deals.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-green-200 hover:shadow-lg hover:shadow-green-100/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-5 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed text-[15px]">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results Showcase */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Proven Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Reputation Performance Metrics</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Real results from real estate professionals who trust us to protect and grow their online reputation.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((r, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <div className="text-4xl font-bold text-green-400 mb-2">{r.metric}</div>
                <div className="text-white font-medium mb-1">{r.label}</div>
                <div className="text-gray-500 text-sm">{r.period}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Your Reputation Is Your Most Valuable Asset</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">In real estate, trust is everything. We ensure your online presence reflects the quality of service you actually deliver.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-green-50/50 border border-green-100 rounded-2xl p-6 hover:bg-green-50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="font-bold text-gray-900">{b.title}</h3>
                </div>
                <p className="text-gray-500 text-[15px] leading-relaxed pl-11">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 border-y border-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">What Agents &amp; Teams Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
                <svg className="absolute top-6 right-8 w-12 h-12 text-green-100" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" /></svg>
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <svg key={j} className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}</div>
                <p className="text-gray-600 leading-relaxed mb-6 relative z-10">&ldquo;{t.quote}&rdquo;</p>
                <div><div className="font-bold text-gray-900">{t.author}</div><div className="text-green-600 text-sm">{t.role}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">From Vulnerability to Five-Star Dominance in Five Steps</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A systematic approach to building, protecting, and amplifying the online reputation that drives your real estate business.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-green-200 via-emerald-400 to-green-200" />
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center relative">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4 relative z-10 shadow-lg shadow-green-200">{s.step}</div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 border-y border-gray-100 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Common Questions About Reputation Management</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-100 hover:border-green-200 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-900 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 -mt-2"><p className="text-gray-500 leading-relaxed">{faq.answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Related Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Strengthen Your Brand Presence</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((rs, i) => (
              <Link key={i} href={rs.href} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-green-200 hover:shadow-lg hover:shadow-green-50 transition-all block">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">{rs.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-4">{rs.description}</p>
                <span className="text-green-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-700 to-green-900 py-24">
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-green-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-green-400/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Own Your Online Reputation?</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed">Book a free reputation audit. We&apos;ll analyze your current online presence, identify vulnerabilities, and map out a plan to build a 5-star reputation that wins listings and converts leads.</p>
          <Link href="/contact" className="inline-block bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Get Your Free Reputation Audit</Link>
          <p className="mt-6 text-green-200/60 text-sm">Includes a full review analysis across Google, Zillow, and Realtor.com</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
