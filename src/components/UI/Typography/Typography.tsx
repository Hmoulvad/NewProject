import clsx from "clsx";
import {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";
import styles from "./styles.module.css";

type Variants =
  | "display1"
  | "display2"
  | "display3"
  | "display4"
  | "display5"
  | "display6"
  | "body"
  | "caption"
  | "label";

type Props<T extends ElementType> = {
  as?: T;
  inverted?: boolean;
  variant?: Variants;
  className?: string;
} & PropsWithChildren &
  ComponentPropsWithoutRef<T>;

function getTypographyStyle<T extends ElementType>(
  variant: Variants | undefined,
  as: T | undefined
) {
  switch (variant ?? as) {
    case "h1":
    case "display1":
      return styles.display1;
    case "h2":
    case "display2":
      return styles.display2;
    case "h3":
    case "display3":
      return styles.display3;
    case "h4":
    case "display4":
      return styles.display4;
    case "h5":
    case "display5":
      return styles.display5;
    case "h6":
    case "display6":
      return styles.display6;
    case "body":
      return styles.body;
    case "caption":
      return styles.caption;
    case "label":
      return styles.label;
    default:
      return styles.body;
  }
}

export default function Typography<T extends ElementType>({
  as,
  className,
  children,
  variant = "body",
  inverted,
  ...rest
}: Props<T>) {
  const Element = as ?? "p";

  return (
    <Element
      className={clsx(
        styles.typography,
        className,
        getTypographyStyle(variant, as),
        {
          [styles.inverted]: inverted,
        }
      )}
      {...rest}
    >
      {children}
    </Element>
  );
}
