"use client";
import Image from "next/image";
import React from "react";

export default function Avatar({ src }) {
  return (
    <>
      <Image
        className="menu rounded-full"
        alt="Avatar"
        width={25}
        height={25}
        src={src || "/images/Placeholder.jpg"}
      />
    </>
  );
}
