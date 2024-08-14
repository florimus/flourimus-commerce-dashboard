import { isArrayNotEmpty } from '@/lib/utils';
import { ProductCreateInputForm } from '@/src/product/components/productCreate/form';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

export interface OptionsValuesTypes {
  [key: string]: string;
}

interface OptionsProps {
  control: Control<any>;
  name: string;
  options: OptionsValuesTypes[];
  error?: string;
  disabled?: boolean;
}

const Options: FC<OptionsProps> = ({
  control,
  name,
  options,
  error,
  disabled
}) => {
  return (
    <div className="max-w">
      {control && (
        <Controller
          name={name}
          disabled={disabled}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <>
              <select
                {...field}
                id={name}
                disabled={disabled}
                value={`${field.value}` || ''}
                className={`bg-gray-50 border${error ? ' border-red-500' : ' border-gray-300'} text-gray-900 text-sm rounded-lg block w-full p-2.5`}
              >
                <option value="">Select</option>
                {isArrayNotEmpty(options) &&
                  options?.map((option) => (
                    <option key={option.label} value={option.value}>
                      {option.label}
                    </option>
                  ))}
              </select>
              {error && <p className="text-red-500">{error}</p>}
            </>
          )}
        />
      )}
    </div>
  );
};

export default Options;
