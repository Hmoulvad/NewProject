import { PropsWithChildren, ReactNode } from "react";
import { Typography } from "../Typography";
import styles from "./styles.module.css";

type Props = {
  message: ReactNode;
} & PropsWithChildren;

export default function Tooltip({ children, message }: Props) {
  return (
    <div className={styles.container}>
      <Typography variant="label" inverted className={styles.tooltip}>
        {message}
      </Typography>
      <Typography>{children}</Typography>
    </div>
  );
}
