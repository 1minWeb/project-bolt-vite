import { ColumnDef } from "@tanstack/react-table"
import { Job } from "@/types/job"
import { Checkbox } from "@/components/ui/checkbox"
import { formatCurrency } from "@/lib/utils"
import { DataTableColumnHeader } from "./data-table-column-header"

export const columns: ColumnDef<Job>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "jobNumber",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Job Number" />,
    },
    {
        accessorKey: "jobName",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Job Name/Location" />,
    },
    {
        accessorKey: "location",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Location" />,
    },
    {
        accessorKey: "siteAddress",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Site Address" />,
    },
    {
        accessorKey: "requestor",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Requestor" />,
    },
    {
        accessorKey: "poNumber",
        header: ({ column }) => <DataTableColumnHeader column={column} title="PO #" />,
    },
    {
        accessorKey: "amount",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Amount" />,
        cell: ({ row }) => formatCurrency(row.getValue("amount")),
    },
    {
        accessorKey: "billDate",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Bill Date" />,
    },
    {
        accessorKey: "invoiceNumber",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Invoice #" />,
    },
    {
        accessorKey: "invoiced",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Invoiced" />,
        cell: ({ row }) => (
            <Checkbox checked={row.getValue("invoiced")} disabled />
        ),
    },
    {
        accessorKey: "column1",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Column 1" />,
    },
    {
        accessorKey: "column2",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Column 2" />,
    },
    {
        accessorKey: "column3",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Column 3" />,
    },
]