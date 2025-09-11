"use client";

import { FormEvent, useState } from "react";
import { signIn, signOut, signUp } from "@/lib/auth-cleint";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function TestRegister() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const formSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.email.trim() || !form.password.trim() || !form.name.trim()) {
      return toast.error("some fields are required");
    }

    const { data, error } = await signUp.email({
      ...form,
      callbackURL: "/email-verified",
    });
    if (error) {
      toast.error(error instanceof Error ? error?.message : "register fail");
      return;
    }
    if (!data?.user) {
      return toast.error("regsiter fail");
    }
    toast.success("Register success!");
    router.replace("/login");
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow">
        <h1 className="mb-4 text-2xl font-bold text-center">Register Form</h1>

        {/* Email + Password */}
        <form className="space-y-4" onSubmit={formSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-lg border p-2"
            name="name"
            value={form.name}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border p-2"
            name="email"
            value={form.email}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border p-2"
            name="password"
            value={form.password}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
