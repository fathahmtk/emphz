
'use server';

import { z } from 'zod';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { initializeFirebase } from '@/firebase';
import { errorEmitter } from '@/firebase/errors/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors/errors';
import { revalidatePath } from 'next/cache';

const lineItemSchema = z.object({
  description: z.string().min(1),
  quantity: z.coerce.number().min(0.01),
  unitPrice: z.coerce.number().min(0),
  total: z.coerce.number()
});

const quotationSchema = z.object({
  inquiryId: z.string().min(1),
  customerName: z.string().min(1),
  customerEmail: z.string().email(),
  customerCompany: z.string().optional(),
  lineItems: z.array(lineItemSchema).min(1),
  notes: z.string().optional(),
  taxRate: z.coerce.number().min(0),
});

export type QuotationState = {
  success: boolean;
  message: string | null;
  quotationId?: string;
  errors?: {
    [key: string]: string[] | undefined;
  } | null;
};

export async function createQuotation(prevState: QuotationState, formData: FormData): Promise<QuotationState> {
  const rawData = {
    inquiryId: formData.get('inquiryId'),
    customerName: formData.get('customerName'),
    customerEmail: formData.get('customerEmail'),
    customerCompany: formData.get('customerCompany'),
    lineItems: JSON.parse(formData.get('lineItems') as string || '[]'),
    notes: formData.get('notes'),
    taxRate: formData.get('taxRate'),
  };

  const validation = quotationSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      success: false,
      errors: validation.error.flatten().fieldErrors,
      message: "Failed to create quotation. Please check the errors."
    };
  }

  const { lineItems, taxRate, ...customerData } = validation.data;

  const subtotal = lineItems.reduce((acc, item) => acc + item.total, 0);
  const taxAmount = (subtotal * taxRate) / 100;
  const total = subtotal + taxAmount;

  try {
    const { firestore } = initializeFirebase();
    const quotationsCollection = collection(firestore, 'quotations');
    
    // Generate a new quotation number - could be more sophisticated
    const quotationNumber = `QU-${Date.now().toString().slice(-6)}`;

    const quotationData = {
      ...customerData,
      quotationNumber,
      lineItems,
      subtotal,
      taxRate,
      taxAmount,
      total,
      status: 'Draft' as const,
      createdAt: serverTimestamp(),
      validUntil: serverTimestamp(), // Placeholder, should be calculated
    };

    const docRef = await addDoc(quotationsCollection, quotationData).catch(async (serverError) => {
      const permissionError = new FirestorePermissionError({
        path: quotationsCollection.path,
        operation: 'create',
        requestResourceData: quotationData,
      });
      errorEmitter.emit('permission-error', permissionError);
      // Throw an error to be caught by the outer try/catch
      throw new Error("Firestore permission denied.");
    });
    
    console.log('Quotation saved to Firestore with ID:', docRef.id);
    
    revalidatePath(`/inquiries/${validation.data.inquiryId}`);

    return { 
        success: true, 
        message: `Quotation ${quotationNumber} created successfully.`,
        quotationId: docRef.id,
        errors: null 
    };

  } catch (error) {
    console.error('Error creating quotation:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';
    return { success: false, message: `An unexpected error occurred: ${errorMessage}`, errors: null };
  }
}
