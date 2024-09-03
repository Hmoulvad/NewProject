import { ComponentProps, ReactNode } from "react";
import AnimatePresence from "../AnimatePresence";
import styles from "./Animations.module.css";

export type DialogVariants = "drawer" | "modal";

export type DialogAnimation = ComponentProps<
  typeof AnimatePresence
>["animation"];

export const DialogAnimationVariants: Record<DialogVariants, DialogAnimation> =
  {
    drawer: {
      entering: styles["slide-in"],
      exiting: styles["slide-out"],
    },
    modal: {
      entering: styles["fade-in"],
      exiting: styles["fade-out"],
    },
  };

export type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  animation?: DialogAnimation;
  variant?: DialogVariants;
  className?: string;
};
