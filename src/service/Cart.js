import { post } from "../utils/request";
// 获取商品
export function addProduct(product, quantity) {
  return post("/api/v1/shop_carts", {
    product,
    quantity,
  });
}
