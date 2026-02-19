import React from "react";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppCtxProvider from "@/appContext";

const spaceGrotesk: NextFontWithVariable = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jimmydev-portfolio.vercel.app/"),
  title: "Ejims Portfolio",
  description: "The portfolio of the sofware engineer Ejim Favour.",
  authors: [{ name: "Ejim Favour" }],
  openGraph: {
    description: "The portfolio of the sofware engineer Ejim Favour.",
    type: "website",
    url: "https://jimmydev-portfolio.vercel.app/",
    images: [{ url: "https://i.ibb.co/4t2Zh14/IMG-0247.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <AppCtxProvider>
          <div className="bg-bg-color min-h-screen font-spaceGrotesk">
            <Header />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </div>
        </AppCtxProvider>
      </body>
    </html>
  );
}
