
import CallToAction from "@/components/shared/call-to-action";

export default function AboutSummary() {
  return (
    <div className="container">
        <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg flex items-center justify-center text-center text-white p-4 bg-muted">
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10">
                <CallToAction
                    title="About EMPHZ"
                    description={
                    <>
                        <p className="text-neutral-200">
                        EMPHZ is a manufacturer specialising in GRP and modular infrastructure solutions.
                        With long-standing engineering expertise, we support critical infrastructure, utilities, and industrial projects with durable, site-ready products.
                        </p>
                    </>
                    }
                    buttonText="Learn More About Us"
                    buttonLink="/about"
                />
            </div>
        </div>
    </div>
  );
}
