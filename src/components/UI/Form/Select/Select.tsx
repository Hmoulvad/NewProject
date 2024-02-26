import { ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { Typography } from "../../Typography";
import { InputProps } from "../types";
import styles from "./styles.module.css";

type Props = {
  options: string[];
} & InputProps;

export default function Select({ label, name, options }: Props) {
  return (
    <Typography className={styles.label} as="label">
      <Typography htmlFor={name}>{label}</Typography>
      <Typography as="select" id={name} name={name}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Typography>
      <ArrowDown />
    </Typography>
  );
}
