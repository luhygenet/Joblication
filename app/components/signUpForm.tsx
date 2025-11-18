"use client";
import React from "react";
import GeneralButton from "./generalButton";
import { Control, FieldValues, useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import styles from "./Form.module.css";
import signUpData from "../types/signUp";

const DevToolNoSSR = dynamic(
  () => import("@hookform/devtools").then((mod) => mod.DevTool),
  { ssr: false }
);

const SignUpForm = () => {
  const signUpform = useForm<signUpData>();
  const { register, control, handleSubmit, formState } = signUpform;
  const { errors } = formState;
  console.log("SignUpForm render oops", errors);

  const OnSubmit = (data: signUpData) => {
    console.log("form submitted:", data);
  };

  // const [nums, setNums] = React.useState(0);
  // React.useEffect(() => {
  //   setNums((prev) => prev + 1);
  // }, []);
  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit(OnSubmit)}
        className="flex flex-col gap-3 text-[#515B6F]"
        style={{ fontFamily: "Epilogue", fontSize: 16, fontWeight: 600 }}
        noValidate
      >
        <div className={styles.formControl}>
          <label htmlFor="fullname">Full Name</label>

          <input
            type="text"
            id="fullname"
            className=" px-2 py-2 border border-[#CCCCF5] rounded text-[#4640DE]"
            {...register("fullname", {
              required: {
                value: true,
                message: "Full name is required",
              },
            })}
          />
        </div>

        <div className= {styles.formControl}>
          <label htmlFor="email">Email Address</label>

          <input
            type="email"
            id="email"
            className=" px-2 py-2 border border-[#CCCCF5] rounded text-[#4640DE]"
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
        </div>

        <div className= {styles.formControl}>
          <label htmlFor="password">Password</label>

          <input
            type="password"
            id="password"
            className=" px-2 py-2 border border-[#CCCCF5] rounded text-[#4640DE]"
            {...register("password")}
          />
        </div>

        <div className= {styles.formControl}>
          <label htmlFor="Confirm password">Confirm Password</label>

          <input
            type="password"
            id="Confirm password"
            className=" px-2 py-2 border mb-2 border-[#CCCCF5] rounded text-[#4640DE]"
            {...register("confirmPassword")}
          />
        </div>
        <GeneralButton
          font="Epilogue"
          fontSize={16}
          fontWeight={700}
          textColor="text-white"
          w={700}
          border={1}
          borderColor="[#CCCCF5]"
          rounded="rounded-4xl"
          color="bg-[#4640DE]"
          m={3}
          p={10}
          px={4}
          py={2}
          text="Continue"
        />
      </form>
      <DevToolNoSSR control={control as unknown as Control<FieldValues>} />
    </>
  );
};

export default SignUpForm;
