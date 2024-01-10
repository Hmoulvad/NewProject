import { VariantProps, cva } from "class-variance-authority";
import styles from "./styles.module.css";
import { SSR } from "@phosphor-icons/react";

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

type Props = {
  icon: keyof typeof SSR;
} & VariantProps<typeof IconButtonStyles> &
  Omit<React.HTMLAttributes<HTMLElement>, "className" | "children">;

export default function IconButton({
  size,
  variant,
  icon,
  ...rest
}: Props) {
  const IconComponent = SSR[icon];
  const fallbackAriaLabel = `Button with an icon of ${icon}`;
  return (
    <button aria-label={fallbackAriaLabel} className={IconButtonStyles({ size, variant })} {...rest}>
      <IconComponent />
    </button>
  );
}
