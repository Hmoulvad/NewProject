import IconButton from "@/components/UI/IconButton";
import Link from "@/components/UI/Link";
import NextLink from "next/link";
import styles from "./styles.module.css";
import { PhosphorLogo } from "@phosphor-icons/react/dist/ssr/PhosphorLogo";

export default function Header() {
  return (
    <header className={styles.header}>
      <NextLink href="/" title="Logo">
        <IconButton size="large" icon={<PhosphorLogo />} />
      </NextLink>
      <ul>
        <li>
          <Link href="/spotify">Spotify</Link>
        </li>
        <li>
          <Link href="/ui">UI Components</Link>
        </li>
      </ul>
    </header>
  );
}
