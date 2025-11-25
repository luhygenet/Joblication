"use client";
import React, { useEffect } from "react";
import GeneralButton from "./generalButton";
import {
  Control,
  FieldValues,
  useForm,
  useFieldArray,
  FieldErrors,
} from "react-hook-form";
import dynamic from "next/dynamic";
import styles from "./Form.module.css";
import signUpData from "../types/signUp";
import { useAuthValidations } from "../hooks/useAuthValidations";
import { useEmailValidation } from "../hooks/useEmailValidation";
import { useNameValidations } from "../hooks/useNameValidations";
import GButton from "./generalButton";

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
  const {
    register,
    control,
    handleSubmit,
    formState,
    getValues,
    setValue,
    watch,
    reset,
    trigger,
  } = signUpform;
  const {
    errors,
    touchedFields,
    dirtyFields,
    isDirty,
    isSubmitting,
    isSubmitted,
    isSubmitSuccessful,
    submitCount,
  } = formState;
  const { passwordValidation, confirmPasswordValidation } =
    useAuthValidations(getValues);
  const { emailValidation } = useEmailValidation(getValues);
  const { nameValidations } = useNameValidations();

  const OnSubmit = async (data: signUpData) => {
    console.log("Submitting", data);
    await new Promise((resolve) => setTimeout(resolve, 3000)); // simulate network delay
    console.log("Submitted!");
  };

  const OnErrors = (errors: FieldErrors<signUpData>) => {
    console.log("errors:", errors);
  };
  // console.log("touchedd fields:", touchedFields);
  // console.log("dirty fields:", dirtyFields);
  // console.log("is form dirty:", isDirty);
  console.log("issubmitting", isSubmitting);

  // const handleGetValues = () => {
  //   console.log("getValues",getValues())
  // }

  // const handleSetValues = () => {
  //      setValue("fullname", "Liya Daniel")
  // }

  // const [nums, setNums] = React.useState(0);

  // const watchs = watch("fullname");
  // React.useEffect(() => {
  //   setNums((prev) => prev + 1);
  // }, [watchs]);

  //u can watch a form value and do a side effect without causing a rerender

  useEffect(() => {
    const sub = watch((value) => {
      console.log("watched fullname:", value.fullname);
    });
    return () => sub.unsubscribe();
  }, [watch]);

  return (
    <>
      <form
        action=""
        // the reason we us handlesubmit is it prevents dfault page reload of a form
        // also takes onerrors function
        // side note rhf validates form (including updating errors and such) before calling onsubmit
        onSubmit={handleSubmit(OnSubmit, OnErrors)}
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
            {...register("fullname", {
              ...nameValidations,
              // disabled: getValues("email") === ""
            })}
          />
          <p className="error">{errors.fullname?.message}</p>
        </div>
        {/* <p>{nums}</p> */}
        {/* <p>{watchedFullname}</p> */}

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

        {/* <GeneralButton
         onclick={handleSetValues}
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
          text="setValues"
        />  */}
        <button type="button" onClick={() => reset()}>
          reset
        </button>
        <button type="button" onClick={() => trigger()}>
          trigger
        </button>
      </form>
      <DevToolNoSSR control={control as unknown as Control<FieldValues>} />
    </>
  );
};

export default SignUpForm;
