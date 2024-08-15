'use client';
import { FC, useCallback } from 'react';
import ProductStockPriceDetails from '../components/productStockPrice/productStockPriceDetails';
import { WarehouseType } from 'core/type';
import { Card } from '@/components/ui/card';
import ProductWarehouseForm from '../components/productStockPrice/productWarehouseForm';
import FormData from '../components/productStockPrice/form';
import {
  getProductStockUpdate,
  listProductWarehouses,
  toggleProductStatus
} from '@/actions/catelogueActions';
import { isNonEmptyArray } from '@apollo/client/utilities';
import { OptionsValuesTypes } from '@/components/ui/options';
interface ProductStockPriceProps {
  warehouses: Array<WarehouseType>;
  productId: string;
}

export interface ProductStockUpdateRequestTypes {
  warehouseId: string;
  productId: string | undefined;
  totalStocks: number | undefined;
  saftyStock: number | undefined;
}

const ProductStockPrice: FC<ProductStockPriceProps> = ({
  warehouses,
  productId
}) => {
  const updateProductStock = async (
    formData: ProductStockUpdateRequestTypes[]
  ) => getProductStockUpdate(formData);

  const fetchWarehouses: () => Promise<OptionsValuesTypes[]> =
    useCallback(async () => {
      // TODO: Need to do paginations
      const { warehouses } = (await listProductWarehouses('', 0)) || {};
      if (isNonEmptyArray(warehouses)) {
        return warehouses?.map((item) => ({
          value: item._id,
          label: item.name
        }));
      }
      return [];
    }, []);

  const updateProductStatus = async () => {
    return await toggleProductStatus(productId);
  };

  return (
    <FormData
      initial={warehouses}
      productId={productId}
      onSubmit={updateProductStock}
      fetchWarehouses={fetchWarehouses}
      updateProductStatus={updateProductStatus}
    >
      {(props) => (
        <Card>
          <ProductStockPriceDetails
            submitting={props.submitting}
            changeProductStatus={props.changeProductStatus}
            isActive={props.isActive}
          />
          <ProductWarehouseForm {...props} />
        </Card>
      )}
    </FormData>
  );
};

export default ProductStockPrice;
