"use client";

import { useTheme } from "@/contexts/ThemeProvider";
import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return (
    <React.Fragment>
      <div
        className={`px-4 py-2 rounded-lg w-full my-1 ${
          theme === "dark"
            ? "bg-slate-900 text-white"
            : "text-slate-900 bg-slate-50"
        }`}
      >
        {children}
      </div>
    </React.Fragment>
  );
};

export default Container;
