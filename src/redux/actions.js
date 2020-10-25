import { GET_PRODUCT } from "./type";

export function getProductsFromServer(products) {
  return {
    type: GET_PRODUCT,
    products: products,
  }
}
