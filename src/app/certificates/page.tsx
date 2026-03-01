import { CertificatesGallery } from "@/components/CertificatesGallery";
import { getCertificatesFromDb } from "@/lib/appwrite";

export default async function CertificatesPage() {
  const docs = await getCertificatesFromDb();
  const certificates = docs.map((doc) => ({ name: doc.name, href: doc.imageUrl }));

  return (
    <main className="space-y-10 pb-20 pt-16">
      <section className="mx-auto max-w-6xl space-y-4 px-6">
        <p className="text-xs uppercase tracking-[0.4em] text-[#a605c7]">Certificates</p>
        <h1 className="text-3xl font-bold text-[#360236]">REU Certifications</h1>
        <p className="text-base text-foreground/75">
          This section displays certifications and registrations relevant to REU&apos;s work in gas, air, safety, gas detection and
          process control systems.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        {certificates.length === 0 ? (
          <p className="rounded-[24px] border border-dashed border-[#e3b7ff] bg-white/80 p-6 text-sm text-foreground/70">
            Certificates will be displayed here once they are available.
          </p>
        ) : (
          <CertificatesGallery certificates={certificates} />
        )}
      </section>
    </main>
  );
}
