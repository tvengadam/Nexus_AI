"use client";
import { useState } from "react";
import { useDocuments } from "@/lib/hooks/useDocuments";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

export default function KnowledgeBasePage() {
  const { data, loading, error } = useDocuments();
  const [q, setQ] = useState("");
  const filtered = data.filter((d) => d.name.toLowerCase().includes(q.toLowerCase()));
  if (loading) return <div className="space-y-2">{Array.from({length:5}).map((_,i)=><Skeleton key={i} className="h-10 w-full"/>)}</div>;
  if (error) return <div className="text-red-400">{error}</div>;
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Knowledge Base</h1>
        <Button><a href="/admin/knowledge-base/upload">Upload</a></Button>
      </div>
      <Input placeholder="Search documents..." value={q} onChange={(e)=>setQ(e.target.value)} className="max-w-sm" />
      <div className="border border-zinc-800 rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-zinc-900 text-zinc-400"><tr><th className="text-left p-3">Name</th><th className="text-left p-3">Size</th><th className="text-left p-3">Uploaded</th><th className="text-left p-3">Status</th><th className="text-left p-3">Chunks</th></tr></thead>
          <tbody>
            {filtered.map((d) => (
              <tr key={d.id} className="border-t border-zinc-800">
                <td className="p-3">{d.name}</td>
                <td className="p-3">{Math.round(d.size/1024)} KB</td>
                <td className="p-3">{d.uploadedAt}</td>
                <td className="p-3"><Badge>{d.status}</Badge></td>
                <td className="p-3">{d.chunks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
