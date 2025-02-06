import { NextUIProvider } from "@nextui-org/react";
import React from "react";

interface ProviderProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProviderProps) {
  return (
    <NextUIProvider>
      <div className="whole-gradient">{children}</div>
    </NextUIProvider>
  );
}
