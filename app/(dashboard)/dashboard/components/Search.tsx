import React from "react";
import Image from "next/image";
import searchIcon from "@/public/icons/search-2-line.svg";

export const Search = (props: { maxWidth?: string }) => {
  const { maxWidth } = props;
  return (
    <div
      style={{ "--max-width": maxWidth } as any}
      className="border border-secondary-200 relative bg-white max-w-[--max-width] w-full mx-auto rounded-[8px]"
    >
      <Image src={searchIcon} width={24} height={24} alt="Search Icon" className="absolute top-1/2 -translate-y-1/2 left-2"/>
      <input type="text" placeholder="Search" className="inline-block w-full p-2 pl-[40px] rounded-[8px]" />
    </div>
  );
};
