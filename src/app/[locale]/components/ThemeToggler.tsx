"use client";

import { Button, useColorScheme } from "@mui/material";
import { useEffect, useState } from "react";

const ThemeToggler = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // to avoid layout shift, render a placeholder button
    return (
      <Button color="info" sx={{ width: 120 }} variant="outlined">
        loading theme
      </Button>
    );
  }

  return (
    <Button
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
      startIcon={mode === "dark" ? "☀️" : "🌙"}
      variant="outlined"
    >
      {mode === "dark" ? "Turn light" : "Turn dark"}
    </Button>
  );
};

export default ThemeToggler;
