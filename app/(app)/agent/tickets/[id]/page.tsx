"use client";
import { useParams } from "next/navigation";
import { useTickets } from "@/lib/hooks/useTickets";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { ActionApprovalCard } from "@/components/shared/ActionApprovalCard";

export default function AgentTicketPage() {
  const params = useParams();
  const { data } = useTickets();
  const t = data.find((x) => x.id === String(params.id)) ?? data[0];
  if (!t) return <div>Loading...</div>;
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="border border-zinc-800 rounded-lg p-4 space-y-2"><h2 className="font-medium">Ticket</h2><p>{t.title}</p><StatusBadge status={t.status} /><p className="text-sm text-zinc-400">{t.description}</p></div>
      <div className="border border-zinc-800 rounded-lg p-4"><h2 className="font-medium mb-2">Reply</h2><textarea className="w-full h-32 bg-zinc-900 border border-zinc-800 rounded p-2" /><button className="mt-2 px-3 py-1.5 bg-indigo-600 text-white rounded text-sm">Send</button></div>
      <div className="border border-zinc-800 rounded-lg p-4 space-y-3"><h2 className="font-medium">AI Panel</h2><ActionApprovalCard title="Create follow-up ticket" category="Refund" priority="Medium" summary="Customer requested refund status update" /></div>
    </div>
  );
}
