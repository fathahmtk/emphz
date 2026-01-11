
'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useUser } from '@/firebase';
import { addInquiryNote } from '@/actions/add-inquiry-note';
import { useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Paperclip } from 'lucide-react';

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending}>
            {pending ? "Adding..." : "Add Note"}
        </Button>
    );
}

type AddNoteFormProps = {
    inquiryId: string;
};

export default function AddNoteForm({ inquiryId }: AddNoteFormProps) {
    const { user } = useUser();
    const formRef = useRef<HTMLFormElement>(null);
    const { toast } = useToast();

    if (!user) return null;

    const handleFormAction = async (formData: FormData) => {
        const result = await addInquiryNote(formData);
        if (result.success) {
            formRef.current?.reset();
            toast({
                title: "Note Added",
                description: "Your note has been successfully added.",
            });
        } else {
             toast({
                title: "Error",
                description: result.message || "Failed to add note.",
                variant: "destructive",
            });
        }
    }

    return (
        <form ref={formRef} action={handleFormAction} className="space-y-4">
            <input type="hidden" name="inquiryId" value={inquiryId} />
            <input type="hidden" name="author" value={user.displayName || 'Unknown User'} />
            <input type="hidden" name="authorId" value={user.uid} />
            
            <div className="relative">
                <Textarea
                    name="noteText"
                    placeholder="Add an internal note..."
                    required
                    className="min-h-[100px]"
                />
            </div>
            <div className="flex justify-end">
                <SubmitButton />
            </div>
        </form>
    );
}
