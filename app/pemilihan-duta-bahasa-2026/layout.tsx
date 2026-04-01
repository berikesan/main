import type { Metadata } from "next";
import "./styles/pemilihan-duta-bahasa.css";

export const metadata: Metadata = {
  title: "Puncak Final Duta Bahasa Provinsi Bali 2026",
  description: "Undangan Digital Puncak Final Pemilihan Duta Bahasa Provinsi Bali 2026",
  openGraph: {
    title: "Puncak Final Duta Bahasa Provinsi Bali 2026",
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
