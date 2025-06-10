import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { useMemo, useState } from "react";


const FilteredTable = () => {

    const [filter, setFilter] = useState('');
    const [rowSelection, setRowSelection] = useState({});

    type User = {
        firstName: string;
        lastName: string;
        age: number;
        status: boolean;
    }

    const data = useMemo<User[]>(() => [
        { firstName: "Zaid", lastName: "Khan", age: 18, status: false },
        { firstName: "Emma", lastName: "Johnson", age: 28, status: true },
        { firstName: "Liam", lastName: "Smith", age: 32, status: false },
        { firstName: "Olivia", lastName: "Williams", age: 24, status: true },
        { firstName: "Noah", lastName: "Brown", age: 45, status: true },
        { firstName: "Ava", lastName: "Jones", age: 19, status: false },
        { firstName: "William", lastName: "Garcia", age: 37, status: true },
        { firstName: "Sophia", lastName: "Miller", age: 29, status: false },
        { firstName: "Benjamin", lastName: "Davis", age: 51, status: true },
        { firstName: "Isabella", lastName: "Rodriguez", age: 22, status: false },
        { firstName: "James", lastName: "Martinez", age: 40, status: true },
        { firstName: "Mia", lastName: "Hernandez", age: 26, status: false },
        { firstName: "Lucas", lastName: "Lopez", age: 33, status: true },
        { firstName: "Charlotte", lastName: "Gonzalez", age: 31, status: false },
        { firstName: "Henry", lastName: "Wilson", age: 48, status: true },
        { firstName: "Amelia", lastName: "Anderson", age: 23, status: false },
        { firstName: "Alexander", lastName: "Thomas", age: 36, status: true },
        { firstName: "Harper", lastName: "Taylor", age: 27, status: false },
        { firstName: "Michael", lastName: "Moore", age: 42, status: true },
        { firstName: "Evelyn", lastName: "Jackson", age: 25, status: false },
        { firstName: "Daniel", lastName: "Martin", age: 39, status: true }
    ], [])

    const columns = [
        {
            id: 'select',
            header: ({ table }) => (
                <input
                    type="checkbox"
                    checked={table.getIsAllRowsSelected()}
                    onChange={table.getToggleAllRowsSelectedHandler()}
                />
            ),
            cell: ({ row }) => (
                <input
                    type="checkbox"
                    checked={row.getIsSelected()}
                    onChange={row.getToggleSelectedHandler()}
                />
            ),
        },
        // { accessorKey: "#s", header: "#S-NO" },
        { accessorKey: "firstName", header: "First Name" },
        { accessorKey: "lastName", header: "Last Name" },
        { accessorKey: "age", header: "Age" },
        { accessorKey: "status", header: "Status", },
    ];

    // Custom filter function that handles different types

    // const globalFilterFn = (row, columnId, filterValue) => {
    //     const value = row.getValue(columnId);

    //     if (typeof value === 'string') {
    //         return value.toLowerCase().includes(filterValue.toLowerCase());
    //     }
    //     if (typeof value === 'number') {
    //         return value.toString().includes(filterValue);
    //     }
    //     if (typeof value === 'boolean') {
    //         return filterValue === '' ||
    //             (filterValue.toLowerCase() === 'true' && value) ||
    //             (filterValue.toLowerCase() === 'false' && !value);
    //     }
    //     return false;
    // };


    const randomId: number = new Date().getTime();

    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter: filter,
            rowSelection
        },
        onGlobalFilterChange: setFilter,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        globalFilterFn: 'includesString',
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: { pagination: { pageSize: 6 } }, // this decide how many rows per page 
        onRowSelectionChange: setRowSelection, // my State
        enableRowSelection: true,
        getRowId: (row) => `${row.firstName}-${row.lastName}-${Date.now()}`, // () => JSON.stringify(randomId * 1)
        // globalFilterFn: globalFilterFn,
    });

    // const result = table.getSelectedRowModel().flatRows;


    // const {
    //         pageIndex
    //     } = table.getState().pagination;
    //     const pageCount = table.getPageCount();
    //     if (pageCount === -1) {
    //         return true;
    //     }
    //     if (pageCount === 0) {
    //         return false;
    //     }
    //     return pageIndex < pageCount - 1;
    //      };
    //      table.previousPage = () => {
    //     return table.setPageIndex((old) => old - 1);
    //      };
    //      table.nextPage = () => {
    //     return table.setPageIndex((old) => {
    //         return old + 1;
    //     });
    //      };
    //      table.firstPage = () => {
    //     return table.setPageIndex(0);
    //      };
    //      table.lastPage = () => {
    //     return table.setPageIndex(table.getPageCount() - 1);
    //      };



    // console.log('Filtered Table ', table.getRowModel().rows.map(row => row.original))


    return (
        <div className="p-4">
            {/* Search Input */}
            <input
                type="text"
                placeholder="Filter..."
                value={filter}
                onChange={(e) => {
                    setFilter(e.target.value.trim() || "")
                }}
                className="border-2 border-black p-2 mb-4"
            />
            {/* Column Filter (Status) */}

            <select
                className="border ml-4 p-2"
                onChange={(e) => {
                    const value = e.target.value === 'true' ? true
                        : e.target.value === 'false' ? false
                            : undefined;

                    table.getColumn("status")?.setFilterValue(value)

                }}
            >
                <option value="all">All Statuses</option>
                <option value="true">Active</option>
                <option value="false">Inactive</option>
            </select>
            <button
                className="border ml-4 p-2 cursor-pointer"
                onClick={() => {
                    table.setPageIndex(0) // Index 0 = 1 
                }}>
                First Page
            </button>
            {/* Add Bulk Action */}
            <button
                className="border ml-4 p-2 cursor-pointer"
            >
                Bulk Selection
            </button>
            {/* Table */}
            <table className="w-full border-collapse">
                <thead className="bg-gray-100">
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {/* {headerGroup.headers.map(header => (
                                <th
                                    key={header.id}
                                    className="p-2 text-left border-b cursor-pointer"
                                >
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))} */}
                            {headerGroup.headers.map(header => (
                                <th onClick={header.column.getToggleSortingHandler()}
                                    key={header.id}
                                    className="p-2 text-left border-b cursor-pointer">

                                    {/* {flexRender(...)} */}
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                    {/* {header.column.columnDef.header as string} */}
                                    {header.column.getIsSorted() === 'asc' ? ' ↑' : ''}
                                    {header.column.getIsSorted() === 'desc' ? ' ↓' : ''}
                                    {/* {flexRender(header.column.columnDef.header, header.getContext())} */}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id} className="hover:bg-gray-50">
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className="p-2 border-b">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex gap-2">
                <button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    className="cursor-pointer"
                >
                    ← Prev
                </button>
                <span>
                    {/* { table.getState().pagination.pageIndex + 1} / {table.getPageCount()} */}
                    Page {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
                </span>
                <button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className="cursor-pointer"
                >
                    Next →
                </button>
            </div>
            <p>{table.getAllColumns().length} All Columns | {table.getCoreRowModel().rows.length} All Rows </p>
            <pre>  {JSON.stringify(rowSelection, null, 2)}</pre>


            {/* If No Matching is Found */}
            {
                table.getRowModel().rows.length === 0 && (
                    <div className="text-black font-bold text-2xl">
                        <p>No matching records found</p>
                    </div>
                )
            }

        </div >
    );
}


export default FilteredTable

// FilterFns
// Each column can have its own unique filtering logic.Choose from any of the filter functions that are provided by  TanStack Table, or create your own.

// By default there are 10 built -in filter functions to choose from:

// includesString - Case - insensitive string inclusion
// includesStringSensitive - Case - sensitive string inclusion
// equalsString - Case - insensitive string equality
// equalsStringSensitive - Case - sensitive string equality
// arrIncludes - Item inclusion within an array
// arrIncludesAll - All items included in an array
// arrIncludesSome - Some items included in an array
// equals - Object / referential equality Object.is /===
// weakEquals - Weak object / referential equality ==
// inNumberRange - Number range inclusion