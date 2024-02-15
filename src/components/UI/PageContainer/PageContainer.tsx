import styles from "./styles.module.css";

export default function Page({ children }: { children: React.ReactNode }) {
  return <main className={styles.container}>{children}</main>;
}
