import { Button } from '@/components/ui/button';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, Power } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';

interface ProductStockPriceDetails {
  submitting?: boolean;
  changeProductStatus: () => Promise<void>;
  isActive: boolean;
}

const ProductStockPriceDetails: FC<ProductStockPriceDetails> = ({
  submitting,
  isActive,
  changeProductStatus
}) => {
  return (
    <CardHeader>
      <div className="flex justify-between">
        <div>
          <CardTitle>Stocks and Inventory</CardTitle>
          <CardDescription>
            Manage Product's stocks and inventory details
          </CardDescription>
        </div>
        <div className="flex align-middle">
          <Button
            size="sm"
            variant={`${!isActive ? 'outline' : 'destructive'}`}
            type="button"
            onClick={changeProductStatus}
            className={`h-8 gap-1 me-2 border${!isActive ? ' text-green-500 border-green-500' : ''}`}
          >
            <Power className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              {isActive ? 'Deactivate' : 'Activate'}
            </span>
          </Button>
          {submitting ? (
            <Button size="sm" type="submit" className="h-8 gap-1 px-7">
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
              <Save className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Update
              </span>
            </Button>
          )}
        </div>
      </div>
    </CardHeader>
  );
};

export default ProductStockPriceDetails;
