import { ButtonAsLink } from "@/components/UI/Button";
import { GoogleChromeLogo } from "@phosphor-icons/react/dist/ssr";
import DrawerContent from "./DrawerContent";
import styles from "./Mobile.module.css";
import ToggleDrawer from "./ToggleDrawer";

export default function MobileHeader() {
  return (
    <header className={styles.header}>
      <ButtonAsLink
        href="/"
        title="Logo"
        className={styles.logo}
        size="large"
        icon={<GoogleChromeLogo />}
      />
      <ToggleDrawer>
        <DrawerContent />
      </ToggleDrawer>
    </header>
  );
}
