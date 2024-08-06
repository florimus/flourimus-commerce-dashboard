import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: 'Email is invalid' })
    .nonempty({ message: 'Email is mandatory' }),
  password: z
    .string()
    .min(4, { message: 'Password must be at least 4 characters long' })
    .max(20, { message: 'Password must be at most 20 characters long' })
    .nonempty({ message: 'Password is Mandatory' })
});

export default zodResolver(loginSchema);
