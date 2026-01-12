
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Link from 'next/link';

const customisationPoints = [
  'Size & layout adjustments',
  'Cable entry logic and placement',
  'Ventilation and thermal management',
  'Specific fire rating requirements',
  'Department and utility approvals'
];

export default function CustomisationSupport() {
  return (
    <section className="container">
      <div className="max-w-4xl mx-auto">
        <Card className="glass p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">
                Customisation & Engineering Support
              </h2>
              <p className="text-muted-foreground mb-6">
                Most infrastructure projects are not standard. Our products are engineered to site, department, and operational requirements.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Discuss Custom Build</Link>
              </Button>
            </div>
            <div>
              <ul className="space-y-3">
                {customisationPoints.map(point => (
                  <li key={point} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
