'use client';
import { FC } from 'react';
import ProductStockPriceDetails from '../components/productStockPrice/productStockPriceDetails';
import { WarehouseType } from 'core/type';
import { Card } from '@/components/ui/card';
import ProductWarehouseForm from '../components/productStockPrice/productWarehouseForm';
import FormData from '../components/productStockPrice/form';

interface ProductStockPriceProps {
  warehouses: Array<WarehouseType>;
}

const ProductStockPrice: FC<ProductStockPriceProps> = ({ warehouses }) => {
  return (
    <FormData initial={warehouses}>
      {(props) => (
        <Card>
          <ProductStockPriceDetails />
          <ProductWarehouseForm {...props} />
        </Card>
      )}
    </FormData>
  );
};

export default ProductStockPrice;
