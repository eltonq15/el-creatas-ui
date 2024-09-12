//sera usado com useQuery
export const getAllProducts: () => Promise<any> = () => {
  return fetch(
    `${process.env.REACT_APP_API_URL}/products`
  ).then((res) => res.json());
};
