import { CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Options from '@/components/ui/options';
import TextArea from '@/components/ui/textarea';
import TextEditor from '@/components/ui/texteditor';
import Toggle from '@/components/ui/toggle';
import Image from 'next/image';
import { FC } from 'react';

interface ProductCreateProps {}

const ProductCreateForm: FC<ProductCreateProps> = () => {
  return (
    <CardContent>
      <div className="grid grid-cols-3 gap-20">
        <div className="col-span-3 md:col-span-2 mt-5">
          <div className="grid grid-cols-3 gap-10 py-5">
            <div className="col-span-3 md:col-span-1">Product name</div>
            <div className="col-span-3 md:col-span-2">
              <Input />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 py-5">
            <div className="col-span-3 md:col-span-1">Brand</div>
            <div className="col-span-3 md:col-span-2">
              <Options />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 py-5">
            <div className="col-span-3 md:col-span-1">Category</div>
            <div className="col-span-3 md:col-span-2">
              <Options />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 py-5">
            <div className="col-span-3 md:col-span-1">Summary</div>
            <div className="col-span-3 md:col-span-2">
              <TextArea />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 py-5">
            <div className="col-span-3 md:col-span-1">Description</div>
            <div className="col-span-3 md:col-span-2">
              <TextEditor />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 py-5">
            <div className="col-span-3 md:col-span-1">Make it as variant</div>
            <div className="col-span-3 md:col-span-2">
              <Toggle />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 py-5">
            <div className="col-span-3 md:col-span-1">Parent product</div>
            <div className="col-span-3 md:col-span-2">
              <Options />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 py-5">
            <div className="col-span-3 md:col-span-1">Make it sellable</div>
            <div className="col-span-3 md:col-span-2">
              <Toggle />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 py-5">
            <div className="col-span-3 md:col-span-1">COD availablity</div>
            <div className="col-span-3 md:col-span-2">
              <Toggle />
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

export default ProductCreateForm;
