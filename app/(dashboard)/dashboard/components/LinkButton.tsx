import React, { PropsWithChildren } from "react";
import Link from "next/link";

export const LinkButton = (
  props: PropsWithChildren<{ url: string; title: string }>
) => {
  const { url, title } = props;
  return (
    <Link
      href={url}
      className="ml-auto text-xs text-primary hover:bg-primary/10 transition-all p-2 border border-secondary-300 rounded-[8px] shadow hover:shadow-none"
    >
      {title}
    </Link>
  );
};
