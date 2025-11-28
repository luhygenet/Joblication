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
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

import * as yup from "yup";
import useUnifiedAuth from "../hooks/useUnifiedAuth";

const DevToolNoSSR = dynamic(
  () => import("@hookform/devtools").then((mod) => mod.DevTool),
  { ssr: false }
);

// const signUpSchema = yup.object({
//   name: yup.string().required("Full name is required ok"),
//   email: yup.string().email("Invalid email ok").required("Full name is required ok"),
//   password: yup.string().min(6).required(),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref("password")], "Passwords must match ok")
//     .required(),
//   age: yup.number().positive().integer().required("Age is requied ok"),
//   dateOfBirth: yup.date().required("dobrequired"),
// });

const SignUpForm = () => {
  const router = useRouter();
  const { setpendingEmail } = useUnifiedAuth();
  const signUpform = useForm<signUpData>({
    defaultValues: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await response.json();
      return {
        name: data.name,
        email: data.email,
        password: "",
        confirmPassword: "",
        // phNums: [{ number: "" }],
        age: 0,
        dateOfBirth: new Date(),
      };
    },
    // resolver: yupResolver(signUpSchema)
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
    const res = await fetch("https://akil-backend.onrender.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, role: "user" }),
    });

    if (!res.ok) {
      const response = await res.json();
      console.log("the matter", response.message);
    } else {
      const datafinal = await res.json();

      console.log("pretty ok", datafinal);
      setpendingEmail(data.email);
      router.refresh();
      router.push("/verification");
    }
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
  //      setValue("name", "Liya Daniel")
  // }

  // const [nums, setNums] = React.useState(0);

  // const watchs = watch("name");
  // React.useEffect(() => {
  //   setNums((prev) => prev + 1);
  // }, [watchs]);

  //u can watch a form value and do a side effect without causing a rerender

  useEffect(() => {
    const sub = watch((value) => {
      console.log("watched name:", value.name);
    });
    return () => sub.unsubscribe();
  }, [watch]);

  return (
    <>
      <form
        action=""
        // the reason we use handlesubmit is it prevents default page reload of a form
        // also takes onerrors function
        // side note rhf validates form (including updating errors and such) before calling onsubmit
        onSubmit={handleSubmit(OnSubmit, OnErrors)}
        className="flex flex-col gap-3 text-[#515B6F]"
        style={{ fontFamily: "Epilogue", fontSize: 16, fontWeight: 600 }}
        noValidate
      >
        <div className="formControl">
          <label htmlFor="name">Full Name</label>

          <input
            type="text"
            id="name"
            className=" px-2 py-2 border border-[#CCCCF5] rounded text-[#4640DE]"
            placeholder="Enter your full name"
            {...register("name", {
              ...nameValidations,
              // disabled: getValues("email") === ""
            })}
          />
          <p className="error">{errors.name?.message}</p>
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
