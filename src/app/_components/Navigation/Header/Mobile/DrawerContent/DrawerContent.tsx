import { Link } from "@/components/UI/Link";
import styles from "./DrawerContent.module.css";

export default function DrawerContent() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link inverted href="/spotify">
          Spotify
        </Link>
      </li>
    </ul>
  );
}
