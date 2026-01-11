
'use server';

import { z } from 'zod';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { initializeFirebase } from '@/firebase';
import { revalidatePath } from 'next/cache';
import { errorEmitter } from '@/firebase/errors/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors/errors';

const updateStatusSchema = z.object({
  inquiryId: z.string().min(1),
  status: z.string().min(1),
});

export async function updateInquiryStatus(formData: FormData) {
  const rawData = {
    inquiryId: formData.get('inquiryId'),
    status: formData.get('status'),
  };

  const validation = updateStatusSchema.safeParse(rawData);

  if (!validation.success) {
    return { success: false, message: 'Invalid data provided.' };
  }

  const { inquiryId, status } = validation.data;

  const { firestore } = initializeFirebase();
  const inquiryRef = doc(firestore, 'inquiries', inquiryId);
  const updateData = { status: status };

  updateDoc(inquiryRef, updateData)
    .then(() => {
        revalidatePath('/inquiries');
    })
    .catch(async (serverError) => {
        const permissionError = new FirestorePermissionError({
            path: inquiryRef.path,
            operation: 'update',
            requestResourceData: updateData,
        });
        errorEmitter.emit('permission-error', permissionError);
        // We might want to return an error state to the client here
    });

  // This part of the function will now execute immediately.
  // The revalidation and error handling happen asynchronously.
  return { success: true, message: `Inquiry status update to ${status} initiated.` };
}
