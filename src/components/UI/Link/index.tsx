import NextLink, { LinkProps } from "next/link";
import styles from "./styles.module.css";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
} & LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Link({ children, className, ...rest }: Props) {
  const fallbackTitle =
    typeof children === "string" ? (children as string) : "";
  return (
    <NextLink
      title={fallbackTitle}
      className={clsx(styles.link, className)}
      {...rest}
    >
      {children}
    </NextLink>
  );
}
