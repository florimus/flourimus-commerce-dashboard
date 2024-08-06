import { UserLoginRequestInputType } from './form';

const errorcodes: {
  [key: string]: {
    field: keyof UserLoginRequestInputType;
    message: string;
  };
} = {
  'Invalid Password': {
    field: 'password',
    message: 'Invalid Password'
  },
  'No user founds': {
    field: 'email',
    message: 'User not exits in this email'
  }
} as const;

export default errorcodes;
