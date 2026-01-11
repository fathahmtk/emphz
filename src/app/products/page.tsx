"use client";

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { useQuote } from '@/context/quote-context';
import { useToast } from '@/hooks/use-toast';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const allCategories = Array.from(new Set(products.map(p => p.category)));
const allAuthorities = Array.from(new Set(products.flatMap(p => p.authority_approval)));

export default function ProductsPage() {
  const { addToQuote } = useQuote();
  const { toast } = useToast();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedAuthorities, setSelectedAuthorities] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleAuthorityChange = (authority: string) => {
    setSelectedAuthorities(prev =>
      prev.includes(authority)
        ? prev.filter(a => a !== authority)
        : [...prev, authority]
    );
  };

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const authorityMatch = selectedAuthorities.length === 0 || selectedAuthorities.some(auth => product.authority_approval.includes(auth));
      return categoryMatch && authorityMatch;
    });
  }, [selectedCategories, selectedAuthorities]);

  const handleAddToQuote = (productId: string, productName: string) => {
    addToQuote(productId);
    toast({
      title: "Added to Quote",
      description: `${productName} has been added to your quote basket.`,
    });
  };

  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Products</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Explore our range of high-performance GRP solutions, engineered for durability and reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
          <div className="sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            
            <div className="mb-6">
              <h3 className="font-medium mb-3">Category</h3>
              <div className="space-y-2">
                {allCategories.map(category => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`cat-${category}`} 
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => handleCategoryChange(category)}
                    />
                    <Label htmlFor={`cat-${category}`}>{category}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Authority Approval</h3>
              <div className="space-y-2">
                {allAuthorities.map(authority => (
                  <div key={authority} className="flex items-center space-x-2">
                    <Checkbox
                      id={`auth-${authority}`}
                      checked={selectedAuthorities.includes(authority)}
                      onCheckedChange={() => handleAuthorityChange(authority)}
                    />
                    <Label htmlFor={`auth-${authority}`}>{authority}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <main className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const image = PlaceHolderImages.find(p => p.id === product.image_id);
              return (
                <Card key={product.id} className="flex flex-col overflow-hidden">
                  <CardHeader>
                    {image && (
                      <Link href={`/products/${product.slug}`} className="block aspect-square relative">
                        <Image
                          src={image.imageUrl}
                          alt={product.name}
                          data-ai-hint={image.imageHint}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </Link>
                    )}
                  </CardHeader>
                  <CardContent className="flex-grow">
                     <Link href={`/products/${product.slug}`}>
                      <CardTitle className="text-lg hover:text-primary transition-colors">{product.name}</CardTitle>
                    </Link>
                    <CardDescription className="mt-2 text-sm">{product.short_description}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-2">
                    <Button asChild className="w-full">
                      <Link href={`/products/${product.slug}`}>View Details</Link>
                    </Button>
                    <Button variant="secondary" className="w-full" onClick={() => handleAddToQuote(product.id, product.name)}>
                      Add to Quote
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
             {filteredProducts.length === 0 && (
              <div className="col-span-full text-center py-16">
                <p className="text-muted-foreground">No products match your selected filters.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
