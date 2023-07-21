"use client";
import useSearchModal from "@/app/hooks/useSearchModal";
import { useRouter, useSearchParams } from "next/navigation";
import Modal from "./Modal";
import { useState } from "react";
import { useMemo } from "react";
import dynamic from "next/dynamic";
const STEPS = {
  LOCATION: 0,
  DATE: 1,
  INFO: 2,
};
export default function SearchModal() {
  const router = useRouter();
  const params = useSearchParams();
  const searchModal = useSearchModal();

  const [location, setLocation] = useState();
  const [step, setStep] = useState(step.LOCATION);
  const [guestCount, setGuestCount] = useState(1);
  const [roomCount, setRoomCount] = useState(1);
  const [bathroomCount, setBathroomCount] = useState(1);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const Map = useMemo(
    () =>
      dynamic(() => import("../Map"), {
        ssr: false,
      }),
    [location]
  );
  return (
    <Modal
      isOpen={searchModal.isOpen}
      onClose={searchModal.onClose}
      title="Filters"
      onSubmit={searchModal.onOpen}
      actionLabel={"Search"}
    />
  );
}
