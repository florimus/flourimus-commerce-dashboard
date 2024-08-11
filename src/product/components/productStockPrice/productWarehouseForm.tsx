import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { WarehouseType } from 'core/type';
import { FC } from 'react';
import { UseFormGetValues, UseFormRegister } from 'react-hook-form';
import { FormDataType } from './form';

interface ProductWarehouseFormProps {
  register: UseFormRegister<FormDataType>;
  getValues: UseFormGetValues<FormDataType>;
  count: number;
}

const ProductWarehouseForm: FC<ProductWarehouseFormProps> = ({
  register,
  getValues,
  count
}) => {
  return (
    <CardContent>
      <div className="grid grid-cols-3 gap-20">
        <div className="col-span-3 md:col-span-2 mt-5">
          {Array.from({ length: count }).map((_, index) => (
            <div className="grid grid-cols-3 gap-10 py-5">
              <div className="col-span-3 md:col-span-1">
                {getValues(`warehouses.${index}.name`)}
              </div>
              <div className="col-span-3 md:col-span-2">
                <Input
                  disabled={false}
                  {...register(
                    `warehouses.${index}.stockList.stocks.0.totalStocks`
                  )}
                  //   error={errors?.name?.message}
                  type="number"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  );
};

export default ProductWarehouseForm;
