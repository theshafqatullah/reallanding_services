import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "SEO for Real Estate | RealLanding",
  description:
    "Dominate local and organic search results with real estate SEO strategies that drive qualified buyer and seller traffic to your website — month after month.",
  openGraph: {
    title: "SEO for Real Estate | RealLanding",
    description:
      "Dominate local and organic search results with real estate SEO strategies that drive qualified buyer and seller traffic to your website — month after month.",
    url: "https://reallanding.com/services/seo",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-seo.jpg",
        width: 1200,
        height: 630,
        alt: "SEO for Real Estate | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO for Real Estate | RealLanding",
    description:
      "Dominate local and organic search results with real estate SEO strategies that drive qualified buyer and seller traffic to your website — month after month.",
    images: ["https://reallanding.com/og-seo.jpg"],
    site: "@RealLandingHQ",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "SEO",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "Dominate local and organic search results with real estate SEO strategies that drive qualified buyer and seller traffic to your website — month after month.",
  "url": "https://reallanding.com/services/seo",
  "category": "Real Estate Marketing"
};

const stats = [
  { value: "93%", label: "Online Experiences Begin with Search" },
  { value: "75%", label: "Of Clicks Go to Page-One Results" },
  { value: "14.6%", label: "SEO Lead Close Rate vs 1.7% Outbound" },
  { value: "5.3×", label: "Average ROI on SEO Investment" },
];

const services = [
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>), title: "Local SEO & Google Business Profile", description: "Dominate the local map pack and 'near me' searches so buyers and sellers in your area find you first. We optimize your GBP listing, manage reviews, build local citations, and ensure consistent NAP data across 60+ directories." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>), title: "On-Page Optimization", description: "Every page on your site is meticulously optimized — from title tags and meta descriptions to header hierarchy, internal linking structure, image alt text, and schema markup for rich search results." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>), title: "Technical SEO & Core Web Vitals", description: "We audit and fix site speed issues, eliminate crawl errors, implement structured data, optimize for mobile-first indexing, and ensure your site architecture helps search engines discover every property page." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487z" /></svg>), title: "Content & Blog Strategy", description: "Data-driven neighborhood guides, monthly market reports, homebuyer resources, and long-form authority content that attracts organic traffic and positions you as the local expert buyers and sellers trust." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>), title: "Link Building & Digital PR", description: "White-hat backlink acquisition from real estate directories, local media outlets, industry publications, and community organizations that boost your domain authority and drive referral traffic." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>), title: "Keyword Research & Mapping", description: "Deep analysis of search intent — from 'homes for sale in [city]' to long-tail neighborhood queries and investor-focused terms — mapped strategically across your entire site architecture." },
];

const steps = [
  { step: 1, title: "Comprehensive SEO Audit", description: "We analyze your site's technical health, content gaps, backlink profile, and competitive positioning across 200+ ranking factors to create a prioritized roadmap." },
  { step: 2, title: "Keyword & Market Research", description: "We map high-value, intent-driven keywords to every page — targeting buyers, sellers, investors, and renters in your specific market areas with precision." },
  { step: 3, title: "On-Site & Technical Fixes", description: "We optimize your site structure, metadata, internal links, schema markup, and Core Web Vitals — making your site fast, crawlable, and search-engine friendly." },
  { step: 4, title: "Content Production & Link Building", description: "We produce SEO-driven blog posts, neighborhood pages, and resource guides while simultaneously acquiring authoritative backlinks to boost rankings." },
  { step: 5, title: "Monitor, Report & Refine", description: "Weekly rank tracking, monthly traffic & conversion reports, and quarterly strategy reviews ensure your SEO investment delivers compounding returns." },
];

const benefits = [
  { title: "Compounding Traffic", desc: "Unlike paid ads that stop when you stop spending, SEO traffic compounds over time — every month builds on the last." },
  { title: "Local Map Pack Dominance", desc: "Appear at the top of Google Maps results when buyers search for agents, brokerages, or properties in your area." },
  { title: "Higher Trust & Credibility", desc: "Organic search listings are trusted 5.66× more than paid ads — ranking well signals authority to prospects." },
  { title: "Lower Cost Per Lead", desc: "SEO delivers leads at 61% lower cost than outbound marketing, with a 14.6% close rate vs 1.7% for outbound." },
  { title: "Qualified, Intent-Driven Traffic", desc: "Every visitor found you by actively searching — these are motivated buyers and sellers ready to take action." },
  { title: "Competitive Moat", desc: "Strong SEO positions create a barrier that competitors can't easily replicate, giving you a durable market advantage." },
];

const results = [
  { metric: "312%", label: "Increase in organic traffic", period: "Within 8 months" },
  { metric: "48", label: "Keywords on page one of Google", period: "From zero previous rankings" },
  { metric: "$11", label: "Average cost per organic lead", period: "vs $47 from paid channels" },
  { metric: "2.4×", label: "More listing appointments booked", period: "Quarter over quarter growth" },
];

const testimonials = [
  { quote: "RealLanding's SEO strategy took us from invisible to page one for every major keyword in our market. We went from 200 monthly visitors to over 3,000 in under a year — and the leads just keep coming.", author: "Sarah M.", role: "Brokerage Owner, Austin TX" },
  { quote: "Within 6 months, we were ranking #1 for 'homes for sale in [our city]' and the map pack. Our organic leads now account for 40% of our total pipeline — at a fraction of what we spend on ads.", author: "David K.", role: "Team Lead, Miami FL" },
];

const faqs = [
  { question: "How long does it take to see SEO results?", answer: "Most real estate sites see measurable ranking improvements within 3–6 months, with significant traffic growth by month 6–12. SEO is a long-term investment that compounds — early gains accelerate over time as your domain authority grows." },
  { question: "What's the difference between local and national SEO?", answer: "Local SEO focuses on ranking in your specific market area — think 'realtor in [city]' and Google Map Pack results. National SEO targets broader terms. For most agents and brokerages, local SEO delivers the highest-quality leads because it captures people actively searching in your service area." },
  { question: "How much does real estate SEO cost?", answer: "Our SEO packages for real estate professionals typically range from $1,500–$5,000 per month depending on market size, competition, and scope. We'll recommend a plan that fits your goals and budget during your free consultation." },
  { question: "What's included in your SEO services?", answer: "Every engagement includes a technical audit, keyword research, on-page optimization, content strategy, link building, Google Business Profile management, monthly reporting, and a dedicated SEO strategist who knows real estate inside and out." },
  { question: "Do you guarantee first-page rankings?", answer: "No ethical SEO provider can guarantee specific rankings — Google's algorithm considers 200+ factors. What we guarantee is a proven, transparent process and consistent month-over-month growth in organic traffic and leads. Our track record speaks for itself." },
  { question: "Can SEO work alongside my paid advertising?", answer: "Absolutely — and it should. SEO and PPC are complementary. While paid ads deliver immediate results, SEO builds a long-term pipeline. Together, they dominate the search results page and give you multiple touchpoints with potential clients." },
];

const relatedServices = [
  { title: "Content Marketing", href: "/services/content-marketing", description: "Fuel your SEO strategy with high-quality blog posts, market reports, and neighborhood guides that rank and convert organic traffic into leads." },
  { title: "Website Design & Development", href: "/services/website-design-development", description: "Build a fast, mobile-optimized real estate website that provides the rock-solid technical foundation for strong search rankings." },
  { title: "Analytics & Performance", href: "/services/analytics-performance", description: "Track keyword rankings, organic traffic, and lead attribution to measure the true ROI of your SEO investment in real time." },
];

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

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
            <span className="text-white font-medium">SEO</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/20">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
            Search Engine Optimization for Real Estate
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Rank Higher, Get Found First &<br className="hidden md:block" /> Close More Real Estate Deals</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-10 leading-relaxed">Turn Google into your #1 lead source with proven SEO strategies built exclusively for real estate agents, brokerages, and property companies. Drive compounding organic traffic that reduces your cost per lead every month.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:shadow-green-900/30 hover:-translate-y-0.5">Get Your Free SEO Audit</Link>
            <Link href="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">See Our Results</Link>
          </div>
          <p className="mt-6 text-green-200/70 text-sm">Trusted by 200+ real estate professionals across the US</p>
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
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> Google Partner Certified</span>
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> Real Estate SEO Specialists</span>
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> Transparent Monthly Reporting</span>
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> No Long-Term Contracts</span>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Comprehensive Real Estate SEO Solutions</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Six core pillars of our SEO methodology — each one engineered for the unique challenges of ranking real estate websites in competitive local markets.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-green-200 hover:shadow-lg hover:shadow-green-100/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl flex items-center justify-center text-green-600 mb-5 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed text-[15px]">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results Showcase */}
      <section className="bg-gradient-to-br from-green-900 to-green-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Proven Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Real Results for Real Estate Professionals</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Here&apos;s what happens when you combine expert SEO strategy with deep real estate industry knowledge.</p>
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
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Why SEO</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">The Smartest Long-Term Investment for Real Estate Growth</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">SEO puts your brand in front of buyers and sellers at the exact moment they&apos;re searching — delivering compounding organic traffic that reduces your cost per lead month after month.</p>
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
      <section className="bg-green-50 border-y border-green-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
                <svg className="absolute top-6 right-8 w-12 h-12 text-green-100" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" /></svg>
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <svg key={j} className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}</div>
                <p className="text-gray-600 leading-relaxed mb-6 relative z-10">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-bold text-gray-900">{t.author}</div>
                  <div className="text-green-600 text-sm">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">From Audit to Rankings in Five Steps</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A proven, repeatable methodology that consistently delivers results for real estate businesses of every size.</p>
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

      {/* Comparison */}
      <section className="bg-gray-50 border-y border-gray-100 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">RealLanding SEO vs. Generic Agencies</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="font-bold text-gray-400 text-lg mb-6 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                Generic SEO Agency
              </h3>
              <ul className="space-y-3">
                {["Cookie-cutter strategies for all industries", "No understanding of real estate search intent", "Generic content that doesn't convert", "Vanity metrics without business impact", "Long-term contracts with hidden fees", "Outsourced work with no accountability"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-bold px-4 py-1 rounded-full">RECOMMENDED</div>
              <h3 className="font-bold text-green-700 text-lg mb-6 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                RealLanding SEO
              </h3>
              <ul className="space-y-3">
                {["Strategies built specifically for real estate", "Deep understanding of buyer & seller intent", "Conversion-focused content that generates leads", "Transparent ROI tracking & lead attribution", "Month-to-month flexibility, no lock-ins", "Dedicated strategist & in-house team"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Common Questions About Real Estate SEO</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-100 hover:border-green-200 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-900 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 -mt-2">
                  <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-green-50 border-t border-green-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Related Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Amplify Your SEO Results</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Own Page One in Your Market?</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed">Book a free SEO audit and discover exactly how much organic traffic and leads you&apos;re leaving on the table — and the step-by-step plan to capture them.</p>
          <Link href="/contact" className="inline-block bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Schedule Your Free SEO Audit</Link>
          <p className="mt-6 text-green-200/60 text-sm">No commitment required — get actionable insights in 30 minutes</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
