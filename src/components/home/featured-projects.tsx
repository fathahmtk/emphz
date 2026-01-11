

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/home/project-card";

export default function FeaturedProjects() {
  const featuredProject = projects[0]; // Highlight the first project

  return (
    <section>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Project</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            See our solutions in action in a real-world application.
          </p>
        </div>
        
        {featuredProject && <ProjectCard project={featuredProject} />}

        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
