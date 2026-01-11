
"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products, industries } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Breadcrumbs from '@/components/products/breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Filter by category
        if (selectedCategory === 'all') return true;
        return product.category === selectedCategory;
      })
      .filter((product) => {
        // Filter by search term
        if (!searchTerm) return true;
        return (
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.short_description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
  }, [searchTerm, selectedCategory]);

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  return (
    <div className="bg-background text-foreground">
      <div className="container py-8 lg:py-12">
        <Breadcrumbs />
        <section className="mt-8 mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Our Products
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore our range of high-performance GRP solutions.
          </p>
        </section>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search products..."
                    className="pl-10 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <Select onValueChange={setSelectedCategory} defaultValue={selectedCategory}>
                <SelectTrigger className="w-full md:w-[200px]">
                    <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                    {categories.map(category => (
                        <SelectItem key={category} value={category} className="capitalize">
                            {category === 'all' ? 'All Categories' : category}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>


        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const image = PlaceHolderImages.find(p => p.id === product.image_id);
              return (
                <Card key={product.id} className="overflow-hidden transition-transform duration-300 hover:scale-[1.02] bg-card flex flex-col">
                  <Link href={`/products/${product.slug}`} className="block h-full flex flex-col">
                    <div className="aspect-video relative bg-muted">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={product.name}
                          data-ai-hint={image.imageHint}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle>{product.name}</CardTitle>
                      <Badge variant="secondary" className="w-fit">{product.category}</Badge>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground">{product.short_description}</p>
                    </CardContent>
                  </Link>
                </Card>
              );
            })}
          </div>
        ) : (
             <div className="col-span-full text-center py-16">
                <p className="text-muted-foreground">No products found matching your criteria.</p>
            </div>
        )}
      </div>
    </div>
  );
}
