export const LazyVideo = ({
  ...props
}: React.VideoHTMLAttributes<HTMLVideoElement>) => {
  return (
    <div data-aos="fade-up" data-aos-delay={300}>
      <video {...props} />
    </div>
  );
};
