"use client";

import { useEffect, useState } from "react";
import { databases } from "@/lib/appwriteBrowser";

const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string | undefined;
const collectionId = process.env.NEXT_PUBLIC_APPWRITE_ENQUIRY_COLLECTION_ID as string | undefined;

type Doc = any;

export default function AdminEnquiryPage() {
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
        setError("Failed to load enquiries");
      }
    }
    load();
  }, []);

  return (
    <div className="space-y-6">
      <section className="space-y-2">
        <h1 className="text-xl font-semibold text-slate-900">Product Enquiries</h1>
        <p className="text-xs text-slate-600">View enquiries submitted from the Product Enquiry form.</p>
      </section>

      <section className="rounded-2xl border bg-white p-4 text-sm shadow-sm">
        {error && <p className="mb-2 text-xs text-red-600">{error}</p>}
        {items.length === 0 ? (
          <p className="text-xs text-slate-500">No enquiries yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-xs">
              <thead className="border-b bg-slate-50 text-[11px] font-semibold text-slate-600">
                <tr>
                  <th className="px-2 py-1.5">Name</th>
                  <th className="px-2 py-1.5">Email</th>
                  <th className="px-2 py-1.5">Company</th>
                  <th className="px-2 py-1.5">Product</th>
                  <th className="px-2 py-1.5">Message</th>
                  <th className="px-2 py-1.5">Submitted</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {items.map((item) => (
                  <tr key={item.$id} className="align-top">
                    <td className="px-2 py-1.5">{item.name ?? "-"}</td>
                    <td className="px-2 py-1.5">{item.email ?? "-"}</td>
                    <td className="px-2 py-1.5">{item.company ?? "-"}</td>
                    <td className="px-2 py-1.5">{item.product ?? item.productName ?? "-"}</td>
                    <td className="max-w-xs px-2 py-1.5 text-[11px] text-slate-600">
                      {item.message ?? item.notes ?? "-"}
                    </td>
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
