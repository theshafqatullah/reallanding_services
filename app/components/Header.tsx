"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

/* ─── Navigation data ─── */

const serviceDropdowns = [
  {
    category: "Marketing & Growth",
    shortTitle: "Marketing",
    description: "Drive traffic, generate awareness & attract qualified buyers.",
    links: [
      { label: "Social Media Marketing", href: "/services/social-media-marketing", desc: "Content strategy, reels & agent branding" },
      { label: "Paid Advertising", href: "/services/paid-advertising", desc: "Facebook, Google, YouTube & TikTok ads" },
      { label: "SEO", href: "/services/seo", desc: "On-page, off-page, technical & local SEO" },
      { label: "Content Marketing", href: "/services/content-marketing", desc: "SEO blogs, area guides & investor content" },
      { label: "Video Marketing", href: "/services/video-marketing", desc: "Property tours, drone edits & reels" },
      { label: "Email Marketing", href: "/services/email-marketing", desc: "Drip campaigns & newsletter automation" },
    ],
  },
  {
    category: "Technology & Automation",
    shortTitle: "Technology",
    description: "Smart systems that capture, qualify & convert leads 24/7.",
    links: [
      { label: "Website Design & Dev", href: "/services/website-design-development", desc: "Listing sites & lead capture pages" },
      { label: "AI Automation System", href: "/services/ai-automation", desc: "Chatbot, WhatsApp bot & AI voice" },
      { label: "CRM & Sales Automation", href: "/services/crm-sales-automation", desc: "Pipelines, dashboards & follow-ups" },
      { label: "WhatsApp Marketing", href: "/services/whatsapp-marketing", desc: "Broadcasts, nurturing & CRM sync" },
    ],
  },
  {
    category: "Strategy & Optimization",
    shortTitle: "Strategy",
    description: "Data-driven systems to maximize every marketing dollar.",
    links: [
      { label: "Lead Generation System", href: "/services/lead-generation", desc: "Buyer, seller & investor funnels" },
      { label: "Conversion Optimization", href: "/services/conversion-rate-optimization", desc: "A/B testing & funnel improvement" },
      { label: "Sales Funnel Automation", href: "/services/sales-funnel-automation", desc: "Full-funnel design & retargeting" },
      { label: "Analytics & Performance", href: "/services/analytics-performance", desc: "KPI dashboards & ROI reporting" },
    ],
  },
  {
    category: "Branding & Reputation",
    shortTitle: "Branding",
    description: "Build authority, trust & a recognizable market presence.",
    links: [
      { label: "Branding & Positioning", href: "/services/branding-market-positioning", desc: "UVP, luxury positioning & identity" },
      { label: "Reputation Management", href: "/services/reputation-management", desc: "Reviews, monitoring & PR placements" },
      { label: "Strategic Growth Planning", href: "/services/strategic-growth-planning", desc: "90-day roadmaps & forecasting" },
      { label: "Investor & Launch Campaigns", href: "/services/investor-project-launch", desc: "Pre-launch buzz & event marketing" },
    ],
  },
];

const companyLinks = [
  { label: "About Us", href: "/about", desc: "Our story, mission & the team behind RealLanding" },
  { label: "Case Studies", href: "/case-studies", desc: "Case studies & performance data from real clients" },
  { label: "Blog", href: "/blog", desc: "Real estate marketing insights & strategies" },
  { label: "Pricing", href: "/pricing", desc: "Transparent plans for every business size" },
  { label: "Careers", href: "/careers", desc: "Join our team & shape the future of real estate marketing" },
];

/* ─── Icons ─── */

function ChevronDown({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function ArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

/* ─── Category icons for mega menu ─── */
const categoryIcons: Record<string, React.ReactNode> = {
  "Marketing & Growth": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
  "Technology & Automation": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  ),
  "Strategy & Optimization": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
    </svg>
  ),
  "Branding & Reputation": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
};

/* ─── Header Component ─── */

export default function Header() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState<string | null>(null);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  const categoryRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const categoryTimeout = useRef<NodeJS.Timeout | null>(null);
  const companyTimeout = useRef<NodeJS.Timeout | null>(null);

  /* Close dropdowns on outside click */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (categoryRef.current && !categoryRef.current.contains(e.target as Node)) {
        setActiveCategory(null);
      }
      if (companyRef.current && !companyRef.current.contains(e.target as Node)) {
        setCompanyOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  /* Close mobile nav on route change (link click) */
  function closeMobile() {
    setMobileOpen(false);
    setMobileActiveCategory(null);
    setMobileCompanyOpen(false);
  }

  /* Hover handlers with delay */
  function openCategory(name: string) {
    if (categoryTimeout.current) clearTimeout(categoryTimeout.current);
    setActiveCategory(name);
    setCompanyOpen(false);
  }
  function closeCategory() {
    categoryTimeout.current = setTimeout(() => setActiveCategory(null), 150);
  }
  function openCompany() {
    if (companyTimeout.current) clearTimeout(companyTimeout.current);
    setCompanyOpen(true);
    setActiveCategory(null);
  }
  function closeCompany() {
    companyTimeout.current = setTimeout(() => setCompanyOpen(false), 150);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 text-[15px] font-bold text-white">
            R
          </div>
          <span className="text-[19px] font-bold tracking-tight text-zinc-900">
            Real<span className="text-green-600">Landing</span>
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden items-center gap-0.5 lg:flex">

          {/* Category nav items */}
          <div
            ref={categoryRef}
            className="flex items-center gap-0.5"
            onMouseLeave={closeCategory}
          >
            {serviceDropdowns.map((group) => (
              <div key={group.category} className="relative" onMouseEnter={() => openCategory(group.category)}>
                <button
                  onClick={() => setActiveCategory(activeCategory === group.category ? null : group.category)}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[13px] font-medium transition ${
                    activeCategory === group.category
                      ? "bg-zinc-50 text-zinc-900"
                      : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
                  }`}
                >
                  {group.shortTitle}
                  <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeCategory === group.category ? "rotate-180" : ""}`} />
                </button>

                <div
                  className={`absolute left-1/2 top-full pt-2 -translate-x-1/2 transition-all duration-200 ${
                    activeCategory === group.category
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  }`}
                >
                  <div className="w-[300px] overflow-hidden rounded-xl border border-zinc-200/80 bg-white p-2">
                    <div className="mb-2 flex items-center gap-2.5 px-3 pt-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-50 text-green-600">
                        {categoryIcons[group.category]}
                      </div>
                      <div>
                        <p className="text-[12px] font-semibold uppercase tracking-wider text-zinc-900">{group.category}</p>
                        <p className="text-[11px] text-zinc-400">{group.description}</p>
                      </div>
                    </div>
                    <div className="space-y-0.5">
                      {group.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setActiveCategory(null)}
                          className="group flex items-start gap-3 rounded-lg px-3 py-2 transition hover:bg-green-50/60"
                        >
                          <svg className="mt-0.5 h-4 w-4 shrink-0 text-zinc-300 transition group-hover:text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                          </svg>
                          <div>
                            <p className="text-[13px] font-medium text-zinc-700 transition group-hover:text-green-600">{link.label}</p>
                            <p className="text-[11px] text-zinc-400">{link.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Company dropdown */}
          <div
            ref={companyRef}
            className="relative"
            onMouseEnter={openCompany}
            onMouseLeave={closeCompany}
          >
            <button
              onClick={() => setCompanyOpen(!companyOpen)}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[13px] font-medium transition ${
                companyOpen
                  ? "bg-zinc-50 text-zinc-900"
                  : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
              }`}
            >
              Company
              <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${companyOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              className={`absolute left-1/2 top-full pt-2 -translate-x-1/2 transition-all duration-200 ${
                companyOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-1 opacity-0"
              }`}
            >
              <div className="w-[320px] overflow-hidden rounded-xl border border-zinc-200/80 bg-white">
                <div className="p-2">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setCompanyOpen(false)}
                      className="group flex items-start gap-3 rounded-lg px-3 py-2.5 transition hover:bg-zinc-50"
                    >
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-zinc-300 transition group-hover:text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                      </svg>
                      <div>
                        <p className="text-[13px] font-medium text-zinc-700 transition group-hover:text-green-600">
                          {link.label}
                        </p>
                        <p className="text-[11px] text-zinc-400">{link.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Simple links */}
          <Link
            href="/pricing"
            className="rounded-lg px-3.5 py-2 text-[13px] font-medium text-zinc-500 transition hover:bg-zinc-50 hover:text-zinc-900"
          >
            Pricing
          </Link>
          <Link
            href="/case-studies"
            className="rounded-lg px-3.5 py-2 text-[13px] font-medium text-zinc-500 transition hover:bg-zinc-50 hover:text-zinc-900"
          >
            Case Studies
          </Link>
          <Link
            href="/contact"
            className="rounded-lg px-3.5 py-2 text-[13px] font-medium text-zinc-500 transition hover:bg-zinc-50 hover:text-zinc-900"
          >
            Contact
          </Link>
        </nav>

        {/* ── Right side ── */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-xl bg-green-600 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-green-700 lg:inline-flex"
          >
            Book a Free Call
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-600 transition hover:bg-zinc-50 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* ── Mobile Nav ── */}
      <div
        className={`overflow-hidden border-t border-zinc-100 bg-white transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-h-[80vh] overflow-y-auto px-6 py-4">
          {/* Category accordions */}
          {serviceDropdowns.map((group) => (
            <div key={group.category} className="border-b border-zinc-100 pb-3">
              <button
                onClick={() => setMobileActiveCategory(mobileActiveCategory === group.category ? null : group.category)}
                className="flex w-full items-center justify-between py-2.5 text-[15px] font-semibold text-zinc-900"
              >
                <span className="flex items-center gap-2">
                  <span className="text-green-500">{categoryIcons[group.category]}</span>
                  {group.category}
                </span>
                <ChevronDown className={`h-4 w-4 text-zinc-400 transition-transform duration-200 ${mobileActiveCategory === group.category ? "rotate-180" : ""}`} />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileActiveCategory === group.category ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-0.5 pl-1">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobile}
                      className="block rounded-md px-3 py-2 text-[13px] font-medium text-zinc-600 transition hover:bg-green-50 hover:text-green-600"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Company accordion */}
          <div className="border-b border-zinc-100 pb-3">
            <button
              onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
              className="flex w-full items-center justify-between py-2.5 text-[15px] font-semibold text-zinc-900"
            >
              Company
              <ChevronDown className={`h-4 w-4 text-zinc-400 transition-transform duration-200 ${mobileCompanyOpen ? "rotate-180" : ""}`} />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileCompanyOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="space-y-0.5 pl-1">
                {companyLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={closeMobile}
                    className="block rounded-md px-3 py-2 text-[13px] font-medium text-zinc-600 transition hover:bg-green-50 hover:text-green-600"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Simple mobile links */}
          <Link
            href="/pricing"
            onClick={closeMobile}
            className="block border-b border-zinc-100 py-3 text-[15px] font-semibold text-zinc-900"
          >
            Pricing
          </Link>
          <Link
            href="/case-studies"
            onClick={closeMobile}
            className="block border-b border-zinc-100 py-3 text-[15px] font-semibold text-zinc-900"
          >
            Case Studies
          </Link>
          <Link
            href="/contact"
            onClick={closeMobile}
            className="block border-b border-zinc-100 py-3 text-[15px] font-semibold text-zinc-900"
          >
            Contact
          </Link>

          {/* Mobile CTA */}
          <div className="pt-4">
            <Link
              href="/contact"
              onClick={closeMobile}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-green-700"
            >
              Book a Free Strategy Call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
