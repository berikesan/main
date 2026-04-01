"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { EVENT_INFO } from "../data/content";

export default function SambutanSection() {
  const ref = useScrollAnimation();

  return (
    <section className="max-w-[500px] mx-auto py-16 px-6 text-center bg-(--teal-bg)" ref={ref}>
      {/* Swastyastu image */}
      <div className="animate-on-scroll">
        <img
          src="https://digital-creative.id/wp-content/uploads/2023/09/swastyastu.png"
          alt="Om Swastyastu"
          className="w-[120px] h-auto mb-6 drop-shadow-[0_0_10px_rgba(197,150,58,0.3)]"
        />
      </div>

      {/* Greeting */}
      <div className="animate-on-scroll">
        <h2 className="text-lg mb-4 font-(family-name:--font-heading) text-(--gold-text)">
          Om Swastyastu
        </h2>
      </div>

      {/* Gold divider */}
      <div className="flex items-center gap-3 w-[200px] mx-auto mb-8 animate-on-scroll">
        <span className="flex-1 h-px bg-linear-to-r from-transparent via-(--gold-border) to-transparent" />
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="3" fill="var(--gold-accent)" />
          <circle cx="10" cy="10" r="6" stroke="var(--gold-accent)" strokeWidth="0.5" opacity="0.5" />
        </svg>
        <span className="flex-1 h-px bg-linear-to-r from-transparent via-(--gold-border) to-transparent" />
      </div>

      {/* Description */}
      <div className="animate-on-scroll">
        <p className="text-sm leading-7 text-justify text-white/90 font-(family-name:--font-body)">
          {EVENT_INFO.sambutan}
        </p>
      </div>

      {/* Invitation text */}
      <div className="animate-on-scroll">
        <p className="text-sm leading-7 text-justify text-white/90 font-(family-name:--font-body)">
          {EVENT_INFO.invitation}
        </p>
      </div>
    </section>
  );
}
