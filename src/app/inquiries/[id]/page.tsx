
'use client';

import { useParams, useRouter } from 'next/navigation';
import { useFirestore, useDoc, useUser } from '@/firebase';
import { useEffect, useMemo } from 'react';
import { doc, Firestore } from 'firebase/firestore';
import { Inquiry } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, User, Building, Mail, ShoppingCart, MessageSquare, Info, MapPin, Bot, Calendar, PlusCircle } from 'lucide-react';
import { format } from 'date-fns';
import InquiryStatusSelector from '../inquiry-status-selector';
import AddNoteForm from './add-note-form';
import NotesList from './notes-list';
import StatusBadge from '../status-badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import QuotationsList from '../quotations/quotations-list';

function DetailItem({ icon: Icon, label, value }: { icon: React.ElementType, label: string, value: React.ReactNode }) {
    if (!value) return null;
    return (
        <div className="flex items-start gap-4">
            <Icon className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
            <div>
                <p className="text-sm text-muted-foreground">{label}</p>
                <p className="font-medium">{value}</p>
            </div>
        </div>
    );
}

function InquiryDetailsTab({ inquiry }: { inquiry: Inquiry }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                 <Card>
                    <CardHeader>
                        <CardTitle>Inquiry Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {inquiry.summary && (
                            <DetailItem icon={Bot} label="AI Summary" value={<p className="text-primary italic">{inquiry.summary}</p>} />
                        )}
                        <DetailItem icon={Info} label="Product Interest" value={inquiry.product} />
                        <DetailItem icon={MessageSquare} label="Message" value={<p className="whitespace-pre-wrap">{inquiry.message}</p>} />
                        {inquiry.quoteItems && inquiry.quoteItems.length > 0 && (
                            <DetailItem 
                                icon={ShoppingCart}
                                label="Quote Basket"
                                value={
                                    <ul className="list-disc pl-5 space-y-1">
                                        {inquiry.quoteItems.map(item => <li key={item.sku}>{item.name} (SKU: {item.sku})</li>)}
                                    </ul>
                                }
                            />
                        )}
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Additional Information</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <DetailItem icon={Info} label="Project Type" value={inquiry.projectType} />
                        <DetailItem icon={ShoppingCart} label="Quantity" value={inquiry.quantity} />
                        <DetailItem icon={MapPin} label="Location" value={inquiry.location} />
                    </CardContent>
                </Card>
                <NotesList notes={inquiry.notes || []} />
                 <div className="lg:hidden">
                    <AddNoteForm inquiryId={inquiry.id as string} />
                </div>
            </div>
             <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <DetailItem icon={User} label="Name" value={inquiry.name} />
                        <DetailItem icon={Mail} label="Email" value={<a href={`mailto:${inquiry.email}`} className="text-primary hover:underline">{inquiry.email}</a>} />
                        <DetailItem icon={Building} label="Company" value={inquiry.company} />
                    </CardContent>
                </Card>
                <Card>
                        <CardHeader>
                        <CardTitle>Inquiry Management</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <DetailItem icon={User} label="Routed To" value={inquiry.routedTo} />
                        <div>
                            <p className="text-sm font-medium text-foreground mb-2">Status</p>
                            <InquiryStatusSelector inquiryId={inquiry.id as string} currentStatus={inquiry.status} />
                        </div>
                            <div className="pt-4 border-t">
                            <AddNoteForm inquiryId={inquiry.id as string} />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

function QuotationsTab({ inquiry }: { inquiry: Inquiry }) {
    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle>Quotations</CardTitle>
                    <Button asChild>
                        <Link href={`/inquiries/${inquiry.id}/quotations/new`}>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Create Quotation
                        </Link>
                    </Button>
                </div>
                <CardDescription>
                    Manage quotations for this inquiry.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <QuotationsList inquiryId={inquiry.id!} />
            </CardContent>
        </Card>
    );
}

export default function InquiryDetailPage() {
    const { id } = useParams();
    const inquiryId = Array.isArray(id) ? id[0] : id;

    const { user, loading: authLoading } = useUser();
    const router = useRouter();
    const firestore = useFirestore() as Firestore | null;

    const inquiryRef = useMemo(() => {
        if (!firestore || !inquiryId) return null;
        return doc(firestore, 'inquiries', inquiryId);
    }, [firestore, inquiryId]);

    const { data: inquiry, loading: inquiryLoading } = useDoc<Inquiry>(inquiryRef);

    useEffect(() => {
        if (!authLoading && !user) {
            router.push('/login');
        }
    }, [user, authLoading, router]);
    
    const isLoading = authLoading || inquiryLoading;

    if (isLoading) {
        return <div className="flex-1 p-8 pt-6 space-y-4 text-center">Loading inquiry details...</div>;
    }

    if (!inquiry) {
        return <div className="flex-1 p-8 pt-6 space-y-4 text-center">Inquiry not found.</div>;
    }

    return (
        <div className="flex-1 space-y-8 p-8 pt-6">
            <div className="flex justify-between items-center">
                 <Button variant="ghost" asChild>
                    <Link href="/inquiries">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Dashboard
                    </Link>
                </Button>
                <div className="flex items-center gap-4">
                     <StatusBadge status={inquiry.status} />
                     <div className="text-sm text-muted-foreground">
                        Received on {inquiry.createdAt?.toDate ? format(inquiry.createdAt.toDate(), 'PPp') : 'N/A'}
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Inquiry from {inquiry.name}</h1>
                <p className="text-muted-foreground">{inquiry.company}</p>
            </div>
            
            <Tabs defaultValue="details" className="w-full">
                <TabsList>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="quotations">Quotations</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="pt-6">
                    <InquiryDetailsTab inquiry={inquiry} />
                </TabsContent>
                <TabsContent value="quotations" className="pt-6">
                   <QuotationsTab inquiry={inquiry} />
                </TabsContent>
            </Tabs>
        </div>
    );
}
