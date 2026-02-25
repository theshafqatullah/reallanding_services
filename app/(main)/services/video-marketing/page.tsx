import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { AnimatedSections } from "@/app/components/AnimateOnScroll";
import FAQAccordion from "@/app/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Video Marketing for Real Estate | RealLanding",
  description:
    "Cinematic property tours, drone footage, agent branding videos, social media reels, and testimonial films that sell homes faster and build your real estate brand.",
  openGraph: {
    title: "Video Marketing for Real Estate | RealLanding",
    description:
      "Cinematic property tours, drone footage, agent branding videos, social media reels, and testimonial films that sell homes faster and build your real estate brand.",
    url: "https://reallanding.com/services/video-marketing",
    type: "article",
    images: [
      {
        url: "https://reallanding.com/og-video-marketing.jpg",
        width: 1200,
        height: 630,
        alt: "Video Marketing for Real Estate | RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Marketing for Real Estate | RealLanding",
    description:
      "Cinematic property tours, drone footage, agent branding videos, social media reels, and testimonial films that sell homes faster and build your real estate brand.",
    images: ["https://reallanding.com/og-video-marketing.jpg"],
    site: "@RealLandingHQ",
  },
};


// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Video Marketing",
  "provider": {
    "@type": "Organization",
    "name": "RealLanding",
    "url": "https://reallanding.com",
    "logo": "https://reallanding.com/logo.png"
  },
  "areaServed": "United States",
  "description": "Cinematic property tours, drone footage, agent branding videos, social media reels, and testimonial films that sell homes faster and build your real estate brand.",
  "url": "https://reallanding.com/services/video-marketing",
  "category": "Real Estate Marketing"
};


const stats = [
  { value: "403%", label: "More Inquiries on Listings With Video" },
  { value: "80%", label: "Of Buyers Watch Property Videos Online" },
  { value: "2×", label: "Faster Sales for Video-Listed Properties" },
  { value: "95%", label: "Video Message Retention vs 10% Text" },
];

const services = [
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" /></svg>), title: "Cinematic Property Tours", description: "Professional walkthrough videos that showcase every room, feature, and selling point with cinematic color grading, smooth stabilization, and compelling narration — giving buyers a true sense of the home." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>), title: "Drone & Aerial Footage", description: "Stunning aerial perspectives that highlight property scale, lot size, surroundings, neighborhoods, and proximity to key landmarks. FAA-licensed pilots with cinema-grade equipment for breathtaking results." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" /></svg>), title: "Agent Branding Films", description: "Professional introduction and brand story videos that build trust, showcase your personality, highlight your track record, and position you as the go-to agent before a prospect ever picks up the phone." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>), title: "Social Media Reels & Shorts", description: "Scroll-stopping vertical videos optimized for Instagram Reels, TikTok, and YouTube Shorts — from quick property teasers to market updates and behind-the-scenes content that drives viral engagement." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" /></svg>), title: "Neighborhood Spotlight Videos", description: "Engaging area tours highlighting local restaurants, schools, parks, nightlife, and lifestyle — attracting buyers who search by neighborhood and building your hyperlocal authority." },
  { icon: (<svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>), title: "Testimonial & Success Stories", description: "Authentic client testimonial videos that build powerful social proof. We handle the entire production — scripting, coaching, filming, and editing — so your clients look and sound amazing." },
];

const steps = [
  { step: 1, title: "Concept & Strategy", description: "We define the video's purpose, target audience, key messages, distribution plan, and creative direction — tailored to your brand and specific goals." },
  { step: 2, title: "Pre-Production", description: "Shot lists, location scouting, scheduling, scripting, talent prep, and equipment planning are finalized so every shoot day runs smoothly and efficiently." },
  { step: 3, title: "Professional Shoot", description: "Our crew captures cinematic footage using cinema-grade cameras, gimbals, drones, professional lighting, and wireless microphones — all on location." },
  { step: 4, title: "Post-Production", description: "Raw footage is transformed into polished, branded videos with color grading, licensed music, motion graphics, captions, and platform-specific formatting." },
  { step: 5, title: "Deliver & Distribute", description: "Final videos are optimized and delivered for your website, MLS, YouTube, Instagram, TikTok, email campaigns, and paid ad platforms — ready to publish." },
];

const benefits = [
  { title: "Higher Engagement Everywhere", desc: "Video content gets 1200% more shares than text and images combined — it's the most engaging format across every platform." },
  { title: "Sell Properties Faster", desc: "Listings with video receive 403% more inquiries. Buyers feel connected to the property before visiting, shortening the sales cycle." },
  { title: "Build Trust Before Meeting", desc: "Agent branding videos let prospects see your personality, expertise, and passion — creating rapport and trust before the first conversation." },
  { title: "Dominate Social Algorithms", desc: "Every major platform prioritizes video content. Reels, Shorts, and TikToks get significantly more organic reach than static posts." },
  { title: "Multi-Platform Content Library", desc: "Every shoot produces content for 6+ platforms — website, MLS, YouTube, Instagram, TikTok, Facebook, and email marketing." },
  { title: "Stand Out from Competition", desc: "While most agents rely on photos alone, professional video gives you a massive competitive edge that buyers and sellers notice." },
];

const results = [
  { metric: "403%", label: "More listing inquiries", period: "With video vs without" },
  { metric: "87%", label: "Of our agent videos shared", period: "By clients on social media" },
  { metric: "3.5×", label: "Faster property sales", period: "For video-marketed listings" },
  { metric: "250K+", label: "Combined reel views", period: "Across managed accounts" },
];

const testimonials = [
  { quote: "The property tour videos RealLanding produces are absolutely stunning. My last luxury listing sold in 6 days — the buyer's agent told me the video was what made their client fall in love with the property.", author: "Rebecca H.", role: "Luxury Agent, Beverly Hills CA" },
  { quote: "My agent branding video has been the single best marketing investment I've made. It's on my website, social profiles, and email signature — and prospects constantly tell me they felt like they already knew me.", author: "Chris D.", role: "Real Estate Agent, Nashville TN" },
];

const faqs = [
  { question: "What is the typical turnaround time for a video?", answer: "Most property tour videos are delivered within 3–5 business days after the shoot. Agent branding films and multi-location shoots may take 7–10 days. Rush delivery within 24–48 hours is available for time-sensitive listings at an additional fee." },
  { question: "What equipment do you use?", answer: "We use cinema-grade cameras (Sony FX series, RED), motorized gimbals (DJI RS4), professional lighting kits, wireless lavalier microphones, and FAA-licensed DJI Inspire/Mavic 3 Pro drones for aerial footage. Every shoot is handled by experienced real estate videographers." },
  { question: "Do I need to appear on camera?", answer: "Entirely up to you. Agent branding and testimonial videos work best with you on camera, but property tours and aerial footage don't require it. If you choose to appear, we guide you through the process — most agents find it much easier than expected." },
  { question: "Which platforms will the videos work on?", answer: "We deliver videos optimized for every major platform — your website, MLS listings, YouTube, Instagram Reels, TikTok, Facebook, LinkedIn, and email. Each video is exported in the correct format, aspect ratio, and compression for maximum quality and impact." },
  { question: "How is video marketing priced?", answer: "Pricing depends on the video type, location, duration, and complexity. Single property tours start at $500, agent branding films from $2,000, and monthly retainer packages for ongoing content. Contact us for a custom quote tailored to your needs." },
  { question: "Can you handle ongoing video content each month?", answer: "Absolutely — that's where we excel. Our monthly retainer packages include a set number of shoots, edits, and social media cuts per month so you always have fresh video content. Most successful agents work with us on an ongoing basis." },
];

const relatedServices = [
  { title: "Social Media Marketing", href: "/services/social-media-marketing", description: "Maximize your video's reach by distributing it across all social platforms with a strategic organic growth plan and content calendar." },
  { title: "Content Marketing", href: "/services/content-marketing", description: "Complement your video strategy with SEO blog posts, market reports, and written content that drives organic traffic alongside your videos." },
  { title: "Paid Advertising", href: "/services/paid-advertising", description: "Amplify your best-performing videos with targeted ad campaigns on Facebook, Instagram, YouTube, and TikTok for maximum reach." },
];

export default function VideoMarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        key="structured-data"
      />


      <AnimatedSections>
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
            <span className="text-white font-medium">Video Marketing</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/20">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" /></svg>
            Creative &amp; Production
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Sell Properties Faster With<br className="hidden md:block" /> Professional Real Estate Video</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-10 leading-relaxed">Cinematic property tours, drone footage, agent branding videos, and social media reels that captivate buyers, build your brand, and help listings sell faster.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Start Your Video Project</Link>
            <Link href="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">See Our Showreel</Link>
          </div>
          <p className="mt-6 text-green-200/70 text-sm">500+ videos produced for real estate professionals</p>
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
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> Cinema-Grade Equipment</span>
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> FAA-Licensed Drone Pilots</span>
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> 3–5 Day Turnaround</span>
          <span className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> Multi-Platform Delivery</span>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">Video Content That Sells Real Estate</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">From luxury property tours to quick social reels, every video is crafted to captivate buyers and build your personal brand.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Video Performance That Speaks Volumes</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The numbers don&apos;t lie — video is the most powerful medium for selling real estate and building agent brands.</p>
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
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Why Video Marketing</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">The Most Powerful Medium for Selling Real Estate</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Video lets buyers experience a property before they visit, builds emotional connection, and gives agents a competitive edge that photos and text simply can&apos;t match.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">From Concept to Distribution in Five Steps</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A streamlined production process that delivers stunning video content on time, every time — without disrupting your schedule.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Common Questions About Video Marketing</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Related Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Amplify Your Video Results</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Bring Your Listings to Life With Video?</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed">Book a free consultation and discover how professional video content can help you sell faster, attract more buyers, and build a standout real estate brand.</p>
          <Link href="/contact" className="inline-block bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5">Schedule Your Free Consultation</Link>
          <p className="mt-6 text-green-200/60 text-sm">Includes a free creative brief and production estimate</p>
        </div>
      </section>

      </AnimatedSections>
      <Footer />
    </div>
  );
}
