'use client';
import { FC, useCallback } from 'react';
import ProductStockPriceDetails from '../components/productStockPrice/productStockPriceDetails';
import { WarehouseType } from 'core/type';
import { Card } from '@/components/ui/card';
import ProductWarehouseForm from '../components/productStockPrice/productWarehouseForm';
import FormData from '../components/productStockPrice/form';
import {
  getProductStockUpdate,
  listProductWarehouses
} from '@/actions/catelogueActions';
import AssignNewWarehouseModal from '../components/productStockPrice/assignNewWarehouseModal';
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
  return (
    <FormData
      initial={warehouses}
      productId={productId}
      onSubmit={updateProductStock}
      fetchWarehouses={fetchWarehouses}
    >
      {(props) => (
        <Card>
          <ProductStockPriceDetails submitting={props.submitting} />
          <ProductWarehouseForm {...props} />
        </Card>
      )}
    </FormData>
  );
};

export default ProductStockPrice;
