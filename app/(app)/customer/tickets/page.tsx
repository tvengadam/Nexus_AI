"use client";
import { useState } from "react";
import { useTickets } from "@/lib/hooks/useTickets";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { PriorityBadge } from "@/components/shared/StatusBadge";
import { Input } from "@/components/ui/input";

export default function CustomerTicketsPage() {
  const { data, loading } = useTickets();
  const [q, setQ] = useState("");
  const filtered = data.filter((t) => t.title.toLowerCase().includes(q.toLowerCase()));
  if (loading) return <div>Loading...</div>;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">My Tickets</h1>
      <Input placeholder="Search..." value={q} onChange={(e)=>setQ(e.target.value)} className="max-w-sm" />
      <table className="w-full text-sm border border-zinc-800 rounded-lg overflow-hidden">
        <thead className="bg-zinc-900 text-zinc-400"><tr><th className="p-3 text-left">ID</th><th className="p-3 text-left">Title</th><th className="p-3 text-left">Category</th><th className="p-3 text-left">Priority</th><th className="p-3 text-left">Status</th><th className="p-3 text-left">Updated</th></tr></thead>
        <tbody>{filtered.map((t)=><tr key={t.id} className="border-t border-zinc-800"><td className="p-3">{t.id}</td><td className="p-3">{t.title}</td><td className="p-3">{t.category}</td><td className="p-3"><PriorityBadge priority={t.priority}/></td><td className="p-3"><StatusBadge status={t.status}/></td><td className="p-3">{t.updated}</td></tr>)}</tbody>
      </table>
    </div>
  );
}
