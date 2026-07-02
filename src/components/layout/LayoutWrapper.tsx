import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

interface LayoutWrapperProps {
  children: ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen pb-14 lg:pb-0">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
