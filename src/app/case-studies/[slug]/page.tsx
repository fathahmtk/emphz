
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
        <div className="aspect-video relative bg-muted rounded-xl overflow-hidden mb-8 shadow-lg">
            {caseStudyImage && (
                <Image 
                src={caseStudyImage.imageUrl} 
                alt={caseStudy.title} 
                data-ai-hint={caseStudyImage.imageHint}
                fill 
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
                priority
                />
            )}
        </div>
        
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{caseStudy.title}</h1>
                <p className="mt-2 text-xl text-muted-foreground"><strong>Client:</strong> {caseStudy.client}</p>
            </div>


            <Card className="glass">
                <CardHeader><CardTitle>The Challenge</CardTitle></CardHeader>
                <CardContent><p className="text-lg text-muted-foreground">{caseStudy.challenge}</p></CardContent>
            </Card>

            <Card className="glass">
                <CardHeader><CardTitle>The Solution</CardTitle></CardHeader>
                <CardContent><p className="text-lg text-muted-foreground">{caseStudy.solution}</p></CardContent>
            </Card>

            <Card className="glass">
                <CardHeader><CardTitle>Key Results</CardTitle></CardHeader>
                <CardContent>
                <ul className="space-y-3">
                    {caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                        <Check className="text-primary mr-3 flex-shrink-0 mt-1 h-5 w-5" />
                        <span className="text-lg text-muted-foreground">{result}</span>
                    </li>
                    ))}
                </ul>
                </CardContent>
            </Card>

            <div>
                <h3 className="text-2xl font-bold text-center mb-4">Products Used</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                {caseStudy.products.map((product) => (
                    <Badge key={product} variant="secondary" className="px-4 py-1 text-sm">{product}</Badge>
                ))}
                </div>
            </div>

            <div className="text-center pt-8">
              <Button asChild size="lg">
                <Link href="/contact">Request a Similar Solution</Link>
              </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
