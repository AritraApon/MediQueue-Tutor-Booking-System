"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

export function Providers({ children }) {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR (Server Side Rendering), we return the children without the Provider
  // This prevents the <script> tag from being injected too early
  if (!mounted) {
    return <div className="contents">{children}</div>;
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={true}
    >
      {children}
    </NextThemesProvider>
  );
}