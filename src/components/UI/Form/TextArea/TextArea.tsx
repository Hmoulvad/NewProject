import { HTMLInputTypeAttribute } from "react";
import { Typography } from "../../Typography";
import { InputProps } from "../types";
import styles from "./styles.module.css";

type Props = {
  placeholder: string;
  type?: HTMLInputTypeAttribute;
} & InputProps;

export default function TextArea({ label, ...rest }: Props) {
  return (
    <Typography as="label" className={styles.label}>
      <Typography htmlFor={rest.name}>{label}</Typography>
      <Typography as="textarea" {...rest} />
    </Typography>
  );
}
