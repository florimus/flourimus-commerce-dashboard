import { Button } from '@/components/ui/button';
import { CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle } from 'lucide-react';
import { FC } from 'react';

interface ProductCreateHeaderProps {}

const ProductCreateHeader: FC<ProductCreateHeaderProps> = () => {
  return (
    <CardHeader>
      <div className="flex justify-between">
        <CardTitle>Create Product</CardTitle>
        <div>
          <Button size="sm" variant={'outline'} className="h-8 gap-1 me-2">
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Discard
            </span>
          </Button>
          <Button size="sm" className="h-8 gap-1">
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
