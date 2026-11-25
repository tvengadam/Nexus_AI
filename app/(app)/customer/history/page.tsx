"use client";
import { useState } from "react";
import { useConversations } from "@/lib/hooks/useConversations";
import { Input } from "@/components/ui/input";

export default function HistoryPage() {
  const { data, loading } = useConversations();
  const [q, setQ] = useState("");
  const filtered = data.filter((c) => c.title.toLowerCase().includes(q.toLowerCase()));
  if (loading) return <div>Loading...</div>;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Conversation History</h1>
      <Input placeholder="Search..." value={q} onChange={(e)=>setQ(e.target.value)} className="max-w-sm" />
      <ul className="space-y-2">{filtered.map((c)=><li key={c.id} className="border border-zinc-800 rounded p-3 flex justify-between"><span>{c.title}</span><span className="text-xs text-zinc-500">{c.updatedAt}</span></li>)}</ul>
      {filtered.length===0 && <p className="text-zinc-500">No conversations.</p>}
    </div>
  );
}
