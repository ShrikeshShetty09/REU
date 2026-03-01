"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { account } from "@/lib/appwriteBrowser";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await account.createEmailPasswordSession(email, password);
      router.replace("/admin");
    } catch (err: any) {
      setError(err?.message ?? "Failed to sign in. Please check credentials.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_#ffe5ff,_#f6e0ff,_#f7f0fb)] px-4">
      <div className="w-full max-w-sm rounded-2xl border border-white/60 bg-white/95 p-6 shadow-sm">
        <p className="text-xs uppercase tracking-[0.3em] text-[#a605c7]">Admin</p>
        <h1 className="mt-2 text-xl font-semibold text-slate-900">Sign in</h1>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3 text-sm">
          <div className="space-y-1">
            <label className="block text-xs font-medium text-slate-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-md border px-2 py-1.5 text-sm outline-none focus:border-[#a605c7]"
            />
          </div>
          <div className="space-y-1">
            <label className="block text-xs font-medium text-slate-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-md border px-2 py-1.5 text-sm outline-none focus:border-[#a605c7]"
            />
          </div>

          {error && <p className="text-xs text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-full bg-gradient-to-r from-[#a605c7] to-[#5d075f] px-3 py-2 text-xs font-semibold text-white shadow-sm hover:brightness-110 disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}
