import React from "react";
import { Search } from "./components/Search";

export default function Page() {
  return (
    <>
      <div className="p-4 border-b border-secondary-200 mr-6">
        <Search maxWidth="558px"/>
      </div>
      <div className="h-[calc(100vh-65px)] overflow-scroll">
        <div className="p-6">
          <div className="mb-5">
            <h2 className="text-2xl font-semibold">Hello, Enes</h2>
            <p className="text-gray-400">Warehouse Manager</p>
          </div>
          <div className="grid grid-cols-3 gap-10 h-full">
            <div className="border rounded-xl p-5 h-[300px]">Usage</div>
            <div className="border rounded-xl p-5 h-[300px]">Total</div>
            <div className="border rounded-xl p-5 h-[300px]">Tracking</div>
            <div className="col-span-3 border rounded-xl p-5 h-[700px] overflow-scroll">
              Orders
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
