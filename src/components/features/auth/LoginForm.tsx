"use client";

import { loginAction } from "@/features/auth/auth-actions";
import { redirect, RedirectType } from "next/navigation";
import { useActionState } from "react";

export default function LoginForm() {
  const [state, formAction] = useActionState(loginAction, undefined);

  if (state?.success) {
    return redirect(state?.url as string, RedirectType.replace);
  }
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow">
        <h1 className="mb-4 text-2xl font-bold text-center">Login Form</h1>

        {!state?.success && (
          <>
            <p className="text-red-600">{state?.error}</p>
          </>
        )}

        {/* Email + Password */}
        <form className="space-y-4" action={formAction}>
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border p-2"
            name="email"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border p-2"
            name="password"
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
