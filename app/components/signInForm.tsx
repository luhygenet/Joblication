"use client";
import React from "react";
import GeneralButton from "./generalButton";
import GButton from "./generalButton";
import { useForm } from "react-hook-form";
import logInData from "../types/logIn";
import { useRouter } from "next/navigation";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useUnifiedAuth from "../hooks/useUnifiedAuth";

const SignInForm = () => {
  const router = useRouter();
  const loginForm = useForm<logInData>();
  const { logInBackendUser } = useUnifiedAuth();

  const { register, handleSubmit, formState } = loginForm;
  const { isSubmitting } = formState;

  const OnSubmit = async (data: logInData) => {
    const res = await fetch("https://akil-backend.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const response = await res.json();
      console.log("the matter in signinform", response.message);
    } else {
      const data = await res.json();
      console.log("pretty ok in signinform", data);
      logInBackendUser(data);

      router.refresh();
      router.push("/");
    }
  };
  return (
    <>
      <form
        action=""
        className="flex flex-col gap-3 width-1/2 text-[#515B6F]"
        style={{ fontFamily: "Epilogue", fontSize: 16, fontWeight: 600 }}
      >
        <label htmlFor="email">Email Address</label>

        <input
          type="text"
          id="email"
          className=" px-2 py-2 border border-[#CCCCF5] rounded text-[#4640DE]"
          {...register("email")}
        />
        <label htmlFor="password">Password</label>

        <input
          type="text"
          id="password"
          className=" px-2 py-2 border border-[#CCCCF5] rounded text-[#4640DE]"
          {...register("password")}
        />

        <GButton
          text="Continue"
          bgColor="bg-[#4640DE]"
          textColor="text-white"
          rounded="rounded-4xl"
          w={700}
          py={2}
          loading={isSubmitting} // from react-hook-form
          onClick={handleSubmit(OnSubmit)}
        />
      </form>
    </>
  );
};

export default SignInForm;
