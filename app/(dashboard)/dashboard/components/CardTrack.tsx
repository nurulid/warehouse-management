import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LinkCard } from "./LinkCard";

export const CardTrack = () => {
  return (
    <div className="card-track flex gap-[10px]">
      <div>
        <figure className="p-2 bg-white border border-secondary-200 rounded-full">
          <Image
            src="/icons/truck-fill.svg"
            width={24}
            height={24}
            alt="icon"
          />
        </figure>
      </div>
      <div className="card-track__content flex-grow flex justify-between">
        <div>
          <small className="text-xs text-ink-200 font-[400] mb-1">
            Truck No.
          </small>
          <p className="text-sm mb-2">DNF-1024</p>
          <small className="text-xs text-ink-200 font-[400] mb-1">
            Order ID:
          </small>
          <p className="text-sm">RXSJ-SIEI-SIII</p>
        </div>
        <div className="translate-y-2">
          <LinkCard url="#" title="Track Vehicle" />
        </div>
      </div>
    </div>
  );
};
