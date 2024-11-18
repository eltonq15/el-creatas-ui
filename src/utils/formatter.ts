export const formatToEuro = (price: number) =>
  Intl.NumberFormat("pt-PT", { style: "currency", currency: "EUR" }).format(
    price
  );
