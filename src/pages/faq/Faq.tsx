import { ModuleWrapper } from "../../components/module/ModuleWrapper";
import { ModuleSection } from "../../components/module/ModuleSection";
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
} from "@mui/joy";
import { useState } from "react";

const accordionList = [
  {
    summary: "Qual é o prazo de entrega?",
    details:
      "O prazo de entrega é de 3-4 dias úteis após o envio do(s) item(s). Se seu pedido for feito após as 17h (Portugal Continental) o envio é feito no dia seguinte.",
  },
  {
    summary: "Meu pedido chegou quebrado. O que devo fazer?",
    details: `Se seu pedido chegar quebrado ou danificado, entre em contato
              conosco imediatamente dentro de 3 dias úteis. Após o recebimento
              do seu pedido com fotos para info@elcreatas.com que vamos
              substituir seu(s) item(s).`,
  },
  {
    summary: "Minha peça não era como eu imaginava. O que fazer?",
    details: `Na el creatas, cada peça é meticulosamente projetada em nosso
              estúdio em Portugal. Feito em pequenos lotes por meio de um
              processo lento e cuidadoso, cada item é único em forma, textura e
              acabamento. Não existem duas peças iguais, tornando cada criação
              especial para o seu espaço. Espere variações naturais de cor,
              textura e bolhas superficiais. Essas características fazem parte
              do processo artesanal e agregam à singularidade de cada peça.`,
  },
  {
    summary: "Como fazer troca e reembolso?",
    details: `O produto deve estar em condições originais, sem sinais de uso ou
              danos para realizamos a troca do seu pedido. O cliente deve arcar
              com os custos de envio da devolução, e novamente pelo envio do
              produto a ser feito a troca. após a recepção do produto devolvido
              o reembolso será realizado dentro de 14 dias.O valor reembolsado
              geralmente inclui apenas o preço do produto; o custo de envio
              original não será reembolsado.`,
  },
  {
    summary: "Como devo cuidar do meu produto?",
    details: `Para garantir a durabilidade e beleza das suas peças em jesmonite,
              recomenda-se usar um pano macio e úmido para limpeza. Evite
              produtos de limpeza abrasivos ou químicos fortes, pois eles podem
              danificar o acabamento. Mantenha suas peças longe da luz solar
              direta e de fontes de calor intenso, já que isso pode afetar a cor
              e a integridade do material. Se não estiver utilizando suas peças,
              armazene-as em um local seco e seguro, longe de objetos que possam
              causar arranhões ou danos. Lembre-se de que, por serem feitas à
              mão, algumas peças podem apresentar pequenas variações, que fazem
              parte do seu charme. Seguindo essas dicas, suas peças em jesmonite
              continuarão a embelezar seu espaço por muito tempo!`,
  },
];

export const Faq = () => {
  const [expanded, setExpanded] = useState<number>(0);

  return (
    <ModuleWrapper>
      <ModuleSection title="Frequently asked questions">
        <AccordionGroup sx={{ gap: "1rem", width: "100%" }}>
          {accordionList.map(({ summary, details }, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={() => setExpanded(expanded === index ? -1 : index)}
            >
              <AccordionSummary
                sx={{
                  fontWeight: "bold",
                  ".MuiAccordionSummary-button:hover": {
                    backgroundColor: "transparent !important",
                  },
                }}
              >
                {summary}
              </AccordionSummary>
              <AccordionDetails>{details}</AccordionDetails>
            </Accordion>
          ))}
        </AccordionGroup>
      </ModuleSection>
    </ModuleWrapper>
  );
};
