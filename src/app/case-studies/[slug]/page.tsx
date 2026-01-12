
import { caseStudies } from "@/lib/data";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies.find((study) => study.slug === params.slug);

  if (!caseStudy) {
    notFound();
  }

  const caseStudyImage = PlaceHolderImages.find(p => p.id === caseStudy.imageId);

  return (
    <div className="container py-16 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="aspect-video relative bg-muted rounded-lg overflow-hidden mb-8">
            {caseStudyImage && (
                <Image 
                src={caseStudyImage.imageUrl} 
                alt={caseStudy.title} 
                data-ai-hint={caseStudyImage.imageHint}
                fill 
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                />
            )}
        </div>
        
        <div className="space-y-8">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{caseStudy.title}</h1>
            <p className="text-xl text-muted-foreground"><strong>Client:</strong> {caseStudy.client}</p>

            <Card className="glass">
                <CardHeader><CardTitle>The Challenge</CardTitle></CardHeader>
                <CardContent><p>{caseStudy.challenge}</p></CardContent>
            </Card>

            <Card className="glass">
                <CardHeader><CardTitle>The Solution</CardTitle></CardHeader>
                <CardContent><p>{caseStudy.solution}</p></CardContent>
            </Card>

            <Card className="glass">
                <CardHeader><CardTitle>Key Results</CardTitle></CardHeader>
                <CardContent>
                <ul className="space-y-2">
                    {caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                        <Check className="text-primary mr-2 flex-shrink-0 mt-1" />
                        <span>{result}</span>
                    </li>
                    ))}
                </ul>
                </CardContent>
            </Card>

            <div>
                <h3 className="text-lg font-semibold mb-2">Products Used:</h3>
                <div className="flex flex-wrap gap-2">
                {caseStudy.products.map((product) => (
                    <Badge key={product} variant="secondary">{product}</Badge>
                ))}
                </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">Request a Similar Solution</Link>
              </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
