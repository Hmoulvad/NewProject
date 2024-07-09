import Footer from "@/app/_components/Navigation/Footer";
import Header from "@/app/_components/Navigation/Header";
import Scripts from "@/app/_components/Scripts";
import type { Metadata } from "next";
import "../styles/globals.css";
import DeviceProvider from "./_lib/context/DeviceProvider";
import getDevice from "./_lib/utils/getDevice";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  creator: "Hannibal B. Moulvad",
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isMobile } = getDevice();
  return (
    <html lang="en">
      <body>
        <DeviceProvider isMobile={isMobile}>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
          <Scripts />
          <div id="portal-container" />
        </DeviceProvider>
      </body>
    </html>
  );
}
