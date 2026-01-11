
"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";
import { useQuote } from "@/context/quote-context";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/lib/types";
import { Download, PlusCircle } from "lucide-react";
import Link from "next/link";

type ProductActionsProps = {
  product: Product;
};

export default function ProductActions({ product }: ProductActionsProps) {
  const { isLoggedIn } = useAuth();
  const { addToQuote } = useQuote();
  const { toast } = useToast();

  const handleAddToQuote = () => {
    addToQuote(product.id);
    toast({
      title: "Added to Quote",
      description: `${product.name} has been added to your quote basket.`,
    });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button size="lg" onClick={handleAddToQuote}>
        <PlusCircle className="mr-2 h-5 w-5" />
        Add to Quote
      </Button>
      {isLoggedIn && (
         <Button size="lg" variant="outline" asChild>
            <Link href={product.cad_download_url} target="_blank">
                <Download className="mr-2 h-5 w-5" />
                Download 3D CAD
            </Link>
         </Button>
      )}
    </div>
  );
}
