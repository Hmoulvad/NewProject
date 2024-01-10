import NextLink, { LinkProps } from "next/link";
import { ButtonProps, ButtonStyles } from "./shared";
import Typography from "../Typography";
import clsx from "clsx";
import { SSR } from "@phosphor-icons/react";

type Props = ButtonProps & LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ButtonAsLink({
  children,
  className,
  icon,
  size,
  variant,
  withIcon,
  ...rest
}: Props) {
  const fallbackTitle = typeof children === "string" ? children as string : ""
  const IconComponent = icon ? SSR[icon] : null;
  return (
    <NextLink title={fallbackTitle} className={clsx(ButtonStyles({ variant, size, withIcon }), className)} {...rest}>
      <Typography as="span">{children}</Typography>
      {IconComponent && <IconComponent />}
    </NextLink>
  );
}
