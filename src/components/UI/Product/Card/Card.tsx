import { Skeleton } from "@/components/UI/Skeleton";
import { Images } from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.css";

export default function ProductCard() {
  return (
    <article className={styles.card}>
      <header>
        <Images weight="thin" />
      </header>
      <section>
        <Skeleton mimic="display4" width={180} />
        <Skeleton mimic="body" width={250} />
        <Skeleton mimic="body" width={200} />
        <Skeleton mimic="body" width={150} />
      </section>
    </article>
  );
}
