import { Box } from "@mui/joy";
import { PoliciesModal } from "../policies-modal/PoliciesModal";

export const TermsAndConditions = () => {
  return (
    <PoliciesModal
      label={"Termos e Condições"}
      title={"Termos e Condições"}
      content={
        <>
          <Box>
            <h2>
              <b>1. Aceitação dos Termos</b>
            </h2>
            Ao aceder e utilizar este site, o utilizador aceita estar vinculado
            aos seguintes termos e condições. Caso não concorde com algum destes
            termos, solicitamos que não utilize este site.
          </Box>

          <Box>
            <h2>
              <b>2. Alterações nos Termos</b>
            </h2>
            Reservamo-nos o direito de modificar ou atualizar estes termos a
            qualquer momento sem aviso prévio. Recomendamos que consulte
            regularmente esta página para se manter informado sobre quaisquer
            mudanças. O uso contínuo do site após as alterações implica
            aceitação dos termos atualizados.
          </Box>

          <Box>
            <h2>
              <b>3. Produtos e Serviços</b>
            </h2>
            Os produtos e serviços disponíveis no site são destinados
            exclusivamente a utilizadores localizados em{" "}
            <b>Portugal Continental</b>. Fazemos todos os esforços para
            assegurar que as informações apresentadas no site são precisas, no
            entanto, erros de tipografia, preços ou disponibilidade de produtos
            podem ocorrer.
          </Box>

          <Box>
            <h2>
              <b>4. Preços e Pagamentos</b>
            </h2>
            Todos os preços apresentados no site estão em <b>euros (€)</b> e
            incluem IVA. Reservamo-nos o direito de alterar os preços a qualquer
            momento sem aviso prévio. Os pagamentos são processados através da
            API de pagamentos <b>Stripe</b>, estando sujeitos aos seus próprios
            termos de uso.
          </Box>

          <Box>
            <h2>
              <b>5. Envio e Entrega</b>
            </h2>
            Os envios são realizados apenas para <b>Portugal Continental</b>. O
            prazo estimado de entrega e os custos de envio estão descritos na
            nossa <b>Política de Envios</b>.
          </Box>

          <Box>
            <h2>
              <b>6. Cancelamentos e Devoluções</b>
            </h2>
            O cliente pode solicitar o cancelamento de uma encomenda antes de
            sua expedição. Após o envio, aplicam-se as nossas políticas de
            trocas e devoluções. Para mais detalhes, consulte a nossa{" "}
            <b>Política de Devoluções</b>.
          </Box>

          <Box>
            <h2>
              <b>7. Limitação de Responsabilidade</b>
            </h2>
            Não seremos responsáveis por quaisquer danos diretos ou indiretos
            resultantes do uso deste site, dos produtos ou dos serviços
            adquiridos através dele, exceto se tais danos resultarem de{" "}
            <b>negligência grave ou conduta intencional</b> da nossa parte.
          </Box>

          <Box>
            <h2>
              <b>8. Propriedade Intelectual</b>
            </h2>
            Todo o conteúdo deste site, incluindo textos, gráficos, logótipos,
            ícones e imagens, é de nossa propriedade ou está licenciado para
            nós, e é protegido pelas leis de propriedade intelectual aplicáveis.
            É proibida a reprodução ou distribuição de qualquer conteúdo sem
            autorização expressa.
          </Box>

          <Box>
            <h2>
              <b>9. Proteção de Dados</b>
            </h2>
            Os dados pessoais recolhidos durante o processo de compra são
            utilizados exclusivamente para o processamento das encomendas. Para
            mais informações, consulte a nossa <b>Política de Privacidade</b>.
          </Box>

          <Box>
            <h2>
              <b>10. Lei Aplicável</b>
            </h2>
            Estes termos são regidos pela legislação portuguesa. Qualquer
            litígio relacionado com a utilização deste site será submetido à
            jurisdição exclusiva dos tribunais portugueses.
          </Box>
        </>
      }
    />
  );
};
