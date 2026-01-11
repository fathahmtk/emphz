
'use server';

import { z } from 'zod';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { initializeFirebase } from '@/firebase';
import { revalidatePath } from 'next/cache';

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

  try {
    const { firestore } = initializeFirebase();
    const inquiryRef = doc(firestore, 'inquiries', inquiryId);
    await updateDoc(inquiryRef, { status: status });

    revalidatePath('/inquiries');
    return { success: true, message: `Inquiry status updated to ${status}.` };
  } catch (error) {
    console.error('Error updating inquiry status:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';
    return { success: false, message: `Failed to update status: ${errorMessage}` };
  }
}
