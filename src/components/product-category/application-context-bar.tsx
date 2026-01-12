
'use client';

import { useState } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ApplicationType } from '@/lib/types';
import { X } from 'lucide-react';

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
    <section className="container sticky top-[4.5rem] z-30">
      <div className="bg-card/80 backdrop-blur-xl border rounded-pill p-2">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
          {currentApplication === null && (
            <p className="text-sm font-medium text-muted-foreground px-4 hidden md:block">
              Filter by application:
            </p>
          )}
          <div className="flex flex-wrap gap-2 justify-center">
            {applications.map((app) => (
              <Button
                key={app.id}
                size="sm"
                variant={currentApplication === app.id ? 'default' : 'ghost'}
                onClick={() => handleSelect(app.id)}
                className="rounded-pill"
              >
                {app.name}
              </Button>
            ))}
             {currentApplication && (
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleSelect(currentApplication)}
                    className="rounded-pill h-8 w-8"
                >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Reset Filter</span>
                </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
