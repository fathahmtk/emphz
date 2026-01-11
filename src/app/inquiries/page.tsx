
'use client';

import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { useInquiries } from '@/hooks/use-inquiries';
import { Inquiry } from '@/lib/types';
import { BarChart, MessageSquare, Package, TrendingUp } from 'lucide-react';

function KpiCard({ title, value, icon: Icon }: { title: string, value: string | number, icon: React.ElementType }) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
            </CardContent>
        </Card>
    )
}

export default function InquiriesPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const { inquiries, loading: inquiriesLoading } = useInquiries();

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [user, authLoading, router]);

  const kpiData = useMemo(() => {
    if (!inquiries) return { total: 0, newCount: 0, topProduct: 'N/A' };
    
    const newCount = inquiries.filter(i => i.status === 'New').length;
    
    const productCounts = inquiries.reduce((acc, inquiry) => {
        if (inquiry.product && inquiry.product !== 'Other / Multiple') {
            acc[inquiry.product] = (acc[inquiry.product] || 0) + 1;
        }
        inquiry.quoteItems?.forEach(item => {
            acc[item.name] = (acc[item.name] || 0) + 1;
        });
        return acc;
    }, {} as Record<string, number>);

    const topProduct = Object.keys(productCounts).length > 0 
      ? Object.entries(productCounts).reduce((a, b) => a[1] > b[1] ? a : b)[0]
      : 'N/A';

    return {
        total: inquiries.length,
        newCount,
        topProduct,
    }
  }, [inquiries]);

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

       <div className="grid gap-4 md:grid-cols-3 mb-8">
            <KpiCard title="Total Inquiries" value={kpiData.total} icon={BarChart} />
            <KpiCard title="New Inquiries" value={kpiData.newCount} icon={MessageSquare} />
            <KpiCard title="Top Product" value={kpiData.topProduct} icon={Package} />
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
                inquiries.map((inquiry: Inquiry) => (
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
