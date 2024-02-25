import clsx from "clsx";
import { getButtonSizeStyle, getButtonVariantStyle } from "./getButtonStyles";
import styles from "./styles.module.css";
import { ButtonProps } from "./types";
import { Typography } from "../Typography";

type Props = ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className,
  icon,
  size = "medium",
  variant = "primary",
  ...rest
}: Props) {
  const fallbackAriaLabel =
    typeof children === "string" ? (children as string) : "";
  return (
    <button
      aria-label={fallbackAriaLabel}
      className={clsx(
        styles.button,
        getButtonVariantStyle(variant),
        getButtonSizeStyle(size),
        className,
        {
          [styles.withIcon]: Boolean(icon),
          [styles.onlyIcon]: !children && icon,
        }
      )}
      {...rest}
    >
      {children ? <Typography as="span">{children}</Typography> : null}
      {icon && icon}
    </button>
  );
}
