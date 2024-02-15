"use client";

import React, {
  PropsWithChildren,
  forwardRef,
  useEffect,
  useImperativeHandle,
} from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

type Variant = "center" | "sidebar";

type Props = {
  variant: Variant;
} & PropsWithChildren;

export type ModalOperations = {
  open: () => void;
  close: () => void;
};

function getModalStyle(variant: Variant) {
  switch (variant) {
    case "center":
      return styles.center;
    case "sidebar":
      return styles.sidebar;
  }
}

const Modal = forwardRef<ModalOperations, Props>(function ModalRef(
  { children, variant = "center" },
  ref
) {
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  function handleOutsideClick(event: MouseEvent) {
    if (!dialogRef.current) return;
    const dialogDimension = dialogRef.current.getBoundingClientRect();
    if (
      event.clientX < dialogDimension.left ||
      event.clientX > dialogDimension.right ||
      event.clientY < dialogDimension.top ||
      event.clientY > dialogDimension.bottom
    ) {
      dialogRef.current.close();
    }
  }

  useImperativeHandle(
    ref,
    () => ({
      open: () => dialogRef.current?.showModal(),
      close: () => dialogRef.current?.close(),
    }),
    []
  );

  useEffect(() => {
    const dialogElement = dialogRef.current;
    if (!dialogElement) return;
    dialogElement.addEventListener("click", handleOutsideClick);

    return () => {
      dialogElement.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className={clsx(styles.modal, getModalStyle(variant))}
    >
      {children}
    </dialog>
  );
});

export default Modal;
