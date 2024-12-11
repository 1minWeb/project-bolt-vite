import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { jobFormSchema, type JobFormValues } from '../components/job-form/schema';

export function useJobForm() {
  const form = useForm<JobFormValues>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      invoiced: false,
    },
  });

  const onSubmit = (values: JobFormValues) => {
    toast.success('Job created successfully!');
    console.log(values);
    form.reset();
  };

  return {
    form,
    onSubmit,
  };
}