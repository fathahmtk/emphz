

"use client";

import { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import { products, industries } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Breadcrumbs from '@/components/products/breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

function ProductsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const headerImage = PlaceHolderImages.find(p => p.id === 'products-header');
  
  const industryFilter = searchParams.get('industry') || 'all';
  const categoryFilter = searchParams.get('category') || 'all';
  const searchTermFilter = searchParams.get('q') || '';

  const [searchTerm, setSearchTerm] = useState(searchTermFilter);
  const [selectedCategory, setSelectedCategory] = useState(categoryFilter);
  const [selectedIndustry, setSelectedIndustry] = useState(industryFilter);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        if (selectedIndustry === 'all') return true;
        return product.industry_ids?.includes(selectedIndustry);
      })
      .filter((product) => {
        if (selectedCategory === 'all') return true;
        return product.category === selectedCategory;
      })
      .filter((product) => {
        if (!searchTerm) return true;
        return (
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.short_description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
  }, [searchTerm, selectedCategory, selectedIndustry]);
  
  const handleFilterChange = (type: 'q' | 'category' | 'industry', value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === 'all') {
      params.delete(type);
    } else {
      params.set(type, value);
    }
    router.push(`/products?${params.toString()}`);
  };
  
  // Update state when URL params change
  useMemo(() => {
    setSelectedIndustry(industryFilter);
    setSelectedCategory(categoryFilter);
    setSearchTerm(searchTermFilter);
  }, [industryFilter, categoryFilter, searchTermFilter]);


  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];
  const activeIndustry = industries.find(i => i.id === selectedIndustry);

  const clearIndustryFilter = () => {
    setSelectedIndustry('all');
    handleFilterChange('industry', 'all');
  };

  return (
    <div className="bg-background text-foreground">
       <div className="container pt-8 lg:pt-12">
        <Breadcrumbs />
      </div>

       <section className="relative py-20 lg:py-32 text-white">
        {headerImage && (
            <Image 
                src={headerImage.imageUrl} 
                alt={headerImage.description}
                data-ai-hint={headerImage.imageHint}
                fill
                className="object-cover"
            />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Our Products
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-neutral-200 md:text-lg">
                Explore our range of high-performance GRP solutions.
            </p>
        </div>
      </section>

      <div className="container py-12">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search products..."
                    className="pl-10 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleFilterChange('q', (e.target as HTMLInputElement).value);
                      }
                    }}
                />
            </div>
             <Select onValueChange={(value) => { setSelectedIndustry(value); handleFilterChange('industry', value); }} value={selectedIndustry}>
                <SelectTrigger className="w-full md:w-[240px]">
                    <SelectValue placeholder="Filter by industry" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Industries</SelectItem>
                    {industries.map(industry => (
                        <SelectItem key={industry.id} value={industry.id} className="capitalize">
                            {industry.name}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Select onValueChange={(value) => { setSelectedCategory(value); handleFilterChange('category', value); }} value={selectedCategory}>
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

        {activeIndustry && selectedIndustry !== 'all' && (
            <div className="mb-8 p-4 bg-secondary rounded-lg flex items-center justify-between">
                <p className="text-sm font-medium text-secondary-foreground">
                    Filtering for: <span className="font-bold">{activeIndustry.name}</span>
                </p>
                <Button variant="ghost" size="sm" onClick={clearIndustryFilter}>
                    Clear Filter <X className="ml-2 h-4 w-4" />
                </Button>
            </div>
        )}

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

export default function ProductsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProductsPageContent />
        </Suspense>
    )
}
