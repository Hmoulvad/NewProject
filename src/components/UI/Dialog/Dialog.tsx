"use client";

import clsx from "clsx";
import { useContext } from "react";
import { createPortal } from "react-dom";
import { useEventListener, useIsClient } from "usehooks-ts";
import AnimatePresence from "../AnimatePresence";
import styles from "./Dialog.module.css";
import { Context } from "./context";
import { DialogAnimationVariants, DialogProps } from "./types";

export function Dialog({
  isOpen,
  onClose,
  children,
  className,
  variant = "drawer",
  animation,
}: DialogProps) {
  const isClient = useIsClient();
  const { labelId } = useContext(Context);

  useEventListener("keydown", (event) => {
    event.key === "Escape" && onClose();
  });

  if (!isClient) {
    return null;
  }

  return createPortal(
    <Context.Provider value={{ onClose }}>
      <AnimatePresence
        as="div"
        isVisible={isOpen}
        animation={animation || DialogAnimationVariants[variant]}
        className={
          className ??
          clsx(styles.dialog, {
            [styles.drawer]: variant === "drawer",
            [styles.modal]: variant === "modal",
          })
        }
        aria-labelledby={labelId}
        role="dialog"
        tabIndex={isOpen ? -1 : 0}
      >
        {children}
      </AnimatePresence>
      <AnimatePresence
        as="div"
        onClick={onClose}
        variant="fade-in"
        isVisible={isOpen}
        className={styles.backdrop}
        aria-hidden="true"
      />
    </Context.Provider>,
    document.getElementById("portal-container") as HTMLElement
  );
}
