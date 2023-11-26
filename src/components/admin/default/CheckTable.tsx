import React from "react";
import CardMenu from "components/card/CardMenu";
import Checkbox from "components/checkbox";
import Card from "components/card";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  RowSelection,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import clsx from "clsx";

type RowObj = {
  name: [string, boolean];
  progress: string;
  quantity: number;
  date: string;
};

function CheckTable(props: { tableData: any }) {
  const { tableData } = props;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  let defaultData = tableData;
  const columns = [
    columnHelper.accessor("name", {
      id: "name",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">NAME</p>
      ),
      cell: (info: any) => (
        <div className="flex items-center">
          <Checkbox
            defaultChecked={info.getValue()[1]}
            colorScheme="brandScheme"
            me="10px"
          />
          <p className="ml-3 text-sm font-bold text-navy-700 dark:text-white">
            {info.getValue()[0]}
          </p>
        </div>
      ),
    }),
    columnHelper.accessor("progress", {
      id: "progress",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          PROGRESS
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("quantity", {
      id: "quantity",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          QUANTITY
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("date", {
      id: "date",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">DATE</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
  ]; // eslint-disable-next-line
  const [data, setData] = React.useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });
  const samples = [
    ['#956483232', 'Shawarma', 'Sept 30, 2023', 'Tsh7,000', 'Scanned'],
    ['#956483232', 'Kuku plus premium', 'Sept 01, 2023', 'Tsh7,000', 'POS'],
    ['#956483232', 'Shawarma', 'Sept 30, 2023', 'Tsh7,000', 'Scanned'],
    ['#956483232', 'Kuku plus premium', 'Sept 01, 2023', 'Tsh7,000', 'POS'],
  ];
  return (
    
    
      <div className=" overflow-x-scroll xl:overflow-x-hidden">
        <table className="w-full">
        
          <tbody>
            {
              samples
              .map((row, ind) => {
                
                return (
                  <tr >
                    {row.map((cell,ind) => {
                      const last = (row.length - 1 )=== ind;
                
                      return (
                        <td
                          className={clsx(
                            'min-w-[150px] border-white/0 py-3  pr-4',
                            last && 'text-[#499C08]',
                          )}
                        >
                          {cell}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
   
  );
}

export default CheckTable;
const columnHelper = createColumnHelper<RowObj>();
