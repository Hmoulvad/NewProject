import { Footer } from "@/features/Navigation/Footer";
import { Header } from "@/features/Navigation/Header";
import GlobalScripts from "@/features/Scripts";
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <GlobalScripts />
      </body>
    </html>
  );
}
