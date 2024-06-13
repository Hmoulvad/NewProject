import { useId } from "react";
import { Typography } from "../Typography";
import CarouselButtons from "./Buttons";
import styles from "./Carousel.module.css";

type Props = {
  title: string;
  items: JSX.Element[];
};

export default function Carousel({ title, items }: Props) {
  const id = useId();
  return (
    <section className={styles.carousel}>
      <header>
        <Typography variant="display3" as="h2">
          {title}
        </Typography>
        <CarouselButtons targetId={id} />
      </header>
      <ul id={id}>
        {items.map((item) => (
          <li key={item.key}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
