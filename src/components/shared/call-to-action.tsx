import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

interface CallToActionProps {
  title: string;
  description: ReactNode;
  buttonText: string;
  buttonLink: string;
}

export default function CallToAction({ title, description, buttonText, buttonLink }: CallToActionProps) {
  return (
    <div className="text-left">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4 text-primary">
        {title}
      </h2>
      <div className="prose prose-lg max-w-none text-muted-foreground mb-6">
        {description}
      </div>
      <Button asChild size="lg">
        <Link href={buttonLink}>{buttonText}</Link>
      </Button>
    </div>
  );
}