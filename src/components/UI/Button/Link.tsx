import NextLink, { LinkProps } from "next/link";
import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
} & Omit<LinkProps, "className">;

export default function ButtonAsLink({ children, ...rest }: Props) {
  return (
    <NextLink className={styles.button} {...rest}>
      {children}
    </NextLink>
  );
}
