
"use client";

import { useTransition } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from '@/hooks/use-toast';
import { QuotationStatus } from '@/lib/types';
import { updateQuotationStatus } from '@/actions/update-quotation-status';

const quotationStatuses: QuotationStatus[] = ["Draft", "Sent", "Accepted", "Rejected"];

type QuotationStatusSelectorProps = {
  quotationId: string;
  currentStatus: QuotationStatus;
};

export default function QuotationStatusSelector({ quotationId, currentStatus }: QuotationStatusSelectorProps) {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleStatusChange = (newStatus: string) => {
    const formData = new FormData();
    formData.append('quotationId', quotationId);
    formData.append('status', newStatus);

    startTransition(async () => {
      const result = await updateQuotationStatus(formData);
      if (result.success) {
        toast({
          title: "Status Updated",
          description: result.message,
        });
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        });
      }
    });
  };

  return (
    <Select
      defaultValue={currentStatus}
      onValueChange={handleStatusChange}
      disabled={isPending}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Change status" />
      </SelectTrigger>
      <SelectContent>
        {quotationStatuses.map(status => (
          <SelectItem key={status} value={status}>
            {status}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
