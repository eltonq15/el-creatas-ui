import { Stack, TypographySystem } from "@mui/joy";
import { ModuleTitle } from "./ModuleTitle";

export const ModuleSection = ({
  children,
  title,
  level,
  size,
  width,
}: {
  children: React.ReactNode;
  title: string;
  level?: keyof TypographySystem;
  size?: number;
  width?: number | string;
}) => {
  return (
    <Stack
      sx={{
        gap: "1rem",
        maxWidth: width || 600,
        width: "90%",
        alignItems: "center",
      }}
    >
      <ModuleTitle title={title} level={level} size={size} />
      {children}
    </Stack>
  );
};
