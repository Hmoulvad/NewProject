import { PropsWithChildren } from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "small" | "medium" | "large";

export type ButtonProps = PropsWithChildren & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  fill?: boolean;
};
