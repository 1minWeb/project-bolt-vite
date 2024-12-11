import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
// import { Checkbox } from '@/components/ui/checkbox';
// import { DatePicker } from './date-picker';
import type { UseFormReturn } from 'react-hook-form';
import type { JobFormValues } from './schema';

interface FormFieldsProps {
  form: UseFormReturn<JobFormValues>;
}

export function FormFields({ form }: FormFieldsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        control={form.control}
        name="jobNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Job Number</FormLabel>
            <FormControl>
              <Input placeholder="Enter job number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* Move other form fields here */}
    </div>
  );
}