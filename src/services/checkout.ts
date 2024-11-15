import { createAddress, getAddressByUserId } from "../api/addresses-api";
import { createOrderItems } from "../api/order-itens-api";
import { createOrder } from "../api/orders-api";
import { createPayment } from "../api/payments-api";
import { createUser, getUserByEmail } from "../api/users-api";
import { SHIPPING_PRICE, PaymentMethods, PaymentStatus } from "../constants";
import { CartProduct, CheckoutData } from "../types";

export const checkout = async (
  data: CheckoutData,
  products: CartProduct[],
  paymentMethod: PaymentMethods
) => {
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
  });

  const orderItems = await createOrderItems(order.id, products);

  const payment = await createPayment({
    orderId: order.id,
    method: paymentMethod,
    status: PaymentStatus.PENDING,
    amount:
      products.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      ) + SHIPPING_PRICE,
    phone: data.phone,
    email: data.email,
  });

  return { order, orderItems, payment };
};
