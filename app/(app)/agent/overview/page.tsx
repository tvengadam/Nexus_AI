export default function AgentOverviewPage() {
  const kpis = [{label:"Assigned",value:5},{label:"SLA at risk",value:2},{label:"Resolved today",value:3},{label:"Avg resolution",value:"4h"}];
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Agent Overview</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {kpis.map((k)=><div key={k.label} className="border border-zinc-800 rounded-lg p-4"><div className="text-xs text-zinc-400">{k.label}</div><div className="text-2xl font-semibold mt-1">{k.value}</div></div>)}
      </div>
    </div>
  );
}
