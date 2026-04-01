"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CoverPage from "./components/CoverPage";
import HeroSection from "./components/HeroSection";
import SambutanSection from "./components/SambutanSection";
import EventDetailsSection from "./components/EventDetailsSection";
import WinnersSection from "./components/WinnersSection";
import FinalistsSection from "./components/FinalistsSection";
import GallerySection from "./components/GallerySection";
import RSVPSection from "./components/RSVPSection";
import FooterSection from "./components/FooterSection";

function InvitationContent() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") || "";
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      setShowContent(true);
      window.scrollTo(0, 0);
    }, 100);
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--teal-bg)" }}>
      {!showContent && (
        <CoverPage guestName={guestName} onOpen={handleOpen} />
      )}

      {isOpen && (
        <div
          style={{
            opacity: showContent ? 1 : 0,
            transition: "opacity 1s ease-out",
          }}
        >
          <HeroSection />
          <SambutanSection />
          <EventDetailsSection />
          <WinnersSection />
          <FinalistsSection />
          <GallerySection />
          <RSVPSection />
          <FooterSection />
        </div>
      )}
    </main>
  );
}

export default function PemilihanDutaBahasaPage() {
  return (
    <Suspense
      fallback={
        <div
          className="min-h-screen flex items-center justify-center"
          style={{ backgroundColor: "var(--teal-deep)", color: "var(--gold-accent)" }}
        >
          Memuat undangan...
        </div>
      }
    >
      <InvitationContent />
    </Suspense>
  );
}
