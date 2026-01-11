
'use client';

import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import { useCollection } from '@/firebase/firestore/use-collection';
import { collection, query, orderBy } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

export default function InquiriesPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const firestore = useFirestore();

  const inquiriesQuery = useMemo(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'inquiries'), orderBy('routedAt', 'desc'));
  }, [firestore]);

  const { data: inquiries, loading: inquiriesLoading } = useCollection(inquiriesQuery);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [user, authLoading, router]);

  const isLoading = authLoading || inquiriesLoading;

  if (isLoading) {
    return (
      <div className="container py-16 text-center">
        <p>Loading inquiries...</p>
      </div>
    );
  }

  if (!user) {
    return null; // or a login prompt
  }

  return (
    <div className="container py-16 lg:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Inquiries Dashboard</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          View and manage all customer inquiries.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Received Inquiries</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Routed To</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inquiries && inquiries.length > 0 ? (
                inquiries.map((inquiry: any) => (
                  <TableRow key={inquiry.id}>
                    <TableCell>
                      {inquiry.routedAt?.toDate ? format(inquiry.routedAt.toDate(), 'PPp') : 'N/A'}
                    </TableCell>
                    <TableCell>{inquiry.name}</TableCell>
                    <TableCell>{inquiry.company || '-'}</TableCell>
                    <TableCell>{inquiry.email}</TableCell>
                    <TableCell>{inquiry.routedTo}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{inquiry.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center">
                    No inquiries found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
