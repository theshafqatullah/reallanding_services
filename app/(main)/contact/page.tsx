"use client";

import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useState } from "react";

const contactMethods = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: "Email Us",
    desc: "hello@reallanding.com",
    detail: "We respond within 24 hours",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: "Call Us",
    desc: "+1 (555) 123-4567",
    detail: "Mon–Fri, 9 AM – 6 PM EST",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Visit Us",
    desc: "123 Market Street, Suite 400",
    detail: "Miami, FL 33131",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 to-green-800 pt-10 pb-24 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur-sm">
              Contact Us
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s Talk Growth
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Ready to generate more leads and close more deals? Get in touch and
              we&apos;ll show you exactly how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative -mt-12 z-10 mx-auto max-w-4xl px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {contactMethods.map((m) => (
            <div key={m.title} className="rounded-2xl bg-white p-6 text-center border border-zinc-100">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
                {m.icon}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-zinc-900">{m.title}</h3>
              <p className="mt-1 text-sm font-medium text-green-600">{m.desc}</p>
              <p className="mt-0.5 text-xs text-zinc-400">{m.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Info */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-green-600">Send a Message</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900">
              Get your free strategy session
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Fill out the form below and one of our real estate marketing experts
              will reach out within 24 hours to schedule your complimentary strategy call.
            </p>

            {submitted ? (
              <div className="mt-10 rounded-2xl border border-green-100 bg-green-50 p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">Message Sent!</h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                className="mt-10 space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-zinc-700">First Name</label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      className="mt-1.5 w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-zinc-700">Last Name</label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      className="mt-1.5 w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="mt-1.5 w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-700">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    className="mt-1.5 w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-zinc-700">Service Interested In</label>
                  <select
                    id="service"
                    className="mt-1.5 w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition bg-white"
                  >
                    <option value="">Select a service</option>
                    <option>Social Media Marketing</option>
                    <option>Paid Advertising</option>
                    <option>SEO</option>
                    <option>Content Marketing</option>
                    <option>Website Design & Development</option>
                    <option>AI Automation</option>
                    <option>CRM & Sales Automation</option>
                    <option>Lead Generation</option>
                    <option>Branding & Positioning</option>
                    <option>Full-Service Package</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="mt-1.5 w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition resize-none"
                    placeholder="Tell us about your business and goals..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-green-700"
                >
                  Send Message
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-8">
              <h3 className="text-lg font-semibold text-zinc-900">Why Choose RealLanding?</h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Free strategy session — no commitment",
                  "100% focused on real estate",
                  "18+ specialized services under one roof",
                  "AI-powered automation & lead generation",
                  "Transparent reporting & measurable ROI",
                  "Dedicated account manager",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-zinc-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-100 bg-white p-8">
              <h3 className="text-lg font-semibold text-zinc-900">Office Hours</h3>
              <div className="mt-4 space-y-2 text-sm text-zinc-500">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="font-medium text-zinc-900">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-zinc-900">10:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-zinc-900">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
