import Image from "next/image";
import React, { PropsWithChildren } from "react";
import { LinkButton } from "./LinkButton";

export const CardGrid = (
  props: PropsWithChildren<{ title: string; icon: string; pageUrl: string, pageTitle: string }>
) => {
  const { title, icon, pageUrl, pageTitle, children } = props;
  return (
    <div className="bg-white border shadow-sm rounded-xl p-4">
      <div className="flex flex-col gap-2 h-full">
        <div className="flex items-center gap-2 pb-4 border-b border-secondary-200">
          <Image src={icon} width={24} height={24} alt="icon" />
          <h3>{title}</h3>
          <LinkButton url={pageUrl} title={pageTitle}/>
        </div>
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
};
