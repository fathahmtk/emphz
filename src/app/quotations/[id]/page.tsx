
'use client';

import { useMemo } from 'react';
import { useParams, notFound, useRouter } from 'next/navigation';
import { useDoc, useFirestore, useUser } from '@/firebase';
import { doc, Firestore } from 'firebase/firestore';
import { Quotation } from '@/lib/types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Printer, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';
import StatusBadge from '@/app/inquiries/status-badge';
import Logo from '@/components/logo';

export default function QuotationDetailPage() {
  const { id } = useParams();
  const quotationId = Array.isArray(id) ? id[0] : id;
  
  const { user, loading: authLoading } = useUser();
  const router = useRouter();
  const firestore = useFirestore() as Firestore | null;

  const quotationRef = useMemo(() => {
    if (!firestore || !quotationId) return null;
    return doc(firestore, 'quotations', quotationId);
  }, [firestore, quotationId]);

  const { data: quotation, loading: quotationLoading } = useDoc<Quotation>(quotationRef);

  if (authLoading || quotationLoading) {
    return <div className="flex-1 p-8 pt-6 space-y-4 text-center">Loading quotation...</div>;
  }

  if (!quotation) {
    return notFound();
  }
  
  const currencyFormatter = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' });

  return (
    <div className="bg-muted/40 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
            <Button variant="ghost" asChild>
                <Link href={`/inquiries/${quotation.inquiryId}`}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Inquiry
                </Link>
            </Button>
            <div className="flex items-center gap-2">
                <Button variant="outline">
                    <Printer className="mr-2 h-4 w-4"/>
                    Print / Save PDF
                </Button>
                 <Button>
                    <Send className="mr-2 h-4 w-4"/>
                    Send to Customer
                </Button>
            </div>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="p-8 bg-card rounded-t-lg">
            <div className="flex justify-between items-start">
              <div>
                <Logo />
                <p className="text-sm text-muted-foreground mt-2">
                    Engineered Modular Solutions<br/>
                    Kinfra Small Industries Park, Nellad PO<br/>
                    Ernakulam, Kerala, India - 686 669
                </p>
              </div>
              <div className="text-right">
                <h1 className="text-4xl font-bold text-foreground">Quotation</h1>
                <p className="text-muted-foreground">{quotation.quotationNumber}</p>
                 <div className="mt-4">
                    <StatusBadge status={quotation.status} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-8 pt-6 border-t">
                <div>
                    <p className="text-sm font-semibold text-muted-foreground">Billed To</p>
                    <p className="font-medium">{quotation.customerName}</p>
                    <p className="text-sm">{quotation.customerCompany}</p>
                    <p className="text-sm">{quotation.customerEmail}</p>
                </div>
                 <div>
                    <p className="text-sm font-semibold text-muted-foreground">Quotation Date</p>
                    <p className="font-medium">{quotation.createdAt?.toDate ? format(quotation.createdAt.toDate(), 'PP') : 'N/A'}</p>
                </div>
                 <div>
                    <p className="text-sm font-semibold text-muted-foreground">Valid Until</p>
                    <p className="font-medium">{quotation.validUntil?.toDate ? format(quotation.validUntil.toDate(), 'PP') : 'N/A'}</p>
                </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="w-[50%] px-8">Description</TableHead>
                  <TableHead className="text-center">Quantity</TableHead>
                  <TableHead className="text-right">Unit Price</TableHead>
                  <TableHead className="text-right px-8">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {quotation.lineItems.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="px-8 font-medium">{item.description}</TableCell>
                    <TableCell className="text-center">{item.quantity}</TableCell>
                    <TableCell className="text-right">{currencyFormatter.format(item.unitPrice)}</TableCell>
                    <TableCell className="text-right px-8">{currencyFormatter.format(item.total)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="p-8 bg-card rounded-b-lg">
             <div className="flex w-full">
                <div className="w-1/2 pr-8">
                     {quotation.notes && (
                        <>
                            <h4 className="font-semibold mb-2">Notes</h4>
                            <p className="text-sm text-muted-foreground whitespace-pre-wrap">{quotation.notes}</p>
                        </>
                     )}
                </div>
                <div className="w-1/2 pl-8 space-y-3">
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-medium">{currencyFormatter.format(quotation.subtotal)}</span>
                    </div>
                     <div className="flex justify-between">
                        <span className="text-muted-foreground">Tax ({quotation.taxRate}%)</span>
                        <span className="font-medium">{currencyFormatter.format(quotation.taxAmount)}</span>
                    </div>
                     <div className="flex justify-between text-lg font-bold border-t pt-3 mt-3">
                        <span>Total</span>
                        <span>{currencyFormatter.format(quotation.total)}</span>
                    </div>
                </div>
             </div>
          </CardFooter>
        </Card>
        <p className="text-xs text-muted-foreground text-center mt-4">Thank you for your business!</p>
      </div>
    </div>
  );
}
