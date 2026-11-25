"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AiConfigPage() {
  const [model, setModel] = useState("gpt-4o");
  const [temp, setTemp] = useState("0.2");
  const [topk, setTopk] = useState("5");
  const [threshold, setThreshold] = useState("0.7");
  const [citations, setCitations] = useState(true);
  const [abstain, setAbstain] = useState(true);
  const [dirty, setDirty] = useState(false);
  const mark = () => setDirty(true);
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-semibold">AI Configuration</h1>
      <div className="space-y-4">
        <div><Label>Model</Label><Input value={model} onChange={(e)=>{setModel(e.target.value);mark();}}/></div>
        <div><Label>Temperature</Label><Input value={temp} onChange={(e)=>{setTemp(e.target.value);mark();}}/></div>
        <div><Label>Top-K</Label><Input value={topk} onChange={(e)=>{setTopk(e.target.value);mark();}}/></div>
        <div><Label>Similarity threshold</Label><Input value={threshold} onChange={(e)=>{setThreshold(e.target.value);mark();}}/></div>
        <div className="flex items-center justify-between"><Label>Require citations</Label><Button size="sm" variant={citations?"default":"outline"} onClick={()=>{setCitations(!citations);mark();}}>{citations?"On":"Off"}</Button></div>
        <div className="flex items-center justify-between"><Label>Abstain when insufficient</Label><Button size="sm" variant={abstain?"default":"outline"} onClick={()=>{setAbstain(!abstain);mark();}}>{abstain?"On":"Off"}</Button></div>
      </div>
      {dirty && <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 flex gap-2 items-center"><span className="text-sm text-zinc-400">Unsaved changes</span><Button size="sm" onClick={()=>setDirty(false)}>Save</Button><Button size="sm" variant="outline" onClick={()=>setDirty(false)}>Discard</Button></div>}
    </div>
  );
}
