"use client";

import Image from "next/image";
import { useState } from "react";

export type CertificateItem = {
  name: string;
  href: string;
};

type Props = {
  certificates: CertificateItem[];
};

export const CertificatesGallery = ({ certificates }: Props) => {
  const [active, setActive] = useState<CertificateItem | null>(null);

  const handleClose = () => setActive(null);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((file) => {
          const isPdf = file.name.toLowerCase().endsWith(".pdf");
          return (
            <button
              key={file.name}
              type="button"
              onClick={() => setActive(file)}
              className="flex flex-col items-center gap-4 rounded-[24px] border border-[#f0d9ff] bg-white/95 p-6 text-center text-sm text-foreground/80 shadow hover:-translate-y-1 hover:shadow-lg transition cursor-pointer"
            >
              <div
                className="relative w-full overflow-hidden rounded-2xl bg-[#faf5ff]"
                style={{ height: 420 }}
              >
                {isPdf ? (
                  <iframe
                    src={file.href}
                    title={file.name}
                    className="h-full w-full"
                  />
                ) : (
                  <Image
                    src={file.href}
                    alt={file.name}
                    fill
                    className="object-contain cursor-pointer"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                )}
              </div>
              <span className="break-all">{file.name.replace(/\.[^/.]+$/, "")}</span>
            </button>
          );
        })}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={handleClose}
        >
          <div className="relative max-h-[90vh] max-w-3xl w-full mx-4 rounded-3xl bg-white p-4 shadow-2xl">
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white text-sm cursor-pointer"
            >
              ✕
            </button>
            <div className="relative h-[70vh] w-full">
              {active.name.toLowerCase().endsWith(".pdf") ? (
                <iframe
                  src={active.href}
                  title={active.name}
                  className="h-full w-full rounded-2xl border border-[#f0d9ff]"
                />
              ) : (
                <Image
                  src={active.href}
                  alt={active.name}
                  fill
                  className="object-contain"
                  sizes="(max-width:1024px) 100vw, 60vw"
                />
              )}
            </div>
            <p className="mt-3 text-center text-sm font-medium text-[#360236] break-all">
              {active.name.replace(/\.[^/.]+$/, "")}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
