import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import NewsletterForm from "@/app/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Blog | RealLanding — Real Estate Marketing Insights",
  description:
    "Expert tips, strategies, and insights on real estate marketing, lead generation, AI automation, and more from the RealLanding team.",
};

const featuredPost = {
  title: "The Ultimate Guide to Real Estate Lead Generation in 2026",
  excerpt: "Everything you need to know about generating high-quality buyer, seller, and investor leads using modern digital marketing strategies.",
  category: "Lead Generation",
  date: "Feb 20, 2026",
  readTime: "12 min read",
  image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=500&fit=crop&q=80",
  author: { name: "Sarah Mitchell", role: "CEO", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80" },
};

const posts = [
  {
    title: "How AI Chatbots Are Revolutionizing Real Estate Sales",
    excerpt: "Discover how real estate companies are using AI chatbots to qualify leads 24/7 and book appointments automatically.",
    category: "AI & Tech",
    date: "Feb 15, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "10 Facebook Ad Strategies That Generate Buyer Leads",
    excerpt: "Proven ad frameworks, targeting strategies, and creative approaches that consistently deliver qualified buyer leads.",
    category: "Paid Ads",
    date: "Feb 10, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Local SEO for Real Estate: The Complete Playbook",
    excerpt: "How to dominate Google Maps and local search results in your target neighborhoods and cities.",
    category: "SEO",
    date: "Feb 5, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Building a Personal Brand as a Real Estate Agent",
    excerpt: "Step-by-step guide to establishing yourself as the go-to agent in your market through strategic personal branding.",
    category: "Branding",
    date: "Jan 28, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Email Marketing Sequences That Convert Leads to Clients",
    excerpt: "Copy-and-paste email templates and automation sequences for buyer, seller, and investor nurturing campaigns.",
    category: "Email Marketing",
    date: "Jan 22, 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Video Marketing: Creating Property Tours That Sell",
    excerpt: "Equipment, scripting, and editing tips for creating property videos that generate inquiries and accelerate sales.",
    category: "Video",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop&q=80",
  },
];

const categories = ["All", "Lead Generation", "SEO", "Paid Ads", "AI & Tech", "Branding", "Email Marketing", "Video", "Social Media"];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 to-green-800 pt-10 pb-24 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur-sm">
              Blog &amp; Insights
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Real Estate Marketing Insights
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Expert strategies, tips, and actionable guides to help you generate
              more leads and grow your real estate business.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium transition ${
                  i === 0
                    ? "bg-green-600 text-white"
                    : "border border-zinc-200 text-zinc-500 hover:border-green-200 hover:text-green-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              width={900}
              height={500}
              className="h-full w-full object-cover transition hover:scale-105"
            />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">{featuredPost.category}</span>
              <span className="text-xs text-zinc-400">{featuredPost.date}</span>
              <span className="text-xs text-zinc-400">{featuredPost.readTime}</span>
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              {featuredPost.title}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-zinc-500">{featuredPost.excerpt}</p>
            <div className="mt-6 flex items-center gap-3">
              <Image
                src={featuredPost.author.avatar}
                alt={featuredPost.author.name}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-medium text-zinc-900">{featuredPost.author.name}</div>
                <div className="text-xs text-zinc-400">{featuredPost.author.role}</div>
              </div>
            </div>
            <Link
              href="#"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700 transition"
            >
              Read Full Article
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="border-t border-zinc-100 bg-zinc-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Latest Articles</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.title} className="group overflow-hidden rounded-2xl border border-zinc-100 bg-white transition">
                <div className="aspect-[3/2] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-green-50 px-2.5 py-0.5 text-[11px] font-medium text-green-700">
                      {post.category}
                    </span>
                    <span className="text-[11px] text-zinc-400">{post.readTime}</span>
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-zinc-900 line-clamp-2 group-hover:text-green-600 transition">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500 line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4 text-[11px] text-zinc-400">{post.date}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white">
            Get weekly real estate marketing tips
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Join 5,000+ real estate professionals who receive our weekly insights.
          </p>
          <NewsletterForm source="blog" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
