"use client";

import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Counter = ({ onChange, title, subtitle, value }) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);
  const onReduce = useCallback(() => {
    if (value === 1) {
      return;
    }
    onChange(value - 1);
  }, [onChange, value]);
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="font-medium">{title}</div>
        <div className="font-light text-gray-500">{subtitle}</div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <button
          className="
            w-10
            h-10
            rounded-full
            border-[1px]
            border-rose-400
            flex
            items-center
            justify-center
            text-rose-500
            cursor-pointer
            hover:opacity-80
            transition
            "
          onClick={onReduce}
        >
            <AiOutlineMinus />
        </button>
        <div 
          className="
            font-light 
            text-xl 
            text-neutral-600
          "
        >
            {value}
        </div>
        <button
          className="
            w-10
            h-10
            rounded-full
            border-[1px]
            border-green-400
            flex
            items-center
            justify-center
            text-green-500
            cursor-pointer
            hover:opacity-80
            transition
            "
          onClick={onAdd}
        >
            <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
};

export default Counter;
