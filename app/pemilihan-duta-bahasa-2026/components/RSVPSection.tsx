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
    <section className="max-w-[500px] mx-auto py-16 px-6 text-center bg-(--teal-bg)" ref={ref}>
      {/* Closing text */}
      <div className="animate-on-scroll">
        <p className="text-sm leading-7 text-justify mb-8 text-white/90 font-(family-name:--font-body)">
          {EVENT_INFO.closing}
        </p>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 w-[200px] mx-auto mb-8 animate-on-scroll">
        <span className="flex-1 h-px bg-linear-to-r from-transparent via-(--gold-border) to-transparent" />
        <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--gold-accent)">
          <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
        </svg>
        <span className="flex-1 h-px bg-linear-to-r from-transparent via-(--gold-border) to-transparent" />
      </div>

      {/* RSVP Form */}
      <div className="animate-on-scroll">
        <h3 className="text-2xl font-bold mb-6 font-(family-name:--font-heading) text-(--gold-text)">
          Konfirmasi Kehadiran
        </h3>

        {submitted && (
          <div className="mb-4 p-3 rounded-lg text-sm bg-[rgba(34,197,94,0.15)] text-[#4ade80]">
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
              className="w-full py-3 px-5 bg-white/8 border border-[rgba(197,150,58,0.3)] rounded-xl text-(--white) mb-4 font-(family-name:--font-body)"
              required
            />
          </div>

          <div className="mb-4">
            <textarea
              placeholder="Ucapan & Doa"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full py-3 px-5 bg-white/8 border border-[rgba(197,150,58,0.3)] rounded-xl text-(--white) mb-4 font-(family-name:--font-body)"
              rows={3}
            />
          </div>

          <div className="mb-4">
            <div className="flex gap-3 justify-center">
              <label className={`inline-flex items-center gap-2 py-2 px-4 border border-[rgba(197,150,58,0.3)] rounded-lg cursor-pointer text-[0.9rem] transition-all duration-200 ${attendance === "hadir" ? "bg-[rgba(197,150,58,0.2)] border-(--gold-border) text-(--gold-text)" : ""}`}>
                <input
                  type="radio"
                  name="attendance"
                  value="hadir"
                  checked={attendance === "hadir"}
                  onChange={(e) => setAttendance(e.target.value)}
                  className="hidden"
                />
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20,6 9,17 4,12" />
                </svg>
                Hadir
              </label>
              <label className={`inline-flex items-center gap-2 py-2 px-4 border border-[rgba(197,150,58,0.3)] rounded-lg cursor-pointer text-[0.9rem] transition-all duration-200 ${attendance === "tidak" ? "bg-[rgba(197,150,58,0.2)] border-(--gold-border) text-(--gold-text)" : ""}`}>
                <input
                  type="radio"
                  name="attendance"
                  value="tidak"
                  checked={attendance === "tidak"}
                  onChange={(e) => setAttendance(e.target.value)}
                  className="hidden"
                />
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                Tidak Hadir
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-4 bg-[image:var(--gold-3d)] text-(--teal-dark) border-none rounded-xl font-(family-name:--font-body) font-bold uppercase tracking-widest cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
          >
            Kirim Konfirmasi
          </button>
        </form>
      </div>

      {/* Message wall */}
      <div className="animate-on-scroll mt-8">
        <div>
          {messages.map((msg, index) => (
            <div key={`${msg.name}-${index}`} className="bg-white/5 border-l-3 border-l-(--gold-border) p-4 text-left mb-4 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-(--gold-text)">{msg.name}</span>
                <span className={msg.attendance === "Hadir"
                  ? "bg-[rgba(34,197,94,0.2)] text-[#4ade80] py-0.5 px-2 rounded text-[0.7rem] font-semibold"
                  : "bg-[rgba(239,68,68,0.2)] text-[#f87171] py-0.5 px-2 rounded text-[0.7rem] font-semibold"
                }>
                  {msg.attendance}
                </span>
              </div>
              {msg.message && (
                <p className="text-sm text-white/80">{msg.message}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
