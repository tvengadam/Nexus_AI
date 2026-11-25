import { useEffect, useState } from "react";
import { getConversations } from "@/lib/api/chat";
import { Conversation } from "@/types/chat";

export function useConversations() {
  const [data, setData] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => { getConversations().then(setData).finally(() => setLoading(false)); }, []);
  return { data, loading, setData };
}
