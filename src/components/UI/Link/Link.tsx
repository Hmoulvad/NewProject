import clsx from "clsx";
import NextLink, { LinkProps } from "next/link";
import { Typography } from "../Typography";
import styles from "./Link.module.css";
import { SharedLinkProps } from "./types";

type Props = SharedLinkProps &
  LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Link({
  children,
  className,
  inverted,
  ...rest
}: Props) {
  const fallbackAiraLabel =
    typeof children === "string" ? (children as string) : "";
  return (
    <NextLink
      aria-label={fallbackAiraLabel}
      className={clsx(styles.link, className, {
        [styles.inverted]: inverted,
      })}
      {...rest}
    >
      <Typography as="span">{children}</Typography>
    </NextLink>
  );
}
