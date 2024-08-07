'use client';

import {
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  Table
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Product } from './product';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageInfoType, ProductType } from 'core/type';
import { FC } from 'react';

interface ProductsTableProps {
  products: ProductType[];
  pageInfo: Partial<PageInfoType>;
  handleChangeParams: (
    param: string,
    value: string,
    options?: {
      resetPage?: boolean;
      resetSearch?: boolean;
    }
  ) => Promise<string>;
  pagesize: number;
  page: number;
}

export const ProductsTable: FC<ProductsTableProps> = ({
  handleChangeParams,
  products,
  pageInfo,
  pagesize,
  page
}) => {
  const router = useRouter();

  function prevPage() {
    router.back();
  }

  async function nextPage() {
    const params = await handleChangeParams('p', `${page + 1}`);
    router.push(`/product?${params}`, { scroll: false });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Products</CardTitle>
        <CardDescription>
          Manage your products and view their sales performance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] sm:table-cell">
                <span>Image</span>
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="hidden md:table-cell">Unique ID</TableHead>
              <TableHead className="hidden md:table-cell">Brand</TableHead>
              <TableHead className="hidden md:table-cell">Category</TableHead>
              <TableHead className="hidden md:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Price</TableHead>
              <TableHead className="hidden md:table-cell">Variants</TableHead>
              <TableHead className="hidden md:table-cell">
                Created date
              </TableHead>
              <TableHead>
                <span>Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.isArray(products) &&
              products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        {pageInfo && (
          <form className="flex items-center w-full justify-between">
            <div className="text-xs text-muted-foreground">
              Showing{' '}
              <strong>
                {pagesize * page + 1} -{' '}
                {pagesize * page + pageInfo?.currentMatchs!}
              </strong>{' '}
              of <strong>{pageInfo?.totalMatches}</strong> products
            </div>
            <div className="flex">
              <Button
                formAction={prevPage}
                variant="ghost"
                size="sm"
                type="submit"
                disabled={pageInfo?.isStart}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Prev
              </Button>
              <Button
                formAction={nextPage}
                variant="ghost"
                size="sm"
                type="submit"
                disabled={pageInfo?.isEnd}
              >
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        )}
      </CardFooter>
    </Card>
  );
};
