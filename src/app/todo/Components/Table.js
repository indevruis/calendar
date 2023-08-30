import React from "react";
import { useTable } from "react-table";
import styles from "public/css/Table.module.css";

const headerToClass = (header) =>
  header === "Check" ? "check" : header === "Todo" ? "todo" : "time";

const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} className="w-full h-full flex flex-col">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                className={`${styles[headerToClass(column.Header)]}`}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td
                  key={cell.row.index}
                  {...cell.getCellProps()}
                  // className={`${styles[headerToClass(row.Header)]}`}
                >
                  {console.log(rows)}
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
