"use client";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
// import useFavorite from "../hooks/useFavorite";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const HeartButton = ({ listingId, currentUser }) => {
  const router = useRouter();
  const [isFavorited, setIsFavorited] = useState(false);
  const [isPing, setIsPing] = useState(false);
  // const { hasFavorited, toggleFavorite } = useFavorite({
  //   listingId,
  //   currentUser,
  // });
  const clickHandler = (event) => {
    event.stopPropagation();
    if (!isFavorited) {
      setIsPing(true);
      axios
        .post(`api/favorites/${listingId}`)
        .then((response) => {
          if (response.statusText) {
            toast.success("Success");
            setIsPing(false);
            setIsFavorited(true);
          }
        })
        .catch((error) => toast.error("something went wrong"));
    } else {
      setIsPing(true);

      axios
        .delete(`api/favorites/${listingId}`)
        .then((response) => {
          if (response.statusText) {
            toast.success("Success");
            setIsPing(false);
            setIsFavorited(false);
          }
        })
        .catch((error) => toast.error("something went wrong"));
    }
  };
  useEffect(() => {
    if (currentUser && currentUser.favoriteIds.includes(listingId)) {
      setIsFavorited(true);
    }
  }, [currentUser,listingId]);
  return (
    <div
      onClick={clickHandler}
      className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
      "
    >
      <AiOutlineHeart
        size={28}
        className={`
        ${isFavorited && "fill-rose-500"}
        ${!isFavorited && !isPing && "fill-white"}
        ${isPing && "animate-ping fill-rose-500/70"}
           absolute
           -top-[2px]
           -right-[2px]

         `}
      />
      <AiFillHeart
        size={24}
        className={`${isPing && "animate-ping fill-neutral-500/70"}
        ${isFavorited ? "fill-rose-500" : "fill-neutral-500/90"} 
        ${isPing && "animate-ping fill-neutral-500/70"}
        `}
      />
    </div>
  );
};

export default HeartButton;
