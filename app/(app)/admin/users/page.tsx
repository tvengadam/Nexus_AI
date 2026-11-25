"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const users = [{ name: "Alice", email: "alice@techmart.com", role: "Admin", status: "Active", last: "2026-11-24" }, { name: "Bob", email: "bob@techmart.com", role: "Agent", status: "Active", last: "2026-11-24" }];

export default function UsersPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-4">
      <div className="flex justify-between"><h1 className="text-2xl font-semibold">Users</h1><Button onClick={()=>setOpen(true)}>Invite</Button></div>
      <table className="w-full text-sm border border-zinc-800 rounded-lg overflow-hidden">
        <thead className="bg-zinc-900 text-zinc-400"><tr><th className="p-3 text-left">Name</th><th className="p-3 text-left">Email</th><th className="p-3 text-left">Role</th><th className="p-3 text-left">Status</th><th className="p-3 text-left">Last active</th></tr></thead>
        <tbody>{users.map((u)=><tr key={u.email} className="border-t border-zinc-800"><td className="p-3">{u.name}</td><td className="p-3">{u.email}</td><td className="p-3">{u.role}</td><td className="p-3"><Badge>{u.status}</Badge></td><td className="p-3">{u.last}</td></tr>)}</tbody>
      </table>
      {open && <div className="fixed inset-0 bg-black/50 flex items-center justify-center"><div className="bg-zinc-900 p-6 rounded-lg w-80 space-y-3"><h3 className="font-medium">Invite user</h3><Input placeholder="Email"/><div className="flex gap-2 justify-end"><Button variant="outline" onClick={()=>setOpen(false)}>Cancel</Button><Button onClick={()=>setOpen(false)}>Send</Button></div></div></div>}
    </div>
  );
}
