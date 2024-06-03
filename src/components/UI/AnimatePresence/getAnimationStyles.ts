import { AnimatePresenceType, AnimatePresenceVariants } from "./types";
import styles from "./AnimatePresence.module.css";

type Args = {
  isExiting: boolean;
  variant: AnimatePresenceVariants;
  customAnimation?: AnimatePresenceType;
};

export default function getAnimationStyles({
  isExiting,
  variant,
  customAnimation,
}: Args) {
  if (customAnimation) {
    return isExiting ? customAnimation.exiting : customAnimation.entering;
  }
  return isExiting
    ? AnimatePresenceStyles[variant].exiting
    : AnimatePresenceStyles[variant].entering;
}

export const AnimatePresenceStyles: Record<
  AnimatePresenceVariants,
  AnimatePresenceType
> = {
  "slide-in-left": {
    entering: styles["slide-in-left"],
    exiting: styles["slide-out-left"],
  },
  "slide-in-right": {
    entering: styles["slide-in-right"],
    exiting: styles["slide-out-right"],
  },
  "fade-in": {
    entering: styles["fade-in"],
    exiting: styles["fade-out"],
  },
  "slide-down": {
    entering: styles["slide-in-down"],
    exiting: styles["slide-out-down"],
  },
  "slide-up": {
    entering: styles["slide-in-up"],
    exiting: styles["slide-out-up"],
  },
};
