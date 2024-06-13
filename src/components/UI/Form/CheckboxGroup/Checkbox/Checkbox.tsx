import { Typography } from "@/components/UI/Typography";
import { Check } from "@phosphor-icons/react/dist/ssr";
import styles from "./Checkbox.module.css";

type Props = {
  label: string;
  value: string;
  name: string;
  defaultChecked?: boolean;
};

export default function Checkbox({
  name,
  label,
  value,
  defaultChecked,
}: Props) {
  return (
    <label className={styles.label}>
      <Typography htmlFor={name}>{label}</Typography>
      <Typography
        defaultChecked={defaultChecked}
        value={value}
        type="checkbox"
        name={name}
        as="input"
      />
      <span className={styles.checkbox}>
        <Check />
      </span>
    </label>
  );
}
