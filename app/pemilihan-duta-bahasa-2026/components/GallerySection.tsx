"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { GALLERY_IMAGES } from "../data/content";

export default function GallerySection() {
  const ref = useScrollAnimation();

  return (
    <section className="max-w-[500px] mx-auto py-16 px-6 text-center bg-(--teal-bg)" ref={ref}>
      <div className="animate-on-scroll">
        <h2 className="text-3xl font-bold mb-8 font-(family-name:--font-heading) text-(--gold-text)">
          Galeri
        </h2>
        <div className="flex items-center gap-3 w-[200px] mx-auto mb-8">
          <span className="flex-1 h-px bg-linear-to-r from-transparent via-(--gold-border) to-transparent" />
          <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--gold-accent)">
            <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
          </svg>
          <span className="flex-1 h-px bg-linear-to-r from-transparent via-(--gold-border) to-transparent" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {GALLERY_IMAGES.map((src, index) => (
          <div
            key={src}
            className="animate-on-scroll"
          >
            <div className="border-2 border-[rgba(197,150,58,0.3)] rounded-xl overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
              <img
                src={src}
                alt={`Galeri ${index + 1}`}
                loading="lazy"
                className="w-full h-[150px] object-cover block"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
