'use client';
import { isArrayNotEmpty } from '@/lib/utils';
import { WarehouseType } from 'core/type';
import { FC, FormEventHandler } from 'react';
import { useForm, UseFormGetValues, UseFormRegister } from 'react-hook-form';

interface ProductStockFormHandleProps {
  register: UseFormRegister<FormDataType>;
  getValues: UseFormGetValues<FormDataType>;
  count: number;
  submit: FormEventHandler<HTMLFormElement>;
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
  initial: Array<WarehouseType>
  // onSubmit: (
  //   formData: ProductUpdateInputForm
  // ) => Promise<ProductDetailsAPIResponseType>
) => ProductStockFormHandleProps = (initial) => {
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

  const submit = (formdata: FormDataType) => {
    console.log(formdata);
  };

  return {
    register,
    getValues,
    submit: handleSubmit(submit),
    count: isArrayNotEmpty(initial) ? initial.length : 0
  };
};

interface FormProps {
  // onSubmit: (
  //   formData: ProductUpdateInputForm
  // ) => Promise<ProductDetailsAPIResponseType>;
  children: (props: ProductStockFormHandleProps) => React.ReactNode;
  initial: Array<WarehouseType>;
}

const Form: FC<FormProps> = ({ children, initial }) => {
  const props = ProductStockForm(initial);
  return <form onSubmit={props.submit}>{children(props)}</form>;
};

export default Form;
