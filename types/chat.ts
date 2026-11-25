export interface Citation { id: number; document: string; page: number; excerpt: string; }
export interface Message { id: string; role: "user" | "assistant"; content: string; citations?: Citation[]; insufficient?: boolean; action?: { title: string; category: string; priority: string; summary: string; status: "pending"|"approved"|"rejected"|"executed" }; }
export interface Conversation { id: string; title: string; updatedAt: string; messages: Message[]; }
