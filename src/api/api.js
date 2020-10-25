const GET_PRODUCT = "https://demo4233545.mockable.io";

export async function getProducts() {
  const response = await fetch(`${GET_PRODUCT}/products`);
  const json = await response.json();
  const products = await json;

  return products;
}
