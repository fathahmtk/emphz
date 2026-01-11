import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { Button } from "../ui/button";

export default function FeaturedProjects() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            See our solutions in action in real-world applications.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const image = PlaceHolderImages.find(p => p.id === project.image_id);
            return (
              <Card key={project.id} className="overflow-hidden flex flex-col">
                {image && (
                   <div className="relative h-64 w-full">
                     <Image
                      src={image.imageUrl}
                      alt={project.name}
                      data-ai-hint={image.imageHint}
                      fill
                      className="object-cover"
                    />
                   </div>
                )}
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <Badge variant="secondary">{project.industry}</Badge>
                </CardFooter>
              </Card>
            );
          })}
        </div>
         <div className="text-center mt-12">
            <Button asChild variant="outline">
                <Link href="/contact">Discuss Your Project</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
