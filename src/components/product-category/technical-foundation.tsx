
import { ProductCategory } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TechnicalFoundationProps {
  category: ProductCategory;
}

function SpecList({ title, items }: { title: string; items: { parameter: string; description: string }[] }) {
  if (!items || items.length === 0) return null;
  return (
    <Card className="glass">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {items.map(item => (
            <li key={item.parameter}>
              <h4 className="font-semibold">{item.parameter}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default function TechnicalFoundation({ category }: TechnicalFoundationProps) {
  const hasContent = category.engineeringParameters?.length > 0 || category.safetyParameters?.length > 0;

  if (!hasContent) return null;

  return (
    <section className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Technical Foundation
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          The core engineering and safety parameters that guide our manufacturing.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <SpecList title="Engineering Parameters" items={category.engineeringParameters} />
        <SpecList title="Protection & Safety" items={category.safetyParameters} />
      </div>
    </section>
  );
}
