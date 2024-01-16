import clsx from "clsx";
import Typography from "../Typography";
import { ButtonProps, ButtonStyles } from "./shared";
import styles from "./styles.module.css";

export default function Button({
  children,
  icon,
  size,
  variant,
  ...rest
}: ButtonProps) {
  const fallbackAriaLabel =
    typeof children === "string" ? (children as string) : "";
  return (
    <button
      aria-label={fallbackAriaLabel}
      className={clsx(ButtonStyles({ variant, size }), {
        [styles.withIcon]: Boolean(icon),
      })}
      {...rest}
    >
      <Typography as="span">{children}</Typography>
      {icon && icon}
    </button>
  );
}
