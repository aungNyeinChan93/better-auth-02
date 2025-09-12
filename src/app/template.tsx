"use client";

import { useTheme } from "@/contexts/ThemeProvider";
import React, { ReactNode } from "react";

const RootTemplate = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return (
    <React.Fragment>
      <main
        className={`${theme === "dark" ? "!bg-slate-900 " : "!bg-slate-50 "}`}
      >
        {children}
      </main>
    </React.Fragment>
  );
};

export default RootTemplate;
