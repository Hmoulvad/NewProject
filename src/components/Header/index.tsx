import { SSR } from "@phosphor-icons/react";
import NextLink from "next/link";
import IconButton from "../UI/IconButton";
import Link from "../UI/Link";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <NextLink href="/">
        <IconButton size="large">
          <SSR.PhosphorLogo />
        </IconButton>
      </NextLink>
      <ul>
        <li>
          <Link href="/ui">UI Components</Link>
        </li>
      </ul>
    </header>
  );
}
