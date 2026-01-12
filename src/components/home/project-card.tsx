
import { Project } from "@/lib/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative rounded-lg overflow-hidden h-[500px] w-full text-white bg-muted">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative z-10 flex flex-col justify-end h-full p-8">
            <CardTitle className="text-3xl font-bold text-white">{project.title}</CardTitle>
            <CardDescription className="text-neutral-300 text-lg mb-4">{project.location}</CardDescription>
            <div className="flex flex-wrap gap-2">
                {Array.isArray(project.tags) && project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
            </div>
        </div>
    </div>
  );
}
