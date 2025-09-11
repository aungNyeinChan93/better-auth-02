"use client";

import { loginWithGithub, registerAction } from "@/features/auth/auth-actions";
import { redirect, RedirectType } from "next/navigation";
import { useActionState } from "react";

export default function RegisterForm() {
  const [state, formAction] = useActionState(registerAction, undefined);

  if (state?.success) {
    return redirect("/", RedirectType.push);
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow">
        <h1 className="mb-4 text-2xl font-bold text-center">Register Form</h1>

        {!state?.success && (
          <>
            <p className="text-red-600">{state?.error}</p>
          </>
        )}

        {/* Email + Password */}
        <form className="space-y-4" action={formAction}>
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-lg border p-2"
            name="name"
          />
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
            Sign Up
          </button>
        </form>

        <div className="my-4 text-center text-gray-500">OR</div>

        {/* Social logins */}
        <form action={loginWithGithub}>
          <button
            type="submit"
            className="mb-2 w-full rounded-lg bg-gray-800 p-2 text-white hover:bg-gray-900"
          >
            Continue with GitHub
          </button>
        </form>
        <button
          //   onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}
