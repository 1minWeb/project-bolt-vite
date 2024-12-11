export interface Job {
  jobNumber: string;
  jobName: string;
  location: string;
  siteAddress: string;
  requestor: string;
  poNumber: string;
  amount: number;
  billDate: string;
  invoiceNumber: string;
  invoiced: boolean;
  column1?: string;
  column2?: string;
  column3?: string;
}