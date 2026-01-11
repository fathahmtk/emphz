
"use client";

import { useQuote } from "@/context/quote-context";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ShoppingBasket } from "lucide-react";

export default function QuoteBasket() {
  const { quoteItems, removeFromQuote, itemCount } = useQuote();

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShoppingBasket className="h-5 w-5" />
          Quote Basket
        </CardTitle>
        <CardDescription>
          {itemCount > 0 ? `You have ${itemCount} item(s) in your basket.` : "Your basket is empty."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {itemCount > 0 ? (
          <div className="space-y-4">
            <ul className="space-y-3">
              {quoteItems.map(item => (
                <li key={item.id} className="flex items-start justify-between gap-2 text-sm">
                  <div className="flex-grow">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs text-muted-foreground">SKU: {item.sku}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-7 w-7 flex-shrink-0" onClick={() => removeFromQuote(item.id)}>
                    <X className="h-4 w-4" />
                  </Button>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground pt-4 border-t">
              The items in your basket will be automatically included in your inquiry.
            </p>
          </div>
        ) : (
          <div className="text-center text-sm text-muted-foreground py-8">
            <p>Add products to your basket from the products page to request a quote for them.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
