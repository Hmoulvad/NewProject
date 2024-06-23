"use client";

import { isBrowser } from "@/app/_lib/utils/isBrowser";
import { X } from "@phosphor-icons/react/dist/ssr/X";
import { ReactNode, useContext } from "react";
import { createPortal } from "react-dom";
import { useEventListener } from "usehooks-ts";
import AnimatePresence from "../AnimatePresence";
import { Button } from "../Button";
import { Typography } from "../Typography";
import { Context } from "./Drawer.context";
import styles from "./Drawer.module.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export function Drawer({ isOpen, onClose, children }: Props) {
  useEventListener("keydown", (event) => {
    event.key === "Escape" && onClose();
  });

  if (!isBrowser) {
    return null;
  }

  return createPortal(
    <>
      <Context.Provider value={{ onClose }}>
        <AnimatePresence
          as="div"
          role="dialog"
          aria-modal="true"
          aria-labelledby="drawer-title"
          autoFocus={isOpen}
          tabIndex={-1}
          isVisible={isOpen}
          animation={{
            entering: styles["slide-in"],
            exiting: styles["slide-out"],
          }}
          className={styles.modal}
        >
          {children}
        </AnimatePresence>
        <AnimatePresence
          as="div"
          aria-hidden="true"
          onClick={onClose}
          variant="fade-in"
          isVisible={isOpen}
          className={styles.backdrop}
        />
      </Context.Provider>
    </>,
    document.getElementById("portal-container") as HTMLElement
  );
}

Drawer.Header = function DrawerHeader({ title }: { title: string }) {
  const { onClose } = useContext(Context);
  return (
    <header className={styles.header}>
      <Typography id="drawer-title" inverted variant="display3">
        {title}
      </Typography>
      {onClose ? (
        <Button aria-label="Close drawer" onClick={onClose} icon={<X />} />
      ) : null}
    </header>
  );
};

Drawer.Content = function DrawerContent({
  children,
}: {
  children?: ReactNode;
}) {
  return <section className={styles.content}>{children}</section>;
};

Drawer.Footer = function DrawerFooter({ children }: { children: ReactNode }) {
  return <footer className={styles.footer}>{children}</footer>;
};
