import { Link, Stack, Typography } from "@mui/joy";
import { formatToEuros } from "../../utils/formatter";
import { PaymentMethods } from "../../constants";
import { OrderData } from "../../hooks/use-create-order";

export const OrderDetails = ({ orderData }: { orderData: OrderData }) => {
  return (
    <Stack
      sx={{
        textAlign: "center",
        gap: "1rem",
        padding: "2rem",
        border: "1px dashed #000",
      }}
    >
      <h2>Detalhes do pedido</h2>
      <Typography sx={{ textAlign: "start" }} alignSelf="start" level="body-md">
        <b>ID: </b>
        {orderData?.id}
        <Stack>
          <small>
            (Acompanhe seu pedido por{" "}
            <Link component={"a"} href={`/pedidos/${orderData?.id}`}>
              aqui
            </Link>
            )
          </small>
        </Stack>
      </Typography>
      <Typography alignSelf="start" level="body-md">
        <b>Total: </b>
        {formatToEuros(orderData?.payment?.amount || 0)}
      </Typography>
      <Typography alignSelf="start" level="body-md">
        <b>Forma de pagamento: </b>
        {orderData?.payment?.method}
      </Typography>
      <Typography alignSelf="start" level="body-md">
        <b>Status do pagamento: </b>
        {orderData?.payment?.status}
      </Typography>
      {orderData?.payment?.method === PaymentMethods.MULTIBANCO && (
        <Stack>
          <Typography alignSelf="start" level="body-md">
            <b>Entidade: </b>
            {orderData?.payment?.entity}
          </Typography>
          <Typography alignSelf="start" level="body-md">
            <b>Referencia: </b>
            {orderData?.payment?.reference}
          </Typography>
          <Typography alignSelf="start" level="body-md">
            <b>Montante: </b>
            {formatToEuros(orderData?.payment?.amount)}
          </Typography>
        </Stack>
      )}
      <Typography alignSelf="start" level="body-md">
        <b>Forma de anvio: </b>
        <Typography level="body-sm" fontWeight={700}>
          CTT Envios
        </Typography>
      </Typography>
      <Typography alignSelf="start" level="body-md">
        <Typography level="body-sm">
          Entrega prevista: até o dia <b>{orderData?.payment?.deliveryDate}</b>
        </Typography>
      </Typography>
    </Stack>
  );
};
