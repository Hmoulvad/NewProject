import { HTMLInputTypeAttribute } from "react";
import { Typography } from "../../Typography";
import { InputProps } from "../types";
import styles from "./Input.module.css";

type Props = {
  placeholder: string;
  type?: HTMLInputTypeAttribute;
} & InputProps;

export default function Input({ label, ...rest }: Props) {
  return (
    <Typography as="label" className={styles.label}>
      <Typography htmlFor={rest.name}>{label}</Typography>
      <Typography as="input" {...rest} />
    </Typography>
  );
}

