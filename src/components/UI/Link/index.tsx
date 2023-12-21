import NextLink, { LinkProps } from "next/link";
import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
} & Omit<LinkProps, "className">;

export default function Link({ children, ...rest }: Props) {
  return (
    <NextLink className={styles.link} {...rest}>
      {children}
    </NextLink>
  );
}
