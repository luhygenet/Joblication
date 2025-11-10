import React from "react";
import GeneralButton from "./generalButton";

const SignUpForm = () => {
  return (
    <>
      <form
        action=""
        className="flex flex-col gap-3 width-1/2 text-[#515B6F]"
        style={{ fontFamily: "Epilogue", fontSize: 16, fontWeight: 600 }}
      >
        <label htmlFor="fullname">Full Name</label>

        <input
          type="text"
          id="fullname"
          className=" py-2 border border-[#CCCCF5] rounded text-[#4640DE]"
        />

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

        <label htmlFor="Confirm password">Confirm Password</label>

        <input
          type="text"
          id="Confirm password"
          className=" py-2 border mb-2 border-[#CCCCF5] rounded text-[#4640DE]"
        />
        <GeneralButton
          font="Epilogue"
          fontSize={16}
          fontWeight={300}
          textColor="white"
          w={700}
          h={10}
          border={1}
          borderColor="[#CCCCF5]"
          rounded="rounded"
          color="[#4640DE]"
          m={0}
          p={10}
        />
        
      </form>
    </>
  );
};

export default SignUpForm;
