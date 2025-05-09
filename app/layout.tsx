import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import { Geist, Geist_Mono, Playfair } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Typora : Read and write stories",
  description: "Read and write stories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
          <Navbar/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
