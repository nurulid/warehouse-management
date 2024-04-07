import React from "react";
import { Search } from "./components/Search";
import { Card } from "./components/Card";
import Image from "next/image";
import { CardTrack } from "./components/CardTrack";

export default function Page() {
  return (
    <>
      <div className="p-4 border-b border-secondary-200 mr-0 lg:mr-6">
        <Search maxWidth="558px"/>
      </div>
      <div className="h-[calc(100vh-65px)] overflow-scroll">
        <div className="py-4 px-6">
          <div className="mb-4 inline-flex gap-2 items-center">
            <figure className="bg-white border border-secondary-200 rounded p-2">
              <Image src="/icons/building-2-line.svg" height={24} width={24} alt="icon"/>
            </figure>
            <div>
              <h2 className="text-xl font-[500] leading-6">Hello, Ernst</h2>
              <p className="text-ink-100 text-xs">Warehouse Manager</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-7">
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
              pageUrl="/vehicles"
              pageTitle="View Tracking"
            > 
              <div>
                <h3 className="uppercase text-ink-100 text-xs mb-[14px]">Vehicles in transit</h3>
                <CardTrack />
                <CardTrack />
              </div>
            </Card>
          </div>
          <div>
            <h3 className="mb-5 text-xl">Recent Orders</h3>
            <div className="bg-white border rounded-xl p-5 h-[700px] overflow-scroll"></div>
          </div>
        </div>
      </div>
    </>
  );
}
