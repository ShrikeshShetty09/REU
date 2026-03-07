"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { account } from "@/lib/appwriteBrowser";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [checking, setChecking] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function checkSession() {
      try {
        await account.get();
        if (!cancelled) {
          setAuthenticated(true);
        }
      } catch {
        if (!cancelled) {
          setAuthenticated(false);
          if (!pathname.startsWith("/admin/login")) {
            router.replace("/admin/login");
          }
        }
      } finally {
        if (!cancelled) setChecking(false);
      }
    }
    checkSession();
    return () => {
      cancelled = true;
    };
  }, [pathname, router]);

  async function handleLogout() {
    try {
      await account.deleteSession("current");
    } catch {}
    router.replace("/admin/login");
    setMobileOpen(false);
  }

  if (checking) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-sm text-slate-500">Checking admin access…</p>
      </main>
    );
  }

  if (!authenticated && !pathname.startsWith("/admin/login")) {
    return null;
  }

  if (pathname.startsWith("/admin/login")) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen w-full overflow-x-hidden bg-[radial-gradient(circle_at_top,_#ffe5ff,_#f6e0ff,_#f7f0fb)]">
      {/* Desktop sidebar */}
      <aside className="hidden w-64 flex-col border-r border-white/60 bg-white/95 px-5 py-6 text-sm text-slate-700 shadow-sm md:flex">
        <div className="mb-6 flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-full">
            <Image
              src="/images/reu_logo/logo.png"
              alt="REU logo"
              fill
              className="object-contain"
              sizes="44px"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a605c7]">
              Admin
            </span>
            <span className="text-sm font-semibold text-slate-900">Dashboard</span>
          </div>
        </div>
        <nav className="space-y-2">
          <NavLink href="/admin" label="Overview" currentPath={pathname} />
          <NavLink href="/admin/events" label="Events" currentPath={pathname} />
          <NavLink href="/admin/quality-assurance" label="Quality Assurance" currentPath={pathname} />
          <NavLink href="/admin/certificates" label="Certificates" currentPath={pathname} />
          <NavLink href="/admin/clients" label="Clients" currentPath={pathname} />
          <div className="mt-4 border-t pt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Forms
          </div>
          <NavLink href="/admin/forms/enquiry" label="Product Enquiries" currentPath={pathname} />
          <NavLink href="/admin/forms/feedback" label="Customer Feedback" currentPath={pathname} />
          <NavLink href="/admin/forms/service-requests" label="Service Requests" currentPath={pathname} />
          <NavLink href="/admin/forms/contact" label="Contact Messages" currentPath={pathname} />
        </nav>
        <button
          type="button"
          onClick={handleLogout}
          className="mt-auto w-full rounded-full bg-gradient-to-r from-[#a605c7] to-[#5d075f] px-3 py-2 text-xs font-semibold text-white shadow-sm hover:brightness-110"
        >
          Log out
        </button>
      </aside>

      <div className="flex flex-1 flex-col">
        {/* Mobile top bar */}
        <header className="flex items-center justify-between border-b border-white/60 bg-white/95 px-4 py-3 shadow-sm md:hidden">
          <div className="flex items-center gap-2">
            <div className="relative h-9 w-9 overflow-hidden rounded-full">
              <Image
                src="/images/reu_logo/logo.png"
                alt="REU logo"
                fill
                className="object-contain"
                sizes="36px"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a605c7]">
                Admin
              </span>
              <span className="text-xs font-semibold text-slate-900">Dashboard</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[4px] rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm"
            aria-label="Open admin menu"
          >
            <span className="block h-[2px] w-4 rounded bg-slate-800" />
            <span className="block h-[2px] w-4 rounded bg-slate-800" />
            <span className="block h-[2px] w-4 rounded bg-slate-800" />
            <span className="sr-only">Menu</span>
          </button>
        </header>

        <main className="flex-1 px-4 py-4 md:px-8 md:py-6">{children}</main>
      </div>

      {/* Mobile slide-in sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/30 md:hidden" onClick={() => setMobileOpen(false)}>
          <aside
            className="flex h-full w-64 flex-col border-l border-white/60 bg-white/95 px-5 py-6 text-sm text-slate-700 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="relative h-9 w-9 overflow-hidden rounded-full">
                  <Image
                    src="/images/reu_logo/logo.png"
                    alt="REU logo"
                    fill
                    className="object-contain"
                    sizes="36px"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a605c7]">
                    Admin
                  </span>
                  <span className="text-xs font-semibold text-slate-900">Menu</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700"
                aria-label="Close admin menu"
              >
                <span className="text-lg leading-none">×</span>
              </button>
            </div>
            <nav className="space-y-2">
              <NavLink href="/admin" label="Overview" currentPath={pathname} onClick={() => setMobileOpen(false)} />
              <NavLink href="/admin/events" label="Events" currentPath={pathname} onClick={() => setMobileOpen(false)} />
              <NavLink
                href="/admin/quality-assurance"
                label="Quality Assurance"
                currentPath={pathname}
                onClick={() => setMobileOpen(false)}
              />
              <NavLink
                href="/admin/certificates"
                label="Certificates"
                currentPath={pathname}
                onClick={() => setMobileOpen(false)}
              />
              <NavLink href="/admin/clients" label="Clients" currentPath={pathname} onClick={() => setMobileOpen(false)} />
              <div className="mt-4 border-t pt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Forms
              </div>
              <NavLink
                href="/admin/forms/enquiry"
                label="Product Enquiries"
                currentPath={pathname}
                onClick={() => setMobileOpen(false)}
              />
              <NavLink
                href="/admin/forms/feedback"
                label="Customer Feedback"
                currentPath={pathname}
                onClick={() => setMobileOpen(false)}
              />
              <NavLink
                href="/admin/forms/service-requests"
                label="Service Requests"
                currentPath={pathname}
                onClick={() => setMobileOpen(false)}
              />
              <NavLink
                href="/admin/forms/contact"
                label="Contact Messages"
                currentPath={pathname}
                onClick={() => setMobileOpen(false)}
              />
            </nav>
            <button
              type="button"
              onClick={handleLogout}
              className="mt-auto w-full rounded-full bg-gradient-to-r from-[#a605c7] to-[#5d075f] px-3 py-2 text-xs font-semibold text-white shadow-sm hover:brightness-110"
            >
              Log out
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}

function NavLink({
  href,
  label,
  currentPath,
  onClick,
}: {
  href: string;
  label: string;
  currentPath: string;
  onClick?: () => void;
}) {
  const active = currentPath === href || (href !== "/admin" && currentPath.startsWith(href));
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block rounded-full px-3 py-2 text-xs font-medium transition ${
        active
          ? "bg-gradient-to-r from-[#a605c7] to-[#5d075f] shadow-sm !text-white"
          : "text-slate-700 hover:bg-slate-100"
      }`}
      style={active ? { color: 'white' } : undefined}
    >
      {label}
    </Link>
  );
}
