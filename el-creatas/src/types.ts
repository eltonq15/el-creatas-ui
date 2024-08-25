export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface CartProduct extends Product {
  quantity: number;
}
