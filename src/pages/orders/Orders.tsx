import { Stack, Typography } from "@mui/joy";
import { ModuleWrapper } from "../../components/module/ModuleWrapper";
import { ModuleSection } from "../../components/module/ModuleSection";
import { useGetOrdersByUserId } from "../../hooks/use-get-orders-by-user-id";
import { useUser } from "@clerk/clerk-react";
import { useGetUserByEmail } from "../../hooks/use-get-user-by-email";
import { formatToEuro } from "../../utils/formatter";

import "./styles.scss";

export const Orders = () => {
  const { user } = useUser();
  const { data: userData } = useGetUserByEmail(
    String(user?.primaryEmailAddress) || ""
  );

  const { data: orders } = useGetOrdersByUserId(userData?.id);
  const sortedOrders =
    orders?.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    ) || [];

  return (
    <ModuleWrapper>
      <ModuleSection title="Meus Pedidos">
        <ModuleSection title="" level="h2" size={18}>
          <Typography
            level="body-lg"
            sx={{
              fontFamily: "inherit",
              textAlign: "center",
              lineHeight: "32px",
            }}
          >
            Acompanhe seus pedidos anteriores.
          </Typography>
        </ModuleSection>
        <Stack
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
          }}
        >
          {sortedOrders.map((order) => (
            <Stack
              key={order.id}
              onClick={() => {
                window.location.href = `/pedidos/${order.id}`;
              }}
              sx={{
                backgroundColor: "#ede8de",
                width: 256,
                borderRadius: 8,
                position: "relative",
                boxShadow: "0 0 24px -22px black",
                cursor: "pointer",
                boxSizing: "border-box",
                minHeight: "256px",
                border: "1px solid black",
                ":hover": {
                  transform: "scale(1.02)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              {/* inserir imagem do produto */}
              <Stack
                sx={{
                  position: "absolute",
                  bottom: 4,
                  left: "50%",
                  transform: "translate(-50%)",
                }}
              >
                <Typography
                  level="body-lg"
                  textAlign={"center"}
                  fontFamily={"Arima"}
                  fontWeight={"bold"}
                >
                  {new Date(order.createdAt).toLocaleDateString("pt-PT")}
                </Typography>

                <Typography
                  level="body-lg"
                  textAlign={"center"}
                  fontFamily={"Arima"}
                  fontWeight={"bold"}
                >
                  {formatToEuro(
                    order?.orderItems?.reduce((acc, item) => {
                      return acc + item.price * item.quantity;
                    }, 0) || 0
                  )}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </ModuleSection>
    </ModuleWrapper>
  );
};
