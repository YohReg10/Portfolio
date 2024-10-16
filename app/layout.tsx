import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Junge } from "next/font/google";

// Police Local
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

// Police externe
const junge = Junge({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Yohan Regad 👨🏻‍💻",
  description: "I am a student web developer! I'm using Symfony, Docker, PHP.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full dark">
      <body className={`${geistSans.variable} ${junge.variable} font-sans h-full bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
