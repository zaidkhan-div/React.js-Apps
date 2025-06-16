import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';

interface Person {
    id: number;
    name: string;
}

const columns = [
    {
        accessorKey: 'id',
        header: 'ID',
        size: 80, // Set column width
    },
    {
        accessorKey: 'name',
        header: 'Name',
        size: 200, // Set column width
    },
];

const VirtualTable1 = () => {
    const tableContainerRef = useRef<HTMLDivElement>(null);
    const data: Person[] = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Bob' },
        // Add more data to see virtualization in action
        ...Array.from({ length: 1000 }, (_, i) => ({
            id: i + 4,
            name: `User ${i + 4}`,
        })),
    ];

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    const rowVirtualizer = useVirtualizer({
        count: table.getRowModel().rows.length,
        getScrollElement: () => tableContainerRef.current,
        estimateSize: () => 50, // row height
        overscan: 5,
    });

    return (
        <div className="p-4 max-w-3xl mx-auto"> {/* Container with max width */}
            <div
                ref={tableContainerRef}
                className="border border-gray-200 rounded-lg shadow-sm overflow-auto h-96"
            >
                <table className="w-full relative">
                    <thead className="sticky top-0 bg-gray-50 z-10">
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th
                                        key={header.id}
                                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200"
                                        style={{ width: header.getSize() }}
                                    >
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody
                        className="divide-y divide-gray-200"
                        style={{ height: `${rowVirtualizer.getTotalSize()}px` }}
                    >
                        {rowVirtualizer.getVirtualItems().map(virtualRow => {
                            const row = table.getRowModel().rows[virtualRow.index];
                            return (
                                <tr
                                    key={row.id}
                                    className="absolute w-full"
                                    style={{
                                        height: `${virtualRow.size}px`,
                                        transform: `translateY(${virtualRow.start}px)`,
                                    }}
                                >
                                    {row.getVisibleCells().map(cell => (
                                        <td
                                            key={cell.id}
                                            className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap"
                                        >
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default VirtualTable1;