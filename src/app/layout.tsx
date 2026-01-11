
import type { Metadata } from 'next';
import './globals.css';
import { QuoteProvider } from '@/context/quote-context';
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { FirebaseClientProvider } from '@/firebase';
import FirebaseErrorListener from '@/firebase/errors/FirebaseErrorListener';

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
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Poppins:wght@700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background">
        <FirebaseClientProvider>
          <QuoteProvider>
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <Toaster />
            <FirebaseErrorListener />
          </QuoteProvider>
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
