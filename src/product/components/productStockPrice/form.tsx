'use client';
import { isArrayEmpty, isArrayNotEmpty } from '@/lib/utils';
import {
  ProductStatusChangeResponseType,
  ProductStockUpdateResponseType,
  WarehouseType
} from 'core/type';
import { FC, FormEventHandler, useCallback, useState } from 'react';
import {
  Control,
  FieldErrors,
  useFieldArray,
  useForm,
  UseFormGetValues,
  UseFormRegister
} from 'react-hook-form';
import { ProductStockUpdateRequestTypes } from '../../view/productStockPrice';
import { OptionsValuesTypes } from '@/components/ui/options';
import { z } from 'zod';
import Schema, { productStockUpdateSchema } from './schema';

interface ProductStockFormHandleProps {
  register: UseFormRegister<FormDataType>;
  getValues: UseFormGetValues<FormDataType>;
  count: number;
  submit: FormEventHandler<HTMLFormElement>;
  submitting: boolean;
  addEmptyWarehouseItem: () => void;
  control: Control<FormDataType>;
  warehouseOptions: OptionsValuesTypes[];
  errors: FieldErrors<FormDataType>;
  changeProductStatus: () => Promise<void>;
  isActive: boolean;
}

export type FormDataType = z.infer<typeof productStockUpdateSchema>;

const ProductStockForm: (
  initial: Array<WarehouseType>,
  onSubmit: (
    formData: ProductStockUpdateRequestTypes[]
  ) => Promise<ProductStockUpdateResponseType>,
  productId: string,
  fetchWarehouses: () => Promise<any>,
  updateProductStatus: () => Promise<ProductStatusChangeResponseType>,
  productStatus: boolean
) => ProductStockFormHandleProps = (
  initial,
  onSubmit,
  productId,
  fetchWarehouses,
  updateProductStatus,
  productStatus
) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    getValues
  } = useForm<FormDataType>({
    defaultValues: { warehouses: initial },
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: Schema
  });

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [warehouseOptions, setWarehouseOptions] = useState<
    OptionsValuesTypes[]
  >([]);
  const [isActive, setActive] = useState<boolean>(productStatus);

  const { append } = useFieldArray({
    control,
    name: 'warehouses'
  });

  const addEmptyWarehouseItem = async () => {
    append({
      _id: '',
      name: '',
      stockList: {
        stocks: [
          {
            allocatedStocks: 0,
            productId: productId,
            saftyStock: 0,
            totalStocks: 0
          }
        ]
      }
    });
    const options = await fetchWarehouses();
    setWarehouseOptions(options);
  };

  const changeProductStatus = useCallback(async () => {
    setActive((prev) => !prev);
    const response = await updateProductStatus();
    if (response) {
      setActive(response.status);
    }
  }, [updateProductStatus]);

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
    errors,
    count: isArrayNotEmpty(getValues('warehouses'))
      ? getValues('warehouses').length
      : 0,
    addEmptyWarehouseItem,
    warehouseOptions,
    changeProductStatus,
    isActive
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
  updateProductStatus: () => Promise<ProductStatusChangeResponseType>;
  productStatus: boolean;
}

const Form: FC<FormProps> = ({
  children,
  initial,
  productId,
  onSubmit,
  fetchWarehouses,
  updateProductStatus,
  productStatus
}) => {
  const props = ProductStockForm(
    initial,
    onSubmit,
    productId,
    fetchWarehouses,
    updateProductStatus,
    productStatus
  );
  return <form onSubmit={props.submit}>{children(props)}</form>;
};

export default Form;
