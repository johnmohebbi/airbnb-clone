"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
//components
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Button from "../Button";
import axios from "axios";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
//icons
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { signIn, signOut } from "next-auth/react";

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
        registerModal.ResetregisterInputsValue();
      })
      .catch((error) => {
        toast.error(error.message);
        registerModal.ResetregisterInputsValue();
      })
      .finally(() => setIsLoading(false));
  };
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title={"welcom to airbnb"} subtitle={"create an acount"} />
      <Input
        value={registerModal.registerInputsValue.name}
        id="name"
        disabled={isLoading}
        register={register}
        label={"Name"}
        errors={errors}
        required
      />
      <Input
        value={registerModal.registerInputsValue.email}
        id="email"
        disabled={isLoading}
        register={register}
        label={"Email"}
        errors={errors}
        required
        type="email"
      />
      <Input
        value={registerModal.registerInputsValue.password}
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
  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label={"Continue with Google"}
        icon={FcGoogle}
        onClick={() => signIn('google')}
        typebtn={"button"}
      />
      {/* 
      <Button
        outline
        label={"Continue with Github"}
        icon={AiFillGithub}
        onClick={() => signIn()}
        typebtn={"button"}
      /> */}
      <div
        className="
        text-neutral-500
        text-center
        mt-4
        font-light
        "
      >
        <div className="flex justify-center flex-row items-center gap-4">
          <div className="cursor-pointer hover:text-neutral-800">
            I&apos;ve had an account
          </div>
          <div
            onClick={registerModal.onClose}
            className="cursor-pointer text-neutral-800 hover:underline underline-offset-4"
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal
          disabled={isLoading}
          isOpen={registerModal.isOpen}
          actionLabel="Continue"
          title="Register"
          onClose={registerModal.onClose}
          body={bodyContent}
          footer={footerContent}
          typebtn="submit"
        />
      </form>
    </>
  );
};

export default RegisterModal;
