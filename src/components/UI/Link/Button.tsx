import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function LinkAsButton({ children, ...rest }: Props) {
  const fallbackAiraLabel =
    typeof children === "string" ? (children as string) : "";
  return (
    <button aria-label={fallbackAiraLabel} className={styles.link} {...rest}>
      {children}
    </button>
  );
}
