import { createAddress, getAddressByUserId } from "../api/addresses-api";
import { createOrderItens } from "../api/order-itens-api";
import { createOrder } from "../api/orders-api";
import { createUser, getUserByEmail } from "../api/users-api";
import { CartProduct, CheckoutData } from "../types";

export const checkout = async (data: CheckoutData, products: CartProduct[]) => {
  let user = await getUserByEmail(data.email);
  if (!user) {
    user = await createUser(data);
  }

  let address = await getAddressByUserId(user.id);
  if (!address) {
    address = await createAddress(data, user.id);
  }

  const order = await createOrder({
    ...data,
    user_id: user.id,
    address_id: address.id,
  });

  const orderItens = await createOrderItens(order.id, products);

  return { order, orderItens };
};
