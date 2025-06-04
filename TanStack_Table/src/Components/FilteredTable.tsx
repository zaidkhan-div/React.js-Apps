import { flexRender, getCoreRowModel, getFilteredRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";


const FilteredTable = () => {
    const [filter, setFilter] = useState('');


    type User = {
        firstName: string;
        lastName: string;
        age: number;
        status: boolean;
    }

    const data: User[] = [
        { firstName: "Zaid", lastName: "Khan", age: 18, status: false },
        { firstName: "Musab", lastName: "Boss", age: 20, status: false },
        { firstName: "Dilawar", lastName: "Giligiti", age: 22, status: true },
    ];

    const columns = [
        { accessorKey: "firstName", header: "First Name" },
        { accessorKey: "lastName", header: "Last Name" },
        { accessorKey: "age", header: "Age" },
        { accessorKey: "status", header: "Status" },
    ];

    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter: filter
        },
        onGlobalFilterChange: setFilter,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel()
    });
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

    // console.log('Filtered Table ', table.getRowModel().rows.map(row => row.original))


    return (
        <div className="p-4">
            {/* Search Input */}
            <input
                type="text"
                placeholder="Filter..."
                value={filter}
                onChange={e => setFilter(e.target.value)}
                className="border-2 border-black p-2 mb-4"
            />

            {/* Table */}
            <table className="w-full border-collapse">
                <thead className="bg-gray-100">
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th
                                    key={header.id}
                                    className="p-2 text-left border-b"
                                >
                                    {flexRender(header.column.columnDef.header, header.getContext())}
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
        </div>
    );
}


export default FilteredTable