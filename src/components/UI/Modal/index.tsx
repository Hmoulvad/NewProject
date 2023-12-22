"use client";

import React, { forwardRef, useEffect, useImperativeHandle } from "react";
import styles from "./styles.module.css";
import { VariantProps, cva } from "class-variance-authority";

const ModalStyles = cva(styles.modal, {
  variants: {
    variant: {
      center: styles.center,
      sideBar: styles.sideBar,
    },
  },
  defaultVariants: {
    variant: "center",
  },
});

type Props = {
  children: React.ReactNode;
} & VariantProps<typeof ModalStyles>;

export type ModalOperations = {
  open: () => void;
  close: () => void;
};

const Modal = forwardRef<ModalOperations, Props>(function ModalRef(
  { children, variant },
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
    <dialog ref={dialogRef} className={ModalStyles({ variant })}>
      {children}
    </dialog>
  );
});

export default Modal;
