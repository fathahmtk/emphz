"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { resources } from "@/lib/data";
import { Download, Search } from "lucide-react";
import Link from "next/link";

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResources = useMemo(() => {
    if (!searchTerm) return resources;
    return resources.filter(
      (resource) =>
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="container py-16 lg:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Resource Centre</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Access technical and commercial documents, including product catalogues, technical datasheets, drawings, and compliance files.
        </p>
      </div>

      <div className="max-w-xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search resources..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <Card key={resource.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{resource.title}</CardTitle>
              <CardDescription>{resource.category}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">{resource.description}</p>
            </CardContent>
            <CardContent>
              <Button asChild className="w-full">
                <Link href={resource.url} target="_blank" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
         {filteredResources.length === 0 && (
            <div className="col-span-full text-center py-16">
                <p className="text-muted-foreground">No resources found for &quot;{searchTerm}&quot;.</p>
            </div>
         )}
      </div>
    </div>
  );
}
