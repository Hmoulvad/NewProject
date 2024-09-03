"use client";

import { Button } from "@/components/UI/Button";
import { useState } from "react";
import { List } from "@phosphor-icons/react/dist/ssr";
import styles from "./ToggleDrawer.module.css";
import { ariaTranslations } from "@/translations/aria";
import Dialog, { DialogContent } from "@/components/UI/Dialog";

type Props = React.PropsWithChildren;

export default function ToggleDrawer({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className={styles.container}
        icon={<List />}
        aria-label={ariaTranslations.navigation.open}
      />
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </>
  );
}
