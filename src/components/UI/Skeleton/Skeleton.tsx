import clsx from "clsx";
import styles from "./Skeleton.module.css";

type Props = {
  mimic?:
    | "display1"
    | "display2"
    | "display3"
    | "display4"
    | "display5"
    | "display6"
    | "body"
    | "caption"
    | "label";
  fill?: {
    width?: boolean;
    height?: boolean;
  };
  width?: number;
  height?: number;
};

export default function Skeleton({ mimic, fill, width, height }: Props) {
  return (
    <div
      style={
        {
          "--width": width && `${width}px`,
          "--height": height && `${height}px`,
        } as React.CSSProperties
      }
      className={clsx(styles.base, mimic && styles[mimic], {
        [styles.fillWidth]: fill?.width,
        [styles.fillHeight]: fill?.height,
      })}
    />
  );
}

function getSkeletonStyle(props: Props) {}
