"use client";

import { usePathname } from "next/navigation";
import { Playfair_Display, Space_Grotesk } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${playfair.variable} antialiased bg-[radial-gradient(circle_at_top,_#ffe5ff,_#f6e0ff,_#f7f0fb)] text-foreground`}
      >
        {isAdminRoute ? (
          <div className="min-h-screen">{children}</div>
        ) : (
          <>
            <NavBar />
            <div className="min-h-screen">{children}</div>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
