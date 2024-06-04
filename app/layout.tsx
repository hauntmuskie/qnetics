import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qnetics | Solusi Website dan AI untuk Bisnis Anda",
  description:
    "Qnetics adalah layanan pembuatan situs web, perangkat lunak dan AI. Kami berspesialisasi dalam pembuatan perangkat lunak khusus dan situs web yang didukung AI untuk membantu bisnis sukses secara online.",
};

export const runtime = 'edge'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
