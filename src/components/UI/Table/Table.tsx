import clsx from "clsx";
import React, { memo } from "react";
import styles from "./Table.module.css";
import { Typography } from "../Typography";

type Column<T> = {
  label: React.ReactNode | string;
  value: (row: T) => React.ReactNode;
};

type Props<T> = {
  data: T[];
  columns: Column<T>[];
};

function Table<T extends { [key: string]: any }>({ columns, data }: Props<T>) {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={`${String(column.label)}-${index}`}>
                {typeof column.label !== "object" ? (
                  <Typography bold>{column.label}</Typography>
                ) : (
                  column.label
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, index) => (
                <td
                  key={`${String(column.label)}-${index}`}
                  className={clsx({
                    [styles.isEven]: rowIndex % 2,
                  })}
                >
                  {typeof column.value(row) !== "object" ? (
                    <Typography>{column.value(row)}</Typography>
                  ) : (
                    column.value(row)
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default memo(Table) as typeof Table;
