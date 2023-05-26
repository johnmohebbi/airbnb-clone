"use client";
import { useState, useEffect, useCallback, memo } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";
const Modal = function ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  footer,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = useCallback(() => {
    if (disabled) return;
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 400);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;
    setShowModal(false);
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="
            justify-center 
            items-center 
            flex 
            overflow-x-hidden 
            overflow-y-auto 
            fixed 
            inset-0 
            z-50 
            outline-none 
            focus:outline-none
            bg-neutral-800/70
            "
    >
      <div
        className="
          relative 
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto 
          h-full 
          lg:h-auto
          md:h-auto
          "
      >
        {/* modal content */}
        <div
          className={`
            translate
            duration-[400]
            h-full
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}
          `}
        >
          <div
            className="
                translate
                h-full
                lg:h-auto
                md:h-auto
                border-0 
                rounded-lg 
                shadow-lg 
                relative 
                flex 
                flex-col 
                w-full 
                bg-white 
                outline-none 
                focus:outline-none
            "
          >
            {/* modal header */}
            <div
              className="
                flex 
                items-center 
                p-6
                rounded-t
                justify-center
                relative
                border-b-[1px]
                "
            >
              <button
                onClick={handleClose}
                className="
                     p-1
                     border-0 
                     hover:opacity-70
                     transition
                     absolute
                     left-9
                   "
              >
                <IoMdClose size={18} />
              </button>
              <div className="text-lg font-semibold">{title}</div>
            </div>
            {/* modal body */}
            <div className="relative p-6 flex-auto">{body}</div>
            {/* modal body */}
            <div className="flex flex-col gap-2 p-6">
              <div
                className="
                    flex 
                    flex-row 
                    items-center 
                    gap-4 
                    w-full
                  "
              >
                <Button small label="my button" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(Modal);