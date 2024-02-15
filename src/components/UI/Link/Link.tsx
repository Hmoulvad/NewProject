import NextLink from "next/link";
import styles from "./styles.module.css";
import { SharedLinkProps } from "./types";
import Typography from "../Typography";

type Props = SharedLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Link({ children, ...rest }: Props) {
  const fallbackAiraLabel =
    typeof children === "string" ? (children as string) : "";
  return (
    <NextLink aria-label={fallbackAiraLabel} className={styles.link} {...rest}>
      <Typography as="span">{children}</Typography>
    </NextLink>
  );
}