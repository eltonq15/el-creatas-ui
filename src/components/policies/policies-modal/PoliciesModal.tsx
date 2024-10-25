import { useState } from "react";
import { Button, Modal, ModalClose, Sheet, Stack, Typography } from "@mui/joy";

import "./styles.scss";

export const PoliciesModal = ({
  label,
  title,
  content,
}: {
  label: string;
  title: string;
  content: string | React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant={"soft"}
        sx={{
          cursor: "pointer",
          fontFamily: "inherit",
          letterSpacing: 2,
          backgroundColor: "transparent",
          transition: "all 0.3s ease",
          fontSize: 10,
          color: "black",
          "&:hover": { backgroundColor: "transparent" },
        }}
      >
        {label}
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            width: "80dvw",
            maxWidth: 600,
            maxHeight: 600,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
            overflow: "scroll",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            sx={{ fontWeight: "lg", mb: 1, fontFamily: "Arima" }}
          >
            {title}
          </Typography>
          <Stack gap={2} sx={{ fontFamily: "Arima" }}>
            {content}
          </Stack>
        </Sheet>
      </Modal>
    </>
  );
};
