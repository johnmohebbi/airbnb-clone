"use client";
export default function MenuItem({ onClick, label }) {
  return (
    <div
      className="
            px-4
            py-3
            hover:bg-neutral-100
            transition
            font-semibold
    "
    >{label}</div>
  );
}