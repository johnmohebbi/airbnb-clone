import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import useLoginModal from "./useLoginModal";
import { useState } from "react";

const useFavorite = ({ listingId, currentUser }) => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];
    return list.includes(listingId);
  }, [currentUser, listingId]);
  const [hasFavorited2, setHasFavorited2] = useState(hasFavorited);

  const toggleFavorite = useCallback(
    async (event) => {
      event.stopPropagation();
      if (!currentUser) {
        return loginModal?.isOpen();
      }
      let request;
      try {
        if (hasFavorited2) {
          request = () => {
            axios.delete(`/api/favorites/${listingId}`);
            setHasFavorited2(false);
          };
        } else {
          request = () => {
            axios.post(`/api/favorites/${listingId}`);
            setHasFavorited2(true);
          };
        }
        await request();
        router.refresh();
        toast.success("Success");
      } catch (error) {
        toast.error("Something went wrong.");
      }
    },
    [currentUser, hasFavorited, hasFavorited2, listingId, loginModal, router]
  );

  return {
    hasFavorited: hasFavorited2,
    toggleFavorite,
  };
};
export default useFavorite;
