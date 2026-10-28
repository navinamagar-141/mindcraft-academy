"use client";

import type { ReactNode } from "react";
import { useConsultationModal } from "@/components/ConsultationProvider";

export default function ConsultationButton({
  children,
  className,
  programSlug,
  tier,
}: {
  children: ReactNode;
  className: string;
  programSlug?: string;
  tier?: "Basic" | "Advanced";
}) {
  const openConsultation = useConsultationModal();
  return (
    <button type="button" onClick={() => openConsultation({ programSlug, tier })} className={className}>
      {children}
    </button>
  );
}
