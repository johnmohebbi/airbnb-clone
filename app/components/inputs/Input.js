"use client";
import { memo } from "react";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { BiDollar } from "react-icons/bi";

const Input = ({
  id,
  label,
  type = "text",
  disabled,
  register,
  required,
  formatPrice,
  errors,
  value,
}) => {
  const registerModal = useRegisterModal();

  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar size={24} className="text-neutral-700 absolute t-5 left-2" />
      )}
      <input
      value={value}
        type={type}
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        className={`
            peer
            w-full
            p-4
            pt-6 
            font-light
            bg-white
            border-2
            rounded-md
            outline-none
            transition
            disabled:opacity-70
            disabled:cursor-not-allowed
            ${formatPrice ? "pl-9" : "pl-4"}
            ${errors[id] ? "border-rose-500" : "border-neutral-300"}
            ${errors[id] ? "focus:border-rose-500" : "focus:border-neutral-300"}
            `}
        autoComplete="off"
        onChange={(event) =>
          registerModal.changeHandler(id, event.target.value)
        }
      />
      <label
        htmlFor={id}
        className={`
        absolute 
        text-lg
        duration-150 
        -translate-y-3 
        top-4 
        origin-top-left
        z-10 
        ${formatPrice ? "left-9" : "left-4"}
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-4
        cursor-text
        ${errors[id] ? "text-rose-500" : "text-zinc-400"}

        `}
      >
        {label}
      </label>
    </div>
  );
};
export default memo(Input);
