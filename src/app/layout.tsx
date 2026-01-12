
import type { Metadata } from 'next';
import './globals.css';
import { QuoteProvider } from '@/context/quote-context';
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { FirebaseClientProvider } from '@/firebase';
import FirebaseErrorListener from '@/firebase/errors/FirebaseErrorListener';
import { ThemeProvider } from '@/components/theme-provider';

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Manrope:wght@700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FirebaseClientProvider>
            <QuoteProvider>
              <Header />
              <main className="flex-grow flex flex-col">
                  {children}
              </main>
              <Footer />
              <Toaster />
              <FirebaseErrorListener />
            </QuoteProvider>
          </FirebaseClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
