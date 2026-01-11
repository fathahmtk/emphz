"use server";

import { z } from 'zod';
import { routeInquiry } from '@/ai/flows/route-inquiries';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeFirebase } from '@/firebase';

const inquirySchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  email: z.string().email('Invalid email address.'),
  company: z.string().optional(),
  projectType: z.string().optional(),
  product: z.string().optional(),
  quantity: z.string().optional(),
  location: z.string().optional(),
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
    projectType?: string[];
    product?: string[];
    quantity?: string[],
    location?: string[],
    message?: string[];
    quoteItems?: string[];
  } | null;
}

export async function submitInquiry(prevState: InquiryState, formData: FormData): Promise<InquiryState> {
  
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company'),
    projectType: formData.get('projectType'),
    product: formData.get('product'),
    quantity: formData.get('quantity'),
    location: formData.get('location'),
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

  const { message, name, email, product, quoteItems } = validation.data;
  
  const inquiryContent = `
    Message: ${message}
    Selected Product: ${product || 'N/A'}
    Quote Basket Items: ${quoteItems && quoteItems.length > 0 ? quoteItems.map(item => item.name).join(', ') : 'None'}
  `;

  try {
    // 1. Route inquiry using GenAI
    const routingResult = await routeInquiry({
      inquiryType: product || (quoteItems && quoteItems.length > 0 ? quoteItems.map(i=>i.name).join(', ') : 'General Inquiry'),
      inquiryDetails: inquiryContent,
    });
    console.log('Inquiry routed to:', routingResult.expert);

    // 2. Save to Firestore
    const { firestore } = initializeFirebase();
    const inquiryData = {
      ...validation.data,
      routedTo: routingResult.expert,
      routedAt: new Date(),
      status: 'New',
    };
    await addDoc(collection(firestore, 'inquiries'), inquiryData);
    console.log('Inquiry saved to Firestore.');

    // 3. Send email notification (simulated)
    console.log(`Email notification sent to ${routingResult.expert} about new inquiry from ${name} (${email}).`);

    return { success: true, message: `Thank you! Your inquiry has been routed to our specialist, ${routingResult.expert}. We will be in touch shortly.`, errors: null };
  } catch (error) {
    console.error('Error processing inquiry:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';
    return { success: false, message: `An unexpected error occurred: ${errorMessage} Please try again.`, errors: null };
  }
}
