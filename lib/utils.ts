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
