import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOL Serviços de Oftalmologia — Privacidade e Termos",
  description: "Política de Privacidade e Termos de Serviço da SOL Serviços de Oftalmologia LTDA.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}