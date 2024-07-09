import clsx from "clsx";
import React, { memo } from "react";
import styles from "./Table.module.css";
import { Typography } from "../Typography";

type Column<T> = {
  key: keyof T;
  label: React.ReactNode;
  render?: (row: T) => React.ReactNode;
};

type Props<T> = {
  data: T[];
  columns: Column<T>[];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Table<T extends { [key: string]: any }>({ columns, data }: Props<T>) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={`${String(column.key)}-${index}`}>
              <Typography bold>{column.label}</Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, index) => (
              <td
                key={`${String(column.key)}-${index}`}
                className={clsx({
                  [styles.isEven]: rowIndex % 2,
                })}
              >
                {column.render ? (
                  <Typography>{column.render(row)}</Typography>
                ) : (
                  <Typography>{row[column.key]}</Typography>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default memo(Table) as typeof Table;
