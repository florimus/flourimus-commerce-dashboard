import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const productCreateSchema = z
  .object({
    name: z.string().nonempty({ message: 'Name is mandatory' }),
    brand: z.string().nonempty({ message: 'Brand is mandatory' }),
    category: z.string().nonempty({ message: 'Category is mandatory' }),
    shortDescription: z.string().optional(),
    description: z.string(),
    isVariant: z.boolean(),
    parentId: z.string().optional(),
    isSellable: z.boolean(),
    isCodAvailable: z.boolean(),
    medias: z.array(z.string()).optional()
  })
  .refine(
    (data) =>
      !data.isVariant || (data.isVariant && data?.parentId!?.length > 0),
    {
      message: 'Parent ID is mandatory for variants',
      path: ['parentId']
    }
  )
  .refine(
    (data) => !data.isCodAvailable || (data.isSellable && data.isCodAvailable),
    {
      message: 'Only sellable product can be available for COD',
      path: ['isCodAvailable']
    }
  );

export default zodResolver(productCreateSchema);
