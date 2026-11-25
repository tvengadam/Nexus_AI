"use client";
import { useState } from "react";
import { uploadDocument } from "@/lib/api/documents";
import { Button } from "@/components/ui/button";

export default function UploadPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [progress, setProgress] = useState<Record<string, number>>({});
  const onDrop = (e: React.DragEvent) => { e.preventDefault(); setFiles(Array.from(e.dataTransfer.files)); };
  const upload = async () => {
    for (const f of files) {
      setProgress((p) => ({ ...p, [f.name]: 30 }));
      await uploadDocument(f);
      setProgress((p) => ({ ...p, [f.name]: 100 }));
    }
  };
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Upload Documents</h1>
      <div onDragOver={(e)=>e.preventDefault()} onDrop={onDrop} className="border-2 border-dashed border-zinc-700 rounded-lg p-12 text-center text-zinc-400">
        Drag and drop PDF, DOCX, TXT, CSV here
      </div>
      <ul className="space-y-2">
        {files.map((f) => (
          <li key={f.name} className="flex items-center justify-between border border-zinc-800 rounded p-3">
            <span>{f.name}</span>
            <span className="text-xs text-zinc-500">{progress[f.name] ?? 0}%</span>
          </li>
        ))}
      </ul>
      <Button onClick={upload} disabled={!files.length}>Upload</Button>
    </div>
  );
}
