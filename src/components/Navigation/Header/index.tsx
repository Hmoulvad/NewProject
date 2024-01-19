import IconButton from "@/components/UI/IconButton";
import Link from "@/components/UI/Link";
import { CodepenLogo } from "@phosphor-icons/react/dist/ssr/CodepenLogo";
import NextLink from "next/link";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <NextLink href="/" title="Logo">
        <IconButton size="large" icon={<CodepenLogo />} />
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
