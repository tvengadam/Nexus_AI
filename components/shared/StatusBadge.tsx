import { Badge } from "@/components/ui/badge";

const colors: Record<string,string> = { Open: "bg-blue-500/20 text-blue-300", "In Progress": "bg-indigo-500/20 text-indigo-300", "Waiting for Customer": "bg-amber-500/20 text-amber-300", Resolved: "bg-emerald-500/20 text-emerald-300", Closed: "bg-zinc-500/20 text-zinc-300" };
export function StatusBadge({ status }: { status: string }) { return <Badge className={colors[status] ?? ""}>{status}</Badge>; }

const pc: Record<string,string> = { Low: "bg-zinc-500/20 text-zinc-300", Medium: "bg-blue-500/20 text-blue-300", High: "bg-amber-500/20 text-amber-300", Urgent: "bg-red-500/20 text-red-300" };
export function PriorityBadge({ priority }: { priority: string }) { return <Badge className={pc[priority] ?? ""}>{priority}</Badge>; }
