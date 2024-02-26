import { DotOutline } from "@phosphor-icons/react/dist/ssr";
import { Typography } from "../../../Typography";
import styles from "./styles.module.css";

type Props = {
  label: string;
  value: string;
  name: string;
};

export default function Radio({ label, name }: Props) {
  return (
    <label className={styles.label}>
      <Typography htmlFor={name}>{label}</Typography>
      <Typography type="radio" name={name} as="input" />
      <span className={styles.radio}>
        <DotOutline weight="fill" />
      </span>
    </label>
  );
}
