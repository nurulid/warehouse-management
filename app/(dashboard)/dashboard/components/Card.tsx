import Image from "next/image";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

export const Card = (
  props: PropsWithChildren<{ title: string; icon: string; pageUrl: string, pageTitle: string }>
) => {
  const { title, icon, pageUrl, pageTitle, children } = props;
  return (
    <div className="border shadow-sm rounded-xl p-4 h-[300px]">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2 pb-4 border-b border-secondary-300">
          <Image src={icon} width={24} height={24} alt="icon" />
          <h3>{title}</h3>
          <Link
            href={pageUrl}
            className="ml-auto text-xs text-primary hover:bg-primary/10 transition-all p-2 border border-secondary-300 rounded-[8px]"
          >
            {pageTitle}
          </Link>
        </div>
        <div className="p-4 flex-grow">{children}</div>
      </div>
    </div>
  );
};
