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

export interface APIErrorResponseType {
  error?: string;
}

export interface TokenResponseType extends APIErrorResponseType {
  access: string;
  refresh: string;
}

export interface PageInfoType {
  currentMatchs: number;
  isEnd: boolean;
  isStart: boolean;
  totalMatches: number;
  totalPages: number;
}

export interface ProductVariantsType extends ProductType {
  _id: string;
}

export interface ProductPriceType {
  sellPrice: number;
}

export interface ProductType {
  _id: string;
  name: string;
  medias: string[];
  category?: string;
  brand?: string;
  haveVariants: boolean;
  isVariant: boolean;
  isSellable: boolean;
  variantInfo: string[];
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  variants?: Array<Partial<ProductVariantsType>>;
  price?: Partial<ProductPriceType>;
  availableStocks: number;
  shortDescription?: string;
  description?: string;
  parentId?: string;
  isCodAvailable?: boolean;
  createdAt?: string;
  createdBy?: string;
  updatedBy?: string;
  metaStatus?: string;
}

export interface ProductResponseAPIType
  extends ProductType,
    APIErrorResponseType {}

export interface ProductDetailsAPIResponseType extends APIErrorResponseType {
  product: ProductType;
}

export interface ProductListType extends APIErrorResponseType {
  products: ProductType[];
  pageInfo: Partial<PageInfoType>;
}
