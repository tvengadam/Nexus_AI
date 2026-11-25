import { useEffect, useState } from "react";
import { getDocuments } from "@/lib/api/documents";
import { Document } from "@/types/document";

export function useDocuments() {
  const [data, setData] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const load = async () => { setLoading(true); setError(null); try { setData(await getDocuments()); } catch (e) { setError((e as Error).message); } finally { setLoading(false); } };
  useEffect(() => { load(); }, []);
  return { data, loading, error, reload: load, setData };
}
