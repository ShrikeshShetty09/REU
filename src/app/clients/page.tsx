import Image from "next/image";
import { additionalClients, featuredClients } from "@/data/clients";

const getInitials = (name: string) => {
  const letters = name.match(/\b[A-Z0-9]/g);
  if (!letters || letters.length === 0) return name.slice(0, 2).toUpperCase();
  return letters.slice(0, 2).join("");
};

const getCircleStyle = (index: number) => {
  const hue = (index * 47) % 360;
  const start = `hsl(${hue} 85% 92%)`;
  const end = `hsl(${(hue + 20) % 360} 70% 82%)`;
  return {
    background: `linear-gradient(135deg, ${start}, ${end})`,
    color: `hsl(${hue} 35% 30%)`,
  };
};

export default function ClientsPage() {
  const totalClients = featuredClients.length + additionalClients.length;
  const supportingClients = additionalClients.slice(0, 100);

  return (
    <main className="space-y-16 pb-24 pt-16">
      <section className="mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-white/40 bg-white/90 shadow-[0_30px_120px_-60px_rgba(122,2,142,.6)]">
        <div className="bg-gradient-to-r from-[#045de9] to-[#a605c7] px-6 py-8 text-white">
          <p className="text-xs uppercase tracking-[0.6em]">Our Clients</p>
          <h1 className="mt-3 text-4xl font-bold">Trusted by process leaders across India</h1>
          <p className="mt-3 max-w-3xl text-sm text-white/80">
            Clients are the most important entities in any domain. Inspired by the reference experience, we showcase the
            organizations that count on REU Engineering and LLP (built on the legacy of Nirmal Industrial Controls) for
            engineered products and services across manufacturing, pharma, energy, and infrastructure.
          </p>
        </div>
        <div className="px-6 pb-8 pt-10">
          <p className="text-center text-sm uppercase tracking-[0.4em] text-[#a605c7]">{totalClients}+ organisations</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-6">
        <div className="rounded-[36px] border border-white/40 bg-white/95 p-8 shadow">
          <div className="mb-6 flex flex-col gap-2 text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-[#a605c7]">Flagship & strategic partners</p>
            <p className="text-lg text-foreground/70">Logos provided by the client, showcased exactly as requested.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {featuredClients.map((client, index) => {
              const initials = getInitials(client.name);
              const circleStyle = getCircleStyle(index);
              return (
                <div key={client.name} className="flex flex-col items-center gap-3 text-center">
                  {client.logo ? (
                    <div className="relative h-20 w-24 overflow-hidden rounded-2xl border border-white/50 bg-white p-2 shadow">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        fill
                        sizes="96px"
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div
                      className="flex h-20 w-20 items-center justify-center rounded-full border border-white/60 text-lg font-semibold shadow-md"
                      style={circleStyle}
                    >
                      {initials}
                    </div>
                  )}
                  <p className="text-xs font-medium text-foreground/80">{client.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-6">
        <div className="rounded-[36px] border border-white/40 bg-gradient-to-br from-white via-[#ffe9fe] to-[#f8e2ff] p-8 shadow-xl">
          <div className="flex flex-col gap-2 text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-[#a605c7]">And 100+ more clients</p>
            <p className="text-base text-foreground/70">
              Additional long-term relationships across pharma, speciality chemicals, energy, and public sector enterprises.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[0, 1, 2, 3].map((col) => (
              <ul key={col} className="space-y-3 text-sm text-foreground/80">
                {supportingClients
                  .filter((_, idx) => idx % 4 === col)
                  .map((client) => (
                    <li key={client.name}>• {client.name}</li>
                  ))}
              </ul>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
