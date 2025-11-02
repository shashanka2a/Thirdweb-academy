import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "thirdweb.academy | Building the Future of Web3",
  description: "We partner with ambitious teams to build exceptional Web3 experiences. From concept to launch, we bring your vision to life.",
  keywords: ["Web3", "blockchain", "smart contracts", "dApp development", "NFT platform", "DAO", "tokenomics"],
  authors: [{ name: "thirdweb.academy" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "thirdweb.academy | Building the Future of Web3",
    description: "We partner with ambitious teams to build exceptional Web3 experiences. From concept to launch, we bring your vision to life.",
    type: "website",
    siteName: "thirdweb.academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "thirdweb.academy | Building the Future of Web3",
    description: "We partner with ambitious teams to build exceptional Web3 experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

