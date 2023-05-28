"use client";
export default function MenuItem({ onClick, label }) {
  return (
    <div
      className="
            px-4
            py-3
            hover:border-r-2
            border-rose-500
            hover:bg-neutral-100/50
            transition
            font-semibold
    "
    onClick={onClick} >{label}</div>
  );
}
