import { post } from "../utils/request";

export function addProduct(product, quantity) {
  return post("/api/v1/shop_carts", {
    product,
    quantity,
  });
}
