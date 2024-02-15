import clsx from "clsx";
import { PropsWithChildren } from "react";
import styles from "./styles.module.css";

type ButtonSize = "small" | "medium" | "large";
type ButtonVariant = "primary" | "secondary";

function getButtonSizeStyle(size: ButtonSize) {
  switch (size) {
    case "small":
      return styles.small;
    case "medium":
      return styles.medium;
    case "large":
      return styles.large;
  }
}

function getButtonVariantStyle(variant: ButtonVariant) {
  switch (variant) {
    case "primary":
      return styles.primary;
    case "secondary":
      return styles.secondary;
  }
}

type Props = {
  icon: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
} & PropsWithChildren &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function IconButton({
  className,
  size = "medium",
  variant = "primary",
  icon,
  ...rest
}: Props) {
  const fallbackAriaLabel = `Button with an icon of ${icon}`;
  return (
    <button
      aria-label={fallbackAriaLabel}
      className={clsx(
        styles.iconButton,
        getButtonSizeStyle(size),
        getButtonVariantStyle(variant),
        className
      )}
      {...rest}
    >
      {icon}
    </button>
  );
}
