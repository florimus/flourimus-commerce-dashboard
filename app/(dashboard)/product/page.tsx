import { getProducts } from '@/actions/catelogueActions';
import { paginationConstants } from '@/constants/constants';
import Product from '@/src/product';
import { ProductListType } from 'core/type';

export default async function ProductsPage({
  searchParams
}: {
  searchParams: { q: string; p: number; tab: string; s: number; d: string };
}) {
  const tab = searchParams?.tab ?? 'ALL';
  const search = searchParams.q ?? '';
  const page = searchParams.p ?? 0;
  const size = searchParams.s ?? paginationConstants.limits[1];
  const sortBy = '_id';
  const sortDirection = searchParams.d ?? paginationConstants.directions[0];

  const productListResponse: ProductListType = await getProducts(
    search,
    page,
    size,
    sortBy,
    sortDirection,
    tab as 'ACTIVE' | 'INACTIVE' | 'ALL',
    'product'
  );

  const isNotEmpty =
    Array.isArray(productListResponse?.products) &&
    productListResponse?.products?.length > 0;

  return (
    <Product.ProductList
      products={productListResponse?.products}
      pageInfo={productListResponse?.pageInfo}
      pagesize={size}
      page={page}
    />
  );
}
