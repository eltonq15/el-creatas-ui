import { isAfter, isBefore } from "date-fns";
import { Link } from "react-router-dom";
import { formatToEuro } from "../../utils/formatter";
import {
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../shadcn/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../shadcn/components/ui/table";
import { useCartStore } from "../../stores/cart-store/cart-store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../shadcn/components/ui/select";
import { Typography } from "@mui/joy";
import { SolidButton } from "../button/SolidButton";
import { MAX_ALLOWED_ITEM_QUANTITY } from "../../constants";

import "./styles.scss";

export const CartDrawer = () => {
  const { cartProducts, setCartProducts, totalPrice } = useCartStore();
  const currentDate = new Date();
  const onVacation =
    isAfter(currentDate, new Date("2024-12-07")) &&
    isBefore(currentDate, new Date("2025-02-01"));

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle id="cart-drawer-title">Meus Produtos</SheetTitle>
      </SheetHeader>
      {cartProducts.length > 0 ? (
        <Table id="cart-drawer-table">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Nome</TableHead>
              <TableHead>Preço</TableHead>
              <TableHead>Qtde</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cartProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{formatToEuro(product.price)}</TableCell>
                <TableCell>
                  <Select
                    value={String(product.quantity)}
                    onValueChange={(value) => {
                      product.quantity = parseInt(value);
                      setCartProducts([...cartProducts]);
                      if (value === "0") {
                        setCartProducts(
                          cartProducts.filter((p) => p.id !== product.id)
                        );
                      }
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Quantidade" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from(
                        { length: MAX_ALLOWED_ITEM_QUANTITY + 1 },
                        (_, i) => i
                      ).map((i) => (
                        <SelectItem key={i} value={i.toString()}>
                          {i || "Remover item"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="text-right">
                  {formatToEuro(product.quantity * product.price)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Subtotal</TableCell>
              <TableCell className="text-right">
                {formatToEuro(totalPrice)}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      ) : (
        <Typography sx={{ textAlign: "center", padding: 4 }}>
          Carrinho vazio
        </Typography>
      )}
      <SheetFooter>
        <SheetClose asChild>
          {/* desabilitado ate o fim das ferias */}
          <Link
            to={onVacation ? "#" : cartProducts.length > 0 ? "/checkout" : ""}
          >
            {onVacation && (
              <Typography
                sx={{
                  width: "100%",
                  color: "black",
                  textAlign: "center",
                  border: "1px solid",
                  borderRadius: "8px",
                  padding: "8px",
                }}
              >
                Por motivo de férias, estamos com as vendas pausadas até o dia
                31/01/2025. Desejamos a todos boas festas!
              </Typography>
            )}
            <SolidButton
              sx={{
                margin: 1,
                flexDirection: "row-reverse",
                position: "absolute",
                right: "16px",
                marginTop: "16px",
              }}
              type="submit"
              // desabilitado ate o fim das ferias
              disabled={cartProducts.length === 0 || onVacation}
            >
              Finalizar compra
            </SolidButton>
          </Link>
        </SheetClose>
      </SheetFooter>
      {cartProducts.some(
        (product) => product.quantity === MAX_ALLOWED_ITEM_QUANTITY
      ) && (
        <Typography sx={{ textAlign: "left", paddingTop: 2 }}>
          *Para comprar mais de 10 unidades da mesma peça, por favor, entre em
          contato através do email{" "}
          <b>
            <a href="mailto:vendas@elcreatas.com">vendas@elcreatas.com</a>
          </b>{" "}
          ou através do whatsapp{" "}
          <b>
            <a
              href="https://wa.me/351963761170?text=Ola%2C%20gostava%20de%20comprar%20mais%20de%2010%20pe%C3%A7as."
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              +351963761170
            </a>
          </b>
          .
        </Typography>
      )}
    </SheetContent>
  );
};
