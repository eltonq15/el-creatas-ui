//sera usado com useQuery
export const getAllProducts: () => Promise<any> = () => {
  return fetch("https://server.elcreatas.com/products").then((res) => res.json());
};
