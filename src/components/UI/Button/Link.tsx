import NextLink, { LinkProps } from "next/link";
import { ButtonProps, button } from "./shared";

type Props = ButtonProps & Omit<LinkProps, "className">;

export default function ButtonAsLink({
  children,
  variant,
  size,
  ...rest
}: Props) {
  return (
    <NextLink className={button({ variant, size })} {...rest}>
      {children}
    </NextLink>
  );
}
