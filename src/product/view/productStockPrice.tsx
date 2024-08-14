'use client';
import { FC } from 'react';
import ProductStockPriceDetails from '../components/productStockPrice/productStockPriceDetails';
import { WarehouseType } from 'core/type';
import { Card } from '@/components/ui/card';
import ProductWarehouseForm from '../components/productStockPrice/productWarehouseForm';
import FormData from '../components/productStockPrice/form';
import { getProductStockUpdate } from '@/actions/catelogueActions';
import AssignNewWarehouseModal from '../components/productStockPrice/assignNewWarehouseModal';
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
  return (
    <FormData
      initial={warehouses}
      productId={productId}
      onSubmit={updateProductStock}
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
