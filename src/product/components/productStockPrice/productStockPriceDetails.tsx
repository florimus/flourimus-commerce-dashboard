import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { PlusCircle } from 'lucide-react';
import Image from 'next/image';
import { FC, FormEventHandler } from 'react';

interface ProductStockPriceDetails {
  submitting?: boolean;
}

const ProductStockPriceDetails: FC<ProductStockPriceDetails> = ({
  submitting
}) => {
  console.log(submitting);
  
  return (
    <CardHeader>
      <div className="flex justify-between">
        <div>
          <CardTitle>Stocks and Price Details</CardTitle>
          <CardDescription>
            Manage Product's stocks and price details
          </CardDescription>
        </div>
        <div className="flex align-middle">
          {submitting ? (
            <Button size="sm" type="submit" className="h-8 gap-1 px-12">
              <Image
                src={'/loading.webp'}
                width={28}
                height={28}
                alt="loading"
                className="overflow-hidden rounded-full"
              />
            </Button>
          ) : (
            <Button size="sm" type="submit" className="h-8 gap-1">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Update Stocks
              </span>
            </Button>
          )}
        </div>
      </div>
    </CardHeader>
  );
};

export default ProductStockPriceDetails;
