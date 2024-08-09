import { isArrayNotEmpty } from '@/lib/utils';
import { ProductCreateInputForm } from '@/src/product/components/productCreate/form';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

export interface OptionsValuesTypes {
  [key: string]: string;
}

interface OptionsProps {
  control: Control<ProductCreateInputForm>;
  name: keyof ProductCreateInputForm;
  options: OptionsValuesTypes[];
}

const Options: FC<OptionsProps> = ({ control, name, options }) => {
  return (
    <div className="max-w">
      {control && (
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <select
              {...field}
              id={name}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            >
              {isArrayNotEmpty(options) &&
                options?.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
            </select>
          )}
        />
      )}
    </div>
  );
};

export default Options;
