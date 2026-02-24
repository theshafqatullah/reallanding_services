import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Careers | RealLanding — Join Our Team",
  description:
    "Join the RealLanding team and help real estate professionals grow their businesses with cutting-edge marketing, automation & AI.",
  openGraph: {
    title: "Careers | RealLanding — Join Our Team",
    description:
      "Join the RealLanding team and help real estate professionals grow their businesses with cutting-edge marketing, automation & AI.",
    url: "https://reallanding.com/careers",
    type: "website",
    images: [
      {
        url: "https://reallanding.com/og-careers.jpg",
        width: 1200,
        height: 630,
        alt: "Careers at RealLanding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | RealLanding — Join Our Team",
    description:
      "Join the RealLanding team and help real estate professionals grow their businesses with cutting-edge marketing, automation & AI.",
    images: ["https://reallanding.com/og-careers.jpg"],
    site: "@RealLandingHQ",
  },
};

const careersJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Careers at RealLanding",
  url: "https://reallanding.com/careers",
  description:
    "Join the RealLanding team and help real estate professionals grow their businesses with cutting-edge marketing, automation & AI.",
  publisher: {
    "@type": "Organization",
    name: "RealLanding",
    url: "https://reallanding.com",
    logo: "https://reallanding.com/logo.png",
  },
};

const perks = [
  { icon: "🏠", title: "Remote-First", desc: "Work from anywhere. We're a fully distributed team across multiple time zones." },
  { icon: "📈", title: "Growth Culture", desc: "Continuous learning budget, mentorship, and clear career advancement paths." },
  { icon: "💰", title: "Competitive Pay", desc: "Above-market compensation with performance bonuses and equity options." },
  { icon: "🏥", title: "Health & Wellness", desc: "Comprehensive health insurance, mental health support, and gym stipend." },
  { icon: "🌴", title: "Unlimited PTO", desc: "Take the time you need. We trust you to manage your schedule responsibly." },
  { icon: "🛠️", title: "Best Tools", desc: "Latest hardware and software — we invest in the tools you need to do your best work." },
];

const openings = [
  {
    title: "Senior Performance Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-Time",
    desc: "Lead and optimize paid advertising campaigns across Facebook, Google, and TikTok for real estate clients.",
  },
  {
    title: "SEO Strategist",
    department: "Marketing",
    location: "Remote",
    type: "Full-Time",
    desc: "Develop and execute SEO strategies that drive organic growth for real estate professionals.",
  },
  {
    title: "AI/ML Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-Time",
    desc: "Build and improve our AI chatbot, voice agent, and lead qualification systems.",
  },
  {
    title: "Full-Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-Time",
    desc: "Build high-converting landing pages, client dashboards, and internal tools using Next.js and TypeScript.",
  },
  {
    title: "Content Writer — Real Estate",
    department: "Content",
    location: "Remote",
    type: "Full-Time",
    desc: "Create SEO-optimized blogs, email campaigns, and marketing copy for real estate audiences.",
  },
  {
    title: "Client Success Manager",
    department: "Operations",
    location: "Remote",
    type: "Full-Time",
    desc: "Own the client relationship, ensure campaign performance, and drive retention and upsells.",
  },
];

const departmentColors: Record<string, string> = {
  Marketing: "bg-blue-50 text-blue-700",
  Engineering: "bg-purple-50 text-purple-700",
  Content: "bg-amber-50 text-amber-700",
  Operations: "bg-emerald-50 text-emerald-700",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careersJsonLd) }}
        key="structured-data"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 to-green-800 pt-10 pb-24 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur-sm">
              Careers
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Build the Future of<br />Real Estate Marketing
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Join a fast-growing team that&apos;s transforming how real estate
              professionals market, sell, and scale with AI and automation.
            </p>
            <a
              href="#openings"
              className="mt-10 inline-block rounded-full bg-white px-7 py-3 text-sm font-semibold text-green-700 transition hover:bg-white/90"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-green-600">Why RealLanding?</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900">
            Perks &amp; benefits
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((p) => (
            <div key={p.title} className="rounded-2xl border border-zinc-100 bg-white p-6 transition hover:border-green-100">
              <div className="text-2xl">{p.icon}</div>
              <h3 className="mt-4 text-base font-semibold text-zinc-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="scroll-mt-24 border-t border-zinc-100 bg-zinc-50 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-green-600">Open Positions</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900">
              Current openings
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-zinc-500">
              Don&apos;t see a role that fits? Send us your resume — we&apos;re always looking for talented people.
            </p>
          </div>
          <div className="mt-14 space-y-4">
            {openings.map((job) => (
              <div key={job.title} className="group rounded-2xl border border-zinc-100 bg-white p-6 transition hover:border-green-100">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900 group-hover:text-green-600 transition">{job.title}</h3>
                    <p className="mt-1 text-sm text-zinc-500">{job.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${departmentColors[job.department] || "bg-zinc-50 text-zinc-600"}`}>
                        {job.department}
                      </span>
                      <span className="rounded-full bg-zinc-50 px-2.5 py-0.5 text-[11px] font-medium text-zinc-600">
                        {job.location}
                      </span>
                      <span className="rounded-full bg-zinc-50 px-2.5 py-0.5 text-[11px] font-medium text-zinc-600">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="flex-shrink-0 rounded-full border border-zinc-200 px-5 py-2 text-sm font-medium text-zinc-700 transition hover:border-green-200 hover:text-green-600"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white">
            Don&apos;t see the right role?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            We&apos;re always looking for exceptional talent. Send us your resume and we&apos;ll keep you in mind.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-green-700 transition hover:bg-white/90"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
