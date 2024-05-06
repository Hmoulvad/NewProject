import { Footer } from "@/features/Navigation/Footer";
import { Header } from "@/features/Navigation/Header";
import Scripts from "@/features/Scripts";
import "../styles/globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  generator: "Next.js",
  manifest: "/manifest.json",
  creator: "Hannibal B. Moulvad",
  keywords: ["next.js", "react", "typescript", "next14", "nextjs14", "pwa"],
  authors: [{ name: "Hannibal B. Moulvad" }],
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export const viewport: Viewport = {
  minimumScale: 1,
  initialScale: 1,
  width: "device-width",
  viewportFit: "cover",
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/open-props" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}
