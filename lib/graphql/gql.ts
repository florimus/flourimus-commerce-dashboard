/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation ProductCreate($productCreateInput: ProductCreateInput) {\n  productCreate(productCreateInput: $productCreateInput) {\n    _id\n  }\n}": types.ProductCreateDocument,
    "mutation ProductStockEntry($productStockEntryInput: ProductStockEntryInput!) {\n  productStockEntry(productStockEntryInput: $productStockEntryInput) {\n    productId\n    totalStocks\n    saftyStock\n    allocatedStocks\n  }\n}": types.ProductStockEntryDocument,
    "mutation ProductUpdate($id: ID!, $productUpdateInput: ProductUpdateInput) {\n  productUpdate(_id: $id, productUpdateInput: $productUpdateInput) {\n    _id\n    name\n    medias\n    shortDescription\n    description\n    parentId\n    category\n    brand\n    haveVariants\n    isVariant\n    isSellable\n    isCodAvailable\n    variantInfo\n    createdAt\n    updatedAt\n    isActive\n    createdBy\n    updatedBy\n    metaStatus\n    availableStocks\n    variants {\n      _id\n      name\n      medias\n      category\n      brand\n      haveVariants\n      isVariant\n      isSellable\n      variantInfo\n      createdAt\n      updatedAt\n      isActive\n      variants {\n        _id\n      }\n      price {\n        sellPrice\n      }\n      availableStocks\n    }\n    price {\n      productId\n      listPrice\n      sellPrice\n      taxPrice\n    }\n  }\n}": types.ProductUpdateDocument,
    "query Product($id: String!) {\n  product(_id: $id) {\n    _id\n    name\n    medias\n    shortDescription\n    description\n    parentId\n    category\n    brand\n    haveVariants\n    isVariant\n    isSellable\n    isCodAvailable\n    variantInfo\n    createdAt\n    updatedAt\n    isActive\n    createdBy\n    updatedBy\n    metaStatus\n    availableStocks\n    variants {\n      _id\n      name\n      medias\n      category\n      brand\n      haveVariants\n      isVariant\n      isSellable\n      variantInfo\n      createdAt\n      updatedAt\n      isActive\n      variants {\n        _id\n      }\n      price {\n        sellPrice\n      }\n      availableStocks\n    }\n    price {\n      productId\n      listPrice\n      sellPrice\n      taxPrice\n    }\n  }\n}": types.ProductDocument,
    "query ProductList($productListInput: ProductListInput) {\n  productList(productListInput: $productListInput) {\n    products {\n      _id\n      name\n      medias\n      category\n      brand\n      haveVariants\n      isVariant\n      isSellable\n      variantInfo\n      createdAt\n      updatedAt\n      isActive\n      variants {\n        _id\n      }\n      price {\n        sellPrice\n      }\n      availableStocks\n    }\n    pageInfo {\n      currentMatchs\n      isEnd\n      isStart\n      totalMatches\n      totalPages\n    }\n  }\n}": types.ProductListDocument,
    "query WarehousesWithProduct($productId: String!) {\n  warehousesWithProduct(productId: $productId) {\n    _id\n    name\n    isActive\n    country\n    stockList(stockListInput: {search: $productId}) {\n      stocks {\n        productId\n        totalStocks\n        saftyStock\n        allocatedStocks\n      }\n    }\n  }\n}": types.WarehousesWithProductDocument,
    "query UserToken($email: String, $password: String) {\n  token(\n    tokenRequestInput: {email: $email, password: $password, grandType: \"password\"}\n  ) {\n    access\n    refresh\n  }\n}": types.UserTokenDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ProductCreate($productCreateInput: ProductCreateInput) {\n  productCreate(productCreateInput: $productCreateInput) {\n    _id\n  }\n}"): typeof import('./graphql').ProductCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ProductStockEntry($productStockEntryInput: ProductStockEntryInput!) {\n  productStockEntry(productStockEntryInput: $productStockEntryInput) {\n    productId\n    totalStocks\n    saftyStock\n    allocatedStocks\n  }\n}"): typeof import('./graphql').ProductStockEntryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ProductUpdate($id: ID!, $productUpdateInput: ProductUpdateInput) {\n  productUpdate(_id: $id, productUpdateInput: $productUpdateInput) {\n    _id\n    name\n    medias\n    shortDescription\n    description\n    parentId\n    category\n    brand\n    haveVariants\n    isVariant\n    isSellable\n    isCodAvailable\n    variantInfo\n    createdAt\n    updatedAt\n    isActive\n    createdBy\n    updatedBy\n    metaStatus\n    availableStocks\n    variants {\n      _id\n      name\n      medias\n      category\n      brand\n      haveVariants\n      isVariant\n      isSellable\n      variantInfo\n      createdAt\n      updatedAt\n      isActive\n      variants {\n        _id\n      }\n      price {\n        sellPrice\n      }\n      availableStocks\n    }\n    price {\n      productId\n      listPrice\n      sellPrice\n      taxPrice\n    }\n  }\n}"): typeof import('./graphql').ProductUpdateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Product($id: String!) {\n  product(_id: $id) {\n    _id\n    name\n    medias\n    shortDescription\n    description\n    parentId\n    category\n    brand\n    haveVariants\n    isVariant\n    isSellable\n    isCodAvailable\n    variantInfo\n    createdAt\n    updatedAt\n    isActive\n    createdBy\n    updatedBy\n    metaStatus\n    availableStocks\n    variants {\n      _id\n      name\n      medias\n      category\n      brand\n      haveVariants\n      isVariant\n      isSellable\n      variantInfo\n      createdAt\n      updatedAt\n      isActive\n      variants {\n        _id\n      }\n      price {\n        sellPrice\n      }\n      availableStocks\n    }\n    price {\n      productId\n      listPrice\n      sellPrice\n      taxPrice\n    }\n  }\n}"): typeof import('./graphql').ProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductList($productListInput: ProductListInput) {\n  productList(productListInput: $productListInput) {\n    products {\n      _id\n      name\n      medias\n      category\n      brand\n      haveVariants\n      isVariant\n      isSellable\n      variantInfo\n      createdAt\n      updatedAt\n      isActive\n      variants {\n        _id\n      }\n      price {\n        sellPrice\n      }\n      availableStocks\n    }\n    pageInfo {\n      currentMatchs\n      isEnd\n      isStart\n      totalMatches\n      totalPages\n    }\n  }\n}"): typeof import('./graphql').ProductListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query WarehousesWithProduct($productId: String!) {\n  warehousesWithProduct(productId: $productId) {\n    _id\n    name\n    isActive\n    country\n    stockList(stockListInput: {search: $productId}) {\n      stocks {\n        productId\n        totalStocks\n        saftyStock\n        allocatedStocks\n      }\n    }\n  }\n}"): typeof import('./graphql').WarehousesWithProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query UserToken($email: String, $password: String) {\n  token(\n    tokenRequestInput: {email: $email, password: $password, grandType: \"password\"}\n  ) {\n    access\n    refresh\n  }\n}"): typeof import('./graphql').UserTokenDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
