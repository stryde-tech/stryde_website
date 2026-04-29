type ShareGalleryItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

type ShareGalleryProps = {
  items: ShareGalleryItem[];
};

export default function ShareGallery({ items }: ShareGalleryProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((item) => (
        <article
          className="glass-card overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-sky/40"
          key={item.src}
        >
          <div className="bg-surface p-3">
            <img
              alt={item.alt}
              className="aspect-[9/16] w-full rounded-[1.25rem] object-cover"
              loading="lazy"
              src={item.src}
            />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-black text-text">{item.title}</h3>
            <p className="mt-2 leading-7 text-muted">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
