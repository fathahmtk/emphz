import type { Metadata } from 'next';
import './globals.css';
import { QuoteProvider } from '@/context/quote-context';
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import FirebaseAuthProvider from '@/components/auth/firebase-auth-provider';

export const metadata: Metadata = {
  title: 'EMPHZ Corporate | 30+ Years of Engineering Excellence',
  description: 'EMPHZ provides modular infrastructure products including electrical enclosures, kiosks, and portable toilets for various industries.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background">
        <FirebaseAuthProvider>
          <QuoteProvider>
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <Toaster />
          </QuoteProvider>
        </FirebaseAuthProvider>
      </body>
    </html>
  );
}
