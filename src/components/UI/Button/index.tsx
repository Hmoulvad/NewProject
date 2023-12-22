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
  return (
    <button className={ButtonStyles({ variant, size, withIcon })} {...rest}>
      <Typography as="span">{children}</Typography>
      {icon && icon}
    </button>
  );
}
