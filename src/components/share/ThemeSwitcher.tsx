"use client";

import { useTheme } from "@/contexts/ThemeProvider";
import React from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const ThemeSwitcher = () => {
  const { theme, changeTheme } = useTheme();
  console.log({ theme });

  return (
    <React.Fragment>
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" onClick={() => changeTheme()} />
        <Label htmlFor="airplane-mode">
          <span className=" capitalize ">{theme}</span>
        </Label>
      </div>
    </React.Fragment>
  );
};

export default ThemeSwitcher;
