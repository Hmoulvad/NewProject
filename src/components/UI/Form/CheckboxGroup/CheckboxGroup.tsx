import { ComponentProps } from "react";
import { Typography } from "../../Typography";
import { InputProps } from "../types";
import styles from "./CheckboxGroup.module.css";
import { Checkbox } from "./Checkbox";

type Props = {
  options: Omit<ComponentProps<typeof Checkbox>, "name">[];
} & InputProps;

export default function RadioGroup({ label, name, options }: Props) {
  return (
    <div className={styles.radioGroup}>
      <Typography>{label}</Typography>
      {options.map((option) => (
        <Checkbox key={option.label} name={name} {...option} />
      ))}
    </div>
  );
}
