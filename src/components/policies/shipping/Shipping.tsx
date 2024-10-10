import { Box, Link, List, ListItem } from "@mui/joy";
import { PoliciesModal } from "../policies-modal/PoliciesModal";

export const Shipping = () => {
  return (
    <PoliciesModal
      label={"Política de Envios"}
      title={"Política de Envios"}
      content={
        <>
          <Box>
            <h2>
              <b>1. Destinos de Envio</b>
            </h2>
            Realizamos envios exclusivamente para <b>Portugal Continental</b>.
            No momento, não atendemos a ilhas ou outros países.
          </Box>
          <Box>
            <h2>
              <b>2. Prazo de Entrega</b>
            </h2>
            Todas as encomendas são enviadas pelos <b>CTT</b>. Após a postagem
            da encomenda, o prazo estimado de entrega é de até{" "}
            <b>2 dias úteis</b>. Este prazo pode variar em função de
            circunstâncias imprevistas, como condições meteorológicas ou
            problemas logísticos.
          </Box>
          <Box>
            <h2>
              <b>3. Transportadoras</b>
            </h2>
            Utilizamos unicamente os serviços de entrega dos <b>CTT</b>. Neste
            momento,{" "}
            <b>
              não oferecemos a possibilidade de escolha de outras
              transportadoras
            </b>
            .
          </Box>
          <Box>
            <h2>
              <b>4. Custos de Envio</b>
            </h2>
            O envio das encomendas tem um custo fixo de <b>4,80€</b>,
            independentemente da quantidade de itens adquiridos. Oferecemos{" "}
            <b>envio gratuito</b> para compras cujo valor total seja igual ou
            superior a <b>60€</b>.
          </Box>
          <Box>
            <h2>
              <b>5. Rastreamento de Encomendas</b>
            </h2>
            Após a postagem da sua encomenda, receberá um{" "}
            <b>código de rastreio</b> que será disponibilizado no nosso sistema,
            na página de acompanhamento de pedidos (em desenvolvimento). Este
            código será também enviado por e-mail para o endereço fornecido no
            momento da compra. Ao clicar no código de rastreio, será
            redireccionado para o site oficial dos <b>CTT</b>, onde poderá
            acompanhar o progresso da sua encomenda.
          </Box>
          <Box>
            <h2>
              <b>6. Condições de Entrega</b>
            </h2>
            A encomenda será entregue na morada indicada no momento da compra. É
            necessário que haja{" "}
            <b>alguém disponível para receber a encomenda.</b>
            Caso não esteja ninguém disponível para receber a entrega, o{" "}
            <b>CTT</b> poderá:
            <List marker="disc">
              <ListItem>
                Tentar uma nova entrega em horário ou dia alternativo.
              </ListItem>
              <ListItem>
                Deixar uma notificação na morada, indicando a possibilidade de
                levantar a encomenda na estação dos CTT mais próxima.
              </ListItem>
            </List>
            Se precisar de mais informações sobre as políticas dos <b>CTT</b>{" "}
            neste aspecto, recomendamos consultar o site oficial dos CTT.
          </Box>
          <Box>
            <h2>
              <b>7. Atrasos na Entrega</b>
            </h2>
            Não oferecemos compensações nem nos responsabilizamos por eventuais{" "}
            <b>atrasos na entrega</b> que possam ocorrer devido a fatores
            alheios ao nosso controlo, como problemas logísticos por parte dos{" "}
            <b>CTT</b>, condições meteorológicas adversas ou greves.
          </Box>
          <Box>
            <h2>
              <b>8. Produtos Danificados ou Erros no Envio</b>
            </h2>
            Se a sua encomenda chegar <b>danificada</b>, o cliente deverá entrar
            em contacto connosco num prazo máximo de <b>3 dias</b> após a
            receção, enviando um e-mail para{" "}
            <Link href="mailto:info@elcreatas.com">
              <b>info@elcreatas.com</b>
            </Link>{" "}
            e anexando fotos que comprovem os danos causados durante o
            transporte. Após verificação dos danos, procederemos ao envio de um{" "}
            <b>novo produto sem custos adicionais</b> para o cliente. Para
            outras situações de insatisfação com o produto, encorajamos o
            cliente a entrar em contacto connosco para que possamos chegar a uma
            solução amigável.
          </Box>
          <Box>
            <h2>
              <b>9. Alterações no Endereço de Entrega</b>
            </h2>
            Os clientes podem solicitar a{" "}
            <b>alteração do endereço de entrega</b>, desde que a encomenda ainda
            não tenha sido postada. Para realizar a alteração, deve
            contactar-nos através do e-mail{" "}
            <Link href="mailto:info@elcreatas.com">
              <b>info@elcreatas.com</b>
            </Link>{" "}
            ou pelo telefone{" "}
            <Link href="tel:+351963761170">
              <b>+351963761170</b>
            </Link>
            .
          </Box>
          <Box>
            <h2>
              <b>10. Reenvio de Encomendas</b>
            </h2>
            Se a encomenda for devolvida ao remetente devido a{" "}
            <b>impossibilidade de entrega</b>, o cliente poderá solicitar o
            reenvio mediante o pagamento de uma taxa de <b>3€</b> na primeira
            ocorrência. Se o reenvio falhar novamente, será cobrada a taxa
            integral de <b>4,80€</b> a partir da segunda tentativa.
          </Box>
          <Box>
            <h2>
              <b>11. Encomendas Múltiplas</b>
            </h2>
            No caso de encomendas com múltiplos produtos, os itens podem ser
            enviados em <b>embalagens separadas</b>, dependendo da natureza dos
            produtos. Embora sejam postados ao mesmo tempo, é possível que sejam
            entregues em <b>remessas diferentes</b>, conforme as operações
            logísticas dos <b>CTT</b>.
          </Box>
        </>
      }
    />
  );
};
