import { ButtonProps, button } from "./shared";

export default function Button({
  children,
  variant,
  size,
  ...rest
}: ButtonProps) {
  return (
    <button className={button({ variant, size })} {...rest}>
      {children}
    </button>
  );
}
