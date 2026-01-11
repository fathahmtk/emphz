'use client';

import { AuthProvider } from '@/context/auth-context';
import { FirebaseClientProvider } from '@/firebase';

export default function FirebaseAuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FirebaseClientProvider>
            <AuthProvider>{children}</AuthProvider>
        </FirebaseClientProvider>
    );
}
