"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useCountdown } from "../hooks/useCountdown";
import { EVENT_INFO, EVENT_DATE } from "../data/content";

export default function EventDetailsSection() {
  const ref = useScrollAnimation();
  const { days, hours, minutes, seconds, isExpired } = useCountdown(EVENT_DATE);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <section className="max-w-[500px] mx-auto py-16 px-6 text-center bg-(--teal-bg)" ref={ref}>
      {/* Event details card */}
      <div className="bg-white/5 border border-[rgba(197,150,58,0.2)] rounded-[20px] px-6 py-8 backdrop-blur-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] animate-on-scroll">
        {/* Date */}
        <div className="flex items-center gap-4 text-left mb-6">
          <div className="text-(--gold-text) shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest mb-0.5 text-white/60 font-(family-name:--font-body)">
              Hari / Tanggal
            </p>
            <p className="text-lg font-semibold font-(family-name:--font-heading)">
              {EVENT_INFO.date}
            </p>
          </div>
        </div>

        {/* Time */}
        <div className="flex items-center gap-4 text-left mb-6">
          <div className="text-(--gold-text) shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12,6 12,12 16,14" />
            </svg>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest mb-0.5 text-white/60 font-(family-name:--font-body)">
              Waktu
            </p>
            <p className="text-lg font-semibold font-(family-name:--font-heading)">
              {EVENT_INFO.time}
            </p>
          </div>
        </div>

        {/* Venue */}
        <div className="flex items-center gap-4 text-left mb-6">
          <div className="text-(--gold-text) shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest mb-0.5 text-white/60 font-(family-name:--font-body)">
              Tempat
            </p>
            <p className="text-lg font-semibold font-(family-name:--font-heading)">
              {EVENT_INFO.venue}
            </p>
          </div>
        </div>

        {/* Maps button */}
        <a
          href={EVENT_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-(--gold-text) no-underline text-[0.9rem] font-semibold border-b border-transparent transition-all duration-300 hover:border-(--gold-text)"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          Lokasi Acara
        </a>
      </div>

      {/* Countdown */}
      <div className="animate-on-scroll mt-12">
        <h3 className="text-xl font-bold mb-6 font-(family-name:--font-heading) text-(--gold-text)">
          Menuju Puncak Acara
        </h3>

        <div className="grid grid-cols-4 gap-2">
          {[
            { value: pad(days), label: "Hari" },
            { value: pad(hours), label: "Jam" },
            { value: pad(minutes), label: "Menit" },
            { value: pad(seconds), label: "Detik" },
          ].map((item) => (
            <div key={item.label} className="bg-white/8 border border-[rgba(197,150,58,0.2)] rounded-xl py-3 px-1">
              <span className="text-2xl font-bold block font-(family-name:--font-heading)">
                {isExpired ? "00" : item.value}
              </span>
              <span className="text-xs uppercase text-(--gold-text) font-(family-name:--font-body)">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
