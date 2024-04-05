"use client"

import { PropsWithChildren } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const SidebarLink = (props: PropsWithChildren<{href: string}>) => {
  const {children, href} = props;
  const currentPath = usePathname();
  const active = currentPath == href;
  return (
    <li className={`${active ? "text-[#6C3BF8]" : ""}`}>
      <Link href={href}>{children}</Link>
    </li>
  )
}

export const Sidebar = () => {
  return (
    <section className="sidebar w-[240px] bg-[#F5F5F7]">
      <div className="flex flex-col h-full p-6 my-2">
        <div className="mb-8 font-bold text-2xl">Logo</div>
        <nav>
          <ul className="space-y-4">
            <SidebarLink href="/dashboard">
              Dashboard
            </SidebarLink>
            <SidebarLink href="/products">
              Products
            </SidebarLink>
            <SidebarLink href="#">
              Orders
            </SidebarLink>
            <SidebarLink href="#">
              Shipments
            </SidebarLink>
            <SidebarLink href="#">
              Vehicles
            </SidebarLink>
            <SidebarLink href="#">
              Customers
            </SidebarLink>
          </ul>
        </nav>
        <div className="mt-auto">
          <div className="dropdown">User Menu</div>
          <nav>
            <ul>
              <SidebarLink href="#">
                Help & Support
              </SidebarLink>
              <SidebarLink href="#">
                Sign Out
              </SidebarLink>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};
