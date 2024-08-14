'use client';
import { isArrayEmpty, isArrayNotEmpty } from '@/lib/utils';
import { ProductStockUpdateResponseType, WarehouseType } from 'core/type';
import { FC, FormEventHandler, useState } from 'react';
import { useForm, UseFormGetValues, UseFormRegister } from 'react-hook-form';
import { ProductStockUpdateRequestTypes } from '../../view/productStockPrice';

interface ProductStockFormHandleProps {
  register: UseFormRegister<FormDataType>;
  getValues: UseFormGetValues<FormDataType>;
  count: number;
  submit: FormEventHandler<HTMLFormElement>;
  submitting: boolean;

  //   register: UseFormRegister<ProductUpdateInputForm>;
  //   errors: FieldErrors<ProductUpdateInputForm>;
  //   submit: FormEventHandler<HTMLFormElement>;
  //   disabled: boolean;
  //   isDirty: boolean;
  //   isValid: boolean;
  //   control: Control<ProductUpdateInputForm>;
  //   submitting: boolean;
  //   isVariant: boolean;
  //   isSellable: boolean;
  //   upload: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  //   imageLoading: boolean;
  //   medias: string[];
  // //   removeImage: (index: number) => void;
}

export interface FormDataType {
  warehouses: Array<WarehouseType>;
}

const ProductStockForm: (
  initial: Array<WarehouseType>,
  onSubmit: (
    formData: ProductStockUpdateRequestTypes[]
  ) => Promise<ProductStockUpdateResponseType>
) => ProductStockFormHandleProps = (initial, onSubmit) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isLoading, isValid, isDirty },
    watch,
    getValues,
    setValue
  } = useForm<FormDataType>({
    defaultValues: { warehouses: initial },
    mode: 'onTouched',
    reValidateMode: 'onChange'
    // resolver: Schema
  });

  const [submitting, setSubmitting] = useState<boolean>(false);

  const submit = async (formdata: FormDataType) => {
    const { warehouses } = formdata || {};
    if (isArrayEmpty(warehouses)) {
      return;
    }
    const warehouseUpdateData = warehouses.map((warehouse) => ({
      warehouseId: warehouse?._id,
      productId: warehouse?.stockList?.stocks?.[0]?.productId,
      totalStocks: warehouse?.stockList?.stocks?.[0]?.totalStocks,
      saftyStock: warehouse?.stockList?.stocks?.[0]?.saftyStock
    }));
    setSubmitting(true);
    const response = await onSubmit(warehouseUpdateData);
    if (response?.error) {
      // TODO: Error message
    }
    setSubmitting(false);
  };

  return {
    register,
    getValues,
    submit: handleSubmit(submit),
    submitting,
    count: isArrayNotEmpty(initial) ? initial.length : 0
  };
};

interface FormProps {
  onSubmit: (
    formData: ProductStockUpdateRequestTypes[]
  ) => Promise<ProductStockUpdateResponseType>;
  children: (props: ProductStockFormHandleProps) => React.ReactNode;
  initial: Array<WarehouseType>;
}

const Form: FC<FormProps> = ({ children, initial, onSubmit }) => {
  const props = ProductStockForm(initial, onSubmit);
  return <form onSubmit={props.submit}>{children(props)}</form>;
};

export default Form;
