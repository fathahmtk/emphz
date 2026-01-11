"use server";

import { z } from 'zod';
import { routeInquiry } from '@/ai/flows/route-inquiries';

const inquirySchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  email: z.string().email('Invalid email address.'),
  company: z.string().optional(),
  inquiryType: z.string({ required_error: 'Please select an inquiry type.'}).min(1, 'Please select an inquiry type.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
  quoteItems: z.array(z.object({
    sku: z.string(),
    name: z.string(),
  })).optional(),
});

export type InquiryState = {
  success: boolean;
  message: string | null;
  errors?: {
    name?: string[];
    email?: string[];
    company?: string[];
    inquiryType?: string[];
    message?: string[];
    quoteItems?: string[];
  } | null;
}

export async function submitInquiry(prevState: InquiryState, formData: FormData): Promise<InquiryState> {
  
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company'),
    inquiryType: formData.get('inquiryType'),
    message: formData.get('message'),
    quoteItems: JSON.parse(formData.get('quoteItems') as string || '[]'),
  }

  const validation = inquirySchema.safeParse(rawData);

  if (!validation.success) {
    return { 
      success: false, 
      errors: validation.error.flatten().fieldErrors,
      message: "Failed to submit inquiry. Please check the errors below."
    };
  }

  const { inquiryType, message, name, email } = validation.data;

  try {
    // 1. Route inquiry using GenAI
    const routingResult = await routeInquiry({
      inquiryType: inquiryType,
      inquiryDetails: message,
    });
    console.log('Inquiry routed to:', routingResult.expert);
    console.log('Justification:', routingResult.justification);

    // 2. Save to Firestore (simulated)
    console.log('Lead saved to Firestore (simulated):', {
      ...validation.data,
      routedTo: routingResult.expert,
      routedAt: new Date(),
    });

    // 3. Send email notification (simulated)
    console.log(`Email notification sent to ${routingResult.expert} about new inquiry from ${name} (${email}).`);

    return { success: true, message: `Thank you! Your inquiry has been routed to our specialist, ${routingResult.expert}. We will be in touch shortly.`, errors: null };
  } catch (error) {
    console.error('Error processing inquiry:', error);
    return { success: false, message: 'An unexpected error occurred. Please try again.', errors: null };
  }
}
