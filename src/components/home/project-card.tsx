import { Project } from "@/lib/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);

  return (
    <Card className="overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link href={`/products/${project.id}`} className="block">
        <div className="aspect-video relative bg-muted">
          {projectImage && (
            <Image 
              src={projectImage.imageUrl} 
              alt={project.title} 
              data-ai-hint={projectImage.imageHint}
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.location}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {Array.isArray(project.tags) && project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}