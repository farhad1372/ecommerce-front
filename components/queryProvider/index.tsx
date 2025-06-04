"use client";
import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/lib/react-query";

export default function QueryProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
