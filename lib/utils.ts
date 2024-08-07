import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import moment from 'moment';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTime(dateString: string) {
  return moment(dateString, 'YYYY-MM-DD HH:mm:ss').format(
    'YYYY MMMM Do, h:mm A'
  );
}

export function populateSearchParams(
  searchParams: { [key: string]: string },
  param: string,
  value: string,
  options?: {
    resetPage?: boolean;
    resetSearch?: boolean;
  }
) {
  const searchParam = new URLSearchParams(searchParams);
  searchParam.set(param, value);
  if (options?.resetPage) {
    searchParam.delete('p');
  }
  if (options?.resetSearch) {
    searchParam.delete('q');
  }
  return searchParam.toString();
}
