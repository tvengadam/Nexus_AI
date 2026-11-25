"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({ organization: z.string().min(2), name: z.string().min(2), email: z.string().email(), password: z.string().min(6) });
type Form = z.infer<typeof schema>;

export default function RegisterPage() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Form>({ resolver: zodResolver(schema) });
  const onSubmit = async () => { router.push("/admin/overview"); };
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="hidden md:flex items-center justify-center bg-zinc-900 text-white"><div className="text-2xl font-bold">Nexus AI</div></div>
      <div className="flex items-center justify-center p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm space-y-4">
          <h1 className="text-2xl font-semibold">Create account</h1>
          <div><Label>Organization</Label><Input {...register("organization")} />{errors.organization && <p className="text-red-500 text-sm">{errors.organization.message}</p>}</div>
          <div><Label>Name</Label><Input {...register("name")} />{errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}</div>
          <div><Label>Email</Label><Input {...register("email")} />{errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}</div>
          <div><Label>Password</Label><Input type="password" {...register("password")} />{errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}</div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>Create account</Button>
        </form>
      </div>
    </div>
  );
}
