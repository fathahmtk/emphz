
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const pricingPlans = [
  {
    title: "Starter",
    description: "For small teams and startups",
    price: "£49",
    period: "/mo",
    features: [
      "10 users",
      "Basic analytics",
      "48-hour support",
    ],
    isFeatured: false,
    buttonText: "Choose Plan",
    buttonVariant: "outline" as "default" | "outline",
  },
  {
    title: "Professional",
    description: "For growing businesses",
    price: "£99",
    period: "/mo",
    features: [
      "50 users",
      "Advanced analytics",
      "24-hour support",
      "Dedicated account manager",
    ],
    isFeatured: true,
    buttonText: "Choose Plan",
    buttonVariant: "default" as "default" | "outline",
  },
  {
    title: "Enterprise",
    description: "For large-scale deployments",
    price: "Contact Us",
    period: "",
    features: [
      "Unlimited users",
      "Dedicated infrastructure",
      "Premium support",
      "Custom integrations",
    ],
    isFeatured: false,
    buttonText: "Contact Sales",
    buttonVariant: "outline" as "default" | "outline",
  },
];

export default function PricingPage() {
  return (
    <div className="container py-16 lg:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Pricing Plans</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Choose the plan that's right for your business.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {pricingPlans.map(plan => (
          <Card key={plan.title} className={cn(
            "glass flex flex-col transition-all duration-300",
            plan.isFeatured ? "border-primary shadow-2xl scale-105" : "hover:shadow-xl hover:-translate-y-1"
          )}>
            <CardHeader>
              <CardTitle className="text-2xl">{plan.title}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-6">
              <div className="text-5xl font-bold">
                {plan.price}
                {plan.period && <span className="text-xl font-normal text-muted-foreground">{plan.period}</span>}
              </div>
              <ul className="space-y-4">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-start">
                    <Check className="text-primary mr-3 flex-shrink-0 mt-1 h-5 w-5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg" variant={plan.buttonVariant}>
                {plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

