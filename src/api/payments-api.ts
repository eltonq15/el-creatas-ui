export type PaymentParams = {
  orderId: string;
  amount: number;
  method: string;
  status: string;
  email: string;
  phone: string;
};

export type Payment = {
  amount: number;
  createdAt: string;
  id: string;
  method: string;
  orderId: string;
  status: string;
  updatedAt: string;
  entity: string;
  reference: string;
  deliveryDate: string;
};

export const createPayment = async (data: PaymentParams): Promise<Payment> => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/payments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};
