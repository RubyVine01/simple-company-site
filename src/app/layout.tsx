import { Roboto } from "next/font/google";
import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Box } from "@mui/material";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Simple Company Site",
  description: "Simple Company Site",
  openGraph: {
    title: "Simple Company Site",
    description: "A simple site demonstrating React and Next.js.",
    type: "website",
    url: "https://example.com",
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Simple Company Site",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@example",
    title: "Simple Company Site",
    description: "A simple site demonstrating React and Next.js.",
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Simple Company Site",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <head></head>
      <body>
        <Header />
        <Box component="main">{children}</Box>
        <Footer />
      </body>
    </html>
  );
}
