import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

const useFavorite = ({ listingId, currentUser }) => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);
  const toggleFavorite = async () => {
    if (!currentUser) {
      return loginModal?.isOpen();
    }
  };
};
