
'use client';

import { useMemo } from 'react';
import { useParams, notFound, useRouter } from 'next/navigation';
import { useDoc, useFirestore } from '@/firebase';
import { doc, Firestore } from 'firebase/firestore';
import { Inquiry } from '@/lib/types';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import CreateQuotationForm from '../../quotations/create-quotation-form';

export default function NewQuotationPage() {
  const { id } = useParams();
  const inquiryId = Array.isArray(id) ? id[0] : id;
  const router = useRouter();

  const firestore = useFirestore() as Firestore | null;

  const inquiryRef = useMemo(() => {
    if (!firestore || !inquiryId) return null;
    return doc(firestore, 'inquiries', inquiryId);
  }, [firestore, inquiryId]);

  const { data: inquiry, loading } = useDoc<Inquiry>(inquiryRef);

  if (loading) {
    return <div className="flex-1 p-8 pt-6 space-y-4 text-center">Loading inquiry...</div>;
  }

  if (!inquiry) {
    notFound();
  }

  const handleQuotationCreated = (quotationId: string) => {
    // For now, we just navigate back to the inquiry page.
    // In the future, we could navigate to the new quotation's detail page.
    router.push(`/inquiries/${inquiryId}`);
  };

  return (
    <div className="flex-1 space-y-8 p-8 pt-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href={`/inquiries/${inquiryId}`}>
            <ArrowLeft />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">New Quotation</h1>
          <p className="text-muted-foreground">For inquiry from {inquiry.name}</p>
        </div>
      </div>
      
      <CreateQuotationForm inquiry={inquiry} onQuotationCreated={handleQuotationCreated} />
    </div>
  );
}
