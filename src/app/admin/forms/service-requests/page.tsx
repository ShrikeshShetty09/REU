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
        const res = await databases.listDocuments(databaseId!, collectionId!);
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
          <div className="max-w-full">
            <table className="w-full table-fixed text-left text-[11px]">
              <thead className="border-b bg-slate-50 text-[10px] font-semibold text-slate-600">
                <tr>
                  <th className="px-2 py-1.5">Name</th>
                  <th className="px-2 py-1.5">Email</th>
                  <th className="px-2 py-1.5">Phone</th>
                  <th className="px-2 py-1.5">Company</th>
                  {/* Secondary columns hidden on very small screens to give Issue Description space */}
                  <th className="hidden px-2 py-1.5 md:table-cell">Service Type</th>
                  <th className="hidden px-2 py-1.5 md:table-cell">Equipment / Service</th>
                  <th className="px-2 py-1.5">Issue Description</th>
                  <th className="hidden px-2 py-1.5 lg:table-cell">Preferred Date</th>
                  <th className="hidden px-2 py-1.5 lg:table-cell">Preferred Time</th>
                  <th className="hidden px-2 py-1.5 lg:table-cell">Service Location</th>
                  <th className="hidden px-2 py-1.5 lg:table-cell">Urgency</th>
                  <th className="px-2 py-1.5">Submitted</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {items.map((item) => (
                  <tr key={item.$id} className="align-top">
                    <td className="px-2 py-1.5 break-words">{item.name ?? "-"}</td>
                    <td className="px-2 py-1.5 break-words">{item.email ?? "-"}</td>
                    <td className="px-2 py-1.5 break-words">{item.phone ?? "-"}</td>
                    <td className="px-2 py-1.5 break-words">{item.company ?? "-"}</td>
                    <td className="hidden px-2 py-1.5 break-words md:table-cell">{item.serviceType ?? "-"}</td>
                    <td className="hidden px-2 py-1.5 break-words md:table-cell">{item.equipment ?? "-"}</td>
                    <td className="max-w-xs px-2 py-1.5 align-top text-[10px] text-slate-600 break-words">
                      {item.issueDescription ?? "-"}
                    </td>
                    <td className="hidden px-2 py-1.5 break-words lg:table-cell">{item.preferredDate ?? "-"}</td>
                    <td className="hidden px-2 py-1.5 break-words lg:table-cell">{item.preferredTime ?? "-"}</td>
                    <td className="hidden px-2 py-1.5 break-words lg:table-cell">{item.address ?? "-"}</td>
                    <td className="hidden px-2 py-1.5 break-words lg:table-cell">{item.urgency ?? "-"}</td>
                    <td className="px-2 py-1.5 text-[10px] text-slate-500">
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
