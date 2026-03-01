"use client";

import { useEffect, useState } from "react";
import { databases } from "@/lib/appwriteBrowser";

const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string | undefined;
const collectionId = process.env.NEXT_PUBLIC_APPWRITE_SERVICE_COLLECTION_ID as string | undefined;

type Doc = any;

export default function AdminServiceRequestsPage() {
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
        setError("Failed to load service requests");
      }
    }
    load();
  }, []);

  return (
    <div className="space-y-6">
      <section className="space-y-2">
        <h1 className="text-xl font-semibold text-slate-900">Service Requests</h1>
        <p className="text-xs text-slate-600">View requests submitted from the Service Request form.</p>
      </section>

      <section className="rounded-2xl border bg-white p-4 text-sm shadow-sm">
        {error && <p className="mb-2 text-xs text-red-600">{error}</p>}
        {items.length === 0 ? (
          <p className="text-xs text-slate-500">No service requests yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-xs">
              <thead className="border-b bg-slate-50 text-[11px] font-semibold text-slate-600">
                <tr>
                  <th className="px-2 py-1.5">Name</th>
                  <th className="px-2 py-1.5">Email</th>
                  <th className="px-2 py-1.5">Phone</th>
                  <th className="px-2 py-1.5">Company</th>
                  <th className="px-2 py-1.5">Service Type</th>
                  <th className="px-2 py-1.5">Equipment / Service</th>
                  <th className="px-2 py-1.5">Issue Description</th>
                  <th className="px-2 py-1.5">Preferred Date</th>
                  <th className="px-2 py-1.5">Preferred Time</th>
                  <th className="px-2 py-1.5">Service Location</th>
                  <th className="px-2 py-1.5">Urgency</th>
                  <th className="px-2 py-1.5">Submitted</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {items.map((item) => (
                  <tr key={item.$id} className="align-top">
                    <td className="px-2 py-1.5">{item.name ?? "-"}</td>
                    <td className="px-2 py-1.5">{item.email ?? "-"}</td>
                    <td className="px-2 py-1.5">{item.phone ?? "-"}</td>
                    <td className="px-2 py-1.5">{item.company ?? "-"}</td>
                    <td className="px-2 py-1.5">{item.serviceType ?? "-"}</td>
                    <td className="px-2 py-1.5">{item.equipment ?? "-"}</td>
                    <td
                      className="max-w-xs px-2 py-1.5 text-[11px] text-slate-600 whitespace-pre-wrap break-words"
                    >
                      {item.issueDescription ?? "-"}
                    </td>
                    <td className="px-2 py-1.5">{item.preferredDate ?? "-"}</td>
                    <td className="px-2 py-1.5">{item.preferredTime ?? "-"}</td>
                    <td className="px-2 py-1.5">{item.address ?? "-"}</td>
                    <td className="px-2 py-1.5">{item.urgency ?? "-"}</td>
                    <td className="px-2 py-1.5 text-[11px] text-slate-500">
                      {new Date(item.$createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
