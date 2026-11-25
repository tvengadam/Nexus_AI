"use client";
import { useParams } from "next/navigation";
import { useTickets } from "@/lib/hooks/useTickets";
import { StatusBadge } from "@/components/shared/StatusBadge";

export default function CustomerTicketDetailPage() {
  const params = useParams();
  const { data } = useTickets();
  const t = data.find((x) => x.id === String(params.id)) ?? data[0];
  if (!t) return <div>Loading...</div>;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">{t.title}</h1>
      <StatusBadge status={t.status} />
      <p className="text-zinc-400">{t.description}</p>
    </div>
  );
}
