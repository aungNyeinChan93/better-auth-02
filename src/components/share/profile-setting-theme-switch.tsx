"use client";

import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useTheme } from "@/contexts/ThemeProvider";

const ThemeSwitch = () => {
  const { theme, changeTheme } = useTheme();
  return (
    <React.Fragment>
      <main>
        <div className="flex items-center justify-between">
          <Label htmlFor="dark-mode">Dark Mode</Label>
          <Switch
            checked={theme === "dark" ? true : false}
            id="dark-mode"
            onClick={() => changeTheme()}
          />
        </div>
      </main>
    </React.Fragment>
  );
};

export default ThemeSwitch;
