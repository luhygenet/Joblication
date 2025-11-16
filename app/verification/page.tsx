import React from "react";
import GoogleSignUp from "../components/googleSignUp";
import SignUpForm from "../components/signUpForm";
import SignInForm from "../components/signInForm";
import GeneralButton from "../components/generalButton";

const Verification = () => {
  return (
    <div className="flex justify-center h-screen px-30 py-10 ">
      <div className=" flex flex-col max-w-[450px] mb-5 text-gray-500 ">
        <h1
          style={{ fontFamily: "Poppins-Bold", fontSize: 32, fontWeight: 900 }}
          className="text-[#25324B] text-center m-5"
        >
          Verify Email
        </h1>

        <p>
          We've sent a verification code to the email address you provided. To
          complete the verification process, please enter the code here.
        </p>

        <div className="flex space-x-10 justify-center mt-20 mb-5">
          {[0, 0, 0, 0].map((d, idx) => (
            <div key={idx} className="flex justify-center items-center h-10 w-15 border border-black rounded text-gray-400 text-center">
              <p>{d}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col m-2 justify-center items-center mb-10">
          <p>
            You can Request to{" "}
            <span className="text-blue-950 font-bold">Resend Code</span> in{" "}
          </p>
          <p className="text-blue-950 font-bold">0:30</p>
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

      </div>
    </div>
  );
};

export default Verification;
