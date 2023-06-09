"use client";
import { signOut } from "next-auth/react";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRentModal from "@/app/hooks/useRentModal";

export default function UserMenu({ currentUser }) {
  const [isOpen, setIsOpen] = useState(false);

  const registerModal = useRegisterModal();
  const rentModal = useRentModal();
  const loginModal = useLoginModal();

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);
  // document.addEventListener("click", (event) => {
  //   if (!event.target.classList.contains("menu")) {
  //     setIsOpen(false);
  //   }
  // });
  const toggleOpen = (event) => {
    setIsOpen((value) => !value);
  };
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="
        hidden
        md:block
        text-sm
        font-semibold
        py-3 
        px-4 
        rounded-full 
        hover:bg-neutral-100 
        transition 
        cursor-pointer
    "
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="

          menu
        p-4
        md:py-1
        md:px-2
        border-[1px] 
        border-neutral-200 
        flex 
        flex-row 
        items-center 
        gap-3 
        rounded-full 
        cursor-pointer 
        hover:shadow-md 
        transition
        "
        >
          <AiOutlineMenu className="menu" />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
        absolute 
        rounded-xl 
        shadow-md
        w-[40vw]
        md:w-3/4 
        bg-white 
        overflow-hidden 
        right-0 
        top-12 
        text-sm
        z-10
      "
        >
          <div
            className="
          flex flex-col cursor-pointer
          "
          >
            {currentUser ? (
              <>
                <h3 className="pl-4 font-semibold text-lg select-none">
                  {currentUser?.name}
                </h3>
                <div className="bg-neutral-800/50 h-[1px] my-1 "></div>
                <MenuItem onClick={() => {}} label={"my trips"} />
                <MenuItem onClick={() => {}} label={"my favorites"} />
                <MenuItem onClick={() => {}} label={"my reservations"} />
                <MenuItem onClick={() => {}} label={"my properties "} />
                <MenuItem onClick={rentModal.onOpen} label={"my airbnb home "} />
                <div className="bg-neutral-800/50 h-[1px] my-1"></div>
                <MenuItem onClick={() => signOut()} label={"Logout "} />
              </>
            ) : (
              <>
                <MenuItem onClick={registerModal.onOpen} label={"sign up"} />
                <MenuItem onClick={loginModal.onOpen} label={"login"} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
