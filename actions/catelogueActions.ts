'use server';

import { paginationConstants } from '@/constants/constants';
import { client } from '@/lib/client';
import { ProductListDocument } from '@/lib/graphql/graphql';
import { gql } from '@apollo/client';
import { ProductListType } from 'core/type';

export const getProducts: (
  search: string,
  page: number,
  size: number,
  sortBy: string,
  sortDirection: string,
  active: 'ACTIVE' | 'INACTIVE' | 'ALL',
  type: 'product' | 'variant' | 'all'
) => Promise<ProductListType> = async (
  search = '',
  page = 0,
  size = paginationConstants.limits[0],
  sortBy = '_id',
  sortDirection = paginationConstants.directions[0],
  active = 'ALL',
  type = 'all'
) => {
  try {
    const { data } = await client.query({
      query: gql`
        ${ProductListDocument}
      `,
      variables: {
        productListInput: {
          search,
          page,
          size,
          sortBy,
          sortDirection,
          active,
          type
        }
      }
    });
    const { productList } = data;
    return productList as ProductListType;
  } catch (error: any) {
    return {
      error: error?.cause?.message || 'INTERNAL_SERVER_ERROR'
    } as ProductListType;
  }
};
