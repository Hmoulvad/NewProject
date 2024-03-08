import { Footer } from "@/features/Navigation/Footer";
import { Header } from "@/features/Navigation/Header";
import Scripts from "@/features/Scripts";
import type { Metadata } from "next";
import "../styles/globals.css";

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
