import {
  getProductDetails,
  getProductWarehouses
} from '@/actions/catelogueActions';
import Loader from '@/components/ui/loader';
import { isArrayEmpty } from '@/lib/utils';
import Product from '@/src/product';
import { Suspense } from 'react';

export default async function ProductStockPricePage({
  params
}: {
  params: {
    productId: string;
  };
}) {
  const { productId } = params || {};
  if (!productId) {
    // TODO: Not found page
  }

  const warehouses = (await getProductWarehouses(productId)) || {};

  if (isArrayEmpty(warehouses)) {
    // TODO: Not found page
  }

  return (
    <Suspense fallback={<Loader />}>
      <Product.ProductStockPrice warehouses={warehouses} />
    </Suspense>
  );
}
