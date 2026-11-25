"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createTicket } from "@/lib/api/tickets";

const schema = z.object({ title: z.string().min(3), category: z.string(), priority: z.string(), description: z.string().min(5), orderId: z.string().optional() });

export default function NewTicketPage() {
  const router = useRouter();
  const [done, setDone] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = async (data: any) => { const t = await createTicket(data); setDone(t.id); };
  if (done) return <div className="text-center space-y-2"><h2 className="text-xl font-semibold">Ticket created</h2><p className="text-zinc-400">{done}</p><Button onClick={()=>router.push("/customer/tickets")}>View tickets</Button></div>;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg">
      <h1 className="text-2xl font-semibold">New Ticket</h1>
      <div><Label>Title</Label><Input {...register("title")} />{errors.title && <p className="text-red-500 text-sm">{String(errors.title.message)}</p>}</div>
      <div><Label>Category</Label><Input {...register("category")} /></div>
      <div><Label>Priority</Label><Input {...register("priority")} /></div>
      <div><Label>Description</Label><Textarea {...register("description")} />{errors.description && <p className="text-red-500 text-sm">{String(errors.description.message)}</p>}</div>
      <div><Label>Order ID (optional)</Label><Input {...register("orderId")} /></div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
