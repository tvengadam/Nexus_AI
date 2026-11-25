export interface User { id: string; name: string; email: string; role: "customer" | "admin" | "agent"; organizationId: string; organizationName: string; }
export interface Organization { id: string; name: string; }
export interface ApiError { status: number; message: string; code?: string; }
export interface Paginated<T> { items: T[]; total: number; page: number; pageSize: number; }
