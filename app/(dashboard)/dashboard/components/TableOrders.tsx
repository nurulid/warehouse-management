import React, { PropsWithChildren } from "react";

const OrderData = [
  {
    id: "143start",
    date: "20 January, 2024",
    price: "$10,000",
    trackingId: "RSHA-IHJK-2343",
    status: "out for delivery",
  },
  {
    id: "144",
    date: "20 January, 2024",
    price: "$10,000",
    trackingId: "RSHA-IHJK-2343",
    status: "in warehouse",
  },
  {
    id: "145",
    date: "20 January, 2024",
    price: "$10,000",
    trackingId: "RSHA-IHJK-2343",
    status: "pending",
  },
  {
    id: "146",
    date: "20 January, 2024",
    price: "$10,000",
    trackingId: "RSHA-IHJK-2343",
    status: "pending",
  },
  {
    id: "147",
    date: "20 January, 2024",
    price: "$10,000",
    trackingId: "RSHA-IHJK-2343",
    status: "pending",
  },
  {
    id: "148",
    date: "20 January, 2024",
    price: "$10,000",
    trackingId: "RSHA-IHJK-2343",
    status: "pending",
  },
  {
    id: "149",
    date: "20 January, 2024",
    price: "$10,000",
    trackingId: "RSHA-IHJK-2343",
    status: "pending",
  },
  {
    id: "150",
    date: "20 January, 2024",
    price: "$10,000",
    trackingId: "RSHA-IHJK-2343",
    status: "pending",
  },
  {
    id: "151",
    date: "20 January, 2024",
    price: "$10,000",
    trackingId: "RSHA-IHJK-2343",
    status: "pending",
  },
  {
    id: "152",
    date: "20 January, 2024",
    price: "$10,000",
    trackingId: "RSHA-IHJK-2343",
    status: "pending",
  },
  {
    id: "153",
    date: "20 January, 2024",
    price: "$10,000",
    trackingId: "RSHA-IHJK-2343",
    status: "pending",
  },
  {
    id: "154",
    date: "20 January, 2024",
    price: "$10,000",
    trackingId: "RSHA-IHJK-2343",
    status: "pending",
  },
  {
    id: "155",
    date: "20 January, 2024",
    price: "$10,000",
    trackingId: "RSHA-IHJK-2343",
    status: "pending",
  },
  {
    id: "156",
    date: "20 January, 2024",
    price: "$10,000",
    trackingId: "RSHA-IHJK-2343",
    status: "pending",
  },
  {
    id: "157",
    date: "20 January, 2024",
    price: "$10,000",
    trackingId: "RSHA-IHJK-2343",
    status: "pending",
  },
  {
    id: "158",
    date: "20 January, 2024",
    price: "$10,000",
    trackingId: "RSHA-IHJK-2343",
    status: "pending",
  },
  {
    id: "159",
    date: "20 January, 2024",
    price: "$10,000",
    trackingId: "RSHA-IHJK-2343",
    status: "pending",
  },
  {
    id: "160end",
    date: "20 January, 2024",
    price: "$10,000",
    trackingId: "RSHA-IHJK-2343",
    status: "pending",
  },
];

const TableHeadData = ["Order ID", "Date", "Price", "Tracking ID", "Status"];

const TableDataCell = (props: PropsWithChildren<{ addStyles?: string }>) => {
  const { addStyles, children } = props;
  return (
    <td className="border-b">
      <div className={["text-left py-5 px-4 text-sm", addStyles].join(" ")}>
        {children}
      </div>
    </td>
  );
};

const TableHead = () => {
  return (
    <thead className="bg-secondary-75 sticky top-0">
      <tr>
        {TableHeadData.map((item, i) => (
          <th
            key={i}
            className="font-normal text-left py-5 px-4 uppercase text-secondary-500 text-xs"
          >
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TableBody = (props: PropsWithChildren<{}>) => {
  return (
    <tbody>
      {OrderData.map((item) => {
        return (
          <tr key={item.id}>
            <TableDataCell>#{item.id}</TableDataCell>
            <TableDataCell>{item.date}</TableDataCell>
            <TableDataCell>{item.price}</TableDataCell>
            <TableDataCell>{item.trackingId}</TableDataCell>
            <TableDataCell addStyles="capitalize">{item.status}</TableDataCell>
          </tr>
        );
      })}
    </tbody>
  );
};

export const TableOrders = () => {
  return (
    <table className="bg-white table-fixed border-collapse border-spacing-0 w-full min-w-[820px]">
      <TableHead />
      <TableBody />
    </table>
  );
};
