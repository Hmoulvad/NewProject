import clsx from "clsx";
import NextLink, { LinkProps } from "next/link";
import Typography from "../Typography";
import { getButtonSizeStyle, getButtonVariantStyle } from "./getButtonStyles";
import styles from "./styles.module.css";
import { ButtonProps } from "./types";

type Props = ButtonProps &
  LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ButtonAsLink({
  children,
  className,
  icon,
  size = "medium",
  variant = "primary",
  ...rest
}: Props) {
  const fallbackTitle =
    typeof children === "string" ? (children as string) : "";
  return (
    <NextLink
      title={fallbackTitle}
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
      <Typography as="span">{children}</Typography>
      {icon && icon}
    </NextLink>
  );
}
