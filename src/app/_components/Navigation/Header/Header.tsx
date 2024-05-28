import { Button, Link } from "@/components/UI";
import { CodepenLogo } from "@phosphor-icons/react/dist/ssr/CodepenLogo";
import NextLink from "next/link";
import styles from "./styles.module.css";
import { Search } from "./Search";

export default function Header() {
  return (
    <header className={styles.header}>
      <NextLink href="/" title="Logo">
        <Button className={styles.logo} size="large" icon={<CodepenLogo />} />
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
