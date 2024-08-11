import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { FC, FormEventHandler } from 'react';

interface ProductStockPriceDetails {}

const ProductStockPriceDetails: FC<ProductStockPriceDetails> = ({}) => {
  return (
    <CardHeader>
      <CardTitle>Stocks and Price Details</CardTitle>
      <CardDescription>
        Manage Product's stocks and price details
      </CardDescription>
      <Button type="submit">Submit</Button>
    </CardHeader>
  );
};

export default ProductStockPriceDetails;
