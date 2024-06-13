import { Check } from "@phosphor-icons/react/dist/ssr";
import { Typography } from "../../Typography";
import { InputProps } from "../types";
import styles from "./Checkbox.module.css";

type Props = {} & InputProps;

export default function Checkbox({ name, label }: Props) {
  return (
    <label className={styles.label}>
      <Typography htmlFor={name}>{label}</Typography>
      <Typography type="checkbox" name={name} as="input" />
      <span className={styles.checkbox}>
        <Check />
      </span>
    </label>
  );
}
