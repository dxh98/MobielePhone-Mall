import { get, post, del } from "../utils/request";

export function Products(per = 10, page = 1) {
  return get("/api/v1/products", {
    per,
    page,
  });
}

export function GetOne(id) {
  return get("/api/v1/products/" + id);
}

export function addCart(product, quantity = 1) {
  return post("/api/v1/shop_carts", {
    product,
    quantity,
  });
}
export function getCartList() {
  return get("/api/v1/shop_carts");
}
export function delCartOne(id) {
  return del("/api/v1/shop_carts/" + id);
}

// 订单提交;
export function Order(data) {
  return post("/api/v1/orders", data);
}

//获取 收货地址

export function getAddresses() {
  return get("/api/v1/addresses");
}

// 获取单条收货地址
export function oneAddresses(id) {
  return get("/api/v1/addresses" + id);
}

// 收货地址新增
export function Addresses(data) {
  return post("/api/v1/addresses", data);
}
