import clsx from "clsx";
import { LinkProps } from "next/link";
import { PropsWithChildren } from "react";
import styles from "./styles.module.css";

type Props = PropsWithChildren &
  LinkProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function LinkAsButton({ children, className, ...rest }: Props) {
  const fallbackTitle =
    typeof children === "string" ? (children as string) : "";
  return (
    <button
      title={fallbackTitle}
      className={clsx(styles.link, className)}
      {...rest}
    >
      {children}
    </button>
  );
}
