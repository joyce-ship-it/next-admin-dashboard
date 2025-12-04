import React from "react";
import { ThemeToggler } from "@/components/ThemeToggler";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-[100dvh] items-center justify-center">
      {children}
      <div className="absolute right-5 top-5">
        <ThemeToggler></ThemeToggler>
      </div>
    </div>
  );
}
