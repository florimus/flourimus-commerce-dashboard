'use server';

import { paginationConstants } from '@/constants/constants';
import { client } from '@/lib/client';
import {
  ProductCreateDocument,
  ProductDocument,
  ProductListDocument,
  ProductStatusChangeDocument,
  ProductStatusDocument,
  ProductStockEntryDocument,
  ProductUpdateDocument,
  WarehouseListDocument,
  WarehousesWithProductDocument
} from '@/lib/graphql/graphql';
import { ProductCreateInputForm } from '@/src/product/components/productCreate/form';
import { ProductUpdateInputForm } from '@/src/product/components/productDetails/form';
import { ProductStockUpdateRequestTypes } from '@/src/product/view/productStockPrice';
import { gql } from '@apollo/client';
import {
  ListProductWarehousesType,
  ProductDetailsAPIResponseType,
  ProductListType,
  ProductResponseAPIType,
  ProductStatusChangeResponseType,
  ProductStockUpdateResponseType,
  ProductType,
  ProductWarehouseAPIResponseType
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

export const getProductWarehouses: (
  productId: string
) => Promise<ProductWarehouseAPIResponseType> = async (productId) => {
  try {
    const { data } = await client.query({
      query: gql`
        ${WarehousesWithProductDocument}
      `,
      variables: {
        productId
      }
    });
    return data?.warehousesWithProduct as ProductWarehouseAPIResponseType;
  } catch (error: any) {
    return {
      error: error?.cause?.message || 'INTERNAL_SERVER_ERROR'
    } as ProductWarehouseAPIResponseType;
  }
};

export const getProductStockUpdate: (
  formData: ProductStockUpdateRequestTypes[]
) => Promise<ProductStockUpdateResponseType> = async (
  formData: ProductStockUpdateRequestTypes[]
) => {
  try {
    await Promise.all([
      formData?.forEach(
        async ({
          warehouseId,
          productId,
          totalStocks,
          saftyStock
        }: ProductStockUpdateRequestTypes) => {
          await client.query({
            query: gql`
              ${ProductStockEntryDocument}
            `,
            variables: {
              productStockEntryInput: {
                warehouseId,
                productId,
                totalStocks: Number(totalStocks),
                saftyStock: Number(saftyStock)
              }
            }
          });
        }
      )
    ]);
    revalidatePath(`/product/id/${formData?.[0]?.productId}`);
    return { success: true };
  } catch (error: any) {
    return {
      error: error?.cause?.message || 'INTERNAL_SERVER_ERROR'
    } as ProductStockUpdateResponseType;
  }
};

export const listProductWarehouses: (
  search: string,
  page: number
) => Promise<ListProductWarehousesType> = async (search = '', page = 0) => {
  try {
    const { data } = await client.query({
      query: gql`
        ${WarehouseListDocument}
      `,
      variables: {
        warehouseListInput: {
          search,
          page,
          size: 20
        }
      }
    });
    return data?.warehouseList;
  } catch (error: any) {
    return {
      error: error?.cause?.message || 'INTERNAL_SERVER_ERROR'
    } as ListProductWarehousesType;
  }
};

export const toggleProductStatus: (
  id: string
) => Promise<ProductStatusChangeResponseType> = async (id) => {
  try {
    const { data } = await client.query({
      query: gql`
        ${ProductStatusChangeDocument}
      `,
      variables: {
        id
      }
    });
    return data?.productStatusChange as ProductStatusChangeResponseType;
  } catch (error: any) {
    return {
      error: error?.cause?.message || 'INTERNAL_SERVER_ERROR'
    } as ProductStatusChangeResponseType;
  }
};

export const getProductStatus: (
  id: string
) => Promise<Partial<ProductResponseAPIType>> = async (id) => {
  try {
    const { data } = await client.query({
      query: gql`
        ${ProductStatusDocument}
      `,
      variables: {
        id
      }
    });
    return data?.product as ProductResponseAPIType;
  } catch (error: any) {
    return {
      error: error?.cause?.message || 'INTERNAL_SERVER_ERROR'
    } as ProductResponseAPIType;
  }
};
