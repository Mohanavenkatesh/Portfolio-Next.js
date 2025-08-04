"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [mount, setMount] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return null;

  return(
  <>
    <button onClick={() => setTheme(resolvedTheme === 'dark' ? "light" : "dark")}>
      {resolvedTheme === 'dark' ? "Light Mode " : "dark Mode "}
    </button>
  </>
  )
};
