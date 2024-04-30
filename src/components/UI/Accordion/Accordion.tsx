import { PropsWithChildren } from "react";
import { Typography } from "../Typography";
import styles from "./styles.module.css";
import clsx from "clsx";

type Props = {
  title: string;
  fill?: boolean;
} & PropsWithChildren;

export default function Accordion({ title, children, fill = false }: Props) {
  return (
    <details
      className={clsx(styles.details, {
        [styles.fill]: fill,
      })}
    >
      <summary>
        <Typography variant="body">{<strong>{title}</strong>}</Typography>
      </summary>
      {children}
    </details>
  );
}
