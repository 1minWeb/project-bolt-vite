import { useState } from 'react';
import { Job } from './types/job';
import { JobTable } from './components/jobs/job-table';
import { columns } from './components/jobs/columns';
import { JobForm } from './components/jobs/job-form';
import { PlusCircle, Table as TableIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sidebar } from './components/layout/sidebar';
import { Header } from './components/layout/header';
import { Toaster } from 'sonner';

const initialData: Job[] = [
  {
    jobNumber: "JOB001",
    jobName: "Office Renovation",
    location: "New York",
    siteAddress: "123 Business Ave, NY 10001",
    requestor: "John Smith",
    poNumber: "PO123456",
    amount: 25000,
    billDate: "2024-03-15",
    invoiceNumber: "INV001",
    invoiced: true,
    column1: "Note 1",
    column2: "Priority High",
    column3: "Phase 1"
  },
  {
    jobNumber: "JOB002",
    jobName: "Warehouse Expansion",
    location: "Chicago",
    siteAddress: "456 Industrial Pkwy, IL 60601",
    requestor: "Sarah Johnson",
    poNumber: "PO789012",
    amount: 75000,
    billDate: "2024-03-20",
    invoiceNumber: "INV002",
    invoiced: false,
    column1: "Note 2",
    column2: "Priority Medium",
    column3: "Phase 2"
  }
];

function App() {
  const [data] = useState<Job[]>(initialData);
  // const [isOpen, setIsOpen] = useState(true); // State to manage sidebar visibility

  // const toggleSidebar = () => {
  //   setIsOpen(prev => !prev); // Toggle the sidebar state
  // };
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 pl-64">         <Header />
        <main className="container py-10 m-4">
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Job Management</h1>
              <p className="text-muted-foreground">
                Manage your jobs, create new entries, and track invoices.
              </p>
            </div>

            <Tabs defaultValue="table" className="w-full">
              <TabsList className="grid w-full max-w-[400px] grid-cols-2">
                <TabsTrigger value="table" className="flex items-center gap-2">
                  <TableIcon className="h-4 w-4" />
                  View Jobs
                </TabsTrigger>
                <TabsTrigger value="create" className="flex items-center gap-2">
                  <PlusCircle className="h-4 w-4" />
                  Create Job
                </TabsTrigger>
              </TabsList>
              <TabsContent value="table" className="border rounded-lg p-4 m-4">
                <JobTable columns={columns} data={data} />
              </TabsContent>
              <TabsContent value="create" className="border rounded-lg p-4 m-4">
                <JobForm />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
      <Toaster />
    </div>
  );
}

export default App;