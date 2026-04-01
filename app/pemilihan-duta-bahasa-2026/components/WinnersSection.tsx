"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { WINNERS } from "../data/content";

export default function WinnersSection() {
  const ref = useScrollAnimation();

  return (
    <section className="max-w-[500px] mx-auto py-16 px-6 text-center" style={{ backgroundColor: "var(--teal-bg)" }} ref={ref}>
      <div className="animate-on-scroll">
        <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)", color: "var(--gold-text)" }}>
          Pemenang Duta Bahasa
        </h2>
        <h3 className="text-xl font-medium mb-8" style={{ fontFamily: "var(--font-heading)" }}>
          Provinsi Bali 2025
        </h3>
      </div>

      {/* Divider */}
      <div className="dubas-winners__divider animate-on-scroll">
        <span />
        <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--gold-accent)">
          <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
        </svg>
        <span />
      </div>

      <p className="text-sm mb-4 animate-on-scroll" style={{ color: "var(--gold-text)" }}>
        Duta Bahasa Provinsi Bali 2025
      </p>

      {/* Winners grid */}
      <div className="flex flex-col gap-12 mt-8">
        {WINNERS.map((winner, index) => (
          <div
            key={winner.name}
            className={`flex flex-col items-center animate-on-scroll`}
          >
            <div className="dubas-winners__oval-frame">
              <img
                src={winner.image}
                alt={winner.name}
                loading="lazy"
              />
            </div>
            <h4 className="text-lg font-semibold mb-0.5" style={{ fontFamily: "var(--font-heading)", color: "var(--gold-text)" }}>
              {winner.name}
            </h4>
            {winner.title && (
              <p className="text-sm tracking-wide" style={{ color: "rgba(255, 255, 255, 0.7)", fontFamily: "var(--font-body)" }}>
                {winner.title}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
