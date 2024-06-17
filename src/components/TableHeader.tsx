import { SortColumn } from "./FoodsTable";

interface Props {
  columns: column[];
  sortColumn: SortColumn;
  onSort(sortColumn: SortColumn): void;
}

interface TextColumn {
  path: string;
  label: string;
}

interface ContentColumn {
  key: string;
}

export type column = TextColumn | ContentColumn;

function TableHeader({ sortColumn, columns, onSort }: Props) {
  function handleSort(path: string) {
    if (path === sortColumn.path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    onSort({ ...sortColumn });
  }

  return (
    <thead className="clickable">
      <tr>
        {columns.map((column) =>
          "path" in column ? (
            <th
              key={column.path}
              scope="col"
              onClick={() => handleSort(column.path)}
            >
              {column.label}
            </th>
          ) : (
            <th key={column.key} />
          )
        )}
      </tr>
    </thead>
  );
}

export default TableHeader;
