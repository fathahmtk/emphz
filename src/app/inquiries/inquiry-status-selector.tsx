
"use client";

import { useTransition } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { updateInquiryStatus } from "@/actions/update-inquiry-status";
import { useToast } from '@/hooks/use-toast';

const inquiryStatuses = ["New", "In Progress", "Contacted", "Quoted", "Closed"];

type InquiryStatusSelectorProps = {
  inquiryId: string;
  currentStatus: string;
};

export default function InquiryStatusSelector({ inquiryId, currentStatus }: InquiryStatusSelectorProps) {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleStatusChange = (newStatus: string) => {
    const formData = new FormData();
    formData.append('inquiryId', inquiryId);
    formData.append('status', newStatus);

    startTransition(async () => {
      const result = await updateInquiryStatus(formData);
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
        {inquiryStatuses.map(status => (
          <SelectItem key={status} value={status}>
            {status}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
