import { Ghost } from "@phosphor-icons/react";
import React from "react";
import { ModuleWrapper } from "../../components/module/ModuleWrapper";
import { ModuleSection } from "../../components/module/ModuleSection";
import { Typography } from "@mui/joy";

const NotFound = () => {
  return (
    <ModuleWrapper>
      <ModuleSection title="Página não encontrada">
        <Ghost size={256} />
        <Typography
          level="h2"
          sx={{
            textAlign: "center",
            fontSize: "18px",
            lineHeight: "32px",
            fontFamily: "inherit",
            fontWeight: "400",
            width: "80%",
          }}
        >
          Desculpe, a página que você está procurando não existe.
        </Typography>
      </ModuleSection>
    </ModuleWrapper>
  );
};

export default NotFound;
