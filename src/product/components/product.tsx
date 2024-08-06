import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { TableCell, TableRow } from '@/components/ui/table';
import { ProductType } from 'core/type';
import { getTime } from '@/lib/utils';

export function Product({ product }: { product: ProductType }) {
  return (
    <TableRow>
      <TableCell className=" sm:table-cell">
        <Image
          alt="Product image"
          className="aspect-square rounded-md object-cover cursor-pointer"
          height="48"
          src={product?.medias?.[0]}
          width="48"
        />
      </TableCell>
      <TableCell className="font-medium cursor-pointer" title={product?.name}>
        {product?.name?.substring(0, 45)}...
      </TableCell>
      <TableCell className="hidden md:table-cell">{product._id}</TableCell>
      <TableCell className="hidden md:table-cell">
        <Badge variant="secondary" className="capitalize">
          {product.brand || 'Not set'}
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <Badge variant="default" className="capitalize">
          {product.category ?? 'Not set'}
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <Badge variant="outline" className="capitalize">
          {product.isActive ? 'Active' : 'In Active'}
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {product.isSellable ? `₹ ${product?.price?.sellPrice}` : ''}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {product?.variants?.length}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {getTime(product?.createdAt)}
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>
              <form action={() => {}}>
                <button type="submit">Delete</button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
