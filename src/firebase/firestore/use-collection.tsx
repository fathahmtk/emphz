
'use client';

import { useState, useEffect } from 'react';
import {
  onSnapshot,
  Query,
  DocumentData,
  FirestoreError,
  QuerySnapshot,
} from 'firebase/firestore';
import { errorEmitter } from '../errors/error-emitter';
import { FirestorePermissionError } from '../errors/errors';

export const useCollection = <T extends DocumentData>(
  query: Query<T> | null
) => {
  const [data, setData] = useState<Array<T & { id: string }> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<FirestoreError | null>(null);

  useEffect(() => {
    if (!query) {
      setData(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    const unsubscribe = onSnapshot(
      query,
      (snapshot: QuerySnapshot<T>) => {
        const processedData = snapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }));
        setData(processedData);
        setLoading(false);
        setError(null);
      },
      async (err: FirestoreError) => {
        if (err.code === 'permission-denied' && 'path' in query) {
          const permissionError = new FirestorePermissionError({
              path: (query as any).path,
              operation: 'list',
          });
          errorEmitter.emit('permission-error', permissionError);
        } else {
          console.error('Error fetching collection:', err);
        }
        setError(err);
        setData(null);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [query]); 

  return { data, loading, error };
};
