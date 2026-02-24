import { Models } from "appwrite";

// ── Contact Submissions ──────────────────────────────────────────────
export interface ContactSubmission {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export type ContactSubmissionDocument = ContactSubmission & Models.Document;

// ── Newsletter Subscriptions ─────────────────────────────────────────
export interface NewsletterSubscription {
  email: string;
  source: string;
}

export type NewsletterSubscriptionDocument = NewsletterSubscription & Models.Document;
