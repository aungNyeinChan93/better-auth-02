"use client";

import authClient from "@/lib/auth-cleint";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const TestLogout = () => {
  const { signOut } = authClient;
  const router = useRouter();

  return (
    <React.Fragment>
      <main>
        <button
          type="button"
          className="px-4 py-2 bg-slate-50 rounded-xl"
          onClick={async () =>
            await signOut({
              fetchOptions: {
                onSuccess: () => {
                  toast.success("logout success");
                  return router.replace("/");
                },
              },
            })
          }
        >
          Sign Out
        </button>
      </main>
    </React.Fragment>
  );
};

export default TestLogout;
