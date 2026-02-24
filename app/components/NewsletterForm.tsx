"use client";

import { useState } from "react";
import { databases, DATABASE_ID, NEWSLETTER_COLLECTION_ID, ID } from "@/lib/appwrite";
import { Query } from "appwrite";

export default function NewsletterForm({ source = "blog" }: { source?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "already" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      // Check if already subscribed
      const existing = await databases.listDocuments(
        DATABASE_ID,
        NEWSLETTER_COLLECTION_ID,
        [Query.equal("email", email), Query.limit(1)]
      );
      if (existing.documents.length > 0) {
        setStatus("already");
        return;
      }
      await databases.createDocument(
        DATABASE_ID,
        NEWSLETTER_COLLECTION_ID,
        ID.unique(),
        { email, source }
      );
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="mx-auto mt-8 max-w-md rounded-full bg-white/10 px-6 py-3 text-center text-sm font-medium text-white backdrop-blur-sm">
        <svg className="inline-block w-4 h-4 mr-1 -mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>You&apos;re subscribed! Check your inbox for our next newsletter.
      </div>
    );
  }

  if (status === "already") {
    return (
      <div className="mx-auto mt-8 max-w-md rounded-full bg-white/10 px-6 py-3 text-center text-sm font-medium text-white backdrop-blur-sm">
        You&apos;re already subscribed! Stay tuned for our next issue.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md gap-3">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 rounded-full border-0 px-5 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:ring-2 focus:ring-white/50 focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-green-700 transition hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "..." : "Subscribe"}
      </button>
      {status === "error" && (
        <p className="absolute mt-14 text-xs text-red-200">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
