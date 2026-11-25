import { Document, DocumentDetail, Chunk } from "@/types/document";

export const mockDocuments: Document[] = [
  { id: "1", name: "Refund Policy.pdf", type: "pdf", size: 245000, uploadedAt: "2026-11-20", status: "Indexed", chunks: 42 },
  { id: "2", name: "Payment Policy.pdf", type: "pdf", size: 180000, uploadedAt: "2026-11-20", status: "Indexed", chunks: 31 },
  { id: "3", name: "Shipping Guidelines.pdf", type: "pdf", size: 320000, uploadedAt: "2026-11-21", status: "Processing", chunks: 0 },
  { id: "4", name: "Product FAQs.pdf", type: "pdf", size: 150000, uploadedAt: "2026-11-21", status: "Indexed", chunks: 28 },
  { id: "5", name: "Support Troubleshooting Guide.pdf", type: "pdf", size: 410000, uploadedAt: "2026-11-22", status: "Failed", chunks: 0, error: "Text extraction failed" },
  { id: "6", name: "Previous Support Tickets.csv", type: "csv", size: 95000, uploadedAt: "2026-11-22", status: "Uploaded", chunks: 0 },
];

export const mockDocumentDetail = (id: string): DocumentDetail => {
  const d = mockDocuments.find((x) => x.id === id) ?? mockDocuments[0];
  const chunks: Chunk[] = Array.from({ length: 5 }, (_, i) => ({ id: `c${i+1}`, page: i + 1, text: `Excerpt from ${d.name} page ${i+1} about refunds and shipping.` }));
  return { ...d, chunksList: chunks, timeline: [{ label: "Uploaded", at: d.uploadedAt }, { label: "Text extracted", at: d.uploadedAt }, { label: "Chunked", at: d.uploadedAt }, { label: "Embedded", at: d.uploadedAt }, { label: "Indexed", at: d.uploadedAt }] };
};
