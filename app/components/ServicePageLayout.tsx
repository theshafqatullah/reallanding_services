"use client";

import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FAQAccordion from "./FAQAccordion";
import TestimonialSlider from "./TestimonialSlider";

/* ─── types ─── */
export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  desc: string;
}

export interface Result {
  metric: string;
  label: string;
  period: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface RelatedService {
  title: string;
  href: string;
  description: string;
}

export interface ComparisonSection {
  genericTitle: string;
  recommendedTitle: string;
  genericItems: string[];
  recommendedItems: string[];
}

export interface ServicePageData {
  /* Hero */
  breadcrumb: string;
  badgeIcon: ReactNode;
  badgeText: string;
  title: string;
  titleHighlight?: string;
  description: string;
  primaryCTA: string;
  primaryCTALink?: string;
  secondaryCTA: string;
  secondaryCTALink?: string;
  trustLine: string;

  /* Data */
  stats: ServiceStat[];
  trustBar: string[];
  services: ServiceItem[];
  servicesHeading: string;
  servicesSubheading: string;
  servicesDescription: string;
  results: Result[];
  resultsHeading: string;
  resultsSubheading: string;
  resultsDescription: string;
  benefits: Benefit[];
  benefitsHeading: string;
  benefitsSubheading: string;
  benefitsDescription: string;
  testimonials: Testimonial[];
  testimonialHeading?: string;
  steps: ProcessStep[];
  processHeading: string;
  processSubheading: string;
  processDescription: string;
  faqs: FAQ[];
  faqHeading: string;
  relatedServices: RelatedService[];
  relatedHeading: string;
  relatedSubheading: string;

  /* CTA */
  ctaHeading: string;
  ctaDescription: string;
  ctaCTA: string;
  ctaCTALink?: string;
  ctaSubtext: string;

  /* Optional */
  comparison?: ComparisonSection;
  extraSections?: ReactNode;
}

/* ─── Animated counter ─── */
function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`bg-white/95 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg shadow-gray-200/50 border border-gray-100 card-hover ${visible ? "animate-count-up" : "opacity-0"}`}
    >
      <div className="text-3xl md:text-4xl font-extrabold text-gradient mb-1">{value}</div>
      <div className="text-gray-500 text-sm font-medium">{label}</div>
    </div>
  );
}

/* ─── Section observer wrapper ─── */
function RevealSection({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </section>
  );
}

/* ─── Staggered grid item ─── */
function StaggerItem({ children, index, className = "" }: { children: ReactNode; index: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   ServicePageLayout — the main component
   ═══════════════════════════════════════════════════════════ */
export default function ServicePageLayout({ data }: { data: ServicePageData }) {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* ───── Hero ───── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-700 to-green-900 pt-32 pb-32">
        {/* Animated background elements */}
        <div className="absolute inset-0 grid-pattern opacity-[0.04]" />
        <div className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-green-400/20 blur-3xl animate-pulse-soft" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-emerald-400/15 blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }} />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-green-300/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <nav className="flex justify-center mb-6 text-green-200 text-sm" style={{ animation: "count-up 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}>
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/#services" className="hover:text-white transition">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">{data.breadcrumb}</span>
          </nav>

          {/* Badge */}
          <div style={{ animation: "count-up 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}>
            <span className="inline-flex items-center gap-2 glass text-white text-sm font-semibold px-5 py-2.5 rounded-full mb-6">
              {data.badgeIcon}
              {data.badgeText}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight"
            style={{ animation: "count-up 0.6s cubic-bezier(0.16,1,0.3,1) 0.3s both" }}
            dangerouslySetInnerHTML={{ __html: data.title }}
          />

          {/* Description */}
          <p
            className="text-lg md:text-xl text-green-100/90 max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{ animation: "count-up 0.6s cubic-bezier(0.16,1,0.3,1) 0.4s both" }}
          >
            {data.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ animation: "count-up 0.6s cubic-bezier(0.16,1,0.3,1) 0.5s both" }}>
            <Link
              href={data.primaryCTALink || "/contact"}
              className="group bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:shadow-green-900/30 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              {data.primaryCTA}
              <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
            <Link
              href={data.secondaryCTALink || "/contact"}
              className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              {data.secondaryCTA}
            </Link>
          </div>

          {/* Trust line */}
          <p className="mt-8 text-green-200/60 text-sm" style={{ animation: "count-up 0.6s cubic-bezier(0.16,1,0.3,1) 0.6s both" }}>
            {data.trustLine}
          </p>
        </div>
      </section>

      {/* ───── Stats (overlaps hero) ───── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {data.stats.map((stat, i) => (
            <AnimatedStat key={i} value={stat.value} label={stat.label} />
          ))}
        </div>
      </section>

      {/* ───── Trust Bar ───── */}
      <RevealSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
          {data.trustBar.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              {item}
            </span>
          ))}
        </div>
      </RevealSection>

      {/* ───── Services Grid ───── */}
      <RevealSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-wider bg-green-50 px-4 py-1.5 rounded-full">{data.servicesHeading}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4 mb-4">{data.servicesSubheading}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">{data.servicesDescription}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.services.map((s, i) => (
            <StaggerItem key={i} index={i} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-green-200 hover:shadow-xl hover:shadow-green-100/40 transition-all duration-300 card-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-50 to-transparent rounded-bl-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl flex items-center justify-center text-green-600 mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-green-100/50 transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">{s.description}</p>
              </div>
            </StaggerItem>
          ))}
        </div>
      </RevealSection>

      {/* ───── Results Showcase ───── */}
      <RevealSection className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 py-28">
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
        <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-3xl animate-pulse-soft" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-green-400 font-semibold text-sm uppercase tracking-wider bg-green-400/10 px-4 py-1.5 rounded-full">{data.resultsHeading}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-4 mb-4">{data.resultsSubheading}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">{data.resultsDescription}</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {data.results.map((r, i) => (
              <StaggerItem key={i} index={i} className="glass rounded-2xl p-8 text-center hover:bg-white/[0.12] transition-all duration-300 group">
                <div className="text-4xl md:text-5xl font-extrabold text-green-400 mb-3 group-hover:scale-105 transition-transform">{r.metric}</div>
                <div className="text-white font-semibold mb-1.5">{r.label}</div>
                <div className="text-gray-500 text-sm">{r.period}</div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ───── Benefits ───── */}
      <RevealSection className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-wider bg-green-50 px-4 py-1.5 rounded-full">{data.benefitsHeading}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4 mb-4">{data.benefitsSubheading}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">{data.benefitsDescription}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.benefits.map((b, i) => (
              <StaggerItem key={i} index={i} className="group bg-gradient-to-br from-white to-green-50/30 border border-gray-100 rounded-2xl p-7 hover:border-green-200 hover:shadow-lg hover:shadow-green-50 transition-all duration-300 card-hover">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-200/50 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{b.title}</h3>
                    <p className="text-gray-500 text-[15px] leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ───── Testimonials ───── */}
      <TestimonialSlider testimonials={data.testimonials} heading={data.testimonialHeading} />

      {/* ───── Process ───── */}
      <RevealSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="text-center mb-16">
          <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-wider bg-green-50 px-4 py-1.5 rounded-full">{data.processHeading}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4 mb-4">{data.processSubheading}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">{data.processDescription}</p>
        </div>
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-green-300 to-transparent" />
          <div className="grid md:grid-cols-5 gap-8">
            {data.steps.map((s, i) => (
              <StaggerItem key={s.step} index={i} className="text-center relative group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-5 relative z-10 shadow-lg shadow-green-200/50 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 rotate-3 group-hover:rotate-0">
                  {s.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-[15px]">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
              </StaggerItem>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ───── Comparison (optional) ───── */}
      {data.comparison && (
        <RevealSection className="bg-gray-50 border-y border-gray-100 py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-wider bg-green-50 px-4 py-1.5 rounded-full">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4">{data.comparison.genericTitle} vs. {data.comparison.recommendedTitle}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Generic */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 card-hover">
                <h3 className="font-bold text-gray-400 text-lg mb-6 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  {data.comparison.genericTitle}
                </h3>
                <ul className="space-y-3">
                  {data.comparison.genericItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Recommended */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 relative card-hover">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg shadow-green-200/50">RECOMMENDED</div>
                <h3 className="font-bold text-green-700 text-lg mb-6 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {data.comparison.recommendedTitle}
                </h3>
                <ul className="space-y-3">
                  {data.comparison.recommendedItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </RevealSection>
      )}

      {/* ───── Extra sections (optional) ───── */}
      {data.extraSections}

      {/* ───── FAQ ───── */}
      <RevealSection className="py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-wider bg-green-50 px-4 py-1.5 rounded-full">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4">{data.faqHeading}</h2>
          </div>
          <FAQAccordion faqs={data.faqs} />
        </div>
      </RevealSection>

      {/* ───── Related Services ───── */}
      <RevealSection className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-100 py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-wider bg-green-50 px-4 py-1.5 rounded-full">{data.relatedHeading}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4">{data.relatedSubheading}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {data.relatedServices.map((rs, i) => (
              <StaggerItem key={i} index={i}>
                <Link href={rs.href} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-green-200 hover:shadow-xl hover:shadow-green-50 transition-all block card-hover h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">{rs.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-5">{rs.description}</p>
                  <span className="text-green-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2.5 transition-all">
                    Learn more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ───── CTA ───── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-700 to-green-900 py-28">
        <div className="absolute inset-0 grid-pattern opacity-[0.04]" />
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-green-400/20 blur-3xl animate-pulse-soft" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }} />
        <RevealSection className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">{data.ctaHeading}</h2>
          <p className="text-lg md:text-xl text-green-100/90 mb-10 max-w-2xl mx-auto leading-relaxed">{data.ctaDescription}</p>
          <Link
            href={data.ctaCTALink || "/contact"}
            className="group inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5"
          >
            {data.ctaCTA}
            <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </Link>
          <p className="mt-6 text-green-200/60 text-sm">{data.ctaSubtext}</p>
        </RevealSection>
      </section>

      <Footer />
    </div>
  );
}
