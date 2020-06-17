import {
  get
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