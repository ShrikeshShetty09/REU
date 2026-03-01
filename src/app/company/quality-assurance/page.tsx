import Image from "next/image";
import { getQualityFromDb } from "@/lib/appwrite";

export default async function QualityAssurancePage() {
  const items = await getQualityFromDb();

  const hasItems = items.length > 0;

  return (
    <main className="space-y-10 pb-20 pt-16">
      <section className="mx-auto max-w-6xl space-y-4 px-6">
        <p className="text-xs uppercase tracking-[0.4em] text-[#a605c7]">Company</p>
        <h1 className="text-3xl font-bold text-[#360236]">Quality Assurance</h1>
        <p className="text-base text-foreground/75">
          This section highlights quality assurance practices and certifications that demonstrate REU&apos;s commitment to
          safe, reliable and compliant engineering delivery.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        {!hasItems ? (
          <p className="rounded-[24px] border border-dashed border-[#e3b7ff] bg-white/80 p-6 text-center text-sm text-foreground/70">
            Soon to be updated
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-4 rounded-[24px] border border-[#f0d9ff] bg-white/95 p-6 text-sm text-foreground/80 shadow"
              >
                <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-[#faf5ff]">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-contain"
                  />
                </div>
                <p className="text-center text-sm font-semibold text-[#360236]">{item.name}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
