
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format, subMonths, startOfMonth } from 'date-fns';
import { useInquiries } from '@/hooks/use-inquiries';
import { Inquiry } from '@/lib/types';
import { BarChart, MessageSquare, Package } from 'lucide-react';
import InquiriesChart from './inquiries-chart';
import { useUser } from '@/firebase';
import StatusBadge from './status-badge';


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
  const { user, loading: authLoading } = useUser();
  const router = useRouter();
  const { inquiries, loading: inquiriesLoading } = useInquiries();

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [user, authLoading, router]);

  const { kpiData, chartData } = useMemo(() => {
    if (!inquiries) return { 
        kpiData: { total: 0, newCount: 0, topProduct: 'N/A' },
        chartData: [] 
    };
    
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
      
    const twelveMonthsAgo = subMonths(new Date(), 11);
    const monthlyData = Array.from({ length: 12 }).map((_, i) => {
        const monthDate = startOfMonth(subMonths(new Date(), i));
        return {
            month: format(monthDate, 'MMM'),
            total: 0,
            date: monthDate,
        };
    }).reverse();

    inquiries.forEach(inquiry => {
        const inquiryDate = inquiry.createdAt?.toDate();
        if (inquiryDate && inquiryDate >= startOfMonth(twelveMonthsAgo)) {
            const monthIndex = monthlyData.findIndex(
                m => m.date.getMonth() === inquiryDate.getMonth() && m.date.getFullYear() === inquiryDate.getFullYear()
            );
            if (monthIndex !== -1) {
                monthlyData[monthIndex].total += 1;
            }
        }
    });

    return {
        kpiData: {
            total: inquiries.length,
            newCount,
            topProduct,
        },
        chartData: monthlyData,
    }
  }, [inquiries]);

  const isLoading = authLoading || inquiriesLoading;

  if (isLoading) {
    return (
      <div className="flex-1 p-8 pt-6 space-y-4 text-center">
        <p>Loading inquiries...</p>
      </div>
    );
  }

  if (!user) {
    return null; // or a login prompt
  }

  return (
    <div className="flex-1 space-y-8 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>
      <div className="space-y-4">
         <div className="grid gap-4 md:grid-cols-3">
              <KpiCard title="Total Inquiries" value={kpiData.total} icon={BarChart} />
              <KpiCard title="New Inquiries" value={kpiData.newCount} icon={MessageSquare} />
              <KpiCard title="Top Product" value={kpiData.topProduct} icon={Package} />
          </div>

          <InquiriesChart data={chartData} />

        <Card>
          <CardHeader>
            <CardTitle>Received Inquiries</CardTitle>
            <CardDescription>
              You have received a total of {inquiries?.length || 0} inquiries. Select an inquiry to view details.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Routed To</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inquiries && inquiries.length > 0 ? (
                  inquiries.map((inquiry: Inquiry) => (
                    <TableRow key={inquiry.id} className="cursor-pointer hover:bg-muted/50" onClick={() => router.push(`/inquiries/${inquiry.id}`)}>
                      <TableCell>
                        {inquiry.createdAt?.toDate ? format(inquiry.createdAt.toDate(), 'PP') : 'N/A'}
                      </TableCell>
                      <TableCell className="font-medium">{inquiry.name}</TableCell>
                      <TableCell>{inquiry.product}</TableCell>
                      <TableCell>{inquiry.routedTo}</TableCell>
                      <TableCell className="text-right">
                         <StatusBadge status={inquiry.status} />
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center">
                      No inquiries found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
