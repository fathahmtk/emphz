
'use client';

import { useState, useEffect, useMemo } from 'react';
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
      setLoading(false);
      setData(null);
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
        if (err.code === 'permission-denied') {
          const permissionError = new FirestorePermissionError({
              path: query.path,
              operation: 'list',
          });
          errorEmitter.emit('permission-error', permissionError);
        } else {
          console.error('Error fetching collection:', err);
        }
        setError(err);
        setLoading(false);
        setData(null);
      }
    );

    return () => unsubscribe();
  }, [query]); // Re-run effect if query changes

  return { data, loading, error };
};
