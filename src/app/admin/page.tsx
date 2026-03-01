"use client";

import Link from "next/link";

export default function AdminHomePage() {
  return (
    <main className="space-y-6">
      <section className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-[#a605c7]">Admin</p>
        <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
        <p className="text-sm text-slate-600">
          Manage public content for the REU website. Changes here immediately reflect on the live site.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AdminCard title="Events" href="/admin/events" description="Add or remove expo and event highlights." />
        <AdminCard
          title="Quality Assurance"
          href="/admin/quality-assurance"
          description="Manage quality practices and accreditation visuals."
        />
        <AdminCard
          title="Certificates"
          href="/admin/certificates"
          description="Upload statutory and industry certificates."
        />
        <AdminCard title="Clients" href="/admin/clients" description="Maintain the list of key clients and logos." />
      </section>

      <section className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Forms</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AdminCard
            title="Product Enquiries"
            href="/admin/forms/enquiry"
            description="View enquiries submitted from the Product Enquiry form."
          />
          <AdminCard
            title="Customer Feedback"
            href="/admin/forms/feedback"
            description="Review feedback and ratings from customers."
          />
          <AdminCard
            title="Service Requests"
            href="/admin/forms/service-requests"
            description="Track submitted service and support requests."
          />
          <AdminCard
            title="Contact Messages"
            href="/admin/forms/contact"
            description="Read messages from the Contact page."
          />
        </div>
      </section>
    </main>
  );
}

function AdminCard({ title, href, description }: { title: string; href: string; description: string }) {
  return (
    <Link
      href={href}
      className="block rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm transition hover:border-[#a605c7]/50 hover:shadow-md"
    >
      <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
      <p className="mt-1 text-xs text-slate-500">{description}</p>
    </Link>
  );
}
