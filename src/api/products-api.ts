//sera usado com useQuery
export const getAllProducts: () => Promise<any> = () => {
  return fetch(
    `${"http://localhost:1234" ?? process.env.REACT_APP_API_URL}/products`
  ).then((res) => res.json());
};
