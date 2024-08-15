import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const ProductStockSchema = z.object({
  productId: z.string().nonempty('Product ID is required'),
  totalStocks: z.preprocess(
    (val) => Number(val), // Convert string to number
    z
      .number()
      .nonnegative('Total Stocks cannot be negative')
      .min(1, 'Total Stocks are required')
  ),
  saftyStock: z.preprocess(
    (val) => Number(val), // Convert string to number
    z
      .number()
      .nonnegative('Safety Stock cannot be negative')
      .min(1, 'Safety Stock is required')
  ),
  allocatedStocks: z.number().nullable()
});

const WarehouseSchema = z.object({
  _id: z.string().nonempty('Warehouse ID is required'),
  name: z.string().nullable(),
  stockList: z
    .object({
      stocks: z.array(ProductStockSchema)
    })
    .optional()
});

export const productStockUpdateSchema = z.object({
  warehouses: z.array(WarehouseSchema)
});

export default zodResolver(productStockUpdateSchema);
