"use client";
import React, { useEffect } from "react";
import GeneralButton from "./generalButton";
import { Control, FieldValues, useForm, useFieldArray } from "react-hook-form";
import dynamic from "next/dynamic";
import styles from "./Form.module.css";
import signUpData from "../types/signUp";
import { useAuthValidations } from "../hooks/useAuthValidations";
import { useEmailValidation } from "../hooks/useEmailValidation";
import { useNameValidations } from "../hooks/useNameValidations";

const DevToolNoSSR = dynamic(
  () => import("@hookform/devtools").then((mod) => mod.DevTool),
  { ssr: false }
);

const SignUpForm = () => {
  const signUpform = useForm<signUpData>({
    defaultValues: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await response.json();
      return {
        fullname: data.name,
        email: data.email,
        password: "",
        confirmPassword: "",
        // phNums: [{ number: "" }],
        age: 0,
        dateOfBirth: new Date(),
      };
    },
  });
  const { register, control, handleSubmit, formState, getValues, watch } =
    signUpform;
  const { errors } = formState;
  const { passwordValidation, confirmPasswordValidation } =
    useAuthValidations(getValues);
  const { emailValidation } = useEmailValidation(getValues);
  const { nameValidations } = useNameValidations();

  const OnSubmit = (data: signUpData) => {
    console.log("form submitted:", data);
  };

  const [nums, setNums] = React.useState(0);
 

  // const watchs = watch("fullname");
  //  React.useEffect(() => {
  //   setNums((prev) => prev + 1);
  // }, [watchs]);

  //u can watch a form value and do a side effect without causing a rerender
  useEffect(() => {
    const subscription = watch((value) => {
      console.log("watch", value);
    });
    return () => subscription.unsubscribe();
  }, [watch]);
  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit(OnSubmit)}
        className="flex flex-col gap-3 text-[#515B6F]"
        style={{ fontFamily: "Epilogue", fontSize: 16, fontWeight: 600 }}
        noValidate
      >
        
        <div className="formControl">
          <label htmlFor="fullname">Full Name</label>

          <input
            type="text"
            id="fullname"
            className=" px-2 py-2 border border-[#CCCCF5] rounded text-[#4640DE]"
            placeholder="Enter your full name"
            {...register("fullname", nameValidations)}
          />
          <p className="error">{errors.fullname?.message}</p>
        </div>

        <div className="formControl">
          <label htmlFor="email">Email Address</label>

          <input
            type="email"
            id="email"
            className=" px-2 py-2 border border-[#CCCCF5] rounded text-[#4640DE]"
            placeholder="ex: abe@gmail.com"
            {...register("email", emailValidation)}
          />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="formControl">
          <label htmlFor="password">Password</label>

          <input
            type="password"
            id="password"
            className=" px-2 py-2 border border-[#CCCCF5] rounded text-[#4640DE]"
            placeholder="Enter your password"
            {...register("password", passwordValidation)}
          />
          <p className="error">{errors.password?.message}</p>
        </div>

        <div className="formControl">
          <label htmlFor="Confirm password">Confirm Password</label>

          <input
            type="password"
            id="Confirm password"
            className=" px-2 py-2 border mb-2 border-[#CCCCF5] rounded text-[#4640DE]"
            placeholder="Confirm your password"
            {...register("confirmPassword", confirmPasswordValidation)}
          />

          <p className="error">{errors.confirmPassword?.message}</p>
        </div>

        {/* <div className="formControl">
          <label htmlFor="age">Age</label>

          <input
            type="number"
            id="age"
            className=" px-2 py-2 border mb-2 border-[#CCCCF5] rounded text-[#4640DE]"
            placeholder="Enter your age"
            {...register("age", {
              required: { value: true, message: "Age is required" },
              valueAsNumber: true,
            })}
          />

          <p className="error">{errors.age?.message}</p>
        </div>

        <div className="formControl">
          <label htmlFor="age">Age</label>

          <input
            type="date"
            id="date"
            className=" px-2 py-2 border mb-2 border-[#CCCCF5] rounded text-[#4640DE]"
            placeholder="Enter your date of birth"
            {...register("dateOfBirth", {
              required: { value: true, message: "Date of birth is required" },
              valueAsDate: true,
            })}
          />

          <p className="error">{errors.dateOfBirth?.message}</p>
        </div> */}

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
