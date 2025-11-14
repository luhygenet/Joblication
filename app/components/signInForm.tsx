import React from "react";
import GeneralButton from "./generalButton";

const SignInForm = () => {
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
          className=" py-2 border border-[#CCCCF5] rounded text-[#4640DE]"
        />
        <label htmlFor="password">Password</label>

        <input
          type="text"
          id="password"
          className=" py-2 border border-[#CCCCF5] rounded text-[#4640DE]"
        />

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
          text="Login"
        />
        
      </form>
    </>
  );
};

export default SignInForm;
