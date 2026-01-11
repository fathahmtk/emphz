
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/home/project-card";

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
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
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
