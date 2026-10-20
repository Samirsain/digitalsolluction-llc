// Free-licence Unsplash photos served from Unsplash's image CDN, sized per viewport.
const url = (id, w, ratio) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=75&w=${w}&h=${Math.round(w / ratio)}`;

export default function Photo({ id, alt, ratio = 1.5, sizes = "100vw", priority = false, className }) {
  return (
    <img
      className={className}
      src={url(id, 1200, ratio)}
      srcSet={[480, 800, 1200, 1800].map((w) => `${url(id, w, ratio)} ${w}w`).join(", ")}
      sizes={sizes}
      alt={alt}
      width={1200}
      height={Math.round(1200 / ratio)}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
    />
  );
}
