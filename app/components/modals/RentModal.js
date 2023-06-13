"use client";
import useRentModal from "@/app/hooks/useRentModal";
import React, { useMemo, useState } from "react";
import Modal from "./Modal";
import Heading from "../Heading";
import { categories } from "../navbar/Categories";
import CategoryInput from "../inputs/CategoryInput";
import { useForm } from "react-hook-form";
import CountrySelect from "../inputs/CountrySelect";
import Map from "../Map";
const steps = {
  CATEGORY: 0,
  LOCATION: 1,
  INFO: 2,
  IMAGES: 3,
  DESCRIPTION: 4,
  PRICE: 5,
};

export default function RentModal() {
  const [step, setStep] = useState(steps.CATEGORY);
  const rentModal = useRentModal();

  const {
    register,
    reset,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      category: "",
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
    },
  });
  const category = watch("category");
  const location = watch("location");
  const setCustomvalue = (id, value) => {
    setValue(id, value, {
      // shouldValidate: true,
      // shouldDirty: true,
      // shouldTouch: true,
    });
  };
  const onBack = () => {
    setStep((value) => value - 1);
  };
  const onNext = () => {
    setStep((value) => value + 1);
  };
  const actionLabel = useMemo(() => {
    if (step === steps.PRICE) {
      return "Create";
    }
    return "Next";
  }, [step]);
  const SecondaryactionLabel = useMemo(() => {
    if (step === steps.CATEGORY) {
      return undefined;
    }
    return "Back";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-7">
      <Heading
        title="Which of these best describes your place?"
        subtitle="Pick a category"
      />
      <div
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(category) => setCustomvalue("category", category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (step === steps.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="where is your place located?"
          subtitle="help geusts find you"
        />
        <CountrySelect
          value={location}
          onChange={(value) => {
            console.log(value);
            setCustomvalue("location", value);
          }}
        />
        <Map />
      </div>
    );
  }
  return (
    <>
      <Modal
        isOpen={rentModal.isOpen}
        onClose={rentModal.onClose}
        onSubmit={onNext}
        actionLabel={actionLabel}
        secondaryActionLabel={SecondaryactionLabel}
        secondaryAction={step === steps.CATEGORY ? undefined : onBack}
        title={"Airbnb your home!"}
        typebtn={"button"}
        body={bodyContent}
      />
    </>
  );
}
