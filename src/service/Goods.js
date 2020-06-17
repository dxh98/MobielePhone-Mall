import {
  get,
  post,
  del
} from "../utils/request";

export function Products(per = 10, page = 1) {
  return get("/api/v1/products", {
    per,
    page,
  });

}

export function GetOne(id) {
  return get("/api/v1/products/" + id)
}

export function addCart(product, quantity = 1) {
  return post("/api/v1/shop_carts", {
    product,
    quantity
  })
}
export function getCartList() {
  return get("/api/v1/shop_carts")
}
export function delCartOne(id) {
  return del("/api/v1/shop_carts/" + id)
}