import { createAddress, getAddressByUserId } from "../api/addresses-api";
import { createOrderItems } from "../api/order-itens-api";
import { createOrder } from "../api/orders-api";
import { createUser, getUserByEmail } from "../api/users-api";
import { PaymentMethods, PaymentStatus } from "../constants";
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
    userId: user.id,
    addressId: address.id,
    paymentMethod: PaymentMethods.MULTIBANCO,
    status: PaymentStatus.PENDING,
  });

  const orderItems = await createOrderItems(order.id, products);

  return { order, orderItems };
};
