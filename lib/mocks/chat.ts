import { Conversation, Message, Citation } from "@/types/chat";

const cits: Citation[] = [{ id: 1, document: "Refund Policy.pdf", page: 2, excerpt: "Refunds are processed within 14 days of purchase." }];

export const mockConversations: Conversation[] = [
  { id: "c1", title: "Refund policy question", updatedAt: "2026-11-24", messages: [
    { id: "m1", role: "user", content: "What is the refund period?" },
    { id: "m2", role: "assistant", content: "Refunds are available within 14 days of purchase.", citations: cits },
  ] },
  { id: "c2", title: "Order status", updatedAt: "2026-11-23", messages: [{ id: "m3", role: "user", content: "Where is my order?" }] },
];
export const suggestedQuestions = ["What is the refund period?", "I was charged twice", "Where is my order?", "How do I return an item?"];
