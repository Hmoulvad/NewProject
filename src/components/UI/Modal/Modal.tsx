"use client";

import clsx from "clsx";
import { PropsWithChildren, useCallback, useEffect, useRef } from "react";
import styles from "./styles.module.css";

type Variant = "center" | "sidebar";

type Props = {
  variant?: Variant;
  isOpen: boolean;
  onClose: () => void;
} & PropsWithChildren;

export default function Modal({
  children,
  variant = "center",
  isOpen,
  onClose,
}: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (!dialogRef.current) return;
      const dialogDimension = dialogRef.current.getBoundingClientRect();
      if (
        event.clientX < dialogDimension.left ||
        event.clientX > dialogDimension.right ||
        event.clientY < dialogDimension.top ||
        event.clientY > dialogDimension.bottom
      ) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const dialogElement = dialogRef.current;
    if (!dialogElement) return;
    dialogElement.addEventListener("click", handleOutsideClick);

    return () => {
      dialogElement.removeEventListener("click", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className={clsx(styles.modal, getModalStyle(variant))}
    >
      {children}
    </dialog>
  );
}

function getModalStyle(variant: Variant) {
  switch (variant) {
    case "sidebar":
      return styles.sidebar;
    case "center":
    default:
      return styles.center;
  }
}
