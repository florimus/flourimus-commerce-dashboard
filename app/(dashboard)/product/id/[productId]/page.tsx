import { getProductDetails } from '@/actions/catelogueActions';
import Loader from '@/components/ui/loader';
import Product from '@/src/product';
import { Suspense } from 'react';

export default async function ProductDetailsPage({
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
  const productResponse = await getProductDetails(productId);

  if (!productResponse?.error) {
    // TODO: Not found page
  }

  return (
    <Suspense fallback={<Loader />}>
      <Product.ProductDetails product={productResponse?.product} />
    </Suspense>
  );
}
