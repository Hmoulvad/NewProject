"use client";

import React, { forwardRef, useEffect, useImperativeHandle } from "react";
import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
};

export type ModalOperations = {
  open: () => void;
  close: () => void;
};

const Modal = forwardRef<ModalOperations, Props>(function ModalRef(
  { children },
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
    <dialog ref={dialogRef} className={styles.modal}>
      {children}
    </dialog>
  );
});

export default Modal;
