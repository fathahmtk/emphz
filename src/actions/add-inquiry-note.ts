
'use server';

import { z } from 'zod';
import { getFirestore, doc, updateDoc, arrayUnion, serverTimestamp } from 'firebase/firestore';
import { initializeFirebase } from '@/firebase';
import { revalidatePath } from 'next/cache';
import { errorEmitter } from '@/firebase/errors/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors/errors';

// This action should be called by an authenticated user.
// We are not explicitly checking for user here, as it will be handled by Firestore security rules.

const addNoteSchema = z.object({
  inquiryId: z.string().min(1),
  noteText: z.string().min(1, "Note cannot be empty."),
  author: z.string().min(1),
  authorId: z.string().min(1),
});

export async function addInquiryNote(formData: FormData) {
  const rawData = {
    inquiryId: formData.get('inquiryId'),
    noteText: formData.get('noteText'),
    author: formData.get('author'),
    authorId: formData.get('authorId'),
  };

  const validation = addNoteSchema.safeParse(rawData);

  if (!validation.success) {
    return { success: false, message: 'Invalid data provided.' };
  }

  const { inquiryId, noteText, author, authorId } = validation.data;

  const { firestore } = initializeFirebase();
  const inquiryRef = doc(firestore, 'inquiries', inquiryId);
  
  const newNote = {
    text: noteText,
    author: author,
    authorId: authorId,
    createdAt: serverTimestamp(),
  };

  // We use arrayUnion to atomically add a new note to the 'notes' array.
  try {
    await updateDoc(inquiryRef, {
        notes: arrayUnion(newNote)
    });
    // Revalidate the inquiry detail page to show the new note
    revalidatePath(`/inquiries/${inquiryId}`);
    return { success: true, message: 'Note added successfully.' };
  } catch (serverError) {
      const permissionError = new FirestorePermissionError({
          path: inquiryRef.path,
          operation: 'update',
          requestResourceData: { notes: `Adding new note by ${author}` },
      });
      errorEmitter.emit('permission-error', permissionError);
      return { success: false, message: 'You do not have permission to add a note.' };
  }
}
