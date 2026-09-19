import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOL Oftalmologia | Ji-Paraná - RO",
  description:
    "SOL Serviços de Oftalmologia em Ji-Paraná, Rondônia. Atendimento oftalmológico, diagnóstico, acompanhamento clínico e procedimentos.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
