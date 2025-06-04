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
    return item.headers.map((data) => {
      return data.column.columnDef.accessorKey
    })
  })

  // const result = table.getHeaderGroups().map(group => group.headers)
  // let finalData = result.map((item) => {
  //     return item
  // })

  // console.log(result);
  // console.log(table.getRowModel().rows[1].original);


  return (
    <div>
      <thead className="bg-gray-50 border-b-2 border-gray-200">
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id} className="hover:bg-gray-100">
            {headerGroup.headers.map(header => (
              <th
                key={header.id}
                className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
              >
                <div className="flex items-center gap-2">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {/* 
                 flexRender is a function, not an object.
                 It takes two arguments:
                 The header/cell definition (header.column.columnDef.header).
                 The context (header.getContext()).
                 */}
                </div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
    </div>
  )
}

export default GetFilteredRowModelTable