"use client";

import { useState } from "react";
import Image from "next/image";

type EventItem = {
  id: string;
  name: string;
  imageUrls: string[];
};

export function EventsClient({ events }: { events: EventItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(events[0]?.id ?? null);
  const activeEvent = events.find((e) => e.id === activeId) ?? events[0] ?? null;

  return (
    <main className="space-y-10 pb-20 pt-16">
      <section className="mx-auto max-w-6xl space-y-4 px-6">
        <p className="text-xs uppercase tracking-[0.4em] text-[#a605c7]">Company</p>
        <h1 className="text-3xl font-bold text-[#360236]">Events & Expos</h1>
        <p className="text-base text-foreground/75">
          REU has participated in key industry exhibitions including ChemTech Expo (Mumbai) and IPEC (Hyderabad). Below are
          highlights from these expos.
        </p>
      </section>

      <section className="mx-auto max-w-6xl grid gap-8 px-6 lg:grid-cols-[260px,1fr]">
        <div className="space-y-3 rounded-[24px] border border-[#f0d9ff] bg-white/95 p-4 text-sm text-foreground/80">
          {events.map((event) => (
            <button
              key={event.id}
              type="button"
              onClick={() => setActiveId(event.id)}
              className={`w-full rounded-2xl px-4 py-2 text-left text-sm font-semibold transition ${
                activeEvent?.id === event.id
                  ? "bg-gradient-to-r from-[#ff96ff] to-[#a605c7] text-white"
                  : "bg-white text-[#5d075f] hover:bg-[#fdf4ff]"
              }`}
            >
              <span>{event.name}</span>
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-[#360236]">{activeEvent?.name ?? "Events"}</h2>
          {activeEvent && activeEvent.imageUrls?.length ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {activeEvent.imageUrls.map((src) => (
                <div
                  key={src}
                  className="relative h-56 overflow-hidden rounded-[24px] border border-[#f0d9ff] bg-white"
                >
                  <Image
                    src={src}
                    alt={activeEvent.name}
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px) 50vw, 20vw"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="rounded-[24px] border border-dashed border-[#e3b7ff] bg-white/80 p-6 text-sm text-foreground/70">
              Event photographs will be uploaded shortly.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
