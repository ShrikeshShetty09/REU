"use client";

import { FormEvent, useEffect, useState } from "react";
import { databases, storage, ID, Permission, Role } from "@/lib/appwriteBrowser";

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string | undefined;
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string | undefined;
const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string | undefined;
const collectionId = process.env.NEXT_PUBLIC_APPWRITE_EVENTS_COLLECTION_ID as string | undefined;
const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string | undefined;

interface EventDoc {
  $id: string;
  name: string;
  imageUrl?: string;
  imageUrls?: string[];
}

export default function AdminEventsPage() {
  const [items, setItems] = useState<EventDoc[]>([]);
  const [name, setName] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!databaseId || !collectionId) return;
    async function load() {
      try {
        const res = await databases.listDocuments(databaseId, collectionId);
        setItems(res.documents as any);
      } catch (err: any) {
        console.error(err);
        setError("Failed to load events");
      }
    }
    load();
  }, []);

  async function handleCreate(e: FormEvent) {
    e.preventDefault();
    if (!databaseId || !collectionId) {
      setError("Missing Appwrite database configuration");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const imageUrls: string[] = [];

      if (files.length > 0 && bucketId && endpoint && projectId) {
        for (const file of files) {
          const uploaded = await storage.createFile(bucketId, ID.unique(), file, [Permission.read(Role.any())]);
          const url = `${endpoint}/storage/buckets/${bucketId}/files/${uploaded.$id}/view?project=${projectId}`;
          imageUrls.push(url);
        }
      }

      const created = await databases.createDocument(databaseId, collectionId, ID.unique(), {
        name,
        imageUrl: imageUrls[0],
        imageUrls,
      });

      setItems((prev) => [...prev, created as any]);
      setName("");
      setFiles([]);
    } catch (err: any) {
      console.error(err);
      setError(err?.message ?? "Failed to create event");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!databaseId || !collectionId) return;
    if (!confirm("Delete this event?")) return;
    try {
      await databases.deleteDocument(databaseId, collectionId, id);
      setItems((prev) => prev.filter((item) => item.$id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete event");
    }
  }

  return (
    <div className="space-y-6">
      <section className="space-y-2">
        <h1 className="text-xl font-semibold text-slate-900">Events</h1>
        <p className="text-xs text-slate-600">Create or remove events shown on the public Events page.</p>
      </section>

      <section className="rounded-2xl border bg-white p-4 text-sm shadow-sm">
        <h2 className="text-sm font-semibold text-slate-900">Add event</h2>
        <form onSubmit={handleCreate} className="mt-3 grid gap-3 md:grid-cols-[2fr,2fr,auto] md:items-end">
          <div className="space-y-1">
            <label className="block text-xs font-medium text-slate-700">Event name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-md border px-2 py-1.5 text-sm outline-none focus:border-[#a605c7]"
            />
          </div>
          <div className="space-y-1">
            <label className="block text-xs font-medium text-slate-700">Images (you can select multiple)</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setFiles(Array.from(e.target.files ?? []))}
              className="w-full text-xs"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="h-9 rounded-md bg-[#a605c7] px-3 text-xs font-semibold text-white hover:bg-[#8704a2] disabled:opacity-60"
          >
            {loading ? "Saving…" : "Add"}
          </button>
        </form>
        {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
      </section>

      <section className="rounded-2xl border bg-white p-4 text-sm shadow-sm">
        <h2 className="text-sm font-semibold text-slate-900">Existing events</h2>
        {items.length === 0 ? (
          <p className="mt-2 text-xs text-slate-500">No events yet.</p>
        ) : (
          <ul className="mt-3 divide-y text-sm">
            {items.map((item) => (
              <li key={item.$id} className="flex items-center justify-between py-2">
                <div>
                  <p className="text-sm font-medium text-slate-900">{item.name}</p>
                  {item.imageUrls?.length ? (
                    <p className="text-[11px] text-slate-500">{item.imageUrls.length} image(s) stored</p>
                  ) : item.imageUrl ? (
                    <p className="text-[11px] text-slate-500">1 image stored</p>
                  ) : null}
                </div>
                <button
                  type="button"
                  onClick={() => handleDelete(item.$id)}
                  className="rounded-md bg-red-50 px-2 py-1 text-[11px] font-semibold text-red-700 hover:bg-red-100"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
