
"use client";

import { useMemo } from 'react';
import { useCollection } from '@/firebase/firestore/use-collection';
import { collection, query, orderBy, Firestore } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { Inquiry } from '@/lib/types';

export const useInquiries = () => {
  const firestore = useFirestore() as Firestore | null;

  const inquiriesQuery = useMemo(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'inquiries'), orderBy('routedAt', 'desc'));
  }, [firestore]);

  const { data, loading, error } = useCollection<Inquiry>(inquiriesQuery);

  return { inquiries: data, loading, error };
};
