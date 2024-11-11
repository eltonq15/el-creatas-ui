export const LazyImage = ({
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img {...props} alt={props.alt} data-aos="fade-up" data-aos-delay={300} />
  );
};
