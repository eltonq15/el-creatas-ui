import { Typography, TypographySystem } from "@mui/joy";

export const ModuleTitle = ({
  title,
  level,
  size,
}: {
  title: string;
  level?: keyof TypographySystem;
  size?: number;
}) => {
  return (
    <Typography
      level={level || "h1"}
      sx={{
        fontSize: size || 24,
        fontFamily: "inherit",
        fontWeight: 400,
        textAlign: "center",
        textTransform: "uppercase",
      }}
    >
      {title}
    </Typography>
  );
};
