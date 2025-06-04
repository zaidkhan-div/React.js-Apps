import { getCoreRowModel, useReactTable, getFilteredRowModel, flexRender, getFacetedRowModel } from "@tanstack/react-table"
import { useState } from "react"

const GetFilteredRowModelTable = () => {
  const [filter, setFilter] = useState('')

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
  // In TanStack Table, all your data (rows, columns, cells) is stored in a structured object returned by useReactTable(). Here's how to access it:
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filter
    },
    onGlobalFilterChange: setFilter,
    getFacetedRowModel:getFacetedRowModel() // needed for client-side filtering
  })

  // console.log(filter);


  // let result = table.getHeaderGroups().map(item => {
  //   return item.headers.map((data) => {
  //     return data.column.columnDef.accessorKey
  //   })
  // })

  // const result = table.getHeaderGroups().map(group => group.headers)
  // let finalData = result.map((item) => {
  //     return item
  // })

  // console.log(result);
  // console.log(table.getRowModel().rows[1].original);


  return (
    <>
      <div className="mt-10">
        <input
          type="text"
          placeholder="Filter.."
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />

        {/* Added table wrapper and tbody */}
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className="hover:bg-gray-100">
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs text-black uppercase"
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
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="border-b">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="px-6 py-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default GetFilteredRowModelTable


// rough Code

// With filtering ENABLED:
// const table = useReactTable({
//   data,
//   columns,
//   getCoreRowModel: getCoreRowModel(),
//   getFilteredRowModel: getFilteredRowModel(), // 🚀 Enables filtering
//   state: { globalFilter: "Zaid" }, // Apply filter
// });

// console.log(table.getRowModel().rows); // Only rows with "Zaid"


// With filtering DISABLED:
// const table = useReactTable({
//   data,
//   columns,
//   getCoreRowModel: getCoreRowModel(), // No getFilteredRowModel
// });

// console.log(table.getRowModel().rows); // All rows (no filtering)