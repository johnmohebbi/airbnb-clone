"use client";
import useRentModal from "@/app/hooks/useRentModal";
import React, { useMemo, useState } from "react";
import Modal from "./Modal";
import Heading from "../Heading";
import { categories } from "../navbar/Categories";

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
              onClick={(category) => 
                setCustomValue('category', category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Modal
        isOpen={rentModal.isOpen}
        onClose={rentModal.onClose}
        onSubmit={rentModal.onClose}
        actionLabel={actionLabel}
        secondaryActionLabel={SecondaryactionLabel}
        secondaryAction={steps === steps.CATEGORY ? undefined : onBack}
        title={"Airbnb your home!"}
        body={bodyContent}
      />
    </>
  );
}
