"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Status = "pending" | "approved" | "rejected" | "executed";

export function ActionApprovalCard({ title, category, priority, summary }: { title: string; category: string; priority: string; summary: string; }) {
  const [status, setStatus] = useState<Status>("pending");
  return (
    <div className="border border-zinc-800 rounded-lg p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">Create support ticket?</h3>
        <Badge>{status}</Badge>
      </div>
      <div className="text-sm space-y-1">
        <div><span className="text-zinc-500">Title:</span> {title}</div>
        <div><span className="text-zinc-500">Category:</span> {category}</div>
        <div><span className="text-zinc-500">Priority:</span> {priority}</div>
        <div><span className="text-zinc-500">Summary:</span> {summary}</div>
      </div>
      {status === "pending" && (
        <div className="flex gap-2">
          <Button onClick={() => setStatus("approved")}>Approve</Button>
          <Button variant="outline" onClick={() => setStatus("rejected")}>Reject</Button>
        </div>
      )}
    </div>
  );
}
