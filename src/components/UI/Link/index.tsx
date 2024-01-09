import NextLink, { LinkProps } from "next/link";
import styles from "./styles.module.css";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
} & LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>

export default function Link({ children, className, ...rest }: Props) {
  return (
    <NextLink className={clsx(styles.link, className)} {...rest}>
      {children}
    </NextLink>
  );
}
