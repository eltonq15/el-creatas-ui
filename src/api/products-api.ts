type ProductItem = {
  id: string;
  name: string;
  description: string;
  size: string;
  price: number;
  createdAt: string;
};

export const getAllProducts: () => Promise<ProductItem[]> = () => {
  return fetch(`${process.env.REACT_APP_API_URL}/products`)
    .then((res) => res.json())
    .then((res) => {
      return res.sort((a: ProductItem, b: ProductItem) => a.price - b.price);
    });
};

export const getProductById = (id: string): Promise<ProductItem> => {
  return fetch(`${process.env.REACT_APP_API_URL}/products/${id}`).then((res) =>
    res.json()
  );
};
