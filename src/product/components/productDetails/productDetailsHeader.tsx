import { Button } from '@/components/ui/button';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Loader from '@/components/ui/loader';
import { Save, StepBack } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC, useTransition } from 'react';

interface ProductDetailsHeaderProps {
  submitting: boolean;
  name: string;
  id: string;
}

const ProductDetailsHeader: FC<ProductDetailsHeaderProps> = ({
  submitting,
  name,
  id
}) => {
  const [transition, setTransition] = useTransition();

  const router = useRouter();

  const handleGoBack = () => {
    setTransition(() => {
      router.back();
    });
  };

  return (
    <CardHeader>
      <div className="flex justify-between">
        <div>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{id}</CardDescription>
        </div>
        <div className="flex align-middle">
          {transition && <Loader />}
          <Button
            size="sm"
            variant={'outline'}
            type="button"
            onClick={handleGoBack}
            className="h-8 gap-1 me-2"
          >
            <StepBack className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Discard
            </span>
          </Button>
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
              <Save className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Update Product
              </span>
            </Button>
          )}
        </div>
      </div>
    </CardHeader>
  );
};

export default ProductDetailsHeader;
