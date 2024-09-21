export interface Product {
  id: string | number;
  name: string;
  price: number;
  image?: string;
}

export interface CartProduct extends Product {
  quantity: number;
}

export interface CheckoutData {
  fullName: string;
  email: string;
  phoneCountry: string;
  phone: string;
  shippingAddress: string;
  city: string;
  district: string;
  zipCode: string;
  country: string;
  shippingMethod: string;
}
