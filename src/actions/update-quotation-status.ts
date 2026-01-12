
'use server';

import { z } from 'zod';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { initializeFirebase } from '@/firebase';
import { revalidatePath } from 'next/cache';
import { errorEmitter } from '@/firebase/errors/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors/errors';
import { QuotationStatus } from '@/lib/types';

const updateStatusSchema = z.object({
  quotationId: z.string().min(1),
  status: z.enum(['Draft', 'Sent', 'Accepted', 'Rejected']),
});

export async function updateQuotationStatus(formData: FormData) {
  const rawData = {
    quotationId: formData.get('quotationId'),
    status: formData.get('status'),
  };

  const validation = updateStatusSchema.safeParse(rawData);

  if (!validation.success) {
    return { success: false, message: 'Invalid data provided.' };
  }

  const { quotationId, status } = validation.data;

  const { firestore } = initializeFirebase();
  const quotationRef = doc(firestore, 'quotations', quotationId);
  const updateData = { status: status };

  updateDoc(quotationRef, updateData)
    .then(() => {
        revalidatePath(`/quotations/${quotationId}`);
        // Also revalidate the inquiry page in case we show quotation status there.
        // We'd need the inquiryId for this. For now, we'll skip this.
    })
    .catch(async (serverError) => {
      const permissionError = new FirestorePermissionError({
          path: quotationRef.path,
          operation: 'update',
          requestResourceData: updateData,
      });
      errorEmitter.emit('permission-error', permissionError);
  });
  
  // Optimistically return success
  return { success: true, message: `Quotation status updated to ${status}.` };
}
