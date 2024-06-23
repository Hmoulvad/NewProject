"use client";

import clsx from "clsx";
import { PropsWithChildren, useState } from "react";
import { Typography } from "../Typography";
import styles from "./Accordion.module.css";

type Props = {
  title: string;
  fill?: boolean;
} & PropsWithChildren;

export default function Accordion({ title, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = title;

  return (
    <div className={styles.container}>
      <button
        className={styles.header}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <Typography as="span">{title}</Typography>
      </button>
      <div
        id={contentId}
        className={clsx(styles.contentWrapper, {
          [styles.expanded]: isOpen,
        })}
        role="region"
        aria-labelledby={contentId}
      >
        <div className={styles.hiddenContent}>
          <Typography className={styles.content}>{children}</Typography>
        </div>
      </div>
    </div>
  );
}
