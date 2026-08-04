import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elderly Care & Charity Foundation Platform | Dignity & Transparent Aid",
  description: "Providing dignified care for elderly residents and connecting generous donors with verified underprivileged beneficiaries through transparent impact reporting.",
  keywords: ["Elderly Care", "Charity Platform", "Sponsor Grandparents", "Verified Donations", "Transparent NGO", "Winter Aid"],
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#046a38",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#fcfbfa] text-slate-800">
        <Navbar />
        <main className="flex-1 pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
