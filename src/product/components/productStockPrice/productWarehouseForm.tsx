import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { FC } from 'react';
import { Control, UseFormGetValues, UseFormRegister } from 'react-hook-form';
import { FormDataType } from './form';
import Options from '@/components/ui/options';

interface ProductWarehouseFormProps {
  register: UseFormRegister<FormDataType>;
  getValues: UseFormGetValues<FormDataType>;
  count: number;
  addEmptyWarehouseItem: () => void;
  control: Control<FormDataType>;
}

const ProductWarehouseForm: FC<ProductWarehouseFormProps> = ({
  register,
  getValues,
  count,
  control,
  addEmptyWarehouseItem
}) => {
  return (
    <CardContent>
      <div className="grid grid-cols-3 gap-20">
        <div className="col-span-3 md:col-span-2 mt-5">
          {count > 0 && (
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
          )}
          {Array.from({ length: count }).map((_, index) => (
            <div className="grid grid-cols-6 gap-10 py-5">
              <div className="col-span-6 md:col-span-2">
                {getValues(`warehouses.${index}.name`) || (
                  <Options
                    name={`warehouses.${index}._id`}
                    control={control}
                    // error={errors?.brand?.message}
                    options={[
                      {
                        label: 'lab',
                        value: 'val'
                      },
                      {
                        label: 'lab1',
                        value: 'val2'
                      }
                    ]}
                  />
                )}
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
          <div className="grid grid-cols-6 gap-10 py-5">
            <div className="col-span-5 md:col-span-2">
              <Button type="button" onClick={addEmptyWarehouseItem}>
                Assign New Warehouse
              </Button>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  );
};

export default ProductWarehouseForm;
