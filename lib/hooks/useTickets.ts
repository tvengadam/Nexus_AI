import { useEffect, useState } from "react";
import { getTickets } from "@/lib/api/tickets";
import { Ticket } from "@/types/ticket";

export function useTickets() {
  const [data, setData] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const load = async () => { setLoading(true); setData(await getTickets()); setLoading(false); };
  useEffect(() => { load(); }, []);
  return { data, loading, reload: load, setData };
}
