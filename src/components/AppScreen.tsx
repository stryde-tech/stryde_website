type AppScreenProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function AppScreen({ src, alt, className = "" }: AppScreenProps) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[21rem] rounded-[2rem] border border-border bg-background p-2 shadow-[0_34px_110px_rgba(46,111,232,0.22)] ${className}`}
    >
      <img
        alt={alt}
        className="aspect-[9/19.5] w-full rounded-[1.55rem] object-cover"
        loading="lazy"
        src={src}
      />
    </div>
  );
}
