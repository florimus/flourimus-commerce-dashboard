'use client';

import { useTransition } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Spinner } from '@/components/icons';
import { Search } from 'lucide-react';
import { useDebouncedCallback } from 'use-debounce';

export function SearchInput() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const searchParams = useSearchParams();
  const pathName = usePathname();

  const handleSearch = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const searchParam = new URLSearchParams(searchParams);
      searchParam.set('q', event?.target?.value);
      searchParam.delete('p');
      startTransition(() => {
        router.replace(`${pathName}/?${searchParam.toString()}`);
      });
    },
    300
  );

  return (
    <div className="relative ml-auto flex-1 md:grow-0">
      <Search className="absolute left-2.5 top-[.75rem] h-4 w-4 text-muted-foreground" />
      <Input
        name="q"
        type="search"
        defaultValue={searchParams.get('q') || ''}
        placeholder="Search..."
        onChange={handleSearch}
        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
      />
      {isPending && <Spinner />}
    </div>
  );
}
