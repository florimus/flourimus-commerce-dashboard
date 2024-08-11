'use client';

import { FC } from 'react';
import ProductDetailsHeader from '../components/productDetails/productDetailsHeader';
import { ProductType } from 'core/type';
import DataForm, {
  ProductUpdateInputForm
} from '../components/productDetails/form';
import { Card } from '@/components/ui/card';
import ProductInfoForm from '../components/productInfoForm';
import { updateProductDetails } from '@/actions/catelogueActions';

interface ProductDetailsProps {
  product: ProductType;
}

const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  const handleCreateProduct = async (formData: ProductUpdateInputForm) => {
    const response = await updateProductDetails(product?._id, {
      name: formData.name,
      brand: formData.brand,
      category: formData.category,
      shortDescription: formData.shortDescription,
      description: formData.description,
      isSellable: formData.isSellable,
      isCodAvailable: formData?.isSellable ? formData?.isCodAvailable : false,
      medias: formData?.medias ?? []
    });
    // TODO: Notification
    return response;
  };

  return (
    <DataForm initial={product} onSubmit={handleCreateProduct}>
      {(props) => (
        <>
          <Card>
            <ProductDetailsHeader
              name={product?.name}
              id={product?._id}
              submitting={props?.submitting}
            />
            <ProductInfoForm {...props} isUpdatePage />
          </Card>
        </>
      )}
    </DataForm>
  );
};

export default ProductDetails;
