
'use client';

import { AuthProvider } from '@/context/auth-context-deleted';
import { FirebaseClientProvider } from '@/firebase';

export default function FirebaseAuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FirebaseClientProvider>
            {children}
        </FirebaseClientProvider>
    );
}
