"use client";

import React from "react";
import { VictoryPie, VictoryLabel } from "victory";
import { CardGrid } from "./CardGrid";

const data = [
  { title: "free", capacity: 11 },
  { title: "usage", capacity: 89 },
];

export const UsageCard = () => {
  return (
    <CardGrid
      title="Warehouse Usage"
      icon="/icons/home-6-line.svg"
      pageUrl="/products"
      pageTitle="View Usage"
    >
      <div className="usage-chart h-full border-b border-secondary-200">
        {/* TODO: Chart Animations */}
        <VictoryPie
          padding={20}
          colorScale={["#EAECF0", "#3F6FF2"]}
          innerRadius={60}
          width={200}
          height={200}
          data={data}
          x="title"
          y="capacity"
          labels={({ datum }) => `${datum.capacity}%`}
          labelComponent={
            <VictoryLabel dy={-95} dx={37} textAnchor="middle" verticalAnchor="middle" />
          }
          style={{
            labels: { fontSize: 40 },
          }}
        />
      </div>
    </CardGrid>
  );
};
