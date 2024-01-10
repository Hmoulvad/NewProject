import styles from "./styles.module.css";
import { cva, type VariantProps } from "class-variance-authority";
import { SSR } from "@phosphor-icons/react";

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

export type ButtonProps = { icon?: keyof typeof SSR } & VariantProps<
  typeof ButtonStyles
> &
  Omit<React.HTMLAttributes<HTMLElement>, "className">;
