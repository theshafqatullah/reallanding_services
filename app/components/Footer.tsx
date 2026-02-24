import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 text-sm font-bold text-white">
                R
              </div>
              <span className="text-lg font-bold tracking-tight text-zinc-900">
                Real<span className="text-green-600">Landing</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-zinc-400">
              The all-in-one marketing, automation &amp; AI agency built
              exclusively for real estate professionals.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { label: "Facebook", d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" },
                { label: "Instagram", d: "M16 3.5H8A4.5 4.5 0 003.5 8v8a4.5 4.5 0 004.5 4.5h8a4.5 4.5 0 004.5-4.5V8A4.5 4.5 0 0016 3.5zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm4.5-7a1 1 0 110-2 1 1 0 010 2z" },
                { label: "LinkedIn", d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-100 text-zinc-400 transition hover:border-zinc-200 hover:text-zinc-600"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {[
            {
              title: "Services",
              links: [
                { label: "Social Media", href: "/services/social-media-marketing" },
                { label: "Paid Advertising", href: "/services/paid-advertising" },
                { label: "SEO", href: "/services/seo" },
                { label: "Content Marketing", href: "/services/content-marketing" },
                { label: "Website Design", href: "/services/website-design-development" },
                { label: "AI Automation", href: "/services/ai-automation" },
              ],
            },
            {
              title: "More Services",
              links: [
                { label: "CRM Setup", href: "/services/crm-sales-automation" },
                { label: "Lead Generation", href: "/services/lead-generation" },
                { label: "Branding", href: "/services/branding-market-positioning" },
                { label: "Email Marketing", href: "/services/email-marketing" },
                { label: "Sales Funnels", href: "/services/sales-funnel-automation" },
                { label: "WhatsApp Marketing", href: "/services/whatsapp-marketing" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About Us", href: "/about" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Blog", href: "/blog" },
                { label: "Pricing", href: "/pricing" },
                { label: "Careers", href: "/careers" },
                { label: "Contact Us", href: "/contact" },
              ],
            },
          ].map((col) => (
            <div key={col.title} className="lg:col-span-2 lg:col-start-auto">
              <h4 className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-zinc-500 transition hover:text-green-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-zinc-100 pt-8 sm:flex-row">
          <p className="text-[12px] text-zinc-400">
            &copy; {new Date().getFullYear()} RealLanding. All rights reserved.
          </p>
          <div className="flex gap-6 text-[12px] text-zinc-400">
            <Link href="/privacy-policy" className="transition hover:text-zinc-600">Privacy Policy</Link>
            <Link href="/terms-of-service" className="transition hover:text-zinc-600">Terms of Service</Link>
            <Link href="/contact" className="transition hover:text-zinc-600">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
