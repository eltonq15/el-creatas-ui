import { Typography } from "@mui/joy";

export const ModuleTitle = ({ title }: { title: string }) => {
  return (
    <Typography
      level="h1"
      sx={{
        fontSize: 24,
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
