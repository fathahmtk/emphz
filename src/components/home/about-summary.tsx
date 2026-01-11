
import Image from "next/image";
import CallToAction from "@/components/shared/call-to-action";

export default function AboutSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <CallToAction
        title="A Legacy of Quality and Innovation"
        description={
          <>
            <p className="mb-4">
              For over three decades, EMPHZ has been at the forefront of designing and manufacturing high-performance GRP products. Our mission is to provide durable, reliable infrastructure that stands the test of time, even in the harshest environments.
            </p>
            <p>
              We are committed to continuous innovation, superior quality, and unparalleled customer service.
            </p>
          </>
        }
        buttonText="Learn More About Us"
        buttonLink="/about"
      />
      <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
        <Image
          src="https://storage.googleapis.com/garden-prod/agave/agent_sandbox/3915762913/2024-04-01/16_29_23_571_p63A71yV.png"
          alt="A modern, solar-powered kiosk in a park setting."
          data-ai-hint="modern kiosk with solar panels"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
