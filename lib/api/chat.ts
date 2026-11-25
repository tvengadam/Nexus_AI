import { apiClient, delay } from "./client";
import { env } from "@/config/env";
import { mockConversations, suggestedQuestions } from "@/lib/mocks/chat";
import { Conversation } from "@/types/chat";

export async function getConversations(): Promise<Conversation[]> {
  if (env.useMocks) { await delay(200); return mockConversations; }
  return apiClient<Conversation[]>("/conversations");
}
export async function getSuggestedQuestions(): Promise<string[]> {
  if (env.useMocks) { await delay(100); return suggestedQuestions; }
  return apiClient<string[]>("/chat/suggestions");
}
export { suggestedQuestions };
