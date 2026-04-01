"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { GALLERY_IMAGES } from "../data/content";

export default function GallerySection() {
  const ref = useScrollAnimation();

  return (
    <section className="max-w-[500px] mx-auto py-16 px-6 text-center" style={{ backgroundColor: "var(--teal-bg)" }} ref={ref}>
      <div className="animate-on-scroll">
        <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: "var(--font-heading)", color: "var(--gold-text)" }}>
          Galeri
        </h2>
        <div className="dubas-gallery__divider">
          <span />
          <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--gold-accent)">
            <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
          </svg>
          <span />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {GALLERY_IMAGES.map((src, index) => (
          <div
            key={src}
            className="animate-on-scroll"
          >
            <div className="dubas-gallery__frame">
              <img
                src={src}
                alt={`Galeri ${index + 1}`}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
