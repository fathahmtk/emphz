
import { Industry } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface IndustryCardProps {
  industry: Industry;
}

export default function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex items-start gap-4">
          <industry.icon className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
          <div>
            <CardTitle>{industry.name}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <p className="text-muted-foreground mb-4 flex-grow">{industry.description}</p>
        <Button variant="outline" asChild>
          <Link href={`/products?industry=${industry.id}`}>View Products <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </CardContent>
    </Card>
  );
}
