
import { useEffect, useMemo, useRef } from "react";
import { art } from "../data/art";
const INSTAGRAM_URL="https://www.instagram.com/huskiecat25/";

export function ArtSection() {
  const ref = useRef<HTMLDivElement>(null);
  const items = useMemo(() => [...art], []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let paused = false;

    const onEnter = () => (paused = true);
    const onLeave = () => (paused = false);

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    const speedPxPerFrame = 0.5;

    const tick = () => {
      if (!paused) {
        el.scrollLeft += speedPxPerFrame;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="art" id="art">
      <h1>art</h1>
      <div className="snap-carousel" ref={ref}>
        {items.map((a, i) => (
          <div className="snap-item" key={`${a.alt}-${i}`}>
            <img src={a.image} alt={a.alt} loading="lazy" />
          </div>
        ))}
        
        <a
          className="snap-item"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="See more artwork on Instagram"
        >
            <div className="insta-handle">
                <p>see more</p>
            </div>
        </a>
      </div>
    </section>
  );
}
