import { Product } from "../../hooks/use-get-products";
import { useCartStore } from "../../stores/cart-store/cart-store";
import { useState } from "react";
import { AddToCartSnackbar } from "../add-to-cart-snackbar/AddToCartSnackbar";
import { SolidButton } from "../button/SolidButton";

export const AddToCartButton = ({ product }: { product: Product }) => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const { cartProducts, setCartProducts } = useCartStore();

  const handleAddToCart = (product: Product) => {
    const isInCart = cartProducts.find(
      (cartProduct) => cartProduct.id === product.id
    );
    const products = isInCart
      ? cartProducts.map((cartProduct) =>
          cartProduct.id === product.id
            ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
            : cartProduct
        )
      : [...cartProducts, { ...product, quantity: 1 }];

    setCartProducts(products);
    setIsSnackbarOpen(true);
  };

  return (
    <>
      <SolidButton onClick={() => handleAddToCart(product)}>
        Adicionar ao carrinho
      </SolidButton>
      <AddToCartSnackbar open={isSnackbarOpen} setOpen={setIsSnackbarOpen} />
    </>
  );
};
