"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { FINALISTS, EVENT_INFO } from "../data/content";

export default function FinalistsSection() {
  const ref = useScrollAnimation();

  return (
    <section className="max-w-[500px] mx-auto py-16 px-6 text-center" style={{ backgroundColor: "var(--teal-bg)" }} ref={ref}>
      <div className="animate-on-scroll">
        <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)", color: "var(--gold-text)" }}>
          Finalis Duta Bahasa
        </h2>
        <h3 className="text-xl font-medium mb-8" style={{ fontFamily: "var(--font-heading)" }}>
          Provinsi Bali 2026
        </h3>
      </div>

      {/* Divider */}
      <div className="dubas-finalists__divider animate-on-scroll">
        <span />
        <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--gold-accent)">
          <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
        </svg>
        <span />
      </div>

      <p className="text-sm italic mb-8 animate-on-scroll" style={{ color: "var(--gold-text)" }}>
        {EVENT_INFO.tagline}
      </p>

      {/* Finalists grid */}
      <div className="grid grid-cols-2 gap-6 mt-8">
        {FINALISTS.map((finalist, index) => (
          <div
            key={`${finalist.name}-${index}`}
            className="flex flex-col items-center animate-on-scroll"
          >
            <div className="dubas-finalists__portrait">
              <img
                src={finalist.image}
                alt={finalist.name}
                loading="lazy"
              />
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-0.5" style={{ fontFamily: "var(--font-heading)" }}>
                {finalist.name}
              </h4>
              {finalist.university && (
                <p className="text-xs opacity-80" style={{ color: "var(--gold-text)", fontFamily: "var(--font-body)" }}>
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
