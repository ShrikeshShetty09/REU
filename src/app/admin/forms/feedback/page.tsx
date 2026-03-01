"use client";

import { useEffect, useState } from "react";
import { databases } from "@/lib/appwriteBrowser";

const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string | undefined;
const collectionId = process.env.NEXT_PUBLIC_APPWRITE_FEEDBACK_COLLECTION_ID as string | undefined;

type Doc = any;

function parseRatings(ratingsJson: string | undefined): [string, number][] {
  if (!ratingsJson) return [];
  try {
    const parsed = JSON.parse(ratingsJson) as Record<string, number>;
    return Object.entries(parsed).filter(([, v]) => typeof v === "number");
  } catch {
    return [];
  }
}

function getOverallRating(ratings: [string, number][]): string {
  if (!ratings.length) return "-";
  const values = ratings.map(([, v]) => v);
  const avg = values.reduce((sum, v) => sum + v, 0) / values.length;
  return `${avg.toFixed(1)} / 5`;
}

export default function AdminFeedbackPage() {
  const [items, setItems] = useState<Doc[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!databaseId || !collectionId) return;
    async function load() {
      try {
        const res = await databases.listDocuments(databaseId, collectionId);
        setItems(res.documents as any);
      } catch (err: any) {
        console.error(err);
        setError("Failed to load feedback");
      }
    }
    load();
  }, []);

  return (
    <div className="space-y-6">
      <section className="space-y-2">
        <h1 className="text-xl font-semibold text-slate-900">Customer Feedback</h1>
        <p className="text-xs text-slate-600">View responses submitted from the Customer Feedback form.</p>
      </section>

      <section className="rounded-2xl border bg-white p-4 text-sm shadow-sm">
        {error && <p className="mb-2 text-xs text-red-600">{error}</p>}
        {items.length === 0 ? (
          <p className="text-xs text-slate-500">No feedback yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-xs">
              <thead className="border-b bg-slate-50 text-[11px] font-semibold text-slate-600">
                <tr>
                  <th className="px-2 py-1.5">Name</th>
                  <th className="px-2 py-1.5">Email</th>
                  <th className="px-2 py-1.5">Ratings</th>
                  <th className="px-2 py-1.5">Overall</th>
                  <th className="px-2 py-1.5">Comments</th>
                  <th className="px-2 py-1.5">Submitted</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {items.map((item) => {
                  const ratings = parseRatings(item.ratingsJson as string | undefined);
                  const overallDisplay = getOverallRating(ratings);
                  const feedbackText = item.feedback as string | undefined;
                  const suggestionsText = item.suggestions as string | undefined;
                  const comments = feedbackText || suggestionsText
                    ? `${feedbackText ?? ""}${feedbackText && suggestionsText ? " \u2014 " : ""}${suggestionsText ?? ""}`
                    : "-";

                  return (
                    <tr key={item.$id} className="align-top">
                      <td className="px-2 py-1.5">{item.name ?? "-"}</td>
                      <td className="px-2 py-1.5">{item.email ?? "-"}</td>
                      <td className="px-2 py-1.5">
                        {ratings.length === 0 ? (
                          "-"
                        ) : (
                          <ul className="space-y-0.5">
                            {ratings.map(([question, value], index) => (
                              <li key={question} className="text-[10px] text-slate-600">
                                <span className="font-semibold">Q{index + 1}:</span> {value} / 5
                              </li>
                            ))}
                          </ul>
                        )}
                      </td>
                      <td className="px-2 py-1.5">{overallDisplay}</td>
                      <td className="max-w-xs px-2 py-1.5 text-[11px] text-slate-600">{comments}</td>
                      <td className="px-2 py-1.5 text-[11px] text-slate-500">
                        {new Date(item.$createdAt).toLocaleString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
