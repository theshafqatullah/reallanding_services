import ServicePageLayout from "@/app/components/ServicePageLayout";
import type { Metadata } from "next";

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
    <ServicePageLayout data={{
      breadcrumb: "Video Marketing",
      badgeIcon: (<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" /></svg>),
      badgeText: "Creative & Production",
      title: `Sell Properties Faster With<br className="hidden md:block" /> Professional Real Estate Video`,
      description: `Cinematic property tours, drone footage, agent branding videos, and social media reels that captivate buyers, build your brand, and help listings sell faster.`,
      primaryCTA: "Start Your Video Project",
      secondaryCTA: "See Our Showreel",
      trustLine: "500+ videos produced for real estate professionals",
      trustBar: ["Cinema-Grade Equipment", "FAA-Licensed Drone Pilots", "3–5 Day Turnaround", "Multi-Platform Delivery"],
      stats,
      services,
      servicesHeading: "Our Services",
      servicesSubheading: `Video Content That Sells Real Estate`,
      servicesDescription: `From luxury property tours to quick social reels, every video is crafted to captivate buyers and build your personal brand.`,
      results,
      resultsHeading: "Proven Results",
      resultsSubheading: `Video Performance That Speaks Volumes`,
      resultsDescription: `The numbers don't lie — video is the most powerful medium for selling real estate and building agent brands.`,
      benefits,
      benefitsHeading: "Why Video Marketing",
      benefitsSubheading: `The Most Powerful Medium for Selling Real Estate`,
      benefitsDescription: `Video lets buyers experience a property before they visit, builds emotional connection, and gives agents a competitive edge that photos and text simply can't match.`,
      testimonials,
      steps,
      processHeading: "Our Process",
      processSubheading: `From Concept to Distribution in Five Steps`,
      processDescription: `A streamlined production process that delivers stunning video content on time, every time — without disrupting your schedule.`,
      faqs,
      faqHeading: `Common Questions About Video Marketing`,
      relatedServices,
      relatedHeading: "Related Services",
      relatedSubheading: `Amplify Your Video Results`,
      ctaHeading: `Ready to Bring Your Listings to Life With Video?`,
      ctaDescription: `Book a free consultation and discover how professional video content can help you sell faster, attract more buyers, and build a standout real estate brand.`,
      ctaCTA: "Schedule Your Free Consultation",
      ctaSubtext: "Includes a free creative brief and production estimate",
    }} />
  );
}
