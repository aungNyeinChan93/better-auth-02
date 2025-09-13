"use client";

import React, { useEffect } from "react";

interface Props {
  error?: Error | null;
  reset: () => void;
}

const RootErrorPage = ({ error, reset }: Props) => {
  useEffect(() => {
    console.log(error instanceof Error ? error?.message : error);
  }, []);
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center bg-slate-900 text-red-600">
        <div className="text-center mb-6">
          {error && (
            <p className="font-bold text-2xl tracking-wide">{error?.message}</p>
          )}
          <button
            type="button"
            onClick={() => reset()}
            className=" underline underline-offset-4 decoration-indigo-400 text-indigo-400"
          >
            refresh
          </button>
        </div>
      </main>
    </React.Fragment>
  );
};

export default RootErrorPage;
