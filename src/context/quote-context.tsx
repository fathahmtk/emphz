
"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/lib/types';
import { products } from '@/lib/data';

interface QuoteItem extends Product {
  quantity: number;
}

interface QuoteContextType {
  quoteItems: QuoteItem[];
  addToQuote: (productId: string) => void;
  removeFromQuote: (productId: string) => void;
  clearQuote: () => void;
  itemCount: number;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider = ({ children }: { children: ReactNode }) => {
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);

  const addToQuote = (productId: string) => {
    setQuoteItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productId);
      if (existingItem) {
        // For simplicity, we just add the product if it's not there.
        // A real implementation might increase quantity.
        return prevItems;
      } else {
        const productToAdd = products.find(p => p.id === productId);
        if (productToAdd) {
          return [...prevItems, { ...productToAdd, quantity: 1 }];
        }
      }
      return prevItems;
    });
  };

  const removeFromQuote = (productId: string) => {
    setQuoteItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const clearQuote = () => {
    setQuoteItems([]);
  }

  const itemCount = quoteItems.length;

  return (
    <QuoteContext.Provider value={{ quoteItems, addToQuote, removeFromQuote, clearQuote, itemCount }}>
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
};
