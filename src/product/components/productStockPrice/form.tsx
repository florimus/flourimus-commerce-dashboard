'use client';
import { isArrayEmpty, isArrayNotEmpty } from '@/lib/utils';
import { ProductStockUpdateResponseType, WarehouseType } from 'core/type';
import { FC, FormEventHandler, useState } from 'react';
import {
  Control,
  useFieldArray,
  useForm,
  UseFormGetValues,
  UseFormRegister
} from 'react-hook-form';
import { ProductStockUpdateRequestTypes } from '../../view/productStockPrice';
import { OptionsValuesTypes } from '@/components/ui/options';

interface ProductStockFormHandleProps {
  register: UseFormRegister<FormDataType>;
  getValues: UseFormGetValues<FormDataType>;
  count: number;
  submit: FormEventHandler<HTMLFormElement>;
  submitting: boolean;
  addEmptyWarehouseItem: () => void;
  control: Control<FormDataType>;
  warehouseOptions: OptionsValuesTypes[]

  //   register: UseFormRegister<ProductUpdateInputForm>;
  //   errors: FieldErrors<ProductUpdateInputForm>;
  //   submit: FormEventHandler<HTMLFormElement>;
  //   disabled: boolean;
  //   isDirty: boolean;
  //   isValid: boolean;
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
  ) => Promise<ProductStockUpdateResponseType>,
  productId: string,
  fetchWarehouses: () => Promise<any>
) => ProductStockFormHandleProps = (
  initial,
  onSubmit,
  productId,
  fetchWarehouses
) => {
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
  const [warehouseOptions, setWarehouseOptions] = useState<
    OptionsValuesTypes[]
  >([]);

  const { append } = useFieldArray({
    control,
    name: 'warehouses'
  });

  const addEmptyWarehouseItem = async () => {
    append({
      _id: '',
      name: '',
      country: '',
      createdAt: '',
      updatedAt: '',
      stockList: {
        stocks: [
          {
            allocatedStocks: 0,
            productId: productId,
            saftyStock: 0,
            totalStocks: 0
          }
        ]
      },
      isActive: false,
      createdBy: '',
      updatedBy: ''
    });
    const options = await fetchWarehouses();
    setWarehouseOptions(options);
  };

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
    control,
    count: isArrayNotEmpty(getValues('warehouses'))
      ? getValues('warehouses').length
      : 0,
    addEmptyWarehouseItem,
    warehouseOptions
  };
};

interface FormProps {
  onSubmit: (
    formData: ProductStockUpdateRequestTypes[]
  ) => Promise<ProductStockUpdateResponseType>;
  children: (props: ProductStockFormHandleProps) => React.ReactNode;
  initial: Array<WarehouseType>;
  productId: string;
  fetchWarehouses: () => Promise<any>;
}

const Form: FC<FormProps> = ({
  children,
  initial,
  productId,
  onSubmit,
  fetchWarehouses
}) => {
  const props = ProductStockForm(initial, onSubmit, productId, fetchWarehouses);
  return <form onSubmit={props.submit}>{children(props)}</form>;
};

export default Form;
