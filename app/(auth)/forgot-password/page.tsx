"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({ email: z.string().email() });
type Form = z.infer<typeof schema>;

export default function ForgotPasswordPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<Form>({ resolver: zodResolver(schema) });
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <form onSubmit={handleSubmit(() => {})} className="w-full max-w-sm space-y-4">
        <h1 className="text-2xl font-semibold">Reset password</h1>
        <div><Label>Email</Label><Input {...register("email")} />{errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}</div>
        <Button type="submit" className="w-full">Send reset link</Button>
      </form>
    </div>
  );
}
