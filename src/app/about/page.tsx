import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { team } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-main');

  return (
    <div className="bg-background">
      <div className="container py-16 lg:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About EMPHZ</h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">
            Pioneering excellence in modular infrastructure since 1990.
          </p>
        </div>

        <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg my-12">
          {aboutImage && (
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              data-ai-hint={aboutImage.imageHint}
              fill
              className="object-cover"
            />
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg text-muted-foreground mb-16">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">Our Mission</h2>
            <p>To engineer and manufacture the world's most reliable and durable GRP modular solutions, empowering industries through innovation and unwavering quality.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">Our Vision</h2>
            <p>To be the global leader in GRP technology, setting new standards for performance, sustainability, and customer satisfaction in every product we create.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">Our History</h2>
            <p>Founded over three decades ago, EMPHZ grew from a small workshop into an international powerhouse, driven by a passion for solving complex engineering challenges.</p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Leadership</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            The driving force behind our success and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => {
            const memberImage = PlaceHolderImages.find(p => p.id === member.image_id);
            return (
              <Card key={member.id} className="text-center">
                <CardContent className="p-6">
                  {memberImage && (
                    <div className="relative h-32 w-32 rounded-full mx-auto mb-4 overflow-hidden">
                      <Image
                        src={memberImage.imageUrl}
                        alt={member.name}
                        data-ai-hint={memberImage.imageHint}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
