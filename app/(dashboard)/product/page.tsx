import { getProducts } from '@/actions/catelogueActions';
import { paginationConstants } from '@/constants/constants';
import Product from '@/src/product';
import { ProductListType } from 'core/type';
import { redirect } from 'next/navigation';

export default async function ProductsPage({
  searchParams
}: {
  searchParams: { q: string; p: string; tab: string; s: string; d: string };
}) {
  const tab = searchParams?.tab ?? 'ALL';
  const search = searchParams.q ?? '';
  const page = Number(searchParams.p ?? 0);
  const size = Number(searchParams.s ?? paginationConstants.limits[1]);
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
      searchParams={searchParams}
      pagesize={size}
      page={page}
      tab={tab}
    />
  );
}
