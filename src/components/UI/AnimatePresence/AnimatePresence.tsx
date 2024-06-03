"use client";

import clsx from "clsx";
import {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";
import getAnimationStyles from "./getAnimationStyles";
import { AnimatePresenceType, AnimatePresenceVariants } from "./types";
import usePresence from "./usePresence";

type Props<T extends ElementType> = {
  as?: T;
  isVisible: boolean;
  variant?: AnimatePresenceVariants;
  animation?: AnimatePresenceType;
  className?: string;
} & PropsWithChildren &
  ComponentPropsWithoutRef<T>;

export default function AnimatePresence<T extends ElementType>({
  as,
  isVisible,
  children,
  variant = "fade-in",
  animation,
  className,
}: Props<T>) {
  const Component = as || "div";
  const { isPresent, isExiting, onAnimationEnd } = usePresence(isVisible);

  if (!isPresent) return null;

  return (
    <Component
      className={clsx(
        getAnimationStyles({
          isExiting,
          variant,
          customAnimation: animation,
        }),
        className
      )}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </Component>
  );
}
