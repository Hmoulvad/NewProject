import clsx from "clsx";
import NextLink, { LinkProps } from "next/link";
import Typography from "../Typography";
import { ButtonProps, ButtonStyles } from "./shared";

type Props = ButtonProps &
  LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ButtonAsLink({
  children,
  className,
  icon,
  size,
  variant,
  ...rest
}: Props) {
  const fallbackTitle =
    typeof children === "string" ? (children as string) : "";
  return (
    <NextLink
      title={fallbackTitle}
      className={clsx(ButtonStyles({ variant, size }), className, {
        withIcon: Boolean(icon),
      })}
      {...rest}
    >
      <Typography as="span">{children}</Typography>
      {icon && icon}
    </NextLink>
  );
}
