import { Link } from "react-router-dom";
import { formatToEuros } from "../../utils/formatter";
import {
  SheetClose,
  SheetContent,
  SheetDescription,
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
import { Button } from "../shadcn/components/ui/button";
import { useCartStore } from "../../stores/cart-store/cart-store";
import { Input } from "../shadcn/components/ui/input";

export const CartDrawer = () => {
  const { cartProducts, setCartProducts, totalPrice } = useCartStore();

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Produto(s)</SheetTitle>
        <SheetDescription>Reveja os itens em seu carrinho.</SheetDescription>
      </SheetHeader>
      <Table>
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
                <Input
                  type="number"
                  value={product.quantity}
                  onChange={(e) => {
                    product.quantity = parseInt(e.target.value);
                    setCartProducts([...cartProducts]);
                    if (e.target.value === "0") {
                      setCartProducts(
                        cartProducts.filter((p) => p.id !== product.id)
                      );
                    }
                  }}
                  min={0}
                  step={1}
                />
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
      <SheetFooter>
        <SheetClose asChild>
          <Link to="/checkout">
            <Button color="#d6b8a9" type="submit">
              Continuar
            </Button>
          </Link>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
};
