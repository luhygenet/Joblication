"use client";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import GeneralButton from "../components/generalButton";
import GButton from "../components/generalButton";
import useUnifiedAuth from "../hooks/useUnifiedAuth";
import { useRouter } from "next/navigation";

interface VerificationFormValues {
  otp: string[];
}

const VerificationForm = () => {
  const router = useRouter();
  const { logInBackendUser } = useUnifiedAuth();
  const [timer, setTimer] = useState(30);
  const { handleSubmit, control, formState } = useForm<VerificationFormValues>({
    defaultValues: { otp: Array(4).fill("") },
  });

  const { isSubmitting } = formState;

  // Countdown for "Resend Code"
  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

    const [email, setEmail] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("pendingEmail");
    if (stored) setEmail(stored);
  }, []);

  const OnSubmit = async (data: VerificationFormValues) => {
    const finalOtp = data.otp.join("");
    console.log("Entered OTP:", data.otp.join(""));
    const res = await fetch("https://akil-backend.onrender.com/verify-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        OTP: finalOtp,
      }),
    });

    if (!res.ok) {
      console.log("some error occured sending the otp");
    } else {
      console.log("successfully worked with the otp girl in the veriform");
      const datafinal = await res.json();
      logInBackendUser(datafinal);
      router.push("/");
    }
    // Send OTP to backend
  };

  const handleResend = () => {
    console.log("Resend code clicked");
    setTimer(30); // reset timer
    // Call backend to resend OTP
  };

  return (
    <form
      onSubmit={handleSubmit(OnSubmit)}
      className="flex flex-col max-w-[450px] mx-auto mt-10 gap-6"
    >
      <h1
        style={{ fontFamily: "Poppins-Bold", fontSize: 32, fontWeight: 900 }}
        className="text-[#25324B] text-center m-4"
      >
        Verify Email
      </h1>
      <p>
        We've sent a verification code to the email address you provided. To
        complete the verification process, please enter the code here.
      </p>

      {/* OTP Input */}
      <Controller
        name="otp"
        control={control}
        render={({ field }) => {
          const { value, onChange } = field;

          const handleChange = (index: number, val: string) => {
            const updated = [...value];
            updated[index] = val.slice(-1); // only keep last char
            onChange(updated);

            const nextInput = document.getElementById(`otp-${index + 1}`);
            if (nextInput) (nextInput as HTMLInputElement).focus();
          };

          return (
            <div className="flex space-x-10 justify-center mt-10 mb-5">
              {value.map((val: string, idx: number) => (
                <input
                  placeholder="0"
                  key={idx}
                  id={`otp-${idx}`}
                  type="text"
                  maxLength={1}
                  value={val}
                  onChange={(e) => handleChange(idx, e.target.value)}
                  className="flex justify-center items-center h-10 w-15 border border-black rounded text-gray-400 text-center"
                />
              ))}
            </div>
          );
        }}
      />

      {/* Resend Code */}
      <div className="flex flex-col items-center gap-1">
        <p>
          You can request to{" "}
          <span
            className={`font-bold text-blue-950 ${
              timer === 0 ? "cursor-pointer" : "cursor-not-allowed opacity-50"
            }`}
            onClick={timer === 0 ? handleResend : undefined}
          >
            Resend Code
          </span>{" "}
          in
        </p>
        <p className="text-blue-950 font-bold">{`0:${
          timer < 10 ? `0${timer}` : timer
        }`}</p>
      </div>

      {/* Continue Button */}
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
  );
};

export default VerificationForm;
