import { Box, List, ListItem, Link } from "@mui/joy";

import { PoliciesModal } from "../policies-modal/PoliciesModal";

export const ComplaintsBook = () => {
  return (
    <PoliciesModal
      label={"Livro de Reclamações"}
      title={"Livro de Reclamações"}
      content={
        <>
          <Box>
            <h2>
              <b>1. O que é o Livro de Reclamações?</b>
            </h2>
            O <b>Livro de Reclamações</b> é um direito assegurado ao consumidor,
            que permite a qualquer cliente apresentar reclamações sobre o
            serviço ou produto adquirido. Este direito está regulamentado pela
            legislação portuguesa e é válido tanto para lojas físicas como para{" "}
            <b>plataformas online</b>.
          </Box>

          <Box>
            <h2>
              <b>2. Acesso ao Livro de Reclamações</b>
            </h2>
            O cliente pode aceder ao <b>Livro de Reclamações Eletrónico</b>{" "}
            através do link abaixo. Este serviço permite que o cliente registe
            reclamações de forma rápida e eficaz, e todas as reclamações são
            encaminhadas para as autoridades competentes para a devida análise.
            <br />
            <Link
              href="https://www.livroreclamacoes.pt/inicio"
              target="_blank"
              rel="noreferrer"
            >
              <b>Clique aqui para aceder ao Livro de Reclamações</b>
            </Link>
          </Box>

          <Box>
            <h2>
              <b>3. Como Apresentar uma Reclamação</b>
            </h2>
            Para apresentar uma reclamação, o cliente deve seguir os seguintes
            passos:
            <List marker="disc">
              <ListItem>
                Aceder ao site do <b>Livro de Reclamações Eletrónico</b> no link
                fornecido.
              </ListItem>
              <ListItem>
                Preencher o formulário com as informações solicitadas, como os
                detalhes da compra e a descrição da reclamação.
              </ListItem>
              <ListItem>
                Após o envio, a reclamação será analisada e encaminhada para a
                nossa equipa e para as autoridades competentes.
              </ListItem>
            </List>
          </Box>

          <Box>
            <h2>
              <b>4. Resposta à Reclamação</b>
            </h2>
            Após a submissão da reclamação, a <b>El Creatas</b> compromete-se a
            responder no prazo legal de <b>15 dias úteis</b>. Durante este
            período, a equipa analisará a situação e entrará em contacto com o
            cliente para apresentar uma solução ou esclarecimentos.
          </Box>

          <Box>
            <h2>
              <b>5. Contactos Alternativos</b>
            </h2>
            Se o cliente preferir, pode também entrar em contacto connosco
            diretamente através do e-mail{" "}
            <Link href="mailto:info@elcreatas.com">
              <b>info@elcreatas.com</b>
            </Link>{" "}
            ou pelo telefone{" "}
            <Link href="tel:+351963761170">
              <b>963 761 170</b>
            </Link>{" "}
            para esclarecer qualquer questão antes de utilizar o Livro de
            Reclamações.
          </Box>
        </>
      }
    />
  );
};
