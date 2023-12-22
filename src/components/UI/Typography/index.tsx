import { cva, type VariantProps } from "class-variance-authority";
import styles from "./styles.module.css";

const TypographyStyles = cva(styles.base, {
  variants: {
    variant: {
      display1: styles.display1,
      display2: styles.display2,
      display3: styles.display3,
      display4: styles.display4,
      display5: styles.display5,
      body: styles.body,
      caption: styles.caption,
    },
    inverted: {
      true: styles.inverted,
    },
  },
  defaultVariants: {
    variant: "body",
    inverted: false,
  },
});

type Props = {
  as?: React.ElementType;
} & VariantProps<typeof TypographyStyles> &
  Omit<React.HTMLAttributes<HTMLElement>, "className">;

export default function Typography({
  as,
  children,
  variant,
  inverted,
  ...rest
}: Props) {
  const Tag = as ?? "p";
  return (
    <Tag className={TypographyStyles({ variant, inverted })} {...rest}>
      {children}
    </Tag>
  );
}
