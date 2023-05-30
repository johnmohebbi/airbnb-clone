"use client";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
//components
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

import Button from "../Button";
import Modal from "./Modal";
import Input from "../inputs/Input";
import Heading from "../Heading";

import { toast } from "react-hot-toast";
//icons
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

const LoginModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    console.log("data=>", data);
    // setIsLoading(true);
    // signIn("credentials", {
    //   data,
    //   redirect: false,
    // })
    // .then((response) => {
    //   if (response?.ok) {
    //     setIsLoading(false);
    //     toast.success("Logged in");
    //     loginModal.onClose();
    //   }
    // })
    //   .catch((error) => console.log(error));
  };
  console.log(errors);
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title={"welcom back"} subtitle={"login to your acount"} />

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
        onClick={() => {}}
      />
      <Button
        outline
        label={"Continue with Github"}
        icon={AiFillGithub}
        onClick={() => {}}
      />
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
          isOpen={loginModal.isOpen}
          actionLabel="sign in"
          title="Login"
          onClose={loginModal.onClose}
          typebtn={handleSubmit(onSubmit)}
          body={bodyContent}
          footer={footerContent}
        />
      </form>
    </>
  );
};

export default LoginModal;
