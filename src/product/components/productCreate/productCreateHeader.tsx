import { Button } from '@/components/ui/button';
import { CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle, StepBack } from 'lucide-react';
import { FC } from 'react';

interface ProductCreateHeaderProps {}

const ProductCreateHeader: FC<ProductCreateHeaderProps> = () => {
  return (
    <CardHeader>
      <div className="flex justify-between">
        <CardTitle>Create Product</CardTitle>
        <div className="flex align-middle">
          <Button
            size="sm"
            variant={'outline'}
            type="button"
            className="h-8 gap-1 me-2"
          >
            <StepBack className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Discard
            </span>
          </Button>
          <Button size="sm" type="submit" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Create Product
            </span>
          </Button>
        </div>
      </div>
    </CardHeader>
  );
};

export default ProductCreateHeader;
