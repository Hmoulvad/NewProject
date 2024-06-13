import { Button } from "@/components/UI/Button";
import { Link } from "@/components/UI/Link";
import { GoogleChromeLogo } from "@phosphor-icons/react/dist/ssr";
import NextLink from "next/link";
import { Search } from "../components/Search";
import styles from "./Desktop.module.css";

export default function DesktopHeader() {
  return (
    <header className={styles.header}>
      <NextLink href="/" title="Logo">
        <Button
          className={styles.logo}
          size="large"
          icon={<GoogleChromeLogo />}
        />
      </NextLink>
      <Search />
      <ul>
        <li>
          <Link href="/spotify">Spotify</Link>
        </li>
      </ul>
    </header>
  );
}
