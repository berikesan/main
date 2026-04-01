"use client";

import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { EVENT_INFO } from "../data/content";

interface GuestMessage {
  name: string;
  message: string;
  attendance: string;
}

export default function RSVPSection() {
  const ref = useScrollAnimation();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [attendance, setAttendance] = useState("hadir");
  const [submitted, setSubmitted] = useState(false);
  const [messages, setMessages] = useState<GuestMessage[]>([
    { name: "Putu", message: "Semoga acaranya sukses dan meriah! 🎉", attendance: "Hadir" },
    { name: "Kadek Ari", message: "Sangat menantikan acara ini. Semoga berjalan lancar!", attendance: "Hadir" },
    { name: "Gede Wira", message: "Bangga dengan Duta Bahasa Bali! 🌺", attendance: "Hadir" },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setMessages((prev) => [
      { name, message, attendance: attendance === "hadir" ? "Hadir" : "Tidak Hadir" },
      ...prev,
    ]);
    setSubmitted(true);
    setName("");
    setMessage("");
  };

  return (
    <section className="max-w-[500px] mx-auto py-16 px-6 text-center" style={{ backgroundColor: "var(--teal-bg)" }} ref={ref}>
      {/* Closing text */}
      <div className="animate-on-scroll">
        <p className="text-sm leading-7 text-justify mb-8" style={{ color: "rgba(255, 255, 255, 0.9)", fontFamily: "var(--font-body)" }}>
          {EVENT_INFO.closing}
        </p>
      </div>

      {/* Divider */}
      <div className="dubas-rsvp__divider animate-on-scroll">
        <span />
        <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--gold-accent)">
          <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
        </svg>
        <span />
      </div>

      {/* RSVP Form */}
      <div className="animate-on-scroll">
        <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)", color: "var(--gold-text)" }}>
          Konfirmasi Kehadiran
        </h3>

        {submitted && (
          <div className="mb-4 p-3 rounded-lg text-sm" style={{ background: "rgba(34, 197, 94, 0.15)", color: "#4ade80" }}>
            ✅ Terima kasih atas konfirmasi Anda!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Nama Anda"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="dubas-rsvp__input"
              required
            />
          </div>

          <div className="mb-4">
            <textarea
              placeholder="Ucapan & Doa"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="dubas-rsvp__textarea"
              rows={3}
            />
          </div>

          <div className="mb-4">
            <div className="flex gap-3 justify-center">
              <label className={`dubas-rsvp__radio-label ${attendance === "hadir" ? "dubas-rsvp__radio-label--active" : ""}`}>
                <input
                  type="radio"
                  name="attendance"
                  value="hadir"
                  checked={attendance === "hadir"}
                  onChange={(e) => setAttendance(e.target.value)}
                />
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20,6 9,17 4,12" />
                </svg>
                Hadir
              </label>
              <label className={`dubas-rsvp__radio-label ${attendance === "tidak" ? "dubas-rsvp__radio-label--active" : ""}`}>
                <input
                  type="radio"
                  name="attendance"
                  value="tidak"
                  checked={attendance === "tidak"}
                  onChange={(e) => setAttendance(e.target.value)}
                />
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                Tidak Hadir
              </label>
            </div>
          </div>

          <button type="submit" className="dubas-rsvp__submit-btn">
            Kirim Konfirmasi
          </button>
        </form>
      </div>

      {/* Message wall */}
      <div className="animate-on-scroll mt-8">
        <div>
          {messages.map((msg, index) => (
            <div key={`${msg.name}-${index}`} className="dubas-rsvp__message-card">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm" style={{ color: "var(--gold-text)" }}>{msg.name}</span>
                <span className={msg.attendance === "Hadir" ? "dubas-rsvp__badge-hadir" : "dubas-rsvp__badge-tidak"}>
                  {msg.attendance}
                </span>
              </div>
              {msg.message && (
                <p className="text-sm" style={{ color: "rgba(255, 255, 255, 0.8)" }}>{msg.message}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
