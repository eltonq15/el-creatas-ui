import { Box, Link } from "@mui/joy";
import { PoliciesModal } from "../policies-modal/PoliciesModal";

export const ReturnAndRefund = () => {
  return (
    <PoliciesModal
      label={"Politica de Devoluções"}
      title={"Politica de Devoluções"}
      content={
        <>
          <Box>
            <h2>
              <b>1. Prazo para Devolução</b>
            </h2>
            De acordo com a legislação portuguesa, o cliente pode solicitar a
            devolução de um produto no prazo de <b>14 dias</b> após a receção,
            sem necessidade de justificação.
          </Box>

          <Box>
            <h2>
              <b>2. Condições do Produto para Devolução</b>
            </h2>
            O produto pode ter sido utilizado, mas deve ser devolvido em{" "}
            <b>bom estado</b>, sem apresentar danos ou sinais de uso excessivo,
            e nas mesmas condições em que foi entregue. A equipa da El Creatas
            procederá à verificação do estado do produto, e o{" "}
            <b>reembolso será efetuado</b> após essa avaliação.
          </Box>

          <Box>
            <h2>
              <b>3. Devoluções de Produtos Feitos Sob Encomenda</b>
            </h2>
            Produtos personalizados ou fabricados por encomenda, como{" "}
            <b>encomendas com mais de 10 unidades</b>, estão sujeitos a uma taxa
            de retenção de <b>20%</b> do valor total da compra, conforme a
            legislação portuguesa. Esta taxa será deduzida do valor reembolsado.
          </Box>

          <Box>
            <h2>
              <b>4. Como Solicitar a Devolução</b>
            </h2>
            Para solicitar uma devolução, o cliente deve contactar-nos através
            do e-mail{" "}
            <Link href="mailto:devolucao@elcreatas.com">
              <b>devolucao@elcreatas.com</b>
            </Link>{" "}
            ou pelo telefone{" "}
            <Link href="tel:+351963761170">
              <b>+351 963 761 170</b>
            </Link>
            .
          </Box>

          <Box>
            <h2>
              <b>5. Produtos Danificados ou Defeituosos</b>
            </h2>
            Se o produto recebido estiver <b>danificado ou defeituoso</b>, o
            cliente pode optar por receber uma nova peça sem custos adicionais.
            Se preferir, pode solicitar o <b>reembolso integral</b>. Para
            devoluções por outros motivos, o cliente será responsável pelos
            custos de envio, e o reembolso será feito após a verificação do
            estado do produto.
          </Box>

          <Box>
            <h2>
              <b>6. Trocas de Produtos</b>
            </h2>
            O cliente pode optar por <b>trocar o produto</b> por outro, pagando
            apenas a diferença de preço. Caso o produto já tenha sido enviado, o
            cliente arcará com os custos de envio associados à troca.
          </Box>

          <Box>
            <h2>
              <b>7. Produtos Elegíveis para Devolução</b>
            </h2>
            Todos os produtos, com exceção dos itens personalizados sob
            encomenda, podem ser devolvidos desde que estejam em conformidade
            com esta política.
          </Box>

          <Box>
            <h2>
              <b>8. Prazo para Reembolso</b>
            </h2>
            Após a receção do produto devolvido, o{" "}
            <b>reembolso será processado</b> em até 48 horas, após verificação
            do estado do item.
          </Box>

          <Box>
            <h2>
              <b>9. Contactos para Devolução</b>
            </h2>
            O cliente pode entrar em contacto connosco para devoluções através
            do e-mail{" "}
            <Link href="mailto:devolucao@elcreatas.com">
              <b>devolucao@elcreatas.com</b>
            </Link>{" "}
            ou pelo telefone{" "}
            <Link href="tel:+351963761170">
              <b>+351 963 761 170</b>
            </Link>
            .
          </Box>
        </>
      }
    />
  );
};
