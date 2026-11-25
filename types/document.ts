export type DocStatus = "Uploaded" | "Processing" | "Indexed" | "Failed";
export interface Document { id: string; name: string; type: string; size: number; uploadedAt: string; status: DocStatus; chunks: number; error?: string; }
export interface Chunk { id: string; page: number; text: string; }
export interface DocumentDetail extends Document { chunksList: Chunk[]; timeline: { label: string; at: string }[]; }
