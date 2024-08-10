'use client';

import { FC } from 'react';
import ProductDetailsHeader from '../components/productDetails/productDetailsHeader';
import { ProductType } from 'core/type';

interface ProductDetailsProps {
  product: ProductType;
}

const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  return (
    <ProductDetailsHeader
      name={product?.name}
      id={product?._id}
      submitting={false}
    />
  );
};

export default ProductDetails;
