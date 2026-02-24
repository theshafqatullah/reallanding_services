import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Pricing | RealLanding — Real Estate Marketing Packages",
  description:
    "Transparent pricing for real estate marketing, automation & AI services. Choose a package or build a custom plan tailored to your business.",
  openGraph: {
    title: "Pricing | RealLanding — Real Estate Marketing Packages",
    description:
      "Transparent pricing for real estate marketing, automation & AI services. Choose a package or build a custom plan tailored to your business.",
    url: "https://reallanding.com/pricing",
    type: "website",
    images: [
      {
        url: "https://reallanding.com/og-pricing.jpg",
        width: 1200,
        height: 630,
        alt: "RealLanding Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | RealLanding — Real Estate Marketing Packages",
    description:
      "Transparent pricing for real estate marketing, automation & AI services. Choose a package or build a custom plan tailored to your business.",
    images: ["https://reallanding.com/og-pricing.jpg"],
    site: "@RealLandingHQ",
  },
};

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Pricing | RealLanding",
  url: "https://reallanding.com/pricing",
  description:
    "Transparent pricing for real estate marketing, automation & AI services. Choose a package or build a custom plan tailored to your business.",
  publisher: {
    "@type": "Organization",
    name: "RealLanding",
    url: "https://reallanding.com",
    logo: "https://reallanding.com/logo.png",
  },
};

const plans = [
  {
    name: "Starter",
    desc: "Perfect for solo agents ready to establish their digital presence.",
    price: "$1,997",
    period: "/month",
    highlight: false,
    features: [
      "Social Media Management (2 platforms)",
      "Basic SEO Setup & Monthly Optimization",
      "Google Business Profile Optimization",
      "Monthly Performance Report",
      "Email Newsletter Setup (2x/month)",
      "Dedicated Account Manager",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    desc: "For brokerages and agents looking to scale lead generation aggressively.",
    price: "$4,997",
    period: "/month",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Starter, plus:",
      "Social Media Management (4 platforms)",
      "Paid Advertising (Facebook + Google)",
      "AI Chatbot & WhatsApp Automation",
      "Lead Generation Funnels",
      "CRM Setup & Integration",
      "Content Marketing (4 blogs/month)",
      "Video Editing (4 reels/month)",
      "Weekly Performance Reports",
      "Priority Support",
    ],
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    desc: "Full-service solution for developers, teams, and high-volume operations.",
    price: "Custom",
    period: "",
    highlight: false,
    features: [
      "Everything in Growth, plus:",
      "Full 18-Service Access",
      "Custom AI Voice Agent",
      "Sales Funnel Automation",
      "Reputation Management",
      "Strategic Growth Planning",
      "Investor / Launch Campaigns",
      "Dedicated Creative Team",
      "Real-Time Analytics Dashboard",
      "Quarterly Strategy Reviews",
    ],
    cta: "Contact Sales",
  },
];

const addOns = [
  { name: "Video Marketing Package", price: "$997/mo", desc: "Property tours, drone footage, and monthly reels" },
  { name: "Branding & Identity", price: "$2,500", desc: "Logo, brand guidelines, and market positioning (one-time)" },
  { name: "Website Design & Dev", price: "From $3,500", desc: "Custom listing site or lead capture landing pages" },
  { name: "Conversion Rate Optimization", price: "$1,497/mo", desc: "A/B testing, heatmaps, and funnel optimization" },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
        key="structured-data"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 to-green-800 pt-10 pb-24 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur-sm">
              Pricing
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              No hidden fees. No long-term contracts. Choose the plan that fits your
              business and scale as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative -mt-12 z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 ${
                plan.highlight
                  ? "border-green-200 bg-white ring-2 ring-green-600"
                  : "border-zinc-100 bg-white"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-600 px-4 py-1 text-xs font-semibold text-white">
                  {plan.badge}
                </span>
              )}
              <h3 className="text-lg font-bold text-zinc-900">{plan.name}</h3>
              <p className="mt-2 text-sm text-zinc-500">{plan.desc}</p>
              <div className="mt-6">
                <span className="text-4xl font-bold text-zinc-900">{plan.price}</span>
                <span className="text-sm text-zinc-400">{plan.period}</span>
              </div>
              <Link
                href="/contact"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "border border-zinc-200 text-zinc-700 hover:border-green-200 hover:text-green-600"
                }`}
              >
                {plan.cta}
              </Link>
              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-sm text-zinc-600">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-green-600">Add-Ons</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900">
            Enhance your package
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-500">
            Add specialized services to any plan for even more growth.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {addOns.map((addon) => (
            <div key={addon.name} className="flex items-start gap-5 rounded-2xl border border-zinc-100 bg-white p-6 transition hover:border-green-100">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-green-50">
                <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-sm font-semibold text-zinc-900">{addon.name}</h3>
                  <span className="text-sm font-medium text-green-600">{addon.price}</span>
                </div>
                <p className="mt-1 text-sm text-zinc-500">{addon.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-zinc-100 bg-zinc-50 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-900">
            Pricing FAQ
          </h2>
          <div className="mt-14 space-y-6">
            {[
              { q: "Are there any setup fees?", a: "No setup fees for Starter and Growth plans. Enterprise plans may include a one-time onboarding fee depending on scope." },
              { q: "Can I change plans later?", a: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle." },
              { q: "Is there a minimum contract?", a: "No long-term contracts. All plans are month-to-month with 30 days notice to cancel. We believe in earning your business every month." },
              { q: "What's included in the free strategy call?", a: "A 30-minute consultation where we audit your current marketing, identify gaps, and recommend a custom growth plan — no obligation." },
              { q: "Do you offer custom packages?", a: "Yes! If our standard plans don't fit, we'll build a custom package tailored to your specific goals and budget." },
            ].map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-zinc-100 bg-white p-6">
                <h3 className="text-sm font-semibold text-zinc-900">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white">
            Not sure which plan is right for you?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Book a free strategy call and we&apos;ll recommend the perfect package for your business.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-green-700 transition hover:bg-white/90"
          >
            Book Free Strategy Call
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
