import { Button } from "@/components/UI/Button";
import { Link } from "@/components/UI/Link";
import { CodepenLogo } from "@phosphor-icons/react/dist/ssr/CodepenLogo";
import NextLink from "next/link";
import { Search } from "./Search";
import styles from "./styles.module.css";

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
