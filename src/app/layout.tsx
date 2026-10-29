import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://islamabdelrahman.vercel.app"),
  title: "Islam Abdelrahman — Software Engineer",
  description:
    "Dubai-based software engineer building thoughtful full-stack web applications. Explore Fullashes, my experience, and the details behind the work.",
  openGraph: {
    title: "Islam Abdelrahman — Software Engineer",
    description:
      "Thoughtful web experiences. From the interface to the logic behind it.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${instrument.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
