import IconButton from "@/components/UI/IconButton";
import Link from "@/components/UI/Link";
import NextLink from "next/link";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <NextLink href="/" title="Logo">
        <IconButton size="large" icon="PhosphorLogo" />
      </NextLink>
      <ul>
        <li>
          <Link href="/ui">UI Components</Link>
        </li>
      </ul>
    </header>
  );
}
