// import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner"

const formSchema = z.object({
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
})

export function JobForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            invoiced: false,
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        toast.success("Job created successfully!")
        console.log(values)
        form.reset()
    }

    return (
        <Form {...form}>
            <div className="h-40 justify-end">                <Button type="submit" className="w-full">Create Job</Button>
            </div>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                    <FormField
                        control={form.control}
                        name="jobName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Job Name/Location</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter job name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Location</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter location" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="siteAddress"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Site Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter site address" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="requestor"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Requestor</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter requestor name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="poNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>PO Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter PO number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="amount"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Amount</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="Enter amount" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="billDate"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Bill Date</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) =>
                                                date > new Date() || date < new Date("1900-01-01")
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="invoiceNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Invoice Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter invoice number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="invoiced"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel>Invoiced</FormLabel>
                                </div>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="column1"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Column 1</FormLabel>
                                <FormControl>
                                    <Input placeholder="Optional" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="column2"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Column 2</FormLabel>
                                <FormControl>
                                    <Input placeholder="Optional" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="column3"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Column 3</FormLabel>
                                <FormControl>
                                    <Input placeholder="Optional" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </form>
        </Form>
    )
}