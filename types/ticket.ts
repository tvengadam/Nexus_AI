export type TicketStatus = "Open" | "In Progress" | "Waiting for Customer" | "Resolved" | "Closed";
export type TicketPriority = "Low" | "Medium" | "High" | "Urgent";
export type TicketCategory = "Payment" | "Refund" | "Delivery" | "Product" | "Account";
export interface Ticket { id: string; title: string; category: TicketCategory; priority: TicketPriority; status: TicketStatus; updated: string; description?: string; }
export const mockTickets: Ticket[] = [
  { id: "T-1001", title: "Charged twice", category: "Payment", priority: "High", status: "Open", updated: "2026-11-24", description: "Payment deducted twice" },
  { id: "T-1002", title: "Refund not received", category: "Refund", priority: "Medium", status: "In Progress", updated: "2026-11-23", description: "Refund pending" },
];
