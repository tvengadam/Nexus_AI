"use client";
import { useConversations } from "@/lib/hooks/useConversations";
import { Button } from "@/components/ui/button";

export default function CustomerDashboardPage() {
  const { data } = useConversations();
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Welcome back</h1>
      <div className="flex gap-3">
        <Button><a href="/customer/chat">Ask AI</a></Button>
        <Button variant="outline"><a href="/customer/tickets/new">New ticket</a></Button>
      </div>
      <div>
        <h2 className="font-medium mb-2">Recent conversations</h2>
        <ul className="space-y-2">{data.map((c)=><li key={c.id} className="border border-zinc-800 rounded p-3">{c.title}</li>)}</ul>
      </div>
    </div>
  );
}
