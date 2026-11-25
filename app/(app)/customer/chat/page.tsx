"use client";
import { useState } from "react";
import { suggestedQuestions } from "@/lib/mocks/chat";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Citation } from "@/types/chat";

interface Msg { id: string; role: "user"|"assistant"; content: string; citations?: Citation[]; insufficient?: boolean; }

export default function ChatPage() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const send = async () => {
    if (!input.trim()) return;
    const userMsg: Msg = { id: crypto.randomUUID(), role: "user", content: input };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setStreaming(true);
    const answer = "Refunds are available within 14 days of purchase.";
    const cits: Citation[] = [{ id: 1, document: "Refund Policy.pdf", page: 2, excerpt: "Refunds are processed within 14 days." }];
    let acc = "";
    const id = crypto.randomUUID();
    setMessages((m) => [...m, { id, role: "assistant", content: "" }]);
    for (const ch of answer) {
      acc += ch;
      setMessages((m) => m.map((x) => (x.id === id ? { ...x, content: acc, citations: cits } : x)));
      await new Promise((r) => setTimeout(r, 15));
    }
    setStreaming(false);
  };
  return (
    <div className="flex h-full gap-4">
      <div className="w-64 border border-zinc-800 rounded-lg p-3 hidden md:block">
        <Button className="w-full mb-3">New chat</Button>
        <div className="text-xs text-zinc-500">Conversations</div>
      </div>
      <div className="flex-1 flex flex-col border border-zinc-800 rounded-lg">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 && (
            <div className="grid grid-cols-2 gap-2">
              {suggestedQuestions.map((q) => (
                <button key={q} onClick={() => setInput(q)} className="border border-zinc-800 rounded p-3 text-sm text-left hover:bg-zinc-800">{q}</button>
              ))}
            </div>
          )}
          {messages.map((m) => (
            <div key={m.id} className={m.role === "user" ? "text-right" : ""}>
              <div className={`inline-block max-w-[80%] rounded-lg px-3 py-2 text-sm ${m.role === "user" ? "bg-indigo-600 text-white" : "bg-zinc-900"}`}>{m.content}</div>
              {m.citations && m.citations.length > 0 && (
                <div className="mt-2 flex gap-1 flex-wrap">
                  {m.citations.map((c) => <span key={c.id} className="text-xs px-2 py-0.5 rounded bg-indigo-600/20 text-indigo-300">[{c.id}] {c.document} p{c.page}</span>)}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="border-t border-zinc-800 p-3 flex gap-2">
          <Textarea value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={(e)=>{ if(e.key==="Enter" && !e.shiftKey){ e.preventDefault(); send(); } }} className="min-h-[40px]" placeholder="Ask..." />
          <Button onClick={streaming ? ()=>setStreaming(false) : send}>{streaming ? "Stop" : "Send"}</Button>
        </div>
      </div>
    </div>
  );
}
