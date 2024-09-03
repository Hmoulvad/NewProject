import { PropsWithChildren } from 'react';
import styles from './Dialog.module.css';

type Props = PropsWithChildren;

export default function DialogContent({ children }: Props) {
  return <section className={styles.content}>{children}</section>;
}
