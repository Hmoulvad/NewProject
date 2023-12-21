import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function LinkAsButton({ children, ...rest }: Props) {
  return (
    <button className={styles.link} {...rest}>
      {children}
    </button>
  );
}
