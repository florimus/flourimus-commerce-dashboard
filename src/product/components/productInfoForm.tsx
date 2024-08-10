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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { BadgeInfo } from 'lucide-react';

interface ProductInfoFormProps {
  register: UseFormRegister<ProductCreateInputForm>;
  errors: FieldErrors<ProductCreateInputForm>;
  disabled: boolean;
  submitting: boolean;
  control: Control<ProductCreateInputForm>;
  isVariant: boolean;
  isSellable: boolean;
}

const ProductInfoForm: FC<ProductInfoFormProps> = ({
  register,
  errors,
  disabled,
  isVariant,
  isSellable,
  submitting,
  control
}) => {
  return (
    <CardContent>
      <div className="grid grid-cols-3 gap-20">
        <div className="col-span-3 md:col-span-2 mt-5">
          <div className="grid grid-cols-3 gap-10 py-5">
            <div className="col-span-3 md:col-span-1">Product name</div>
            <div className="col-span-3 md:col-span-2">
              <Input
                disabled={disabled}
                {...register('name')}
                error={errors?.name?.message}
                type="text"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 py-5">
            <div className="col-span-3 md:col-span-1">Brand</div>
            <div className="col-span-3 md:col-span-2">
              <Options
                name="brand"
                control={control}
                error={errors?.brand?.message}
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
                error={errors?.category?.message}
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
              <TextArea
                error={errors?.shortDescription?.message}
                {...register('shortDescription')}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 py-5">
            <div className="col-span-3 md:col-span-1">Description</div>
            <div className="col-span-3 md:col-span-2">
              <TextEditor
                error={errors?.description?.message}
                {...register('description')}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 py-5">
            <div className="col-span-3 md:col-span-1">Make it as variant</div>
            <div className="col-span-3 md:col-span-2">
              <Toggle {...register('isVariant')} />
            </div>
          </div>

          {isVariant && (
            <div className="grid grid-cols-3 gap-10 py-5">
              <div className="col-span-3 md:col-span-1">Parent product</div>
              <div className="col-span-3 md:col-span-2">
                <Options
                  name="parentId"
                  control={control}
                  error={errors?.parentId?.message}
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
          )}

          <div className="grid grid-cols-3 gap-10 py-5">
            <div className="col-span-3 md:col-span-1">Make it sellable</div>
            <div className="col-span-3 md:col-span-2">
              <Toggle {...register('isSellable')} />
            </div>
          </div>

          {isSellable && (
            <div className="grid grid-cols-3 gap-10 py-5">
              <div className="col-span-3 md:col-span-1 flex align-middle">
                <p className="me-2">COD availablity</p>
                <Tooltip>
                  <TooltipTrigger>
                    <BadgeInfo className="mb-1" size={18} />
                  </TooltipTrigger>
                  <TooltipContent>
                    If enabled, customer can <br />
                    purchase this product through
                    <b> Cash On Delivery</b>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="col-span-3 md:col-span-2">
                <Toggle {...register('isCodAvailable')} />
              </div>
            </div>
          )}
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
