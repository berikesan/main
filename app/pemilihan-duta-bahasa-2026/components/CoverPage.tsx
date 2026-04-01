"use client";

import { useState } from "react";

interface CoverPageProps {
  guestName: string;
  onOpen: () => void;
}

export default function CoverPage({ guestName, onOpen }: CoverPageProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    onOpen();
  };

  return (
    <div className={`dubas-cover ${isOpening ? "dubas-cover--fade-out" : ""}`}>
      <div className="dubas-cover__bg-overlay" />

      <div className="relative z-2 flex flex-col items-center justify-center w-full max-w-[400px] p-8 text-center">
        {/* Institutional Logos */}
        <div className="flex gap-4 mb-6 justify-center">
          <img
            src="https://digital-creative.id/wp-content/uploads/2024/05/tut-wuri-hndyn.png"
            alt="Kemendikbud"
            className="dubas-cover__mini-logo"
          />
          <img
            src="https://digital-creative.id/wp-content/uploads/2024/05/logo-balai-bahasa.png"
            alt="Balai Bahasa"
            className="dubas-cover__mini-logo"
          />
        </div>

        {/* Duta Bahasa Crest */}
        <div className="mb-8">
          <img
            src="https://digital-creative.id/wp-content/uploads/2024/05/Logo-Dubas-Bali.png"
            alt="Duta Bahasa Bali"
            className="dubas-cover__main-crest"
          />
        </div>

        <div className="mb-10">
          <p className="text-sm font-medium tracking-widest uppercase m-0" style={{ fontFamily: "var(--font-body)" }}>
            Puncak Final
          </p>
          <h1 className="dubas-cover__main-title">DUTA BAHASA</h1>
          <p className="text-sm font-semibold tracking-[0.15em] m-0" style={{ color: "var(--gold-text)", fontFamily: "var(--font-body)" }}>
            PROVINSI BALI 2026
          </p>

          <div className="my-6 opacity-70">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--gold-border)">
              <path d="M12 2L14.5 9.5H22L16 14.5L18.5 22L12 17L5.5 22L8 14.5L2 9.5H9.5L12 2Z" />
            </svg>
          </div>

          <p className="text-sm italic mb-2" style={{ color: "rgba(255, 255, 255, 0.8)", fontFamily: "var(--font-body)" }}>
            Kepada Yth.
          </p>
          <h2 className="text-2xl font-bold m-0" style={{ fontFamily: "var(--font-heading)", textShadow: "0 2px 5px rgba(0,0,0,0.3)" }}>
            {guestName || "Tamu Undangan"}
          </h2>
        </div>

        <button
          onClick={handleOpen}
          className={`dubas-cover__open-btn ${isOpening ? "dubas-cover__open-btn--clicked" : ""}`}
          disabled={isOpening}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          {isOpening ? "Membuka..." : "Buka Undangan"}
        </button>
      </div>
    </div>
  );
}
