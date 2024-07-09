import clsx from "clsx";
import styles from "./Table.module.css";
import { Skeleton } from "../Skeleton";

export default function TableSkeleton() {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {Array.from({ length: 5 }).map((_, index) => (
            <th key={index}>
              <Skeleton mimic="body" />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <tr key={rowIndex}>
            {Array.from({ length: 5 }).map((_, index) => (
              <td
                key={index}
                className={clsx({
                  [styles.isEven]: rowIndex % 2,
                })}
              >
                {index === 4 ? (
                  <Skeleton height={40} width={150} />
                ) : (
                  <Skeleton mimic="body" />
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
