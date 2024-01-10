import { SSR } from "@phosphor-icons/react";
import Typography from "../Typography";
import { ButtonProps, ButtonStyles } from "./shared";

export default function Button({
  children,
  icon,
  size,
  variant,
  withIcon,
  ...rest
}: ButtonProps) {
  const fallbackAriaLabel = typeof children === "string" ? children as string : ""
  const IconComponent = icon ? SSR[icon] : null;
  return (
    <button aria-label={fallbackAriaLabel} className={ButtonStyles({ variant, size, withIcon })} {...rest}>
      <Typography as="span">{children}</Typography>
      {IconComponent && <IconComponent />}
    </button>
  );
}
