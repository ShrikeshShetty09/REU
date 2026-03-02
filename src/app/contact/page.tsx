"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import { databases, ID } from "@/lib/appwriteBrowser";

export default function ContactPage() {
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
    <main className="space-y-12 pb-24 pt-16">
      <section className="mx-auto max-w-5xl rounded-[32px] border border-white/50 bg-white/95 p-8 shadow">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#360236] mb-4">Contact</h3>
            <h1 className="text-4xl font-bold text-[#360236] mb-6">Reach REU Engineering and LLP</h1>
            <p className="text-base text-foreground/75 mb-8">
              Share project briefs, GA drawings, or compliance requirements. Our specialists respond within one business day with
              feasibility notes and a technical-commercial roadmap.
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[#a605c7] font-semibold">Phone</p>
                <p className="text-lg font-semibold text-[#360236]">+91 99870 92470 / +91 90223 65220</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[#a605c7] font-semibold">Email</p>
                <p className="text-lg font-semibold text-[#360236]">rahulukey@reu.co.in</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[#a605c7] font-semibold">Address</p>
                <p className="text-base text-[#360236]">
                  Corporate Address : Shop No 1, Plot No 85, sec-R1, Near MSEB Office, Vadghar, Karanjade, Panvel - 410206
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Name</label>
              <input
                className="w-full rounded-2xl border border-[#a605c7]/30 px-4 py-3 focus:border-[#a605c7] focus:outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Company</label>
              <input
                className="w-full rounded-2xl border border-[#a605c7]/30 px-4 py-3 focus:border-[#a605c7] focus:outline-none"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Email</label>
              <input
                type="email"
                className="w-full rounded-2xl border border-[#a605c7]/30 px-4 py-3 focus:border-[#a605c7] focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Phone</label>
              <input
                type="tel"
                className="w-full rounded-2xl border border-[#a605c7]/30 px-4 py-3 focus:border-[#a605c7] focus:outline-none"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Requirement</label>
              <textarea
                className="w-full rounded-2xl border border-[#a605c7]/30 px-4 py-3 focus:border-[#a605c7] focus:outline-none"
                rows={5}
                value={requirement}
                onChange={(e) => setRequirement(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-gradient-to-r from-[#a605c7] to-[#5d075f] py-3 text-white font-semibold disabled:opacity-60"
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
        </div>
        <p className="mt-4 text-sm text-foreground/70">
          Prefer direct email? Send project details to {" "}
          <Link href="mailto:rahulukey@reu.co.in" className="text-[#a605c7]">
            rahulukey@reu.co.in
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
