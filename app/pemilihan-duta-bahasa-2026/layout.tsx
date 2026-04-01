import type { Metadata } from "next";
import "./styles/pemilihan-duta-bahasa.css";

export const metadata: Metadata = {
  title: "TAKLIMAT — Finalis Duta Bahasa Provinsi Bali 2026",
  description: "Undangan Digital Puncak Final Pemilihan Duta Bahasa Provinsi Bali 2026",
  openGraph: {
    title: "TAKLIMAT — Finalis Duta Bahasa Provinsi Bali 2026",
    description: "Undangan Digital Puncak Final Pemilihan Duta Bahasa Provinsi Bali 2026",
    type: "website",
  },
};

export default function PemilihanDutaBahasaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="dubas-root">{children}</div>;
}
