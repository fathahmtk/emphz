
'use client';

import { useRouter } from 'next/navigation';
import { useQuotations } from '@/hooks/use-quotations';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';
import StatusBadge from '../status-badge';

interface QuotationsListProps {
    inquiryId: string;
}

export default function QuotationsList({ inquiryId }: QuotationsListProps) {
    const { quotations, loading, error } = useQuotations(inquiryId);
    const router = useRouter();

    if (loading) {
        return <p>Loading quotations...</p>;
    }

    if (error) {
        return <p className="text-destructive">Error loading quotations: {error.message}</p>
    }

    if (!quotations || quotations.length === 0) {
        return (
             <div className="text-center py-12 text-muted-foreground">
                <p>No quotations have been created for this inquiry yet.</p>
            </div>
        );
    }
    
    const handleRowClick = (quotationId: string) => {
        router.push(`/quotations/${quotationId}`);
    };

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Quotation #</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {quotations.map(q => (
                    <TableRow key={q.id} className="cursor-pointer hover:bg-muted/50" onClick={() => handleRowClick(q.id)}>
                        <TableCell className="font-medium">{q.quotationNumber}</TableCell>
                        <TableCell>
                            {q.createdAt?.toDate ? format(q.createdAt.toDate(), 'PP') : 'N/A'}
                        </TableCell>
                         <TableCell>
                           {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(q.total)}
                        </TableCell>
                        <TableCell className="text-right">
                           <StatusBadge status={q.status} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
