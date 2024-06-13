import clsx from "clsx";
import { LinkProps } from "next/link";
import { Typography } from "../Typography";
import styles from "./styles.module.css";
import { SharedLinkProps } from "./types";

type Props = SharedLinkProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function LinkAsButton({
  children,
  className,
  inverted,
  ...rest
}: Props) {
  const fallbackTitle =
    typeof children === "string" ? (children as string) : "";
  return (
    <button
      title={fallbackTitle}
      className={clsx(styles.link, className, {
        [styles.inverted]: inverted,
      })}
      {...rest}
    >
      <Typography as="span">{children}</Typography>
    </button>
  );
}
