import * as z from "zod";
import { createColumnHelper } from "@tanstack/react-table"; // Adjust import based on your setup
import { Job } from "@/types/job";

export const jobFormSchema = z.object({
  jobNumber: z.string().min(1, "Job number is required"),
  jobName: z.string().min(1, "Job name is required"),
  location: z.string().min(1, "Location is required"),
  siteAddress: z.string().min(1, "Site address is required"),
  requestor: z.string().min(1, "Requestor is required"),
  poNumber: z.string().min(1, "PO number is required"),
  amount: z.string().min(1, "Amount is required"),
  billDate: z.date(),
  invoiceNumber: z.string().min(1, "Invoice number is required"),
  invoiced: z.boolean().default(false),
  column1: z.string().optional(),
  column2: z.string().optional(),
  column3: z.string().optional(),
});
export const getColumns = (): string[] => {
  return Object.keys(jobFormSchema.shape);
};
// Create a column helper for the Job type
const columnHelper = createColumnHelper<Job>();

// Define columns
const jobColumns = [
  columnHelper.accessor("jobNumber", {
    header: "Job Number",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("jobName", {
    header: "Job Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("location", {
    header: "Location",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("siteAddress", {
    header: "Site Address",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("requestor", {
    header: "Requestor",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("poNumber", {
    header: "PO Number",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("amount", {
    header: "Amount",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("billDate", {
    header: "Bill Date",
    cell: (info) => info.getValue(), // Format date as needed
  }),
  columnHelper.accessor("invoiceNumber", {
    header: "Invoice Number",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("invoiced", {
    header: "Invoiced",
    cell: (info) => (info.getValue() ? "Yes" : "No"), // Display Yes/No for boolean
  }),
];

// Export or use these columns in your JobList component
export { jobColumns };
export type JobFormValues = z.infer<typeof jobFormSchema>;
