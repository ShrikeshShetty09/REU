"use client";

import { useState, FormEvent } from "react";
import { databases, ID } from "@/lib/appwriteBrowser";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [requirement, setRequirement] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string | undefined;
  const collectionId = process.env.NEXT_PUBLIC_APPWRITE_CONTACT_COLLECTION_ID as string | undefined;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!databaseId || !collectionId) {
      setError("Form storage is not configured.");
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      await databases.createDocument(databaseId, collectionId, ID.unique(), {
        name,
        company,
        email,
        phone,
        requirement,
      });
      setSubmitted(true);
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setRequirement("");
    } catch (err: any) {
      console.error(err);
      setError("Failed to submit message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="rounded-[32px] border border-[#f3d7ff] bg-gradient-to-br from-[#ffeffd] to-[#fff9ff] p-8 shadow-xl space-y-5" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#5d075f]">Name</label>
        <input
          className="w-full rounded-2xl border border-[#e3b7ff] px-4 py-3 focus:border-[#a605c7] focus:outline-none"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#5d075f]">Company</label>
        <input
          className="w-full rounded-2xl border border-[#e3b7ff] px-4 py-3 focus:border-[#a605c7] focus:outline-none"
          placeholder="Organisation"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#5d075f]">Email</label>
        <input
          type="email"
          className="w-full rounded-2xl border border-[#e3b7ff] px-4 py-3 focus:border-[#a605c7] focus:outline-none"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#5d075f]">Phone</label>
        <input
          type="tel"
          className="w-full rounded-2xl border border-[#e3b7ff] px-4 py-3 focus:border-[#a605c7] focus:outline-none"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-[#5d075f]">Requirement</label>
        <textarea
          className="w-full rounded-2xl border border-[#e3b7ff] px-4 py-3 focus:border-[#a605c7] focus:outline-none"
          rows={4}
          placeholder="Tell us about your gas or automation project"
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-gradient-to-r from-[#a605c7] to-[#5d075f] py-3 text-white font-semibold uppercase tracking-wide shadow-lg disabled:opacity-60"
      >
        {submitting ? "Submitting…" : submitted ? "Submitted" : "Submit Enquiry"}
      </button>
      {error && <p className="text-xs text-red-600">{error}</p>}
      {!error && submitted && (
        <p className="text-xs text-green-600">
          Thank you for reaching out. Your message has been sent and we will respond as soon as possible.
        </p>
      )}
    </form>
  );
}
