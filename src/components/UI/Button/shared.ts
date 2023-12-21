import styles from "./styles.module.css";
import { cva, type VariantProps } from "class-variance-authority";

export const button = cva(styles.button, {
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
    variant: "primary",
    size: "medium",
  },
});

export type ButtonProps = VariantProps<typeof button> &
  Omit<React.HTMLAttributes<HTMLElement>, "className">;
