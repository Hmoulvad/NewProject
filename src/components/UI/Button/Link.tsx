import NextLink, { LinkProps } from "next/link";
import { ButtonProps, ButtonStyles } from "./shared";
import Typography from "../Typography";
import clsx from "clsx";

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
  return (
    <NextLink className={clsx(ButtonStyles({ variant, size, withIcon }), className)} {...rest}>
      <Typography as="span">{children}</Typography>
      {icon && icon}
    </NextLink>
  );
}
