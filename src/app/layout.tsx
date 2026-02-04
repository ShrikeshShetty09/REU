import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "REU Engineering and LLP",
  description:
    "Purplish pink experience mirroring the Nirmal Industrial Controls site with mega menus, imagery, and detailed subpages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${playfair.variable} antialiased bg-[radial-gradient(circle_at_top,_#ffe5ff,_#f6e0ff,_#f7f0fb)] text-foreground`}
      >
        <NavBar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
