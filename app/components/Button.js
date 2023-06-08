"use client";
export default function Button({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  typebtn,
}) {
  return (
    <button
      onClick={ () => {
        if (typebtn === "button") {
           onClick();
        }
        return;
      }}
      disabled={disabled}
      type={typebtn === "submit" ? typebtn : "button"}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
        font-medium
        ${outline ? "bg-white" : "bg-rose-500"}
        ${outline ? "border-black" : "border-rose-500"}
        ${outline ? "text-black" : "text-white"}
        ${small ? "text-sm" : "text-md"}
        ${small ? "py-1" : "py-3"}
        ${small ? "font-light" : "font-semibold"}
        ${small ? "border-[1px]" : "border-2"}
      `}
    >
      {label}
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
    </button>
  );
}
