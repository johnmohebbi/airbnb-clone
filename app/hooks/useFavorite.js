import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import useLoginModal from "./useLoginModal";
import { useState } from "react";

const useFavorite = ({ listingId, currentUser }) => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const hasFavorited = () => {
    const list = currentUser?.favoriteIds || [];
    return list.includes(listingId);
  };
  const toggleFavorite = async (event) => {
    event.stopPropagation();
    if (!currentUser) {
      return loginModal?.isOpen();
    }
    let request;
    try {
      if (hasFavorited) {
        request = () => {
          axios.delete(`/api/favorites/${listingId}`);
        };
      } else {
        request = () => {
          axios.post(`/api/favorites/${listingId}`);
        };
      }
      await request();
      router.refresh();
      toast.success("Success");
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  return {
    hasFavorited,
    toggleFavorite,
  };
};
export default useFavorite;
