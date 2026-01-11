'use client';

import { useState, useEffect } from 'react';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { useFirebaseAuth } from '@/firebase';

export type User = FirebaseUser;

export const useUser = () => {
  const auth = useFirebaseAuth();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) {
      // If auth is not available yet, we are loading.
      // It might be null on first render.
      setLoading(true);
      return;
    };
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  return { user, loading };
};
