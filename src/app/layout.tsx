import type { Metadata } from "next";
import { Cabin_Condensed, Calistoga } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/footer/Footer";
import FooterBottomBar from "@/components/common/FooterBottomBar";
import MarqueeText from "@/components/common/MarqueeText";

const cabinCondensed = Cabin_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cabin-condensed",
});

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-calistoga",
});

export const metadata: Metadata = {
  title: "Brewhaus - Life Begins After Coffee",
  description: "Life Begins After Coffee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cabinCondensed.variable} ${calistoga.variable} antialiased`}
      >
        <Header />
        {children}
        <MarqueeText />
        <Footer />
        <FooterBottomBar />
      </body>
    </html>
  );
}
