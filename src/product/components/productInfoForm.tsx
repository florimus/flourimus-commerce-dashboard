'use client';

import { CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Options from '@/components/ui/options';
import { Control, FieldErrors, UseFormRegister } from 'react-hook-form';
import { ProductCreateInputForm } from './productCreate/form';
import TextArea from '@/components/ui/textarea';
import TextEditor from '@/components/ui/texteditor';
import Toggle from '@/components/ui/toggle';
import Image from 'next/image';
import { FC } from 'react';

interface ProductInfoFormProps {
  register: UseFormRegister<ProductCreateInputForm>;
  errors: FieldErrors<ProductCreateInputForm>;
  disabled: boolean;
  isValid: boolean;
  submitting: boolean;
  control: Control<ProductCreateInputForm>;
}

const ProductInfoForm: FC<ProductInfoFormProps> = ({
  register,
  errors,
  disabled,
  isValid,
  submitting,
  control
}) => {
  console.log(errors);

  return (
    <CardContent>
      <div className="grid grid-cols-3 gap-20">
        <div className="col-span-3 md:col-span-2 mt-5">
          <div className="grid grid-cols-3 gap-10 py-5">
            <div className="col-span-3 md:col-span-1">Product name</div>
            <div className="col-span-3 md:col-span-2">
              <Input disabled={disabled} {...register('name')} type="text" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 py-5">
            <div className="col-span-3 md:col-span-1">Brand</div>
            <div className="col-span-3 md:col-span-2">
              <Options
                name="brand"
                control={control}
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
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 py-5">
            <div className="col-span-3 md:col-span-1">Category</div>
            <div className="col-span-3 md:col-span-2">
              <Options
                name="category"
                control={control}
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
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 py-5">
            <div className="col-span-3 md:col-span-1">Summary</div>
            <div className="col-span-3 md:col-span-2">
              <TextArea {...register('shortDescription')} />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 py-5">
            <div className="col-span-3 md:col-span-1">Description</div>
            <div className="col-span-3 md:col-span-2">
              <TextEditor {...register('description')} />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 py-5">
            <div className="col-span-3 md:col-span-1">Make it as variant</div>
            <div className="col-span-3 md:col-span-2">
              <Toggle {...register('isVariant')} />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 py-5">
            <div className="col-span-3 md:col-span-1">Parent product</div>
            <div className="col-span-3 md:col-span-2">
              <Options
                name="parentId"
                control={control}
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
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 py-5">
            <div className="col-span-3 md:col-span-1">Make it sellable</div>
            <div className="col-span-3 md:col-span-2">
              <Toggle {...register('isSellable')} />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 py-5">
            <div className="col-span-3 md:col-span-1">COD availablity</div>
            <div className="col-span-3 md:col-span-2">
              <Toggle {...register('isCodAvailable')} />
            </div>
          </div>
        </div>
        <div className="col-span-3 md:col-span-1 mt-5">
          <div className="flex flex-wrap justify-end">
            <Image
              alt="Product image"
              className="aspect-square rounded-md object-cover cursor-pointer p-10 border ms-3 mb-3"
              height="150"
              src={'/upload-image.png'}
              width="150"
            />
          </div>
        </div>
      </div>
    </CardContent>
  );
};

export default ProductInfoForm;
