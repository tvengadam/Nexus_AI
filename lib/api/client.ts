import { env } from "@/config/env";

export class ApiError extends Error {
  status: number;
  code?: string;
  constructor(status: number, message: string, code?: string) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

async function delay(ms = 300) { return new Promise((r) => setTimeout(r, ms)); }

export async function apiClient<T>(path: string, init?: RequestInit): Promise<T> {
  if (env.useMocks) {
    await delay(200);
    throw new ApiError(501, "Mock not implemented for " + path);
  }
  const res = await fetch(env.apiBaseUrl + path, {
    ...init,
    headers: { "Content-Type": "application/json", ...(init?.headers ?? {}) },
  });
  if (!res.ok) {
    let msg = res.statusText;
    try { const b = await res.json(); msg = b?.detail ?? b?.message ?? msg; } catch {}
    throw new ApiError(res.status, msg);
  }
  return (await res.json()) as T;
}
export { delay };
