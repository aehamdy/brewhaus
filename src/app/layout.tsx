import type { Metadata } from "next";
import { Cabin_Condensed, Calistoga } from "next/font/google";
import "./globals.css";

const cabinCondensed = Cabin_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // available weights
  variable: "--font-cabin-condensed",
});

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400", // only 400 is available
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
        {children}
      </body>
    </html>
  );
}
