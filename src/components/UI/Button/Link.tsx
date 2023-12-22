import NextLink, { LinkProps } from "next/link";
import { ButtonProps, ButtonStyles } from "./shared";
import Typography from "../Typography";

type Props = ButtonProps & Omit<LinkProps, "className">;

export default function ButtonAsLink({
  children,
  icon,
  size,
  variant,
  withIcon,
  ...rest
}: Props) {
  return (
    <NextLink className={ButtonStyles({ variant, size, withIcon })} {...rest}>
      <Typography as="span">{children}</Typography>
      {icon && icon}
    </NextLink>
  );
}
