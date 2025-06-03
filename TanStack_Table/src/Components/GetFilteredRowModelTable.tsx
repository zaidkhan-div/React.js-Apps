import { getCoreRowModel, useReactTable, getFilteredRowModel, flexRender } from "@tanstack/react-table"

const GetFilteredRowModelTable = () => {

    type User = {
        firstName: string
        lastName: string
        age: number
        status: boolean
    }

    const data: User[] = [
        {
            firstName: "Zaid",
            lastName: "Khan",
            age: 18,
            status: false
        },
        {
            firstName: "Musab",
            lastName: "Boss",
            age: 20,
            status: false
        },
        {
            firstName: "Dilawar",
            lastName: "Giligiti",
            age: 22,
            status: true
        }
    ]
    const columns = [
        { accessorKey: "firstName", header: "First Name" },
        { accessorKey: "lastName", header: "Last Name" },
        { accessorKey: "age", header: "Age" },
        { accessorKey: "status", header: "Status" },
    ]
    // In TanStack Table, all your data (rows, columns, cells) is stored in a structured object returned by useReactTable(). Here’s how to access it:
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel()
    })

    let result = table.getHeaderGroups().map(item => {
        return item.headers
    })
    console.log(result);

    return (
        <div>
            <thead>
                {table.getHeaderGroups().map(item => (
                    <tr key={item.id} className="table-row">
                        {
                            item.headers.map((header) => (
                                <div className="">
                                    <th key={header.id}>
                                        <div className="flex flex-row items-center text-left p-2 font-bold">
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                        </div>
                                        {/* 
                                    flexRender is a function, not an object.
                                    It takes two arguments:
                                    The header/cell definition (header.column.columnDef.header).
                                    The context (header.getContext()).
                                    */}
                                    </th>
                                </div>
                            ))
                        }
                    </tr>
                ))}
            </thead>
        </div>
    )
}

export default GetFilteredRowModelTable