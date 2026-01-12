
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function EngineerCTA() {
  return (
    <section className="container">
      <Card className="glass text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Engineer-to-Engineer</CardTitle>
          <CardDescription className="max-w-2xl mx-auto">
            Speak to an engineer who understands site conditions, approvals, and lifecycle performance.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">Request Technical Consultation</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/resources">Download Specification Checklist</Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
