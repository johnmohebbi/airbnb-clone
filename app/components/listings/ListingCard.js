"use client";
import useCountries from "@/app/hooks/useCountries";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo } from "react";
import { format } from 'date-fns';
const ListingCard = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();
  const location = getByValue(data.locationValue);
  const handleCancel = useCallback(
    (e) => {
      e.stopPropagation();
      if (disabled) {
        return;
      }
      onAction?.(actionId);
    },
    [actionId, onAction, disabled]
  );
  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }
    return data.price;
  }, [data.price, reservation]);
  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }
  
    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, 'PPP')} - ${format(end, 'PPP')}`;
  }, [reservation]);
  forma
  return <div></div>;
};

export default ListingCard;
