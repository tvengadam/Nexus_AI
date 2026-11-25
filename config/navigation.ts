export type Role = "customer" | "admin" | "agent";

export const navigation: Record<Role, { label: string; href: string; icon: string }[]> = {
  customer: [
    { label: "Dashboard", href: "/customer/dashboard", icon: "LayoutDashboard" },
    { label: "Chat", href: "/customer/chat", icon: "MessageSquare" },
    { label: "History", href: "/customer/history", icon: "History" },
    { label: "Tickets", href: "/customer/tickets", icon: "Ticket" },
  ],
  admin: [
    { label: "Overview", href: "/admin/overview", icon: "LayoutDashboard" },
    { label: "Knowledge Base", href: "/admin/knowledge-base", icon: "BookOpen" },
    { label: "Upload", href: "/admin/knowledge-base/upload", icon: "Upload" },
    { label: "Users", href: "/admin/users", icon: "Users" },
    { label: "AI Config", href: "/admin/ai-config", icon: "Settings" },
    { label: "Analytics", href: "/admin/analytics", icon: "BarChart3" },
  ],
  agent: [
    { label: "Overview", href: "/agent/overview", icon: "LayoutDashboard" },
    { label: "Queue", href: "/agent/queue", icon: "Inbox" },
    { label: "Resolved", href: "/agent/resolved", icon: "CheckCircle" },
  ],
};
