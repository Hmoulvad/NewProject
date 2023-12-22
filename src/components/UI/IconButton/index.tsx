import { VariantProps, cva } from "class-variance-authority";
import styles from "./styles.module.css";

const IconButtonStyles = cva(styles.iconButton, {
  variants: {
    variant: {
      primary: styles.primary,
      secondary: styles.secondary,
    },
    size: {
      small: styles.small,
      medium: styles.medium,
      large: styles.large,
    },
  },
  defaultVariants: {
    size: "medium",
    variant: "primary",
  },
});

type Props = VariantProps<typeof IconButtonStyles> &
  Omit<React.HTMLAttributes<HTMLElement>, "className">;

export default function IconButton({
  children,
  size,
  variant,
  ...rest
}: Props) {
  return (
    <button className={IconButtonStyles({ size, variant })} {...rest}>
      {children}
    </button>
  );
}
