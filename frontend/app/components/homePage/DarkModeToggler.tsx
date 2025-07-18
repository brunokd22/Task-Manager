import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import React, { useState } from "react";
import { useTheme } from "@/provider/theme-context";

const DarkModeToggler = () => {
  const { theme, setTheme } = useTheme();

  const handleToggleMode = () => {
    // Renamed for clarity as it's a handler, not a component
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button className="px-2 py-3" onClick={handleToggleMode}>
      {theme == "dark" ? (
        <Sun className=" p-0 h-3 w-3" />
      ) : (
        <Moon className="p-0 h-3 w-3 " />
      )}
    </Button>
  );
};

export default DarkModeToggler;
