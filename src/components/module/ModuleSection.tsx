import { Stack, TypographySystem } from "@mui/joy";
import { ModuleTitle } from "./ModuleTitle";

export const ModuleSection = ({
  children,
  title,
  level,
  size,
}: {
  children: React.ReactNode;
  title: string;
  level?: keyof TypographySystem;
  size?: number;
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
      <ModuleTitle title={title} level={level} size={size} />
      {children}
    </Stack>
  );
};
