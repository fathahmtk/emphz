
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type StatusBadgeProps = {
  status: string;
};

const statusStyles: { [key: string]: string } = {
  "New": "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 border-blue-300/50",
  "In Progress": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300 border-yellow-300/50",
  "Contacted": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300 border-cyan-300/50",
  "Quoted": "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300 border-purple-300/50",
  "Closed": "bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-300 border-gray-300/50",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "font-medium",
        statusStyles[status] || "bg-gray-100 text-gray-800"
      )}
    >
      {status}
    </Badge>
  );
}
