/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: unknown; output: unknown; }
};

export type AddToCartInput = {
  lineIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Address = {
  __typename?: 'Address';
  _id?: Maybe<Scalars['ID']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  landmark?: Maybe<Scalars['String']['output']>;
  pin?: Maybe<Scalars['Int']['output']>;
  point?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AddressInput = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  landmark?: InputMaybe<Scalars['String']['input']>;
  pin: Scalars['Int']['input'];
  point: Scalars['String']['input'];
  state: Scalars['String']['input'];
  street: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type Cart = {
  __typename?: 'Cart';
  _id?: Maybe<Scalars['ID']['output']>;
  billingAddress?: Maybe<CheckoutAddress>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  customerInfo?: Maybe<User>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isAnonymous?: Maybe<Scalars['Boolean']['output']>;
  lines?: Maybe<Array<Maybe<LineItem>>>;
  metaStatus?: Maybe<Scalars['String']['output']>;
  price?: Maybe<CartPrice>;
  shippingAddress?: Maybe<CheckoutAddress>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type CartPrice = {
  __typename?: 'CartPrice';
  discounts?: Maybe<Scalars['Int']['output']>;
  gross?: Maybe<Scalars['Int']['output']>;
  net?: Maybe<Scalars['Int']['output']>;
  shipping?: Maybe<Scalars['Int']['output']>;
  tax?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type CheckoutAddress = {
  __typename?: 'CheckoutAddress';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  landmark?: Maybe<Scalars['String']['output']>;
  pin?: Maybe<Scalars['Int']['output']>;
  point?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
};

export type ForgotPassword = {
  __typename?: 'ForgotPassword';
  email?: Maybe<Scalars['String']['output']>;
  send?: Maybe<Scalars['Boolean']['output']>;
};

export type InitiatePaymentResponse = {
  __typename?: 'InitiatePaymentResponse';
  approve?: Maybe<Scalars['Boolean']['output']>;
  link?: Maybe<Scalars['String']['output']>;
};

export type InviteStaffInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  role: Scalars['String']['input'];
};

export type LineItem = {
  __typename?: 'LineItem';
  adjustments?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Product>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

export type Message = {
  __typename?: 'Message';
  content?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addcartAddresses?: Maybe<Cart>;
  addressCreation?: Maybe<Address>;
  addressSetDefault?: Maybe<Address>;
  addressUpdate?: Maybe<Address>;
  cartCreate?: Maybe<Cart>;
  cartItemAdd?: Maybe<Cart>;
  cartItemRemove?: Maybe<Cart>;
  forgotPassword?: Maybe<ForgotPassword>;
  initiatePayment?: Maybe<InitiatePaymentResponse>;
  inviteStaff?: Maybe<User>;
  onboardStaff?: Maybe<User>;
  productBulkUpload?: Maybe<Scalars['Boolean']['output']>;
  productCreate?: Maybe<Product>;
  productPriceEntry?: Maybe<ProductPrice>;
  productStatusChange?: Maybe<ProductStatusChangeResponse>;
  productStockEntry?: Maybe<ProductStocks>;
  productUpdate?: Maybe<Product>;
  resetPassword?: Maybe<ResetPassword>;
  shippingMethodCreate?: Maybe<ShippingMethods>;
  shippingMethodUpdate?: Maybe<ShippingMethods>;
  submitCodOrder?: Maybe<Order>;
  submitOrder?: Maybe<Order>;
  warehouseCreate?: Maybe<Warehouse>;
  warehouseStatusChange?: Maybe<WarehouseStatusChangeResponse>;
};


export type MutationAddcartAddressesArgs = {
  billing?: InputMaybe<AddressInput>;
  isSameAsBilling?: InputMaybe<Scalars['Boolean']['input']>;
  shipping?: InputMaybe<AddressInput>;
};


export type MutationAddressCreationArgs = {
  createAddressInput: AddressInput;
};


export type MutationAddressSetDefaultArgs = {
  _id: Scalars['ID']['input'];
};


export type MutationAddressUpdateArgs = {
  _id: Scalars['ID']['input'];
  updateAdressInput: AddressInput;
};


export type MutationCartItemAddArgs = {
  addToCartInput: AddToCartInput;
};


export type MutationCartItemRemoveArgs = {
  productId: Array<InputMaybe<Scalars['String']['input']>>;
};


export type MutationForgotPasswordArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
};


export type MutationInitiatePaymentArgs = {
  method: Scalars['String']['input'];
};


export type MutationInviteStaffArgs = {
  inviteStaffInput?: InputMaybe<InviteStaffInput>;
};


export type MutationOnboardStaffArgs = {
  onboardStaffInput?: InputMaybe<OnboardStaffInput>;
};


export type MutationProductBulkUploadArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationProductCreateArgs = {
  productCreateInput?: InputMaybe<ProductCreateInput>;
};


export type MutationProductPriceEntryArgs = {
  productPriceEntryInput: ProductPriceEntryInput;
};


export type MutationProductStatusChangeArgs = {
  _id: Scalars['ID']['input'];
};


export type MutationProductStockEntryArgs = {
  productStockEntryInput: ProductStockEntryInput;
};


export type MutationProductUpdateArgs = {
  _id: Scalars['ID']['input'];
  productUpdateInput?: InputMaybe<ProductUpdateInput>;
};


export type MutationResetPasswordArgs = {
  resetPasswordInput?: InputMaybe<ResetPasswordInput>;
};


export type MutationShippingMethodCreateArgs = {
  shippingMethodCreateInput: ShippingMethodCreateInput;
};


export type MutationShippingMethodUpdateArgs = {
  _id?: InputMaybe<Scalars['String']['input']>;
  shippingMethodUpdateInput: ShippingMethodUpdateInput;
};


export type MutationSubmitOrderArgs = {
  sessionId: Scalars['String']['input'];
};


export type MutationWarehouseCreateArgs = {
  warehouseCreateInput: WarehouseCreateInput;
};


export type MutationWarehouseStatusChangeArgs = {
  _id: Scalars['ID']['input'];
};

export type OnboardStaffInput = {
  _id: Scalars['ID']['input'];
  firstName: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  loginType: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

export type Order = {
  __typename?: 'Order';
  billingAddress?: Maybe<CheckoutAddress>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  customerInfo?: Maybe<User>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isAnonymous?: Maybe<Scalars['Boolean']['output']>;
  lines?: Maybe<Array<Maybe<LineItem>>>;
  metaStatus?: Maybe<Scalars['String']['output']>;
  orderDetails?: Maybe<OrderDetails>;
  orderId?: Maybe<Scalars['ID']['output']>;
  ordrPrice?: Maybe<CartPrice>;
  price?: Maybe<CartPrice>;
  shippingAddress?: Maybe<CheckoutAddress>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type OrderDetails = {
  __typename?: 'OrderDetails';
  cardName?: Maybe<Scalars['String']['output']>;
  lastDigits?: Maybe<Scalars['String']['output']>;
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

export type OrderList = {
  __typename?: 'OrderList';
  orders?: Maybe<Array<Maybe<Order>>>;
  pageInfo?: Maybe<OrderPageInfo>;
};

export type OrderListInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type OrderPageInfo = {
  __typename?: 'OrderPageInfo';
  currentMatchs?: Maybe<Scalars['Int']['output']>;
  isEnd?: Maybe<Scalars['Boolean']['output']>;
  isStart?: Maybe<Scalars['Boolean']['output']>;
  totalMatches?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type Phone = {
  __typename?: 'Phone';
  dialCode: Scalars['String']['output'];
  number: Scalars['String']['output'];
};

export type PriceTable = {
  __typename?: 'PriceTable';
  _id?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  metaStatus?: Maybe<Scalars['String']['output']>;
  prices?: Maybe<Array<Maybe<ProductPrice>>>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type Product = {
  __typename?: 'Product';
  _id?: Maybe<Scalars['ID']['output']>;
  availableStocks?: Maybe<Scalars['Int']['output']>;
  brand?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  haveVariants?: Maybe<Scalars['Boolean']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isCodAvailable?: Maybe<Scalars['Boolean']['output']>;
  isSellable?: Maybe<Scalars['Boolean']['output']>;
  isVariant?: Maybe<Scalars['Boolean']['output']>;
  medias?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  metaStatus?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parentId?: Maybe<Scalars['String']['output']>;
  price?: Maybe<ProductPrice>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
  variantInfo?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  variants?: Maybe<Array<Maybe<Product>>>;
};

export type ProductBulkUploadInfo = {
  __typename?: 'ProductBulkUploadInfo';
  Estimate?: Maybe<Scalars['String']['output']>;
  completedDocuments?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  progress?: Maybe<Scalars['Int']['output']>;
  startTime?: Maybe<Scalars['String']['output']>;
  totalDocuments?: Maybe<Scalars['Int']['output']>;
};

export type ProductCreateInput = {
  brand?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isCodAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  isSellable?: InputMaybe<Scalars['Boolean']['input']>;
  isVariant?: InputMaybe<Scalars['Boolean']['input']>;
  medias?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['String']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
};

export type ProductList = {
  __typename?: 'ProductList';
  pageInfo?: Maybe<ProductPageInfo>;
  products?: Maybe<Array<Maybe<Product>>>;
};

export type ProductListInput = {
  active?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type ProductPageInfo = {
  __typename?: 'ProductPageInfo';
  currentMatchs?: Maybe<Scalars['Int']['output']>;
  isEnd?: Maybe<Scalars['Boolean']['output']>;
  isStart?: Maybe<Scalars['Boolean']['output']>;
  totalMatches?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ProductPrice = {
  __typename?: 'ProductPrice';
  listPrice?: Maybe<Scalars['Float']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  sellPrice?: Maybe<Scalars['Float']['output']>;
  taxPrice?: Maybe<Scalars['Float']['output']>;
};

export type ProductPriceEntryInput = {
  listPrice?: InputMaybe<Scalars['Float']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  sellPrice?: InputMaybe<Scalars['Float']['input']>;
  taxId?: InputMaybe<Scalars['String']['input']>;
};

export type ProductStatusChangeResponse = {
  __typename?: 'ProductStatusChangeResponse';
  status?: Maybe<Scalars['Boolean']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ProductStockEntryInput = {
  productId?: InputMaybe<Scalars['String']['input']>;
  saftyStock?: InputMaybe<Scalars['Int']['input']>;
  totalStocks?: InputMaybe<Scalars['Int']['input']>;
  warehouseId?: InputMaybe<Scalars['String']['input']>;
};

export type ProductStocks = {
  __typename?: 'ProductStocks';
  allocatedStocks?: Maybe<Scalars['Int']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  saftyStock?: Maybe<Scalars['Int']['output']>;
  totalStocks?: Maybe<Scalars['Int']['output']>;
};

export type ProductUpdateInput = {
  brand?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isCodAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  isSellable?: InputMaybe<Scalars['Boolean']['input']>;
  medias?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  address?: Maybe<Address>;
  cart?: Maybe<Cart>;
  me?: Maybe<User>;
  order?: Maybe<Order>;
  orders?: Maybe<OrderList>;
  product?: Maybe<Product>;
  productList?: Maybe<ProductList>;
  refresh?: Maybe<Token>;
  shippingMethod?: Maybe<ShippingMethods>;
  shippingMethods?: Maybe<ShippingsList>;
  token?: Maybe<Token>;
  user?: Maybe<User>;
  verifyInvitation?: Maybe<User>;
  warehouse?: Maybe<Warehouse>;
  warehouseList?: Maybe<WarehouseList>;
};


export type QueryAddressArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryCartArgs = {
  _id: Scalars['String']['input'];
};


export type QueryOrderArgs = {
  orderId: Scalars['String']['input'];
};


export type QueryOrdersArgs = {
  orderListInput: OrderListInput;
};


export type QueryProductArgs = {
  _id: Scalars['String']['input'];
};


export type QueryProductListArgs = {
  productListInput?: InputMaybe<ProductListInput>;
};


export type QueryRefreshArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};


export type QueryShippingMethodArgs = {
  _id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryShippingMethodsArgs = {
  shippingsListInput?: InputMaybe<ShippingsListInput>;
};


export type QueryTokenArgs = {
  tokenRequestInput?: InputMaybe<TokenRequestInput>;
};


export type QueryUserArgs = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
};


export type QueryVerifyInvitationArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};


export type QueryWarehouseArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryWarehouseListArgs = {
  warehouseListInput?: InputMaybe<WarehouseListInput>;
};

export type ResetPassword = {
  __typename?: 'ResetPassword';
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ResetPasswordInput = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type ShippingMethodCreateInput = {
  allCountry?: InputMaybe<Scalars['Boolean']['input']>;
  allStates?: InputMaybe<Scalars['Boolean']['input']>;
  country?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  enabledPriceLimits?: InputMaybe<Scalars['Boolean']['input']>;
  enabledQuantityLimits?: InputMaybe<Scalars['Boolean']['input']>;
  enabledWeightLimits?: InputMaybe<Scalars['Boolean']['input']>;
  listPrice?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  priceConfig?: InputMaybe<ShippingMethodPriceLimitsInput>;
  quantityConfig?: InputMaybe<ShippingMethodQuantityLimitsInput>;
  sellPrice?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  weightConfig?: InputMaybe<ShippingMethodWeightLimitsInput>;
};

export type ShippingMethodPriceLimits = {
  __typename?: 'ShippingMethodPriceLimits';
  maxPrice?: Maybe<Scalars['Int']['output']>;
  minPrice?: Maybe<Scalars['Int']['output']>;
};

export type ShippingMethodPriceLimitsInput = {
  maxPrice?: InputMaybe<Scalars['Int']['input']>;
  minPrice?: InputMaybe<Scalars['Int']['input']>;
};

export type ShippingMethodQuantityLimits = {
  __typename?: 'ShippingMethodQuantityLimits';
  maxQuantity?: Maybe<Scalars['Int']['output']>;
  minQuantity?: Maybe<Scalars['Int']['output']>;
};

export type ShippingMethodQuantityLimitsInput = {
  maxQuantity?: InputMaybe<Scalars['Int']['input']>;
  minQuantity?: InputMaybe<Scalars['Int']['input']>;
};

export type ShippingMethodUpdateInput = {
  allCountry?: InputMaybe<Scalars['Boolean']['input']>;
  allStates?: InputMaybe<Scalars['Boolean']['input']>;
  country?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  enabledPriceLimits?: InputMaybe<Scalars['Boolean']['input']>;
  enabledQuantityLimits?: InputMaybe<Scalars['Boolean']['input']>;
  enabledWeightLimits?: InputMaybe<Scalars['Boolean']['input']>;
  listPrice?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  priceConfig?: InputMaybe<ShippingMethodPriceLimitsInput>;
  quantityConfig?: InputMaybe<ShippingMethodQuantityLimitsInput>;
  sellPrice?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  weightConfig?: InputMaybe<ShippingMethodWeightLimitsInput>;
};

export type ShippingMethodWeightLimits = {
  __typename?: 'ShippingMethodWeightLimits';
  maxWeight?: Maybe<Scalars['Int']['output']>;
  minWeight?: Maybe<Scalars['Int']['output']>;
};

export type ShippingMethodWeightLimitsInput = {
  maxWeight?: InputMaybe<Scalars['Int']['input']>;
  minWeight?: InputMaybe<Scalars['Int']['input']>;
};

export type ShippingMethods = {
  __typename?: 'ShippingMethods';
  _id?: Maybe<Scalars['ID']['output']>;
  allCountry?: Maybe<Scalars['Boolean']['output']>;
  allStates?: Maybe<Scalars['Boolean']['output']>;
  country?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  enabledPriceLimits?: Maybe<Scalars['Boolean']['output']>;
  enabledQuantityLimits?: Maybe<Scalars['Boolean']['output']>;
  enabledWeightLimits?: Maybe<Scalars['Boolean']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  listPrice?: Maybe<Scalars['Int']['output']>;
  metaStatus?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  priceConfig?: Maybe<ShippingMethodPriceLimits>;
  quantityConfig?: Maybe<ShippingMethodQuantityLimits>;
  sellPrice?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
  weightConfig?: Maybe<ShippingMethodWeightLimits>;
};

export type ShippingsList = {
  __typename?: 'ShippingsList';
  pageInfo?: Maybe<ShippingsPageInfo>;
  shippings?: Maybe<Array<Maybe<ShippingMethods>>>;
};

export type ShippingsListInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type ShippingsPageInfo = {
  __typename?: 'ShippingsPageInfo';
  currentMatchs?: Maybe<Scalars['Int']['output']>;
  isEnd?: Maybe<Scalars['Boolean']['output']>;
  isStart?: Maybe<Scalars['Boolean']['output']>;
  totalMatches?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type StockList = {
  __typename?: 'StockList';
  pageInfo?: Maybe<WarehousePageInfo>;
  stocks?: Maybe<Array<Maybe<ProductStocks>>>;
};

export type StockListInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  productBulkUploadStatus?: Maybe<ProductBulkUploadInfo>;
};

export type Token = {
  __typename?: 'Token';
  access: Scalars['String']['output'];
  refresh: Scalars['String']['output'];
};

export type TokenRequestInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  externalToken?: InputMaybe<Scalars['String']['input']>;
  grandType: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  addresses?: Maybe<Array<Maybe<Address>>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  lastOnline?: Maybe<Scalars['String']['output']>;
  loginType?: Maybe<Scalars['String']['output']>;
  metaStatus?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  phone?: Maybe<Phone>;
  role?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type Warehouse = {
  __typename?: 'Warehouse';
  _id?: Maybe<Scalars['ID']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  metaStatus?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  stockList?: Maybe<StockList>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
};


export type WarehouseStockListArgs = {
  stockListInput?: InputMaybe<StockListInput>;
};

export type WarehouseCreateInput = {
  country?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type WarehouseList = {
  __typename?: 'WarehouseList';
  pageInfo?: Maybe<WarehousePageInfo>;
  warehouses?: Maybe<Array<Maybe<Warehouse>>>;
};

export type WarehouseListInput = {
  active?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<Scalars['String']['input']>;
};

export type WarehousePageInfo = {
  __typename?: 'WarehousePageInfo';
  currentMatchs?: Maybe<Scalars['Int']['output']>;
  isEnd?: Maybe<Scalars['Boolean']['output']>;
  isStart?: Maybe<Scalars['Boolean']['output']>;
  totalMatches?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type WarehouseStatusChangeResponse = {
  __typename?: 'WarehouseStatusChangeResponse';
  status?: Maybe<Scalars['Boolean']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ProductCreateMutationVariables = Exact<{
  productCreateInput?: InputMaybe<ProductCreateInput>;
}>;


export type ProductCreateMutation = { __typename?: 'Mutation', productCreate?: { __typename?: 'Product', _id?: string | null } | null };

export type ProductQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ProductQuery = { __typename?: 'Query', product?: { __typename?: 'Product', _id?: string | null, name?: string | null, medias?: Array<string | null> | null, shortDescription?: string | null, description?: string | null, parentId?: string | null, category?: string | null, brand?: string | null, haveVariants?: boolean | null, isVariant?: boolean | null, isSellable?: boolean | null, isCodAvailable?: boolean | null, variantInfo?: Array<string | null> | null, createdAt?: string | null, updatedAt?: string | null, isActive?: boolean | null, createdBy?: string | null, updatedBy?: string | null, metaStatus?: string | null, availableStocks?: number | null, variants?: Array<{ __typename?: 'Product', _id?: string | null, name?: string | null, medias?: Array<string | null> | null, category?: string | null, brand?: string | null, haveVariants?: boolean | null, isVariant?: boolean | null, isSellable?: boolean | null, variantInfo?: Array<string | null> | null, createdAt?: string | null, updatedAt?: string | null, isActive?: boolean | null, availableStocks?: number | null, variants?: Array<{ __typename?: 'Product', _id?: string | null } | null> | null, price?: { __typename?: 'ProductPrice', sellPrice?: number | null } | null } | null> | null, price?: { __typename?: 'ProductPrice', productId?: string | null, listPrice?: number | null, sellPrice?: number | null, taxPrice?: number | null } | null } | null };

export type ProductListQueryVariables = Exact<{
  productListInput?: InputMaybe<ProductListInput>;
}>;


export type ProductListQuery = { __typename?: 'Query', productList?: { __typename?: 'ProductList', products?: Array<{ __typename?: 'Product', _id?: string | null, name?: string | null, medias?: Array<string | null> | null, category?: string | null, brand?: string | null, haveVariants?: boolean | null, isVariant?: boolean | null, isSellable?: boolean | null, variantInfo?: Array<string | null> | null, createdAt?: string | null, updatedAt?: string | null, isActive?: boolean | null, availableStocks?: number | null, variants?: Array<{ __typename?: 'Product', _id?: string | null } | null> | null, price?: { __typename?: 'ProductPrice', sellPrice?: number | null } | null } | null> | null, pageInfo?: { __typename?: 'ProductPageInfo', currentMatchs?: number | null, isEnd?: boolean | null, isStart?: boolean | null, totalMatches?: number | null, totalPages?: number | null } | null } | null };

export type UserTokenQueryVariables = Exact<{
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
}>;


export type UserTokenQuery = { __typename?: 'Query', token?: { __typename?: 'Token', access: string, refresh: string } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const ProductCreateDocument = new TypedDocumentString(`
    mutation ProductCreate($productCreateInput: ProductCreateInput) {
  productCreate(productCreateInput: $productCreateInput) {
    _id
  }
}
    `) as unknown as TypedDocumentString<ProductCreateMutation, ProductCreateMutationVariables>;
export const ProductDocument = new TypedDocumentString(`
    query Product($id: String!) {
  product(_id: $id) {
    _id
    name
    medias
    shortDescription
    description
    parentId
    category
    brand
    haveVariants
    isVariant
    isSellable
    isCodAvailable
    variantInfo
    createdAt
    updatedAt
    isActive
    createdBy
    updatedBy
    metaStatus
    availableStocks
    variants {
      _id
      name
      medias
      category
      brand
      haveVariants
      isVariant
      isSellable
      variantInfo
      createdAt
      updatedAt
      isActive
      variants {
        _id
      }
      price {
        sellPrice
      }
      availableStocks
    }
    price {
      productId
      listPrice
      sellPrice
      taxPrice
    }
  }
}
    `) as unknown as TypedDocumentString<ProductQuery, ProductQueryVariables>;
export const ProductListDocument = new TypedDocumentString(`
    query ProductList($productListInput: ProductListInput) {
  productList(productListInput: $productListInput) {
    products {
      _id
      name
      medias
      category
      brand
      haveVariants
      isVariant
      isSellable
      variantInfo
      createdAt
      updatedAt
      isActive
      variants {
        _id
      }
      price {
        sellPrice
      }
      availableStocks
    }
    pageInfo {
      currentMatchs
      isEnd
      isStart
      totalMatches
      totalPages
    }
  }
}
    `) as unknown as TypedDocumentString<ProductListQuery, ProductListQueryVariables>;
export const UserTokenDocument = new TypedDocumentString(`
    query UserToken($email: String, $password: String) {
  token(
    tokenRequestInput: {email: $email, password: $password, grandType: "password"}
  ) {
    access
    refresh
  }
}
    `) as unknown as TypedDocumentString<UserTokenQuery, UserTokenQueryVariables>;