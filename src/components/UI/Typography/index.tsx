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
  },
  defaultVariants: {
    variant: "body",
  },
});

type Props = {
  as?: React.ElementType;
} & VariantProps<typeof TypographyStyles> &
  Omit<React.HTMLAttributes<HTMLElement>, "className">;

export default function Typography({ as, children, variant, ...rest }: Props) {
  const Tag = as ?? "p";
  return (
    <Tag className={TypographyStyles({ variant })} {...rest}>
      {children}
    </Tag>
  );
}
