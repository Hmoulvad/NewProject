import { Images } from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.css";

export default function ProductCard() {
  return (
    <article className={styles.card}>
      <header>
        <Images weight="thin" />
      </header>
      <section></section>
    </article>
  );
}
