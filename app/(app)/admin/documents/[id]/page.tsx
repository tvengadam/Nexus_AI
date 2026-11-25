"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getDocument } from "@/lib/api/documents";
import { DocumentDetail } from "@/types/document";
import { Skeleton } from "@/components/ui/skeleton";

export default function DocumentDetailPage() {
  const params = useParams();
  const id = String(params.id);
  const [doc, setDoc] = useState<DocumentDetail | null>(null);
  useEffect(() => { getDocument(id).then(setDoc); }, [id]);
  if (!doc) return <Skeleton className="h-40 w-full" />;
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">{doc.name}</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border border-zinc-800 rounded-lg p-4 space-y-2">
          <div className="text-sm text-zinc-400">Type: {doc.type}</div>
          <div className="text-sm text-zinc-400">Size: {Math.round(doc.size/1024)} KB</div>
          <div className="text-sm text-zinc-400">Status: {doc.status}</div>
          <div className="text-sm text-zinc-400">Chunks: {doc.chunks}</div>
        </div>
        <div className="border border-zinc-800 rounded-lg p-4">
          <h3 className="font-medium mb-2">Processing timeline</h3>
          <ul className="space-y-1 text-sm text-zinc-400">{doc.timeline.map((t,i)=><li key={i}>{t.label} — {t.at}</li>)}</ul>
        </div>
      </div>
      <div>
        <h3 className="font-medium mb-2">Chunks</h3>
        <div className="space-y-2">{doc.chunksList.map((c)=><div key={c.id} className="border border-zinc-800 rounded p-3 text-sm"><span className="text-zinc-500">#{c.id} p{c.page}</span> {c.text}</div>)}</div>
      </div>
    </div>
  );
}
