"use client";
import { useTickets } from "@/lib/hooks/useTickets";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { PriorityBadge } from "@/components/shared/StatusBadge";

export default function AgentQueuePage() {
  const { data, loading } = useTickets();
  if (loading) return <div>Loading...</div>;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Ticket Queue</h1>
      <table className="w-full text-sm border border-zinc-800 rounded-lg overflow-hidden">
        <thead className="bg-zinc-900 text-zinc-400"><tr><th className="p-3 text-left">ID</th><th className="p-3 text-left">Title</th><th className="p-3 text-left">Priority</th><th className="p-3 text-left">Status</th></tr></thead>
        <tbody>{data.map((t)=><tr key={t.id} className="border-t border-zinc-800"><td className="p-3">{t.id}</td><td className="p-3">{t.title}</td><td className="p-3"><PriorityBadge priority={t.priority}/></td><td className="p-3"><StatusBadge status={t.status}/></td></tr>)}</tbody>
      </table>
    </div>
  );
}
