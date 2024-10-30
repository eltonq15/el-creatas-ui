import { Stack, Typography } from "@mui/joy";
import { ModuleSection } from "../../components/module/ModuleSection";

interface AboutSectionProps {
  id: string;
  title: string;
  text1?: string;
  text2?: string;
  text3?: string;
  additionalContent?: React.ReactNode;
  media?: { src: string; alt: string; width?: number | string }[];
  mediaType?: "image" | "video";
}
export const AboutSection = ({
  id,
  title,
  text1,
  text2,
  text3,
  additionalContent,
  media,
  mediaType = "image",
}: AboutSectionProps) => {
  return (
    <ModuleSection title={title}>
      <Typography
        level="body-lg"
        sx={{ fontFamily: "inherit", textAlign: "center", lineHeight: "32px" }}
      >
        {text1}
      </Typography>
      <Typography
        level="body-lg"
        sx={{ fontFamily: "inherit", textAlign: "center", lineHeight: "32px" }}
      >
        {text2}
      </Typography>
      <Typography
        level="body-lg"
        sx={{ fontFamily: "inherit", textAlign: "center", lineHeight: "32px" }}
      >
        {text3}
      </Typography>
      {additionalContent}
      <Stack
        sx={{
          alignItems: "center",
          columnGap: "36px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          position: "relative",
          rowGap: "24px",
        }}
      >
        {mediaType === "video" ? (
          <>
            <video
              src={media?.[0].src}
              autoPlay
              loop
              muted
              playsInline
              style={{
                objectFit: "cover",
                width: 256,
                height: 256,
              }}
            />
            <video
              src={media?.[1].src}
              autoPlay
              loop
              muted
              playsInline
              style={{
                objectFit: "cover",
                width: 256,
                height: 256,
              }}
            />
          </>
        ) : (
          <>
            <img
              src={media?.[0].src}
              width={256}
              loading="lazy"
              alt={media?.[0].alt}
            />
            <img
              src={media?.[1].src}
              width={256}
              loading="lazy"
              alt={media?.[1].alt}
            />
          </>
        )}
      </Stack>
    </ModuleSection>
  );
};
