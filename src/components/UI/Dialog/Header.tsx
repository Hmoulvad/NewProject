"use client";

import { X } from "@phosphor-icons/react/dist/ssr";
import { ReactNode, useContext } from "react";
import { Button } from "../Button";
import { Typography } from "../Typography";
import styles from "./Dialog.module.css";
import { Context } from "./context";

type Props = {
  title: string | ReactNode;
};

export default function DialogHeader({ title }: Props) {
  const { onClose, labelId } = useContext(Context);
  return (
    <header className={styles.header}>
      {typeof title === "string" ? (
        <Typography variant="display6" id={labelId}>
          {title}
        </Typography>
      ) : (
        title
      )}
      {onClose ? (
        <Button variant="secondary" onClick={onClose} icon={<X />} />
      ) : null}
    </header>
  );
}
