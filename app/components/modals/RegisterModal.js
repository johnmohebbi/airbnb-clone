"use client";
import { useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
//icons
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import axios from "axios";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      password: "",
      email: "",
    },
  });
  const onSubmit = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then((response) => {
        console.log(response);
        toast.success("success");
        registerModal.onClose();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title={"welcom to airbnb"} subtitle={"create an acount"} />
      <Input
        id="name"
        disabled={isLoading}
        register={register}
        label={"Name"}
        errors={errors}
        required
      />
      <Input
        id="email"
        disabled={isLoading}
        register={register}
        label={"Email"}
        errors={errors}
        required
        type="email"
      />
      <Input
        id="password"
        disabled={isLoading}
        register={register}
        label={"Password"}
        errors={errors}
        required
        type="password"
      />
    </div>
  );
  return (
    <>
      <Modal
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        actionLabel="Continue"
        title="Register"
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
      />
    </>
  );
};

export default RegisterModal;
