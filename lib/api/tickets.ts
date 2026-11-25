import { apiClient, delay } from "./client";
import { env } from "@/config/env";
import { mockTickets } from "@/types/ticket";
import { Ticket } from "@/types/ticket";

export async function getTickets(): Promise<Ticket[]> {
  if (env.useMocks) { await delay(200); return mockTickets; }
  return apiClient<Ticket[]>("/tickets");
}
export async function createTicket(data: Partial<Ticket>): Promise<Ticket> {
  if (env.useMocks) { await delay(200); return { id: "T-" + Math.floor(Math.random()*9000+1000), title: data.title ?? "", category: data.category ?? "Product", priority: data.priority ?? "Medium", status: "Open", updated: new Date().toISOString().slice(0,10), description: data.description }; }
  return apiClient<Ticket>("/tickets", { method: "POST", body: JSON.stringify(data) });
}
export async function getTicket(id: string): Promise<Ticket> {
  if (env.useMocks) { await delay(200); return mockTickets.find((t)=>t.id===id) ?? mockTickets[0]; }
  return apiClient<Ticket>(`/tickets/${id}`);
}
export async function patchTicket(id: string, data: Partial<Ticket>): Promise<Ticket> {
  if (env.useMocks) { await delay(200); const t = mockTickets.find((x)=>x.id===id) ?? mockTickets[0]; return { ...t, ...data }; }
  return apiClient<Ticket>(`/tickets/${id}`, { method: "PATCH", body: JSON.stringify(data) });
}
