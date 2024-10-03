import { DotOutline } from "@phosphor-icons/react/dist/ssr";
import { Typography } from "../../Typography";
import styles from "./Radio.module.css";

type Props = {
  label: string;
  value: string;
  name: string;
  defaultChecked?: boolean;
};

export default function Radio({ label, name, value, defaultChecked }: Props) {
  return (
    <label className={styles.label}>
      <Typography htmlFor={name}>{label}</Typography>
      <Typography
        defaultChecked={defaultChecked}
        value={value}
        type="radio"
        name={name}
      />
      <span className={styles.radio}>
        <DotOutline weight="fill" />
      </span>
    </label>
  );
}
