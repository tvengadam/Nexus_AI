"use client";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { useDocuments } from "@/lib/hooks/useDocuments";

const data = [{ day: "Mon", conv: 12 }, { day: "Tue", conv: 18 }, { day: "Wed", conv: 14 }, { day: "Thu", conv: 22 }, { day: "Fri", conv: 16 }];

export default function AdminOverviewPage() {
  const { data: docs } = useDocuments();
  const kpis = [
    { label: "Total docs", value: docs.length },
    { label: "Indexed", value: docs.filter((d) => d.status === "Indexed").length },
    { label: "Conversations", value: 128 },
    { label: "Open tickets", value: 7 },
    { label: "Avg response", value: "1.2s" },
    { label: "AI usage", value: "4.2k" },
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Overview</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="border border-zinc-800 rounded-lg p-4">
            <div className="text-xs text-zinc-400">{k.label}</div>
            <div className="text-2xl font-semibold mt-1">{k.value}</div>
          </div>
        ))}
      </div>
      <div className="border border-zinc-800 rounded-lg p-4 h-64">
        <h3 className="font-medium mb-2">Daily conversations</h3>
        <ResponsiveContainer width="100%" height="100%"><BarChart data={data}><XAxis dataKey="day" /><YAxis /><Bar dataKey="conv" fill="#6366f1" /></BarChart></ResponsiveContainer>
      </div>
    </div>
  );
}
