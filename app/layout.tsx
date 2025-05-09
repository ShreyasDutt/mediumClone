import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import { Playfair } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const playfair = Playfair({
  subsets:["latin"]
})

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
        <body className={`${playfair.className} antialiased bg-[#F7F4ED]`}>
          <Navbar/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
