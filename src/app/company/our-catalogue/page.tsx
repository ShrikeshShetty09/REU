"use client";

export default function OurCataloguePage() {
  return (
    <main className="min-h-screen bg-black/5">
      <div className="h-[calc(100vh-80px)] w-full">
        <iframe
          className="h-full w-full"
          src="/reu_catalogue/REU%20catlogue.pdf#view=FitH"
          title="REU Catalogue PDF"
        />
      </div>
    </main>
  );
}
