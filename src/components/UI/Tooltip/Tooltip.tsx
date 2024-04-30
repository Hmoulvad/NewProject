import { PropsWithChildren, ReactNode } from "react";
import { Typography } from "../Typography";
import styles from "./styles.module.css";
import { Info } from "@phosphor-icons/react/dist/ssr";

type Props = {
  message: ReactNode;
} & PropsWithChildren;

export default function Tooltip({ children, message }: Props) {
  return (
    <div className={styles.container}>
      <Typography inverted as="div" className={styles.tooltip}>
        {message}
        <Info />
      </Typography>
      <Typography>{children}</Typography>
    </div>
  );
}
