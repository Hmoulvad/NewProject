"use client";

import { Button } from "@/components/UI/Button";
import Drawer from "@/components/UI/Drawer";
import { useState } from "react";
import { List } from "@phosphor-icons/react/dist/ssr";
import styles from "./ToggleDrawer.module.css";

type Props = React.PropsWithChildren;

export default function ToggleDrawer({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className={styles.container}
        icon={<List />}
        aria-label="Open navigation"
      />
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Drawer.Content>{children}</Drawer.Content>
      </Drawer>
    </>
  );
}
