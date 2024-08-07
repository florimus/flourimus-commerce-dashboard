'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { File, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductsTable } from '../components/productTable';
import { PageInfoType, ProductType } from 'core/type';
import { FC, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import Loader from '@/components/ui/loader';
import { Card } from '@/components/ui/card';
import { populateSearchParams } from '@/lib/utils';

interface ProductListProps {
  products: ProductType[];
  pageInfo: Partial<PageInfoType>;
  searchParams: { q: string; p: string; tab: string; s: string; d: string };
  pagesize: number;
  page: number;
  tab: string;
}

const ProductList: FC<ProductListProps> = ({
  products,
  pageInfo,
  pagesize,
  searchParams,
  page,
  tab
}) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  async function handleChangeTab(tab: string) {
    const params = populateSearchParams(searchParams, 'tab', tab, {
      resetPage: true
    });
    startTransition(() => {
      router.push(`/product?${params}`, { scroll: false });
    });
  }

  return (
    <Tabs defaultValue={tab || 'ALL'}>
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger onClick={() => handleChangeTab('ALL')} value="ALL">
            All
          </TabsTrigger>
          <TabsTrigger onClick={() => handleChangeTab('ACTIVE')} value="ACTIVE">
            Active
          </TabsTrigger>
          <TabsTrigger
            onClick={() => handleChangeTab('INACTIVE')}
            value="INACTIVE"
          >
            Draft
          </TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Export
            </span>
          </Button>
          <Button size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Product
            </span>
          </Button>
        </div>
      </div>
      {isPending ? (
        <Card>
          <Loader />
        </Card>
      ) : (
        <TabsContent value={tab}>
          <ProductsTable
            products={products}
            pageInfo={pageInfo}
            pagesize={pagesize}
            page={page}
            searchParams={searchParams}
            startTransition={startTransition}
          />
        </TabsContent>
      )}
    </Tabs>
  );
};

export default ProductList;
