'use client';

import { FC } from 'react';
import DataForm, {
  ProductCreateInputForm
} from '../components/productCreate/form';
import ProductInfoForm from '../components/productInfoForm';
import ProductCreateHeader from '../components/productCreate/productCreateHeader';
import { Card } from '@/components/ui/card';
import { createProduct } from '@/actions/catelogueActions';

interface ProductCreateProps {}

const ProductCreate: FC<ProductCreateProps> = () => {
  const handleCreateProduct = async (formData: ProductCreateInputForm) => {
    const response = await createProduct({
      name: formData.name,
      brand: formData.brand,
      category: formData.category,
      description: formData.description,
      isSellable: formData.isSellable,
      isCodAvailable: formData?.isSellable ? formData?.isCodAvailable : false,
      isVariant: formData.isVariant,
      parentId: formData?.isVariant ? formData?.parentId : '',
      medias: formData?.medias ?? []
    });
    // TODO: Notification
    return response;
  };

  return (
    <DataForm onSubmit={handleCreateProduct}>
      {(props) => (
        <Card>
          <ProductCreateHeader submitting={props.submitting} />
          <ProductInfoForm {...props} />
        </Card>
      )}
    </DataForm>
  );
};

export default ProductCreate;
