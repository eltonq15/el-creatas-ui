import { Stack } from "@mui/joy";
import { ModuleTitle } from "./ModuleTitle";

export const ModuleSection = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <Stack
      sx={{
        gap: "1rem",
        maxWidth: 600,
        width: "90%",
        alignItems: "center",
      }}
    >
      <ModuleTitle title={title} />
      {children}
    </Stack>
  );
};
