import { getProductDetails } from '@/actions/catelogueActions';
import Loader from '@/components/ui/loader';
import ProductDetails from '@/src/product/view/productDetails';
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
      <ProductDetails product={productResponse?.product} />
    </Suspense>
  );
}
