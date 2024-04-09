import React from "react";
import { Sidebar } from "../../components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-dvh overflow-hidden">
      <Sidebar />
      <section className="bg-[#FBFBFB] w-full lg:w-[calc(100%-240px)]">{children}</section>
    </main>
  );
}
