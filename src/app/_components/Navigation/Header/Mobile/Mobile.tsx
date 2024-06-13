import { Button } from "@/components/UI/Button";
import { GoogleChromeLogo } from "@phosphor-icons/react/dist/ssr";
import { default as NextLink } from "next/link";
import DrawerContent from "./DrawerContent";
import styles from "./Mobile.module.css";
import ToggleDrawer from "./ToggleDrawer";

export default function MobileHeader() {
  return (
    <header className={styles.header}>
      <NextLink href="/" title="Logo">
        <Button
          className={styles.logo}
          size="large"
          icon={<GoogleChromeLogo />}
        />
      </NextLink>
      <ToggleDrawer>
        <DrawerContent />
      </ToggleDrawer>
    </header>
  );
}
