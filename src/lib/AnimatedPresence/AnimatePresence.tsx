import {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";
import getAnimationStyles from "./getAnimationStyles";
import { AnimatePresenceType, AnimatePresenceVariants } from "./types";
import usePresence from "./usePresence";
import clsx from "clsx";
import styles from "./AnimatePresence.module.css";

type Props<T extends ElementType> = {
  as?: T;
  isVisible: boolean;
  variant?: AnimatePresenceVariants;
  animation?: AnimatePresenceType;
} & PropsWithChildren &
  ComponentPropsWithoutRef<T>;

export default function AnimatePresence<T extends ElementType>({
  as,
  isVisible,
  children,
  variant = "fade-in",
  animation,
}: Props<T>) {
  const Component = as || "div";
  const { isPresent, isExiting, onAnimationEnd } = usePresence(isVisible);

  console.log(
    getAnimationStyles({
      isExiting,
      variant,
      customAnimation: animation,
    })
  );

  if (!isPresent) return null;

  return (
    <Component
      className={getAnimationStyles({
        isExiting,
        variant,
        customAnimation: animation,
      })}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </Component>
  );
}
