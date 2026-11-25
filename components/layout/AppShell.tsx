"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Search, Bell, User, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { env } from "@/config/env";
import { navigation, type Role } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function Sidebar({ role, collapsed, onToggle, mobileOpen, onMobileClose }: { role: Role; collapsed: boolean; onToggle: () => void; mobileOpen: boolean; onMobileClose: () => void; }) {
  const pathname = usePathname();
  const items = navigation[role];
  return (
    <>
      {mobileOpen && <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={onMobileClose} />}
      <aside className={cn("fixed md:static z-50 top-0 left-0 h-full bg-zinc-950 border-r border-zinc-800 transition-all duration-200 flex flex-col", collapsed ? "w-16" : "w-60", mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0")}>
        <div className="flex items-center justify-between h-14 px-4 border-b border-zinc-800">
          {!collapsed && <span className="font-semibold text-sm">Nexus AI</span>}
          <button onClick={onToggle} className="hidden md:block p-1 rounded hover:bg-zinc-800" aria-label="Toggle sidebar">
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
          <button onClick={onMobileClose} className="md:hidden p-1" aria-label="Close"><X size={16} /></button>
        </div>
        <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
          {items.map((it) => {
            const active = pathname === it.href;
            return (
              <Link key={it.href} href={it.href} onClick={onMobileClose} className={cn("flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors", active ? "bg-indigo-600/20 text-indigo-300" : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100")}>
                <span className="w-4 h-4 flex items-center justify-center text-xs">{it.label[0]}</span>
                {!collapsed && <span>{it.label}</span>}
              </Link>
            );
          })}
        </nav>
        {env.useMocks && !collapsed && (
          <div className="m-2 px-3 py-1.5 text-xs rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">Demo data</div>
        )}
      </aside>
    </>
  );
}

export function Topbar({ onMenu }: { onMenu: () => void }) {
  const { theme, setTheme } = useTheme();
  const [role, setRole] = useState<Role>("admin");
  const router = useRouter();
  const changeRole = (r: Role) => {
    setRole(r);
    router.push(r === "customer" ? "/customer/dashboard" : r === "admin" ? "/admin/overview" : "/agent/overview");
  };
  return (
    <header className="h-14 border-b border-zinc-800 flex items-center gap-3 px-4 bg-zinc-950/80">
      <button onClick={onMenu} className="md:hidden p-2" aria-label="Menu"><Menu size={18} /></button>
      <div className="flex-1 max-w-md">
        <button className="w-full flex items-center gap-2 px-3 py-1.5 rounded-md border border-zinc-800 text-sm text-zinc-400 hover:bg-zinc-800">
          <Search size={14} /> Search… <kbd className="ml-auto text-xs">⌘K</kbd>
        </button>
      </div>
      <select value={role} onChange={(e) => changeRole(e.target.value as Role)} className="text-sm bg-zinc-900 border border-zinc-800 rounded px-2 py-1" aria-label="Role">
        <option value="customer">Customer</option>
        <option value="admin">Admin</option>
        <option value="agent">Agent</option>
      </select>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded hover:bg-zinc-800" aria-label="Toggle theme">
        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </button>
      <button className="p-2 rounded hover:bg-zinc-800 relative" aria-label="Notifications"><Bell size={16} /><span className="absolute top-1 right-1 w-2 h-2 bg-indigo-500 rounded-full" /></button>
      <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-xs"><User size={14} /></div>
    </header>
  );
}
