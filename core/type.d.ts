export interface UserType {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: PhoneType;
  role: string;
  password?: string;
  loginType?: string;
  lastOnline?: string;
  createdAt?: string;
  updatedAt?: string;
  isActive?: Boolean;
  createdBy?: string;
  updatedBy?: string;
  metaStatus?: string;
  token?: string;
}
