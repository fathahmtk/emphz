
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { team } from "@/lib/data";
import TeamCard from "./team-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-main');

  return (
    <div className="bg-background">
      <div className="container py-16 lg:py-24 space-y-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About EMPHZ</h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">
             A trusted provider of engineered modular infrastructure solutions.
          </p>
        </div>

        <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
          {aboutImage && (
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              data-ai-hint={aboutImage.imageHint}
              fill
              className="object-cover"
              priority
            />
          )}
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
             <p className="text-lg text-muted-foreground">
                EMPHZ is a manufacturer specialising in GRP and modular infrastructure solutions. With long-standing engineering expertise, we support critical infrastructure, utilities, and industrial projects with durable, site-ready products.
             </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-muted-foreground">
          <Card className="glass">
            <CardHeader><CardTitle className="text-2xl">Our Vision</CardTitle></CardHeader>
            <CardContent><p>To be a trusted provider of engineered modular infrastructure solutions.</p></CardContent>
          </Card>
           <Card className="glass">
            <CardHeader><CardTitle className="text-2xl">Our Mission</CardTitle></CardHeader>
            <CardContent>
                <ul className="space-y-2">
                    <li>Deliver products built for demanding operating environments</li>
                    <li>Maintain consistent quality and safety standards</li>
                    <li>Support infrastructure projects with reliable, value-driven solutions</li>
                </ul>
            </CardContent>
          </Card>
        </div>

        <div>
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Leadership</h2>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
                    Our team’s experience and dedication drive our success.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {team.map((member) => (
                <TeamCard key={member.id} member={member} />
            ))}
            </div>
        </div>
      </div>
    </div>
  );
}
