"use client";

import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { memo, useCallback } from "react";
const CategoryBox = ({ label, icon: Icon, selected }) => {
  const router = useRouter();
  const params = useSearchParams();
  const clickHandler = useCallback(() => {
    let currentQuery = {};
    if (params.toString()) {
      currentQuery = qs.parse(params.toString());
    }
    const updateQuery = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      Reflect.deleteProperty(updateQuery, "category");
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updateQuery,
      },
      { skipNull: true }
    );
    router.push(url);
  }, [params, label, router]);
  return (
    <div
      onClick={clickHandler}
      className={`
    flex 
    flex-col 
    items-center 
    justify-center 
    gap-2
    p-3
    border-b-2
    hover:text-neutral-800
    transition
    cursor-pointer
    ${selected ? "border-b-neutral-800 " : "border-transparent"}
    ${selected ? "text-neutral-800" : "text-neutral-500"}
  `}
    >
      <Icon size={26} />
      <div className="font-normal text-sm">{label}</div>
    </div>
  );
};

export default memo(CategoryBox);
