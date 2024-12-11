
import { columns } from '@/components/jobs/columns';
import { JobTable } from '@/components/jobs/job-table';
import { Job } from '@/types/job';

interface JobListProps {
  data: Job[];
}

export function JobList({ data }: JobListProps) {
  return (
    <div className="border rounded-lg p-4">
      <JobTable columns={columns} data={data} />
    </div>
  );
}