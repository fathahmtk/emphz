
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbsProps = {
  current?: string;
};

export default function Breadcrumbs({ current }: BreadcrumbsProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary">
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Link
              href="/products"
              className="ml-1 text-sm font-medium text-muted-foreground hover:text-primary md:ml-2">
              Products
            </Link>
          </div>
        </li>
        {current && (
          <li aria-current="page">
            <div className="flex items-center">
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="ml-1 text-sm font-medium text-foreground md:ml-2">
                {current}
              </span>
            </div>
          </li>
        )}
      </ol>
    </nav>
  );
}
