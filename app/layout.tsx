import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const SITE = "https://meet-sutariya-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Meet Sutariya — Software Engineer",
  description:
    "CS + Data Science at Arizona State. Distributed systems, platform and backend infrastructure, applied AI retrieval — built in C++, Java, Go, Python and TypeScript.",
  keywords: [
    "Meet Sutariya",
    "software engineer",
    "distributed systems",
    "platform engineering",
    "backend",
    "Arizona State University",
  ],
  authors: [{ name: "Meet Sutariya", url: SITE }],
  openGraph: {
    title: "Meet Sutariya — Software Engineer",
    description:
      "Distributed systems, platform infrastructure and applied AI. CS + Data Science @ ASU '27.",
    url: SITE,
    siteName: "Meet Sutariya",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Sutariya — Software Engineer",
    description:
      "Distributed systems, platform infrastructure and applied AI. CS + Data Science @ ASU '27.",
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable} ${jetbrains.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
