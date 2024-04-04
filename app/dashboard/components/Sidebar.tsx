import React from "react";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <section className="sidebar w-[240px] bg-[#F5F5F7]">
      <div className="flex flex-col h-full p-6 my-2">
        <div className="mb-8 font-bold text-2xl">Logo</div>
        <nav>
          <ul className="space-y-4">
            <li className="active text-[#6C3BF8]">
              <Link href="#">Dashboard</Link>
            </li>
            <li>
              <Link href="#">Products</Link>
            </li>
            <li>
              <Link href="#">Orders</Link>
            </li>
            <li>
              <Link href="#">Shipments</Link>
            </li>
            <li>
              <Link href="#">Vehicles</Link>
            </li>
            <li>
              <Link href="#">Customers</Link>
            </li>
          </ul>
        </nav>
        <div className="mt-auto">
          <div className="dropdown">User Menu</div>
          <nav>
            <ul>
              <li>
                <Link href="#">Help & Support</Link>
              </li>
              <li>
                <Link href="#">Sign Out</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};
