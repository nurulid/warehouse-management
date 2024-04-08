"use client";

import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
import { CardGrid } from "./CardGrid";

const data = [
  { quarter: 1, earnings: 500 },
  { quarter: 2, earnings: 2500 },
  { quarter: 3, earnings: 1500 },
  { quarter: 4, earnings: 3000 },
  { quarter: 5, earnings: 4000 },
  { quarter: 6, earnings: 2000 },
  { quarter: 7, earnings: 2500 },
];

export const ShipmentsCard = () => {
  return (
    <CardGrid
      title="Total Shipments"
      icon="/icons/bar-chart-2-line.svg"
      pageUrl="/shipments"
      pageTitle="View Shipments"
    >
      <div>
        <VictoryChart domainPadding={{x : 10}}>
          <VictoryAxis
            tickValues={[1, 2, 3, 4, 5, 6, 7]}
            tickFormat={["M", "T", "W", "T", "F", "S", "S"]}
          />
          <VictoryAxis dependentAxis tickFormat={(x) => `${x / 1000}k`} />
          <VictoryBar
            data={data}
            x="quarter"
            y="earnings"
            style={{
              data: { fill: "#3F6FF2", width: 20 },
            }}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 }
            }}
          />
        </VictoryChart>
      </div>
    </CardGrid>
  );
};
