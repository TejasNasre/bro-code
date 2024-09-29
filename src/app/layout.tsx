import type { Metadata } from "next";
import "./globals.css";
import { DM_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm_mono",
});

export const metadata: Metadata = {
  title: "Scholar Connect",
  description: "Apply Scholarships Around India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={mono.className}>
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
