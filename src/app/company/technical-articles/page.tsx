import fs from "fs";
import path from "path";
import Link from "next/link";

function getCatalogueFiles() {
  try {
    const dir = path.join(process.cwd(), "public", "reu_catalogue");
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isFile())
      .map((entry) => ({ name: entry.name, href: `/reu_catalogue/${entry.name}` }));
  } catch {
    return [];
  }
}

export default function TechnicalArticlesPage() {
  const files = getCatalogueFiles();

  return (
    <main className="space-y-10 pb-20 pt-16">
      <section className="mx-auto max-w-6xl space-y-4 px-6">
        <p className="text-xs uppercase tracking-[0.4em] text-[#a605c7]">Company</p>
        <h1 className="text-3xl font-bold text-[#360236]">Technical Articles & REU Catalogue</h1>
        <p className="text-base text-foreground/75">
          Access the REU catalogue and related technical material that highlight our capabilities in gas, air, safety, gas
          detection and process control systems.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        {files.length === 0 ? (
          <p className="rounded-[24px] border border-dashed border-[#e3b7ff] bg-white/80 p-6 text-sm text-foreground/70">
            REU catalogue files will be shown here once added. Please place documents in <code>public/reu_catalogue</code>.
          </p>
        ) : (
          <ul className="space-y-3 rounded-[24px] border border-[#f0d9ff] bg-white/95 p-6 text-sm text-foreground/80">
            {files.map((file) => (
              <li key={file.href} className="flex items-center justify-between gap-4">
                <span className="break-all">{file.name}</span>
                <Link
                  href={file.href}
                  target="_blank"
                  className="rounded-full bg-gradient-to-r from-[#a605c7] to-[#5d075f] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white"
                >
                  View
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
