
'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ProductCategory, ApplicationType } from '@/lib/types';
import { useMemo } from 'react';

interface UseCaseSectionProps {
  category: ProductCategory;
}

export default function UseCaseSection({ category }: UseCaseSectionProps) {
  const searchParams = useSearchParams();
  const application = searchParams.get('application') as ApplicationType | null;

  const filteredUseCases = useMemo(() => {
    if (!application) {
      return category.useCases;
    }
    return category.useCases.filter(uc => uc.applicationType === application);
  }, [application, category.useCases]);

  if (filteredUseCases.length === 0) {
    return null;
  }

  return (
    <section id="applications" className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Deployment Scenarios
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          How {category.name} are deployed in various applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredUseCases.map((useCase) => (
          <Card key={useCase.scenario} className="glass">
            <CardHeader>
              <CardTitle>{useCase.scenario}</CardTitle>
              <CardDescription>{useCase.environment}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{useCase.description}</p>
              <p className="text-sm font-semibold">Why GRP: <span className="font-normal text-muted-foreground">{useCase.reason}</span></p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
