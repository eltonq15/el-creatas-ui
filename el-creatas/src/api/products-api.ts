//sera usado com useQuery
export const getAllProducts: () => Promise<any> = () => {
  return fetch("http://localhost:1234/products").then((res) => res.json());
};
