import { useState } from "react";

export type GalleryItem = {
  id: string;
  title: string;
  image: string;
  alt: string;
  description?: string;
  href?: string;
};

type ExpandableGalleryProps = {
  items: GalleryItem[];
  emptyMessage?: string;
};

export function ExpandableGallery({ items, emptyMessage }: ExpandableGalleryProps) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

  if (items.length === 0) {
    return <p className="gallery-empty">{emptyMessage ?? "coming soon"}</p>;
  }

  const active = items.find((item) => item.id === activeId) ?? items[0];

  return (
    <div className="expandable-gallery">
      <div className="gallery-list">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`gallery-list-item${item.id === active.id ? " active" : ""}`}
            onClick={() => setActiveId(item.id)}
          >
            <img src={item.image} alt={item.alt} />
            <span>{item.title}</span>
          </button>
        ))}
      </div>
      <div className="gallery-detail">
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
  );
}
