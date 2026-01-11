"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { InquiryState, submitInquiry } from "@/actions/submit-inquiry";
import { industries } from "@/lib/data";
import { useQuote } from "@/context/quote-context";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  company: z.string().optional(),
  inquiryType: z.string().min(1, { message: "Please select an inquiry type." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Submitting..." : "Submit Inquiry"}
    </Button>
  );
}

export default function ContactForm() {
  const { toast } = useToast();
  const { quoteItems, clearQuote } = useQuote();

  const initialState: InquiryState = { success: false, message: null, errors: null };
  const [state, formAction] = useFormState(submitInquiry, initialState);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      inquiryType: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Success!",
        description: state.message,
      });
      form.reset();
      clearQuote();
    } else if (state.message) {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast, form, clearQuote]);

  const quoteItemsForForm = quoteItems.map(item => ({ sku: item.sku, name: item.name }));

  return (
    <Form {...form}>
      <form
        action={formAction}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage>{state.errors?.name}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="you@company.com" {...field} />
                </FormControl>
                <FormMessage>{state.errors?.email}</FormMessage>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Your Company Name" {...field} />
              </FormControl>
              <FormMessage>{state.errors?.company}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="inquiryType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Inquiry Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an industry" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {industries.map(industry => (
                    <SelectItem key={industry.id} value={industry.name}>{industry.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage>{state.errors?.inquiryType}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Please describe your requirements..." className="min-h-[120px]" {...field} />
              </FormControl>
              <FormMessage>{state.errors?.message}</FormMessage>
            </FormItem>
          )}
        />
        
        <input type="hidden" name="quoteItems" value={JSON.stringify(quoteItemsForForm)} />
        
        <SubmitButton />
      </form>
    </Form>
  );
}
