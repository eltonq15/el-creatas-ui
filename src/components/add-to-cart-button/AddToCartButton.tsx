import { MAX_ALLOWED_ITEM_QUANTITY } from "../../constants";
import { Product } from "../../hooks/use-get-products";
import { useCartStore } from "../../stores/cart-store/cart-store";
import { OutlinedButton } from "../button/OutlinedButton";

export const AddToCartButton = ({ product }: { product: Product }) => {
  const { cartProducts, setCartProducts, setIsSnackbarOpen } = useCartStore();

  const handleAddToCart = (product: Product) => {
    const isInCart = cartProducts.find(
      (cartProduct) => cartProduct.id === product.id
    );
    const exceededMaxQuantity =
      (isInCart?.quantity ?? 0) >= MAX_ALLOWED_ITEM_QUANTITY;
    if (exceededMaxQuantity) {
      return;
    }

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
      <OutlinedButton onClick={() => handleAddToCart(product)}>
        Adicionar ao carrinho
      </OutlinedButton>
    </>
  );
};
