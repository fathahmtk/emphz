'use client';

import { AuthProvider } from '@/context/auth-context';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { initializeFirebase } from '@/firebase';

const { firebaseApp, firestore, auth } = initializeFirebase();

export default function FirebaseAuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FirebaseClientProvider
            firebaseApp={firebaseApp}
            firestore={firestore}
            auth={auth}
        >
            <AuthProvider>{children}</AuthProvider>
        </FirebaseClientProvider>
    );
}
