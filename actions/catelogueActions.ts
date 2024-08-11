'use server';

import { paginationConstants } from '@/constants/constants';
import { client } from '@/lib/client';
import {
  ProductCreateDocument,
  ProductDocument,
  ProductListDocument,
  ProductUpdateDocument
} from '@/lib/graphql/graphql';
import { ProductCreateInputForm } from '@/src/product/components/productCreate/form';
import { ProductUpdateInputForm } from '@/src/product/components/productDetails/form';
import { gql } from '@apollo/client';
import {
  ProductDetailsAPIResponseType,
  ProductListType,
  ProductResponseAPIType,
  ProductType
} from 'core/type';
import { revalidatePath } from 'next/cache';

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

export const createProduct: (
  formData: ProductCreateInputForm
) => Promise<ProductResponseAPIType> = async (formData) => {
  try {
    const { data } = await client.query({
      query: gql`
        ${ProductCreateDocument}
      `,
      variables: {
        productCreateInput: formData
      }
    });
    const { productCreate } = data;
    return productCreate as ProductType;
  } catch (error: any) {
    return {
      error: error?.cause?.message || 'INTERNAL_SERVER_ERROR'
    } as ProductResponseAPIType;
  }
};

export const getProductDetails: (
  id: string
) => Promise<ProductDetailsAPIResponseType> = async (id) => {
  try {
    const { data } = await client.query({
      query: gql`
        ${ProductDocument}
      `,
      variables: {
        id
      }
    });
    return data as ProductDetailsAPIResponseType;
  } catch (error: any) {
    return {
      error: error?.cause?.message || 'INTERNAL_SERVER_ERROR'
    } as ProductDetailsAPIResponseType;
  }
};

export const updateProductDetails: (
  id: string,
  formData: Partial<ProductUpdateInputForm>
) => Promise<ProductDetailsAPIResponseType> = async (id, formData) => {
  try {
    const { data } = await client.query({
      query: gql`
        ${ProductUpdateDocument}
      `,
      variables: {
        id,
        productUpdateInput: formData
      }
    });
    revalidatePath(`/product/id/${id}`);
    return { product: data?.productUpdate } as ProductDetailsAPIResponseType;
  } catch (error: any) {
    return {
      error: error?.cause?.message || 'INTERNAL_SERVER_ERROR'
    } as ProductDetailsAPIResponseType;
  }
};
