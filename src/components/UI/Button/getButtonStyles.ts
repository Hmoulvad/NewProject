import { ButtonProps } from "./types";
import styles from "./Button.module.css";

export function getButtonVariantStyle(variant: ButtonProps["variant"]) {
  switch (variant) {
    case "primary":
      return styles.primary;
    case "secondary":
      return styles.secondary;
  }
}
export function getButtonSizeStyle(size: ButtonProps["size"]) {
  switch (size) {
    case "small":
      return styles.small;
    case "medium":
      return styles.medium;
    case "large":
      return styles.large;
  }
}
