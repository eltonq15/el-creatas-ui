import { Link, Stack, Typography } from "@mui/joy";
import { formatToEuro } from "../../utils/formatter";
import { PaymentMethods, PaymentStatus } from "../../constants";
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
        {formatToEuro(orderData?.payment?.amount || 0)}
      </Typography>
      <Typography alignSelf="start" level="body-md">
        <b>Forma de pagamento: </b>
        {orderData?.payment?.method}
      </Typography>
      <Typography alignSelf="start" level="body-md">
        <b>Status do pagamento: </b>
        {orderData?.payment?.status === PaymentStatus.PENDING ? (
          <Typography
            sx={{
              color: "orange",
              border: "2px solid orange",
              padding: "2px 4px",
              borderRadius: "4px",
              fontSize: "12px",
            }}
          >
            Pendente
          </Typography>
        ) : orderData?.payment?.status === PaymentStatus.PAID ? (
          <Typography
            sx={{
              color: "green",
              border: "2px solid green",
              padding: "2px 4px",
              borderRadius: "4px",
              fontSize: "12px",
            }}
          >
            Pagamento concluido
          </Typography>
        ) : (
          <Typography
            sx={{
              color: "red",
              border: "2px solid red",
              padding: "2px 4px",
              borderRadius: "4px",
              fontSize: "12px",
            }}
          >
            Cancelado
          </Typography>
        )}
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
            {formatToEuro(orderData?.payment?.amount)}
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
