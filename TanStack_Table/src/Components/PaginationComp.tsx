import type { useReactTable } from "@tanstack/react-table"

type PaginationProps = {
    props: typeof useReactTable<unknown>
}

const PaginationComp = ({ props }: PaginationProps) => {
    return (
        <>
            <div className="flex items-center justify-start gap-5 text-red-500 ">
                <button
                    className="cursor-pointer"
                    onClick={() => props.previousPage()}
                    disabled={!props.getCanPreviousPage()}
                >
                    ← Prev
                </button>
                <p>{props.getState().pagination.pageIndex + 1} / {props.getPageCount()}</p>
                <button
                    className="cursor-pointer"
                    onClick={() => props.nextPage()}
                    disabled={!props.getCanNextPage()}
                >
                    Next →
                </button>
            </div>
        </>
    )
}

export default PaginationComp