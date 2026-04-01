"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { WINNERS } from "../data/content";

export default function WinnersSection() {
  const ref = useScrollAnimation();

  return (
    <section className="max-w-[500px] mx-auto py-16 px-6 text-center bg-(--teal-bg)" ref={ref}>
      <div className="animate-on-scroll">
        <h2 className="text-3xl font-bold mb-2 font-(family-name:--font-heading) text-(--gold-text)">
          Pemenang Duta Bahasa
        </h2>
        <h3 className="text-xl font-medium mb-8 font-(family-name:--font-heading)">
          Provinsi Bali 2025
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

      <p className="text-sm mb-4 animate-on-scroll text-(--gold-text)">
        Duta Bahasa Provinsi Bali 2025
      </p>

      {/* Winners grid */}
      <div className="flex flex-col gap-12 mt-8">
        {WINNERS.map((winner) => (
          <div
            key={winner.name}
            className="flex flex-col items-center animate-on-scroll"
          >
            <div className="w-[200px] h-[280px] rounded-[100px] border-3 border-(--gold-border) overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] mb-4">
              <img
                src={winner.image}
                alt={winner.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-lg font-semibold mb-0.5 font-(family-name:--font-heading) text-(--gold-text)">
              {winner.name}
            </h4>
            {winner.title && (
              <p className="text-sm tracking-wide text-white/70 font-(family-name:--font-body)">
                {winner.title}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
