"use client";

import { FormEvent, useState } from "react";
import { signIn } from "@/lib/auth-cleint";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function TestLogin() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const formSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ form });
    if (!form.email.trim() || !form.password.trim()) {
      return toast.error("some fields are required");
    }
    const { data } = await signIn.email({ ...form, callbackURL: "/" });

    if (!data?.url) {
      return toast.error("login fail", { duration: 3000 });
    }
    toast.success("login success!", { position: "top-right" });
    router.replace(data?.url);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow">
        <h1 className="mb-4 text-2xl font-bold text-center">Login Form</h1>

        {/* Email + Password */}
        <form className="space-y-4" onSubmit={formSubmit}>
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
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
