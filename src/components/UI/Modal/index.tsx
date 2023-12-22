"use client";

import React, { forwardRef, useEffect, useImperativeHandle } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

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
  const [isClosing, setIsClosing] = React.useState(false);
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      open: () => dialogRef.current?.showModal(),
      close: () => dialogRef.current?.close(),
    }),
    []
  );

  return (
    <dialog ref={dialogRef} className={styles.modal}>
      {children}
    </dialog>
  );
});

export default Modal;
