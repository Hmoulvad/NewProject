import { Typography } from "../../Typography";
import { InputProps } from "../types";
import styles from "./Calender.module.css";

type Props = InputProps;

export default function Calender({ label, ...rest }: Props) {
  return (
    <Typography as="label" className={styles.label}>
      <Typography htmlFor={rest.name}>{label}</Typography>
      <Typography
        defaultValue={new Date().toISOString().split("T")[0]}
        id={rest.name}
        type="date"
        as="input"
        {...rest}
      />
    </Typography>
  );
}
