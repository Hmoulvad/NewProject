import Typography from "../Typography";
import styles from "./styles.module.css";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Accordion({ title, children }: Props) {
  return (
    <details className={styles.details}>
      <summary>
        <Typography>{title}</Typography>
      </summary>
      {children}
    </details>
  );
}
