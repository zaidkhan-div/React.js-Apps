import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table"
import { useMemo, useState } from "react"
import PaginationComp from "./PaginationComp"


// Here are all of the rowModels that are available

/* 
import {
    getCoreRowModel,
    getExpandedRowModel,
    getFacetedMinMaxValues,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getGroupedRowModel,
    getPaginationRowModel,
    getSortedRowModel,
} 
  */

/*  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFilteredRowModel: getFilteredRowModel(),
    getGroupedRowModel: getGroupedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  }) */


const Table = () => {

    const [sorting, setSorting] = useState([])

    //Table Data Type
    type User = {
        firstName: string
        lastName: string
        age: number
        status: boolean
    }

    // This is like a row data in Excel
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

    // Columns (Define How to Display Data)
    const columns = [
        { accessorKey: "firstName", header: "First Name" },
        { accessorKey: "lastName", header: "Last Name" },
        { accessorKey: "age", header: "Age" },
        { accessorKey: "status", header: "Status" },
    ];
    // accessorKey: The key in your data to access (e.g., data[0].firstName = "Zaid").
    // header: The text to show in the table header(you decide this).

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting
        },
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onSortingChange: setSorting, // Required for sorting updates
        enableSorting: true,
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: { pageSize: 6 },
        }
        // getCoreRowModel - returns a basic row model that is just a 1: 1 mapping of the original data passed to the table.
    })
    //     What it does:
    //      Takes your data + columns.
    //      Processes them into a table structure(rows, cells, headers).



    // const item = table.getRowModel().rows.map(row => row.original)
    // console.log(item);

    // Save table data to localStorage
    // const saveData = () => {
    //     const dataToSave = table.getRowModel().rows.map(row => row.original);
    //     localStorage.setItem("tableData", JSON.stringify(dataToSave));
    // };

    // saveData();

    return (
        <div className="table-row-group w-1/2">
            <div className="table-header-group bg-gray-100">
                {table.getHeaderGroups().map(headerGroup => (
                    <div key={headerGroup.id} className="table-row">
                        {headerGroup.headers.map(header => (
                            <th
                                key={header.id}
                                className="table-cell text-left p-2 font-bold cursor-pointer"
                                onClick={header.column.getToggleSortingHandler()}
                            >
                                {flexRender(header.column.columnDef.header, header.getContext())}
                                {header.column.getIsSorted() === 'asc' ? "↑" : ""}
                                {header.column.getIsSorted() === 'desc' ? "↓" : ""}
                            </th>
                        ))}
                    </div>
                ))}
            </div>
            <div className="table-row-group">
                {table.getRowModel().rows.map(row => (
                    <div key={row.id} className="table-row hover:bg-gray-50">
                        {row.getVisibleCells().map(cell => (
                            <div key={cell.id} className="table-cell text-left p-2 border-t">
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <PaginationComp props={table} />
            {/* <div className="flex items-center justify-start gap-5 text-red-500">
                <button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    className=" cursor-pointer"
                >  ← Prev
                </button>
                <p>{table.getState().pagination.pageIndex + 1}/{table.getPageCount()}</p>
                <button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className=" cursor-pointer"
                >   Next →   </button>
            </div> */}
        </div>
    )
}

export default Table



// Available Row Models on Table Instance
// getRowModel - This is the main row model that you should use for rendering your table rows markup. It will use all of the other row models to generate the final row model that you will use to render your table rows.

// getCoreRowModel - returns a basic row model that is just a 1:1 mapping of the original data passed to the table.

// getFilteredRowModel - returns a row model that accounts for column filtering and global filtering.

// getPreFilteredRowModel - returns a row model before column filtering and global filtering are applied.

// getGroupedRowModel - returns a row model that applies grouping and aggregation to the data and creates sub-rows.

// getPreGroupedRowModel - returns a row model before grouping and aggregation are applied.

// getSortedRowModel - returns a row model that has had sorting applied to it.

// getPreSortedRowModel - returns a row model before sorting is applied (rows are in original order).

// getExpandedRowModel - returns a row model that accounts for expanded/hidden sub-rows.

// getPreExpandedRowModel - returns a row model that only includes root level rows with no expanded sub-rows included. Still includes sorting.

// getPaginationRowModel - returns a row model that only includes the rows that should be displayed on the current page based on the pagination state.

// getPrePaginationRowModel - returns a row model without pagination applied (includes all rows).

// getSelectedRowModel - returns a row model of all selected rows (but only based on the data that was passed to the table). Runs after getCoreRowModel.

// getPreSelectedRowModel - returns a row model before row selection is applied (Just returns getCoreRowModel).

// getGroupedSelectedRowModel - returns a row model of selected rows after grouping. Runs after getSortedRowModel, which runs after getGroupedRowModel, which runs after getFilteredRowModel.

// getFilteredSelectedRowModel - returns a row model of selected rows after column filtering and global filtering. Runs after getFilteredRowModel. 
// 