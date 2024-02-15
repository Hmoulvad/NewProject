"use client";

import { TagChevron } from "@phosphor-icons/react/dist/ssr/TagChevron";
import clsx from "clsx";
import { useSelect } from "downshift";
import Typography from "../Typography";
import styles from "./styles.module.css";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr/ArrowDown";

type Props = {
  defaultOption?: string;
  fill?: boolean;
  options: string[];
  label: string;
  onChange?: (value: string) => void;
  className?: string;
};

export default function Select({
  options,
  label,
  fill,
  defaultOption,
  onChange,
  className,
}: Props) {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items: options,
    defaultSelectedItem: defaultOption ?? options[0],
    onSelectedItemChange: ({ selectedItem }) => {
      if (!selectedItem) return;
      onChange?.(selectedItem);
    },
  });

  return (
    <div
      className={clsx(styles.container, className, {
        [styles.fill]: fill,
      })}
    >
      <button
        className={clsx(styles.button, {
          [styles.open]: isOpen,
        })}
        {...getToggleButtonProps()}
      >
        <span className={styles.buttonText}>
          <Typography as="label" variant="caption" {...getLabelProps()}>
            {label}
          </Typography>
          <Typography as="span" variant="label">
            {selectedItem}
          </Typography>
        </span>
        <ArrowDown />
      </button>
      <ul
        className={clsx(styles.list, {
          [styles.hidden]: !isOpen,
        })}
        {...getMenuProps()}
      >
        {isOpen &&
          options.map((option, index) => (
            <li
              key={option}
              className={clsx(styles.item, {
                [styles.highlighted]: highlightedIndex === index,
              })}
              {...getItemProps({ item: option, index })}
            >
              <Typography as="span">{option}</Typography>
            </li>
          ))}
      </ul>
    </div>
  );
}
