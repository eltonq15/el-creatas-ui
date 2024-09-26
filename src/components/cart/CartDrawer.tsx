import { Link } from "react-router-dom";
import { formatToEuros } from "../../utils/formatter";
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

import "./styles.scss";

export const CartDrawer = () => {
  const { cartProducts, setCartProducts, totalPrice } = useCartStore();

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
                <TableCell>{formatToEuros(product.price)}</TableCell>
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
                      {Array.from({ length: 31 }, (_, i) => i).map((i) => (
                        <SelectItem key={i} value={i.toString()}>
                          {i || "Remover item"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="text-right">
                  {formatToEuros(product.quantity * product.price)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">
                {formatToEuros(totalPrice)}
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
          <Link to={cartProducts.length > 0 ? "/checkout" : ""}>
            <SolidButton
              className="mt-4"
              type="submit"
              disabled={cartProducts.length === 0}
            >
              Finalizar compra
            </SolidButton>
          </Link>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
};
