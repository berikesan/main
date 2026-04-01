"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function HeroSection() {
  const ref = useScrollAnimation();

  return (
    <section className="dubas-hero" ref={ref}>
      <div className="dubas-hero__bg" />

      {/* Institutional Logo Pill */}
      <div className="dubas-hero__logo-pill animate-on-scroll">
        <img
          src="https://digital-creative.id/wp-content/uploads/2022/05/2-1024x307.png"
          alt="Kemendikdasmen Logo"
          className="h-6 w-auto"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-1 flex flex-col items-center max-w-[400px]">
        {/* Crest */}
        <div className="mb-2 animate-on-scroll">
          <img
            src="https://digital-creative.id/wp-content/uploads/2024/05/Logo-Dubas-Bali.png"
            alt="Duta Bahasa Crest"
            className="dubas-hero__crest"
          />
        </div>

        {/* Brand Text */}
        <div className="mb-8 animate-on-scroll">
          <p className="text-xl font-medium m-0 tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
            Duta Bahasa
          </p>
          <p className="text-2xl font-extrabold -mt-1 m-0 tracking-tight dubas-hero__brand-subtitle" style={{ fontFamily: "var(--font-heading)" }}>
            Provinsi Bali
          </p>
        </div>

        {/* Puncak Final */}
        <h1 className="text-4xl font-bold mb-2 animate-on-scroll dubas-hero__puncak-final" style={{ fontFamily: "var(--font-heading)" }}>
          Puncak Final
        </h1>

        {/* Gold Highlight */}
        <div className="dubas-hero__gold-highlight animate-on-scroll">
          DUTA BAHASA PROVINSI BALI 2026
        </div>

        {/* Event Date */}
        <p className="text-xl font-medium opacity-90 animate-on-scroll" style={{ fontFamily: "var(--font-heading)" }}>
          Sabtu, 7 Maret 2026
        </p>

        {/* Filigree */}
        <div className="mt-6 animate-on-scroll">
          <svg width="200" height="30" viewBox="0 0 200 30" fill="none" stroke="#C5963A" strokeWidth="1.5" opacity="0.8">
            <path d="M0 15 Q30 0, 50 15 T100 15 T150 15 T200 15" />
            <circle cx="100" cy="15" r="4" fill="#C5963A" />
          </svg>
        </div>
      </div>
    </section>
  );
}
