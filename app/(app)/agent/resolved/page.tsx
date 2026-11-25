"use client";
import { useTickets } from "@/lib/hooks/useTickets";
import { StatusBadge } from "@/components/shared/StatusBadge";

export default function ResolvedPage() {
  const { data, loading } = useTickets();
  const resolved = data.filter((t) => t.status === "Resolved" || t.status === "Closed");
  if (loading) return <div>Loading...</div>;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Resolved Tickets</h1>
      <table className="w-full text-sm border border-zinc-800 rounded-lg overflow-hidden">
        <thead className="bg-zinc-900 text-zinc-400"><tr><th className="p-3 text-left">ID</th><th className="p-3 text-left">Title</th><th className="p-3 text-left">Status</th><th className="p-3 text-left">Updated</th></tr></thead>
        <tbody>{resolved.map((t)=><tr key={t.id} className="border-t border-zinc-800"><td className="p-3">{t.id}</td><td className="p-3">{t.title}</td><td className="p-3"><StatusBadge status={t.status}/></td><td className="p-3">{t.updated}</td></tr>)}</tbody>
      </table>
    </div>
  );
}
