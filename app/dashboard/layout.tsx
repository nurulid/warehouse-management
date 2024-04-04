import React from "react";
import { Sidebar } from "./components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-dvh overflow-hidden">
      <Sidebar />
      <section className="flex-grow">{children}</section>
    </main>
  );
}
