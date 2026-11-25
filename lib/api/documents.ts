import { apiClient, delay } from "./client";
import { env } from "@/config/env";
import { mockDocuments, mockDocumentDetail } from "@/lib/mocks/documents";
import { Document, DocumentDetail } from "@/types/document";

export async function getDocuments(): Promise<Document[]> {
  if (env.useMocks) { await delay(200); return mockDocuments; }
  return apiClient<Document[]>("/documents");
}
export async function getDocument(id: string): Promise<DocumentDetail> {
  if (env.useMocks) { await delay(200); return mockDocumentDetail(id); }
  return apiClient<DocumentDetail>(`/documents/${id}`);
}
export async function deleteDocument(id: string): Promise<void> {
  if (env.useMocks) { await delay(200); return; }
  await apiClient(`/documents/${id}`, { method: "DELETE" });
}
export async function uploadDocument(file: File): Promise<Document> {
  if (env.useMocks) { await delay(300); return { id: crypto.randomUUID(), name: file.name, type: file.name.split(".").pop() ?? "file", size: file.size, uploadedAt: new Date().toISOString().slice(0,10), status: "Uploaded", chunks: 0 }; }
  const fd = new FormData(); fd.append("file", file);
  return apiClient<Document>("/documents/upload", { method: "POST", body: fd, headers: {} });
}
