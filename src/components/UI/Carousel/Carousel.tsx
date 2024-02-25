import { Typography } from "..";
import styles from "./styles.module.css";

type Props = {
  title: string;
  items: JSX.Element[];
};

export default function Carousel({ title, items }: Props) {
  return (
    <section className={styles.carousel}>
      <header>
        <Typography variant="display3" as="h2">
          {title}
        </Typography>
      </header>
      <ul>
        {items.map((item) => (
          <li key={item.key}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
