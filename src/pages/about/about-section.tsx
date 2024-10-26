import { Stack, Typography } from "@mui/joy";
import { useIsMobile } from "../../hooks/use-is-mobile";

interface AboutSectionProps {
  title: string;
  text1?: string;
  text2?: string;
  text3?: string;
  additionalContent?: React.ReactNode;
  media?: { src: string; alt: string }[];
  mediaType?: "image" | "video";
}
export const AboutSection = ({
  title,
  text1,
  text2,
  text3,
  additionalContent,
  media,
  mediaType = "image",
}: AboutSectionProps) => {
  const isMobile = useIsMobile();
  return (
    <Stack sx={{ width: "80%", gap: "1rem", maxWidth: 600 }}>
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

      <Typography
        level="body-lg"
        sx={{ fontFamily: "inherit", textAlign: "center" }}
      >
        {text1}
      </Typography>
      <Typography
        level="body-lg"
        sx={{ fontFamily: "inherit", textAlign: "center" }}
      >
        {text2}
      </Typography>
      <Typography
        level="body-lg"
        sx={{ fontFamily: "inherit", textAlign: "center" }}
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
          minHeight: "480px",
          padding: "1rem 0",
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
                position: "absolute",
                top: 0,
                left: isMobile ? 0 : "15%",
                zIndex: 0,
                borderRadius: 8,
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
                position: "absolute",
                bottom: 10,
                right: isMobile ? 0 : "15%",
                zIndex: 1,
                boxShadow: "1px 0px 34px -12px #000000",
                borderRadius: 8,
                rotate: "3deg",
              }}
            />
          </>
        ) : (
          <>
            <img
              style={{
                position: "absolute",
                top: 0,
                left: isMobile ? 0 : "15%",
                zIndex: 0,
                borderRadius: 8,
              }}
              src={media?.[0].src}
              width={256}
              loading="lazy"
              alt={media?.[0].alt}
            />
            <img
              style={{
                position: "absolute",
                bottom: 10,
                right: isMobile ? 0 : "15%",
                zIndex: 1,
                boxShadow: "1px 0px 34px -12px #000000",
                borderRadius: 8,
                rotate: "3deg",
              }}
              src={media?.[1].src}
              width={256}
              loading="lazy"
              alt={media?.[1].alt}
            />
          </>
        )}
      </Stack>
    </Stack>
  );
};
