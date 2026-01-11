
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useQuote } from '@/context/quote-context';
import { useToast } from '@/hooks/use-toast';
import { ShoppingCart, Check } from 'lucide-react';

type AddToQuoteButtonProps = {
  productId: string;
};

export default function AddToQuoteButton({ productId }: AddToQuoteButtonProps) {
  const { addToQuote, quoteItems } = useQuote();
  const { toast } = useToast();
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setIsAdded(quoteItems.some(item => item.id === productId));
  }, [quoteItems, productId]);

  const handleAddToCart = () => {
    addToQuote(productId);
    toast({
      title: "Added to Basket",
      description: "The product has been added to your quote basket.",
    });
  };

  return (
    <Button
      size="lg"
      variant="outline"
      onClick={handleAddToCart}
      disabled={isAdded}
    >
      {isAdded ? (
        <>
          <Check className="mr-2 h-4 w-4" />
          Added to Basket
        </>
      ) : (
        <>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Quote Basket
        </>
      )}
    </Button>
  );
}
