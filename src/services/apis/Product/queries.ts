import {gql} from 'graphql-request';

export const GetListProduct = gql`
  query GetListProduct(
    $skip: Int
    $where: ProductWhereInput
    $orderBy: ProductOrderByInput
  ) {
    products(skip: $skip, where: $where, orderBy: $orderBy) {
      stage
      publishedAt
      updatedAt
      createdAt
      id
      apiFeaturedImage
      brand
      category
      currency
      description
      name
      price
      priceSign
      productApiUrl
      productID
      productLink
      productType
      rating
      tagList
      websiteLink
    }
  }
`;

export const GetProductTypeProducts = gql`
  query GetProductTypeProducts($where: ProductWhereInput) {
    products(where: $where) {
      productType
    }
  }
`;

export const GetTotalCountProducts = gql`
  query GetListProduct {
    productsConnection {
      aggregate {
        count
      }
    }
  }
`;
