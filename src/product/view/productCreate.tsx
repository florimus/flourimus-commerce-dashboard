'use client';

import { FC } from 'react';
import DataForm from '../components/productCreate/form';
import ProductInfoForm from '../components/productInfoForm';
import ProductCreateHeader from '../components/productCreate/productCreateHeader';
import { Card } from '@/components/ui/card';

interface ProductCreateProps {}

const ProductCreate: FC<ProductCreateProps> = () => {
  const handleCreateProduct = async () => {};

  return (
    <DataForm onSubmit={handleCreateProduct}>
      {(props) => (
        <Card>
          <ProductCreateHeader />
          <ProductInfoForm {...props} />
        </Card>
      )}
    </DataForm>
  );
};

export default ProductCreate;
