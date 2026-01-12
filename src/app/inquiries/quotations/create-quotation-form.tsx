
'use client';

import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect } from 'react';
import { Inquiry } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PlusCircle, Trash2 } from 'lucide-react';
import { useFormState, useFormStatus } from 'react-dom';
import { createQuotation } from '@/actions/create-quotation';
import { useToast } from '@/hooks/use-toast';

const lineItemSchema = z.object({
  description: z.string().min(1, "Description is required."),
  quantity: z.coerce.number().min(0.01, "Quantity must be positive."),
  unitPrice: z.coerce.number().min(0, "Unit price must be non-negative."),
});

const quotationSchema = z.object({
  inquiryId: z.string(),
  customerName: z.string(),
  customerEmail: z.string(),
  customerCompany: z.string().optional(),
  lineItems: z.array(lineItemSchema).min(1, "At least one line item is required."),
  notes: z.string().optional(),
  taxRate: z.coerce.number().min(0).max(100),
});

type QuotationFormValues = z.infer<typeof quotationSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save as Draft"}
    </Button>
  );
}

interface CreateQuotationFormProps {
  inquiry: Inquiry;
  onQuotationCreated: (quotationId: string) => void;
}

export default function CreateQuotationForm({ inquiry, onQuotationCreated }: CreateQuotationFormProps) {
  const { toast } = useToast();

  const [state, formAction] = useFormState(createQuotation, { success: false, message: null, errors: null });

  const form = useForm<QuotationFormValues>({
    resolver: zodResolver(quotationSchema),
    defaultValues: {
      inquiryId: inquiry.id,
      customerName: inquiry.name,
      customerEmail: inquiry.email,
      customerCompany: inquiry.company,
      lineItems: inquiry.quoteItems?.map(item => ({ description: item.name, quantity: 1, unitPrice: 0 })) || [{ description: '', quantity: 1, unitPrice: 0 }],
      notes: '',
      taxRate: 18, // Default GST rate
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "lineItems",
  });
  
  const watchedLineItems = form.watch('lineItems');
  const watchedTaxRate = form.watch('taxRate');

  const subtotal = watchedLineItems.reduce((acc, item) => acc + (item.quantity || 0) * (item.unitPrice || 0), 0);
  const taxAmount = (subtotal * (watchedTaxRate || 0)) / 100;
  const total = subtotal + taxAmount;

  useEffect(() => {
    if (state.success && state.quotationId) {
      toast({
        title: "Success!",
        description: state.message,
      });
      onQuotationCreated(state.quotationId);
    } else if (state.message) {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, onQuotationCreated, toast]);

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-8">
        <input type="hidden" name="inquiryId" value={inquiry.id} />
        <input type="hidden" name="customerName" value={inquiry.name} />
        <input type="hidden" name="customerEmail" value={inquiry.email} />
        <input type="hidden" name="customerCompany" value={inquiry.company || ''} />

        <Card>
          <CardHeader>
            <CardTitle>Line Items</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50%]">Description</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Unit Price</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fields.map((field, index) => (
                  <TableRow key={field.id}>
                    <TableCell>
                      <FormField
                        control={form.control}
                        name={`lineItems.${index}.description`}
                        render={({ field }) => (
                          <Input {...field} placeholder="Item description" />
                        )}
                      />
                    </TableCell>
                    <TableCell>
                      <FormField
                        control={form.control}
                        name={`lineItems.${index}.quantity`}
                        render={({ field }) => (
                          <Input {...field} type="number" placeholder="1" />
                        )}
                      />
                    </TableCell>
                    <TableCell>
                       <FormField
                        control={form.control}
                        name={`lineItems.${index}.unitPrice`}
                        render={({ field }) => (
                          <Input {...field} type="number" placeholder="0.00" />
                        )}
                      />
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(((watchedLineItems[index]?.quantity || 0) * (watchedLineItems[index]?.unitPrice || 0)))}
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" onClick={() => remove(index)} disabled={fields.length <= 1}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-4"
              onClick={() => append({ description: '', quantity: 1, unitPrice: 0 })}
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Line Item
            </Button>
             {form.formState.errors.lineItems && (
                <p className="text-sm font-medium text-destructive mt-2">{form.formState.errors.lineItems.message}</p>
             )}
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
                 <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Notes / Terms & Conditions</FormLabel>
                        <FormControl>
                            <Textarea {...field} placeholder="e.g. Payment terms, delivery schedule..." className="min-h-[150px]" />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <div className="space-y-4">
                <Card>
                    <CardHeader><CardTitle>Summary</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span className="font-medium">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(subtotal)}</span>
                        </div>
                         <div className="flex justify-between items-center">
                            <FormLabel>Tax Rate (%)</FormLabel>
                            <FormField
                                control={form.control}
                                name="taxRate"
                                render={({ field }) => (
                                    <Input {...field} type="number" className="w-24 h-8" />
                                )}
                            />
                        </div>
                        <div className="flex justify-between">
                            <span>Tax</span>
                            <span className="font-medium">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(taxAmount)}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg border-t pt-4">
                            <span>Total</span>
                            <span>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(total)}</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>

        {/* Hidden inputs to pass calculated values to server action */}
        <input type="hidden" name="lineItems" value={JSON.stringify(watchedLineItems.map(item => ({...item, total: item.quantity * item.unitPrice})))} />
        
        <div className="flex justify-end">
            <SubmitButton />
        </div>
      </form>
    </Form>
  );
}
