
"use client";

import { useMemo } from 'react';
import { useCollection, useFirestore } from '@/firebase';
import { collection, query, where, orderBy, Firestore } from 'firebase/firestore';
import { Quotation } from '@/lib/types';

export const useQuotations = (inquiryId: string) => {
  const firestore = useFirestore() as Firestore | null;

  const quotationsQuery = useMemo(() => {
    if (!firestore || !inquiryId) return null;
    return query(
        collection(firestore, 'quotations'), 
        where('inquiryId', '==', inquiryId),
        orderBy('createdAt', 'desc')
    );
  }, [firestore, inquiryId]);

  const { data, loading, error } = useCollection<Quotation>(quotationsQuery);

  return { quotations: data, loading, error };
};
