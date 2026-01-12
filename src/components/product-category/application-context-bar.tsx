
'use client';

import { useState } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ApplicationType } from '@/lib/types';

const applications: { id: ApplicationType; name: string }[] = [
  { id: 'public', name: 'Public Infrastructure' },
  { id: 'energy', name: 'Energy & Utilities' },
  { id: 'industrial', name: 'Industrial & Process' },
];

export default function ApplicationContextBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentApplication = searchParams.get('application') as ApplicationType | null;

  const handleSelect = (app: ApplicationType) => {
    const params = new URLSearchParams(searchParams.toString());
    if (currentApplication === app) {
      params.delete('application');
    } else {
      params.set('application', app);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <section className="container">
      <div className="bg-card border rounded-xl p-4 sticky top-20 z-30">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {currentApplication === null && (
            <p className="text-sm font-medium text-muted-foreground">
              Select application to tailor specifications:
            </p>
          )}
          <div className="flex flex-wrap gap-2 justify-center">
            {applications.map((app) => (
              <Button
                key={app.id}
                variant={currentApplication === app.id ? 'default' : 'outline'}
                onClick={() => handleSelect(app.id)}
                className="rounded-pill"
              >
                {app.name}
              </Button>
            ))}
             {currentApplication && (
                <Button
                    variant="ghost"
                    onClick={() => handleSelect(currentApplication)}
                    className="rounded-pill"
                >
                    Reset
                </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
