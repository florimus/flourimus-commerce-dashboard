'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { File, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductsTable } from '../components/productTable';

const { products, newOffset, totalProducts } = {
  products: [
    {
      id: 1,
      imageUrl:
        'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/smartphone-gaPvyZW6aww0IhD3dOpaU6gBGILtcJ.webp',
      name: 'Smartphone X Pro',
      status: 'active',
      price: '999.00',
      stock: 150,
      availableAt: new Date()
    },
    {
      id: 2,
      imageUrl:
        'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/earbuds-3rew4JGdIK81KNlR8Edr8NBBhFTOtX.webp',
      name: 'Wireless Earbuds Ultra',
      status: 'active',
      price: '199.00',
      stock: 300,
      availableAt: new Date()
    },
    {
      id: 3,
      imageUrl:
        'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/home-iTeNnmKSMnrykOS9IYyJvnLFgap7Vw.webp',
      name: 'Smart Home Hub',
      status: 'active',
      price: '149.00',
      stock: 200,
      availableAt: new Date()
    },
    {
      id: 4,
      imageUrl:
        'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/tv-H4l26crxtm9EQHLWc0ddrsXZ0V0Ofw.webp',
      name: '4K Ultra HD Smart TV',
      status: 'active',
      price: '799.00',
      stock: 50,
      availableAt: new Date()
    },
    {
      id: 5,
      imageUrl:
        'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/laptop-9bgUhjY491hkxiMDeSgqb9R5I3lHNL.webp',
      name: 'Gaming Laptop Pro',
      status: 'active',
      price: '1299.00',
      stock: 75,
      availableAt: new Date()
    },
    {
      id: 6,
      imageUrl:
        'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/headset-lYnRnpjDbZkB78lS7nnqEJFYFAUDg6.webp',
      name: 'VR Headset Plus',
      status: 'active',
      price: '349.00',
      stock: 120,
      availableAt: new Date()
    },
    {
      id: 7,
      imageUrl:
        'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/watch-S2VeARK6sEM9QFg4yNQNjHFaHc3sXv.webp',
      name: 'Smartwatch Elite',
      status: 'active',
      price: '249.00',
      stock: 250,
      availableAt: new Date()
    },
    {
      id: 8,
      imageUrl:
        'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/speaker-4Zk0Ctx5AvxnwNNTFWVK4Gtpru4YEf.webp',
      name: 'Bluetooth Speaker Max',
      status: 'active',
      price: '99.00',
      stock: 400,
      availableAt: new Date()
    },
    {
      id: 9,
      imageUrl:
        'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/charger-GzRr0NSkCj0ZYWkTMvxXGZQu47w9r5.webp',
      name: 'Portable Charger Super',
      status: 'active',
      price: '59.00',
      stock: 500,
      availableAt: new Date()
    }
  ],
  newOffset: 1 * 10,
  totalProducts: 120
};

const ProductList = () => {
  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
          <TabsTrigger value="archived" className="hidden sm:flex">
            Archived
          </TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Export
            </span>
          </Button>
          <Button size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Product
            </span>
          </Button>
        </div>
      </div>
      <TabsContent value="all">
        <ProductsTable
          products={products}
          offset={newOffset ?? 0}
          totalProducts={totalProducts}
        />
      </TabsContent>
    </Tabs>
  );
};

export default ProductList;
