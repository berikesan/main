"use client";

import { useState } from "react";
import coverBg from "../assets/cover-background.webp";
import logoDubas from "../assets/logo-dubas.png";

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
    <div
      className={`fixed inset-0 z-1000 flex flex-col items-center justify-center overflow-hidden bg-(--teal-bg) transition-all duration-600 ease-in-out ${
        isOpening ? "opacity-0 scale-105 pointer-events-none" : ""
      }`}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 scale-110 bg-cover bg-center blur-[5px] brightness-50"
        style={{ backgroundImage: `url(${coverBg.src})` }}
      />
      {/* White overlay */}
      <div className="absolute inset-0 z-1 bg-white/30" />
      {/* Fog top */}
      <div className="absolute top-0 left-0 right-0 h-[35%] z-2 pointer-events-none bg-linear-to-b from-(--teal-bg) to-transparent" />
      {/* Fog bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[35%] z-2 pointer-events-none bg-linear-to-t from-(--teal-bg) to-transparent" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl px-6 py-12 text-center gap-y-6 md:gap-y-8">
        {/* Duta Bahasa Crest */}
        <div className="mb-2 md:mb-4">
          <img
            src={logoDubas.src}
            alt="Duta Bahasa Bali"
            className="w-56 md:w-52 lg:w-56 xl:w-60 2xl:w-64 h-auto drop-shadow-[0_0_15px_rgba(197,150,58,0.5)]"
          />
        </div>

        <h1 className="text-3xl md:text-[2.2rem] lg:text-[2.8rem] xl:text-[3.2rem] 2xl:text-[3.8rem] font-bold m-0 leading-tight font-[family-name:Galada,cursive] text-(--gold-text) [text-shadow:0_2px_8px_rgba(0,0,0,0.3)]">
          Duta Bahasa Provinsi Bali 2026
        </h1>

        <div className="flex flex-col gap-1 md:gap-2 mt-4 md:mt-8">
          <p className="text-xs md:text-base lg:text-lg xl:text-xl text-white/80 uppercase tracking-[0.3em] font-semibold font-(family-name:--font-body) [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
            Kpd Bpk/Ibu/Saudara/i
          </p>
          <h2 className="text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-bold m-0 text-white font-(family-name:--font-heading) [text-shadow:0_2px_5px_rgba(0,0,0,0.3)]">
            {guestName || "Tamu Undangan"}
          </h2>
        </div>

        <p className="text-sm md:text-sm lg:text-base xl:text-lg leading-relaxed text-white/90 max-w-[280px] md:max-w-md lg:max-w-xl xl:max-w-2xl mx-auto font-medium font-(family-name:--font-body) [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
          Tanpa Mengurangi Rasa Hormat, Kami Mengundang Bpk/Ibu/Saudara/i Untuk
          Hadir Di Acara Puncak Final Pemilihan Duta Bahasa Provinsi Bali 2026
        </p>

        <button
          onClick={handleOpen}
          disabled={isOpening}
          className={`inline-flex items-center gap-3 px-2 py-1 bg-white/20 border-2 border-white/40 rounded-md text-white font-bold text-base md:text-lg lg:text-xl cursor-pointer backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 ease-out font-(family-name:--font-body) [text-shadow:0_1px_4px_rgba(0,0,0,0.3)] hover:bg-white/30 hover:border-white hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)] active:scale-95 ${
            isOpening ? "opacity-70 scale-95!" : ""
          }`}
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
