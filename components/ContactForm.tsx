"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registrationOption } from "@/utils/inputValidator";
import InputComponent from "./InputComponent";
import { sendMessageToMe } from "@/service/contactMeService";
// import { FallingLines } from "react-loader-spinner";
import { toastError, toastSuccess } from "@/utils/toastFuncs";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuBadgeAlert } from "react-icons/lu";
import { FallingLines } from "react-loader-spinner";

type FormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const ContactForm = () => {
  const [message, setMessage] = useState<string>("");
  const [msgError, setMsgError] = useState<string>("");
  const [loading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data: any) => {
    if (!message) {
      setMsgError("Please enter some message");
      return;
    }
    if (message.length > 150) {
      setMsgError("Message should not exceed 150 characters");
      return;
    }

    const modifiedData = {
      name: data.fullName,
      email: data.email,
      number: data.phoneNumber,
      message,
    };

    setIsLoading(true);

    try {
      await sendMessageToMe(modifiedData);
      reset({
        fullName: "",
        email: "",
        phoneNumber: "",
      });
      setMessage("");
      setIsLoading(false);
      toastSuccess(
        "Message sent successfully!",
        <FaRegCircleCheck className="text-[rgba(30,129,176)] w-[2.2rem] h-[2.2rem]" />,
      );
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      toastError(
        "Something went wrong, Please try again!",
        <LuBadgeAlert className="text-color-red w-[2.2rem] h-[2.2rem]" />,
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputComponent
        placeholder={"Frank Edwards"}
        type={"text"}
        register={register}
        error={errors}
        name={"fullName"}
        label="Full Name"
        pl="pl-[1rem]"
        containerWidth="w-full"
        labelTextColor="text-color-white"
        validation={registrationOption.name}
        border="border-0"
      />
      <InputComponent
        placeholder={"frank@gmail.com"}
        type={"email"}
        register={register}
        error={errors}
        name={"email"}
        label="Email"
        pl="pl-[1rem]"
        labelTextColor="text-color-white"
        containerWidth="w-full"
        validation={registrationOption.email}
        border="border-0"
      />
      <InputComponent
        placeholder={"0204-9384-8393"}
        type={"number"}
        register={register}
        error={errors}
        name={"phoneNumber"}
        pl="pl-[1rem]"
        label="Phone Number"
        labelTextColor="text-color-white"
        containerWidth="w-full"
        validation={registrationOption.phoneNumber}
        border="border-0"
      />
      <div className="flex flex-col w-full">
        <label className="mb-[0.5rem] text-color-white">Message</label>
        <textarea
          rows={6}
          maxLength={150}
          required
          value={message}
          placeholder="Hey jimmy, I have an awesome gig for you. Hit me up.."
          onChange={(e: any) => {
            setMessage(e.target.value);
          }}
          className="rounded-md focus:ring-0 focus:outline-none outline-none ring-0 p-[1rem] "
        />
        <small>{msgError}</small>
      </div>
      <button
        type="submit"
        className="mt-[3rem] flex items-center justify-center w-full py-[1rem] text-center text-[2rem] font-medium rounded-md bg-color-light-blue text-color-white"
      >
        {loading ? (
          <FallingLines color="#ffffff" width="30" visible={true} />
        ) : (
          "Send"
        )}
      </button>
    </form>
  );
};

export default ContactForm;
