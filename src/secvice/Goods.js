import { get } from "../utils/request";

export function Products(per = 50, page = 1) {
  return get("/api/v1/products", {
    per,
    page,
  });
  // .then((res) => {
  //   console.log(res.data);
  //     return res.data;
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
}
