import React from "react";
import { Search } from "./components/Search";
import { Card } from "./components/Card";

export default function Page() {
  return (
    <>
      <div className="p-4 border-b border-secondary-200 mr-6">
        <Search maxWidth="558px"/>
      </div>
      <div className="h-[calc(100vh-65px)] overflow-scroll">
        <div className="p-6">
          <div className="mb-5">
            <h2 className="text-2xl font-semibold">Hello, Ernst</h2>
            <p className="text-gray-400">Warehouse Manager</p>
          </div>
          <div className="grid grid-cols-3 gap-5 h-full">
            <Card 
              title="Warehouse Usage"
              icon="/icons/home-6-line.svg"
              pageUrl="/products"
              pageTitle="View Usage"
            > 
              <div>
                CHART
              </div>
            </Card>
            <Card 
              title="Total Shipments"
              icon="/icons/bar-chart-2-line.svg"
              pageUrl="/shipments"
              pageTitle="View Shipments"
            > 
              <div>
                CHART
              </div>
            </Card>
            <Card 
              title="Vehicle Tracking"
              icon="/icons/focus-3-line.svg"
              pageUrl="/products"
              pageTitle="View Tracking"
            > 
              <div>
                CHART
              </div>
            </Card>
            <div className="col-span-3">
              <h3 className="mt-2 mb-5 text-xl">Recent Orders</h3>
              <div className="border rounded-xl p-5 h-[700px] overflow-scroll"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
