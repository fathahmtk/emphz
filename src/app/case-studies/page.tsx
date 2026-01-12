
import { caseStudies } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function CaseStudiesPage() {
  return (
    <div className="container py-16 lg:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Case Studies</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          See how our GRP solutions have been successfully implemented across various industries.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study) => {
            const studyImage = PlaceHolderImages.find(p => p.id === study.imageId);
            return (
              <Card key={study.id} className="glass overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <Link href={`/case-studies/${study.slug}`} className="block">
                  <div className="aspect-video relative bg-muted">
                    {studyImage && (
                        <Image 
                        src={studyImage.imageUrl} 
                        alt={study.title} 
                        data-ai-hint={studyImage.imageHint}
                        fill 
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle>{study.title}</CardTitle>
                    <CardDescription>{study.client}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{study.summary}</p>
                  </CardContent>
                </Link>
              </Card>
            )
        })}
      </div>
    </div>
  );
}
