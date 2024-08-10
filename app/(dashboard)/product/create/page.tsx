import Loader from '@/components/ui/loader';
import Product from '@/src/product';
import { Suspense } from 'react';

export default async function CreateProductPage() {
  return (
    <Suspense fallback={<Loader />}>
      <Product.ProductCreate />
    </Suspense>
  );
}
