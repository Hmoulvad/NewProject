import styles from "./styles.module.css";
import { cva, type VariantProps } from "class-variance-authority";

export const ButtonStyles = cva(styles.button, {
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
    withIcon: {
      true: styles.withIcon,
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
    withIcon: false,
  },
});

export type ButtonProps = { icon?: React.ReactNode } & VariantProps<
  typeof ButtonStyles
>;
