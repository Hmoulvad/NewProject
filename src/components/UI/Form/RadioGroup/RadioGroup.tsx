import { ComponentProps } from "react";
import { Typography } from "../../Typography";
import { InputProps } from "../types";
import Radio from "../Radio/Radio";
import styles from "./RadioGroup.module.css";

type Props = {
  options: Omit<ComponentProps<typeof Radio>, "name">[];
} & InputProps;

export default function RadioGroup({ label, name, options }: Props) {
  return (
    <div className={styles.radioGroup}>
      <Typography>{label}</Typography>
      {options.map((option) => (
        <Radio key={option.value} name={name} {...option} />
      ))}
    </div>
  );
}
