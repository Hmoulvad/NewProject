import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function LinkAsButton({ children, ...rest }: Props) {
  return (
    <button aria-label={typeof children === "string" ? children as string : ""} className={styles.link} {...rest}>
      {children}
    </button>
  );
}
