import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TeamMember } from "@/lib/types";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

type TeamCardProps = {
  member: TeamMember;
};

export default function TeamCard({ member }: TeamCardProps) {
  const image = PlaceHolderImages.find(p => p.id === member.image_id);
  
  return (
    <Card className="text-center flex flex-col transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
      <CardHeader>
        {image && (
          <div className="relative w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden ring-4 ring-primary/20">
            <Image
              src={image.imageUrl}
              alt={member.name}
              data-ai-hint={image.imageHint}
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
        )}
        <CardTitle>{member.name}</CardTitle>
        <CardDescription>{member.role}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{member.bio}</p>
      </CardContent>
    </Card>
  );
}
