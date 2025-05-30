import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"


const Table = () => {

    //Table Data Type
    type User = {
        firstName: string
        lastName: string
        age: number
        status: boolean
    }

    const data: User[] = [{
        firstName: "Zaid",
        lastName: "Khan",
        age: 18,
        status: false
    }]

    const columns = [
        { accessorKey: "firstName", header: "First Name" },
        { accessorKey: "lastName", header: "Last Name" },
        { accessorKey: "age", header: "Age" },
        { accessorKey: "status", header: "Status" },
    ];


    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    })

    return (
        <div>
            <table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table