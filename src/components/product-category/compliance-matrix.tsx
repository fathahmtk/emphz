
import { ProductCategory } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Link from 'next/link';

interface ComplianceMatrixProps {
  category: ProductCategory;
}

export default function ComplianceMatrix({ category }: ComplianceMatrixProps) {
  if (!category.complianceMatrix || category.complianceMatrix.length === 0) {
    return null;
  }

  return (
    <section className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Compliance Matrix
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Authority and standards compliance for engineering peace of mind.
        </p>
      </div>

      <Card className="max-w-4xl mx-auto glass">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Standard</TableHead>
                <TableHead>Rating / Scope</TableHead>
                <TableHead>Availability</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {category.complianceMatrix.map((item) => (
                <TableRow key={item.standard}>
                  <TableCell className="font-medium">{item.standard}</TableCell>
                  <TableCell>{item.scope}</TableCell>
                  <TableCell>{item.availability}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="text-center mt-8">
        <Button asChild variant="outline">
          <Link href="/contact">Request Compliance Documents</Link>
        </Button>
      </div>
    </section>
  );
}
