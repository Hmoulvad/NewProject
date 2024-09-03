import { PropsWithChildren } from "react";
import styles from "./Dialog.module.css";

type Props = PropsWithChildren;

export default function DialogFooter({ children }: Props) {
  return <footer className={styles.footer}>{children}</footer>;
}
