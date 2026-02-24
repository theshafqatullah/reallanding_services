import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "About Us | RealLanding — Real Estate Marketing Agency",
  description:
    "Learn about RealLanding — the all-in-one marketing, automation & AI agency built exclusively for real estate professionals.",
};

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "18+", label: "Specialized Services" },
  { value: "12M+", label: "Leads Generated" },
  { value: "98%", label: "Client Retention" },
];

const values = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z" />
      </svg>
    ),
    title: "Real Estate Obsessed",
    desc: "We don't do generic marketing. Every strategy, funnel, and system is built from the ground up for real estate professionals.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: "Results Over Vanity",
    desc: "We measure success in leads, closings, and ROI — not likes. Every campaign ties directly to your bottom line.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "Innovation First",
    desc: "From AI chatbots to predictive analytics, we embrace cutting-edge technology to keep our clients ahead of the competition.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Partnership Mentality",
    desc: "We don't just serve clients — we become an extension of your team, fully invested in your growth and success.",
  },
];

const team = [
  {
    name: "Sarah Mitchell",
    role: "Founder & CEO",
    bio: "15+ years in real estate marketing. Built RealLanding to bridge the gap between tech innovation and property sales.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&q=80",
  },
  {
    name: "James Carter",
    role: "Head of Marketing",
    bio: "Former Google Ads strategist. Managed $50M+ in ad spend for real estate clients globally.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80",
  },
  {
    name: "Priya Sharma",
    role: "Head of AI & Automation",
    bio: "AI engineer who built chatbot systems processing 100K+ conversations monthly for real estate brands.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&q=80",
  },
  {
    name: "David Chen",
    role: "Creative Director",
    bio: "Award-winning creative who has designed brand identities for 200+ real estate companies.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&q=80",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 to-green-800 pt-10 pb-24 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur-sm">
              About RealLanding
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Built for Real Estate.<br />Powered by Results.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              We&apos;re the marketing, automation &amp; AI agency that helps real estate
              professionals generate more leads, close more deals, and scale faster.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-12 z-10 mx-auto max-w-4xl px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white p-6 text-center border border-zinc-100">
              <div className="text-3xl font-bold text-green-600">{stat.value}</div>
              <div className="mt-1 text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-green-600">Our Story</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              From frustration to innovation
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-zinc-500">
              <p>
                RealLanding was born from a simple observation: real estate professionals
                were wasting thousands on generic marketing agencies that didn&apos;t understand
                their industry.
              </p>
              <p>
                Our founder, having spent over a decade in real estate marketing, saw the
                same problems everywhere — cookie-cutter campaigns, vanity metrics, and
                zero accountability for actual closings.
              </p>
              <p>
                So we built something different. An agency that speaks fluent real estate,
                combines cutting-edge AI with proven marketing strategies, and measures
                success the only way that matters — by the deals you close.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&q=80"
                alt="RealLanding team working together"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-green-600 p-6 text-white">
              <div className="text-3xl font-bold">Since 2019</div>
              <div className="text-sm text-white/80">Serving real estate pros</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-zinc-100 bg-zinc-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-green-600">Our Values</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900">
              What drives everything we do
            </h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-zinc-100 bg-white p-8 transition-all hover:border-green-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  {v.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-zinc-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-green-600">Our Team</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900">
            The people behind your growth
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-500">
            A team of real estate marketing experts, technologists, and creatives dedicated to your success.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="group text-center">
              <div className="mx-auto h-40 w-40 overflow-hidden rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 text-base font-semibold text-zinc-900">{member.name}</h3>
              <p className="text-sm font-medium text-green-600">{member.role}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-zinc-500">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to grow your real estate business?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Book a free strategy call and discover how RealLanding can transform your marketing.
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
