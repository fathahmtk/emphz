
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function FinalCTA() {
  return (
    <div className="container">
      <div className="relative rounded-xl overflow-hidden p-12 bg-muted h-[500px] flex flex-col items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
            <h2 className="text-4xl font-extrabold sm:text-5xl mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-neutral-200 max-w-3xl mx-auto mb-10">
              Our team of experts is here to help you find the perfect GRP solution for your needs. Contact us today for a personalized quote or to discuss your project requirements in detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="default">
                <Link href="/contact">Request a Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="tel:+919037874080">
                  <>
                    <Phone className="mr-2 h-5 w-5"/> Call Us
                  </>
                </Link>
              </Button>
            </div>
        </div>
      </div>
    </div>
  )
}
