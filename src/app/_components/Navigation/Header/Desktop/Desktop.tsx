import { ButtonAsLink } from "@/components/UI/Button";
import { Link } from "@/components/UI/Link";
import { GoogleChromeLogo } from "@phosphor-icons/react/dist/ssr";
import { Search } from "../components/Search";
import styles from "./Desktop.module.css";

export default function DesktopHeader() {
  return (
    <header className={styles.header}>
      <ButtonAsLink
        href="/"
        title="Logo"
        className={styles.logo}
        size="large"
        icon={<GoogleChromeLogo />}
      />
      <Search />
      <ul>
        <li>
          <Link href="/spotify">Spotify</Link>
        </li>
        <li>
          <Link href="/form">Form</Link>
        </li>
      </ul>
    </header>
  );
}
