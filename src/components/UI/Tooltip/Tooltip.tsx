import { PropsWithChildren, ReactNode } from "react";
import { Typography } from "../Typography";
import styles from "./Tooltip.module.css";
import { useId } from "react";

type Props = {
  message: ReactNode;
} & PropsWithChildren;

export default function Tooltip({ children, message }: Props) {
  const tooltipId = useId();

  return (
    <div className={styles.container}>
      <Typography
        variant="label"
        inverted
        className={styles.tooltip}
        id={tooltipId}
        role="tooltip"
      >
        {message}
      </Typography>
      <Typography aria-describedby={tooltipId}>{children}</Typography>
    </div>
  );
}
