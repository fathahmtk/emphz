
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="container py-16 lg:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Pricing Plans</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Choose the plan that's right for your business.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <Card className="glass">
          <CardHeader>
            <CardTitle>Starter</CardTitle>
            <CardDescription>For small teams and startups</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-4xl font-bold">£49<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
            <ul className="space-y-2">
              <li className="flex items-center"><Check className="text-primary mr-2" />10 users</li>
              <li className="flex items-center"><Check className="text-primary mr-2" />Basic analytics</li>
              <li className="flex items-center"><Check className="text-primary mr-2" />48-hour support</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full rounded-full">Choose Plan</Button>
          </CardFooter>
        </Card>
        <Card className="glass border-primary">
          <CardHeader>
            <CardTitle>Professional</CardTitle>
            <CardDescription>For growing businesses</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-4xl font-bold">£99<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
            <ul className="space-y-2">
              <li className="flex items-center"><Check className="text-primary mr-2" />50 users</li>
              <li className="flex items-center"><Check className="text-primary mr-2" />Advanced analytics</li>
              <li className="flex items-center"><Check className="text-primary mr-2" />24-hour support</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full rounded-full">Choose Plan</Button>
          </CardFooter>
        </Card>
        <Card className="glass">
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <CardDescription>For large-scale deployments</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-4xl font-bold">Contact Us</div>
            <ul className="space-y-2">
              <li className="flex items-center"><Check className="text-primary mr-2" />Unlimited users</li>
              <li className="flex items-center"><Check className="text-primary mr-2" />Dedicated infrastructure</li>
              <li className="flex items-center"><Check className="text-primary mr-2" />Premium support</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full rounded-full" variant="outline">Contact Sales</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
