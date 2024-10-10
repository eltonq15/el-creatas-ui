import { Box, Link, List, ListItem } from "@mui/joy";
import { PoliciesModal } from "../policies-modal/PoliciesModal";

export const Privacy = () => {
  return (
    <PoliciesModal
      label={"Política de Privacidade"}
      title={"Política de Privacidade"}
      content={
        <>
          <Box>
            <h2>
              <b>1. Introdução </b>
            </h2>
            Bem-vindo à <b>elcreatas.com</b>. Esta Política de Privacidade
            descreve como coletamos, usamos e protegemos as informações pessoais
            fornecidas por nossos usuários, em conformidade com as leis
            aplicáveis, incluindo o
            <b> Regulamento Geral sobre a Proteção de Dados (GDPR)</b> da União
            Europeia.
          </Box>
          <Box>
            <h2>
              <b>2. Informações que Coletamos </b>
            </h2>
            Coletamos as seguintes informações pessoais dos usuários:
            <List marker="disc">
              <ListItem>
                <b>Nome, endereço de e-mail, telefone, e morada completa: </b>
                Coletados no formulário de checkout, com a finalidade de
                realizar a venda e envio das encomendas.
              </ListItem>
              <ListItem>
                <b>Informações de pagamento: </b>Processadas através da API de
                pagamento do <b>Stripe</b>, que pode armazenar informações de
                cartão de crédito diretamente em conformidade com suas próprias
                políticas de privacidade.
              </ListItem>
              <ListItem>
                <b>Nome e e-mail: </b>Coletados no formulário de contato,
                juntamente com o assunto e a mensagem do usuário.
              </ListItem>
            </List>
            <b>Não coletamos </b>
            informações sensíveis como dados de saúde, informações financeiras
            fora do processo de pagamento ou dados de menores de idade sem
            consentimento apropriado.
          </Box>

          <Box>
            <h2>
              <b>3. Finalidade do Tratamento de Dados </b>
            </h2>
            As informações pessoais fornecidas são utilizadas exclusivamente
            para:{" "}
            <List marker="disc">
              <ListItem>
                <b>Processamento e envio de encomendas.</b>
              </ListItem>
              <ListItem>
                <b>Comunicação com o cliente </b>
                em relação a pedidos e questões de suporte.
              </ListItem>
              <ListItem>
                <b>Processamento de pagamentos</b>, por meio da integração com o
                serviço Stripe.
              </ListItem>
            </List>
            Nós não enviamos e-mails de marketing nem compartilhamos suas
            informações pessoais com terceiros, exceto conforme necessário para
            o processamento de pagamentos, através do Stripe.
          </Box>
          <Box>
            <h2>
              <b>4. Uso de Cookies e Tecnologias de Rastreamento </b>
            </h2>
            Atualmente, não utilizamos cookies próprios para coletar dados dos
            usuários. No entanto, utilizamos o local storage do navegador para
            armazenar produtos adicionados ao carrinho, proporcionando uma
            experiência de navegação mais fluida. O <b>Stripe</b> utiliza
            cookies para garantir o funcionamento correto do processamento de
            pagamentos e para finalidades internas. Recomendamos que você
            consulte a{" "}
            <Link
              href="https://stripe.com/privacy"
              target="_blank"
              rel="noreferrer"
            >
              Política de Privacidade do Stripe
            </Link>{" "}
            para obter mais informações sobre como esses dados são tratados.
          </Box>
          <Box>
            <h2>
              <b>5. Retenção de Dados </b>
            </h2>
            As informações pessoais dos usuários serão armazenadas por um
            período de <b>12 meses</b> após a realização de uma compra. Se
            solicitado pelo usuário, esses dados poderão ser excluídos antes
            desse período, conforme descrito na seção de "Direitos do Usuário".
          </Box>
          <Box>
            <h2>
              <b>6. Segurança dos Dados </b>
            </h2>
            Estamos comprometidos em proteger as informações pessoais dos nossos
            usuários, e estamos em processo de implementação de medidas de
            segurança adequadas, como criptografia de dados e controles de
            acesso restritos. No entanto, continuamos a avaliar a melhor forma
            de garantir a segurança total dos dados e prevenir acessos não
            autorizados.
          </Box>
          <Box>
            <h2>
              <b>7. Direitos do Usuário </b>
            </h2>
            <List marker="disc">
              Os usuários têm o direito de:
              <ListItem>
                <b>Acessar e visualizar </b>
                seus dados pessoais armazenados em nosso sistema. Isso será
                possível através de uma futura implementação da seção "Meus
                Dados", onde os usuários poderão visualizar suas informações.
              </ListItem>
              <ListItem>
                <b>Solicitar a exclusão de dados pessoais. </b>A exclusão pode
                ser solicitada diretamente através do site quando a
                funcionalidade "Meus Dados" estiver disponível, ou por meio de
                contato direto conosco.
              </ListItem>
              <ListItem>
                <b>Direito à portabilidade e correção: </b>Em breve,
                disponibilizaremos a opção de corrigir ou atualizar os dados
                pessoais.
              </ListItem>
            </List>
            Para os usuários da União Europeia, garantimos a conformidade com o
            GDPR, incluindo o direito à exclusão de dados, retificação e
            portabilidade de dados pessoais.
          </Box>
          <Box>
            <h2>
              <b>8. Pagamentos e Serviços de Terceiros </b>
            </h2>
            As transações financeiras no nosso site são realizadas via Stripe,
            que é responsável pela coleta e processamento de dados de pagamento.
            Recomendamos a leitura da{" "}
            <Link
              href="https://stripe.com/privacy"
              target="_blank"
              rel="noreferrer"
            >
              Política de Privacidade do Stripe
            </Link>{" "}
            para obter detalhes sobre como suas informações de pagamento são
            tratadas.
          </Box>
          <Box>
            <h2>
              <b>9. Política Relacionada a Menores de Idade </b>
            </h2>
            Nosso site não é direcionado a menores de idade. Apenas usuários
            autorizados e maiores de idade podem realizar transações com seus
            próprios meios de pagamento. Não coletamos conscientemente dados de
            menores de idade.
          </Box>
          <Box>
            <h2>
              <b>10. Transferência de Dados Internacionais </b>
            </h2>
            Atualmente, não transferimos os dados pessoais de nossos usuários
            para fora do país de origem. Todos os dados são mantidos localmente,
            salvo os processados pelo <b>Stripe</b>, que pode operar
            internacionalmente, conforme suas próprias políticas de privacidade.
          </Box>
          <Box>
            <h2>
              <b>11. Atualizações à Política de Privacidade </b>
            </h2>
            Podemos atualizar esta Política de Privacidade de tempos em tempos,
            a fim de refletir mudanças em nossas práticas de dados ou leis
            aplicáveis. Quando isso ocorrer, notificaremos os usuários através
            do endereço de e-mail fornecido, ou por meio de uma notificação em
            destaque no site.
          </Box>
          <Box>
            <h2>
              <b>12. Contato</b>
            </h2>
            Se você tiver alguma dúvida sobre esta Política de Privacidade, ou
            quiser exercer seus direitos de usuário, entre em contato conosco
            pelo e-mail: <b>info@elcreatas.com</b>.
          </Box>
        </>
      }
    />
  );
};
