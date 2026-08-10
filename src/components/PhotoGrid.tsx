import { useState } from "react";

export type PhotoGridItem = {
  id: string;
  title: string;
  image: string;
  alt: string;
  description?: string;
  href?: string;
};

type PhotoGridProps = {
  items: PhotoGridItem[];
  emptyMessage?: string;
};

export function PhotoGrid({ items, emptyMessage }: PhotoGridProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  if (items.length === 0) {
    return <p className="gallery-empty">{emptyMessage ?? "coming soon"}</p>;
  }

  const active = items.find((item) => item.id === activeId) ?? null;

  return (
    <>
      <div className="photo-grid">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className="photo-grid-item"
            onClick={() => setActiveId(item.id)}
          >
            <img src={item.image} alt={item.alt} loading="lazy" />
          </button>
        ))}
      </div>

      {active && (
        <div className="photo-lightbox" onClick={() => setActiveId(null)}>
          <div
            className="photo-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="photo-lightbox-close"
              onClick={() => setActiveId(null)}
              aria-label="close"
            >
              ×
            </button>
            <img src={active.image} alt={active.alt} />
            <h3>{active.title}</h3>
            {active.description && <p>{active.description}</p>}
            {active.href && (
              <a href={active.href} target="_blank" rel="noreferrer">
                view →
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}
