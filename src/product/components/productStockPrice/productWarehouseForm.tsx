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
          <div className="grid grid-cols-6 gap-10 py-5">
            <div className="col-span-5 md:col-span-2 hidden md:block">
              Warehouse Name
            </div>
            <div className="col-span-5 md:col-span-2 hidden md:block">
              Total Stocks
            </div>
            <div className="col-span-5 md:col-span-2 hidden md:block">
              Safty Stocks
            </div>
          </div>
          {Array.from({ length: count }).map((_, index) => (
            <div className="grid grid-cols-6 gap-10 py-5">
              <div className="col-span-5 md:col-span-2">
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
              <div className="col-span-3 md:col-span-2">
                <Input
                  disabled={false}
                  {...register(
                    `warehouses.${index}.stockList.stocks.0.saftyStock`
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
