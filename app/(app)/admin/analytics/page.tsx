"use client";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
const conv = [{d:"Mon",v:12},{d:"Tue",v:18},{d:"Wed",v:14},{d:"Thu",v:22},{d:"Fri",v:16}];
const res = [{d:"Mon",v:2.1},{d:"Tue",v:1.8},{d:"Wed",v:2.4},{d:"Thu",v:1.9},{d:"Fri",v:2.0}];
export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between"><h1 className="text-2xl font-semibold">Analytics</h1><button className="text-sm px-3 py-1.5 border border-zinc-800 rounded">Export CSV</button></div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border border-zinc-800 rounded-lg p-4 h-64"><h3 className="font-medium mb-2">Daily conversation volume</h3><ResponsiveContainer width="100%" height="100%"><BarChart data={conv}><XAxis dataKey="d"/><YAxis/><Bar dataKey="v" fill="#6366f1"/></BarChart></ResponsiveContainer></div>
        <div className="border border-zinc-800 rounded-lg p-4 h-64"><h3 className="font-medium mb-2">Avg resolution time (h)</h3><ResponsiveContainer width="100%" height="100%"><LineChart data={res}><XAxis dataKey="d"/><YAxis/><Line dataKey="v" stroke="#6366f1"/></LineChart></ResponsiveContainer></div>
      </div>
      <p className="text-xs text-zinc-500">Retrieval numbers are sample data.</p>
    </div>
  );
}
