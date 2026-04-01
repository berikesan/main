"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { EVENT_INFO } from "../data/content";

export default function SambutanSection() {
  const ref = useScrollAnimation();

  return (
    <section className="max-w-[500px] mx-auto py-16 px-6 text-center" style={{ backgroundColor: "var(--teal-bg)" }} ref={ref}>
      {/* Swastyastu image */}
      <div className="animate-on-scroll">
        <img
          src="https://digital-creative.id/wp-content/uploads/2023/09/swastyastu.png"
          alt="Om Swastyastu"
          className="dubas-sambutan__swastyastu"
        />
      </div>

      {/* Greeting */}
      <div className="animate-on-scroll">
        <h2 className="text-lg mb-4" style={{ fontFamily: "var(--font-heading)", color: "var(--gold-text)" }}>
          Om Swastyastu
        </h2>
      </div>

      {/* Gold divider */}
      <div className="dubas-sambutan__divider animate-on-scroll">
        <span />
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="3" fill="var(--gold-accent)" />
          <circle cx="10" cy="10" r="6" stroke="var(--gold-accent)" strokeWidth="0.5" opacity="0.5" />
        </svg>
        <span />
      </div>

      {/* Description */}
      <div className="animate-on-scroll">
        <p className="text-sm leading-7 text-justify" style={{ color: "rgba(255, 255, 255, 0.9)", fontFamily: "var(--font-body)" }}>
          {EVENT_INFO.sambutan}
        </p>
      </div>

      {/* Invitation text */}
      <div className="animate-on-scroll">
        <p className="text-sm leading-7 text-justify" style={{ color: "rgba(255, 255, 255, 0.9)", fontFamily: "var(--font-body)" }}>
          {EVENT_INFO.invitation}
        </p>
      </div>
    </section>
  );
}
