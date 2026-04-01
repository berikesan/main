"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { FINALISTS, EVENT_INFO } from "../data/content";

export default function FinalistsSection() {
  const ref = useScrollAnimation();

  return (
    <section className="max-w-[500px] mx-auto py-16 px-6 text-center bg-(--teal-bg)" ref={ref}>
      <div className="animate-on-scroll">
        <h2 className="text-3xl font-bold mb-2 font-(family-name:--font-heading) text-(--gold-text)">
          Finalis Duta Bahasa
        </h2>
        <h3 className="text-xl font-medium mb-8 font-(family-name:--font-heading)">
          Provinsi Bali 2026
        </h3>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 w-[200px] mx-auto mb-8 animate-on-scroll">
        <span className="flex-1 h-px bg-linear-to-r from-transparent via-(--gold-border) to-transparent" />
        <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--gold-accent)">
          <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
        </svg>
        <span className="flex-1 h-px bg-linear-to-r from-transparent via-(--gold-border) to-transparent" />
      </div>

      <p className="text-sm italic mb-8 animate-on-scroll text-(--gold-text)">
        {EVENT_INFO.tagline}
      </p>

      {/* Finalists grid */}
      <div className="grid grid-cols-2 gap-6 mt-8">
        {FINALISTS.map((finalist, index) => (
          <div
            key={`${finalist.name}-${index}`}
            className="flex flex-col items-center animate-on-scroll"
          >
            <div className="w-full aspect-square rounded-full border-2 border-(--gold-border) overflow-hidden mb-3 shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
              <img
                src={finalist.image}
                alt={finalist.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-0.5 font-(family-name:--font-heading)">
                {finalist.name}
              </h4>
              {finalist.university && (
                <p className="text-xs opacity-80 text-(--gold-text) font-(family-name:--font-body)">
                  {finalist.university}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
