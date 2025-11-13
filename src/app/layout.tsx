import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand } from "next/font/google";
import Navbar from "@/components/homepage/layout/navbar";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import 'aos/dist/aos.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RSUD CIDERES",
  description: "RSUD CIDERES adalah rumah sakit yang berdedikasi untuk memberikan layanan kesehatan terbaik kepada masyarakat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${quicksand.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
