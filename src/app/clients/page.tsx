import Image from "next/image";
import { getClientsFromDb } from "@/lib/appwrite";

const getInitials = (name: string) => {
  const letters = name.match(/\b[A-Z0-9]/g);
  if (!letters || letters.length === 0) return name.slice(0, 2).toUpperCase();
  return letters.slice(0, 2).join("");
};

export default async function ClientsPage() {
  const clients = await getClientsFromDb();

  return (
    <main className="pb-24 pt-16">
      <section className="mx-auto max-w-6xl space-y-8 px-6">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-[#a605c7]">Our Clients</p>
          <h1 className="text-3xl font-bold text-[#360236] sm:text-4xl">Flagship clients</h1>
        </div>

        <div className="rounded-[32px] border border-white/40 bg-white/95 p-6 shadow">
          <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {clients.map((client) => {
              const initials = getInitials(client.name);
              return (
                <div key={client.id} className="flex flex-col items-center gap-3 text-center">
                  {client.logoUrl ? (
                    <div className="relative h-20 w-24 overflow-hidden rounded-2xl border border-white/50 bg-white p-2 shadow">
                      <Image
                        src={client.logoUrl}
                        alt={`${client.name} logo`}
                        fill
                        sizes="96px"
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/60 bg-[#f5e6ff] text-lg font-semibold text-[#4a014e] shadow-md">
                      {initials}
                    </div>
                  )}
                  <p className="text-xs font-medium text-foreground/80">{client.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-foreground/70">+114 more clients across India</p>
      </section>
    </main>
  );
}
